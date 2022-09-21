const print = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd !== "pwd") {
    process.stdout.write("Your text: " + cmd);
    process.stdout.write("\nprompt > ");  
}
});
module.exports = {
  print,
};
