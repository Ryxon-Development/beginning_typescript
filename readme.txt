############### BEGINNING TYPESCRIPT ###############

TypeScript is like a big brother to JavaScript.
It's a programming language that adds extra rules
and features on top of JavaScript to help catch
mistakes early and make code easier to manage.
When you write TypeScript code, it eventually gets
translated into regular JavaScript that your browser
or server can understand and run. So, TypeScript
is like JavaScript's helper that makes coding safer
and more organized.

####################################################

#install typescript
npm install -g typescript

#use ts-node to execute typescript
npm install -g ts-node

#use tsc to compile typescript, tsc stands for TypeScript Compiler
npm install -g tsc

#set a tsconfig.json file
tsc --init

#then run tsc to compile the typescript file
tsc filename.ts
#or just run tsc to compile all the typescript files in the directory
tsc
#as a result, the compiled javascript files will be generated in the same directory

#use ts-node to execute a typescript file in the terminal
ts-node filename.ts