This is a Next.js project bootstrapped with create-next-app and also using:
- redux
- redux-saga (for middleware)
- type-safe actions (To optimize redux actions)
- typescript
- scss
- Nextjs Router

React-Router and Redux-Persist was asked to use but i haven't used it because we already have nextjs router system so no need to add react-router and redux-persis is required to save redux store into localstorage and i haven't found any use of it for now.

## How to run application

- Download github repo or zip folder (and unzip it)
- Open any terminal then `cd to-this-folder`
- Run `npm install ` then `npm run dev` (make sure node version <= 11 is installed) 
- Now you can browse it here: http://localhost:3000
- You can check dynamic routes here: http://localhost:3000/search/user/unustalha or http://localhost:3000/search/repo/tetris

## Things that can be improved or implemented
- css config. Use hard coded color codes. Would be better if we create variables config file and define all color codes here.
- Restrict `search` dynamic router to two params for now `search/user/unustalha/abcd/xyz` will take user to search component and that is wrong. It should take user to `404`
- Implement eslinting