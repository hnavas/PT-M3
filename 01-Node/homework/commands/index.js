let fs = require('fs');
let request = require('request');

module.exports = {
  echo: function(args, print){
    if(args[0] === 'cat'){
      console.log(args[1])
      fs.readFile(args[1], 'utf8', function(err, data){
        if(err) throw err; 
        print(data);
      })
    }
    print(args.join(" "));
  },
  date: function(args, print){
    print(Date()); 
  },
  ls: function(args, print){
    fs.readdir('.', function(err, files){
      if(err) throw err;
      print(files.join('\n'));
      //let output = '';
      //files.forEach(e => {output + e + '\n'});
      //print(output);
    })
  },
  pwd: function(args, print){
    print(process.cwd());
  },
  cat: function(args, print){
    fs.readFile(args[0], 'utf8', function(err, data){
      if(err) throw err; 
      print(data);
    })
  },
  head: function(args, print){
    fs.readFile(args[0], 'utf8', function(err, data){
      if(err) throw err;
      print(data.split('\n').splice(0, args[1]||5).join('\n'));
    })
  },
  tail: function(args, print){
    fs.readFile(args[0], 'utf8', function(err, data){
      if(err) throw err;
      print(data.split('\n').splice(-args[1]||-5).join('\n'));
    })
  },
  curl: function(args, print){
    request(args[0], function(err, data){
      if(err) throw err;
      print(data.body);   
    })
  }
}