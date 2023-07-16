

## what is create-pie-app

This CLI tool create a pure TypeScript project without any additional frameworks such as React or Vue.js. 

The stack includes 
- pre-commit hooks
- esLint configuration
- prettier
- commit Lint 
- git init
- install dependencies
- gitignore
- typescript(ESM)


## Getting Started

```
npm run create-pie-app my-pie-app
```

## customization

You can modify any configuration to meet your requirements, such as enabling ES5 support,eslint rules and others


### how to debug in vscode

1. npm run dev

2. change .launch.json like these
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "tsup-node debug",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/src/index.ts"
        }
    ]
}
```