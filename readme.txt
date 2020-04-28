tsc file.ts
node file.js


tsc file1.ts file2.ts file3.ts
node file1.js


namespaceの時
tsc --out app.js TestShape.ts
node app.js

moduleの時
tsc --module amd TestShape.ts 
tsc --module commonjs TestShape.ts
node TestShape.js

参考URL:<https://www.runoob.com/typescript/ts-tutorial.html>
