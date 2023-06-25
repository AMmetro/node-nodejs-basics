import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import path from 'path';

let selectedPath = ()=>{
    const systemDrive = process.env.SystemDrive;
    const username = process.env.USERNAME;
    const systemPath = path.join(systemDrive, 'Users', username);
    return systemPath;
}

process.chdir(selectedPath());

const user = ()=> {
    const args = process.argv.slice(2);
    let userName 
      args.forEach((arg) => {
      const [key, value] = arg.split('=');
      userName = value 
      });
const userEntryName = userName ? userName :'Guest';
return userEntryName
}

console.log(`Welcome to the File Manager, ${user()}!`);

const rl = readline.createInterface({ input, output });
rl.setPrompt(`You are currently in ${selectedPath()}>`);
rl.prompt();

rl.on('line', async (input) => {
  const command = input.trim();
  await processCommand(command);
  currentPath = process.cwd();
  rl.setPrompt(`You are currently in ${currentPath}>\n`);
  rl.prompt();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
