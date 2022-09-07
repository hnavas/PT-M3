//1
//2
//3
//4
//5
const commands = require('./commands');
//commands = {echo: fn, date: fn, ls: fn, ...}

// console.log(process);

const print = function(output){
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
}
// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  let args = data.toString().trim().split(" "); // remueve la nueva línea

  // args = ['echo', 'hola', 'como', 'estas']
  let cmd = args.shift(); //'echo'

  if(commands[cmd]) { //tamien se puede usar hasOwnProperty
    commands[cmd](args, print); //commands[cmd] = ejm... 'echo'
  }else {
    print('command not found')
  }



  // if (cmd === "echo") {
  //   process.stdout.write(args.join(" "));
  // } else if (cmd === "ls") {
  // } else if (cmd === "pwd") {
  // } else if (cmd === "date") {
  // } else {
  //   process.stdout.write("Command not found");
  // }
  // process.stdout.write("\nprompt > ");
});
//5
//4
//3
//2
//1