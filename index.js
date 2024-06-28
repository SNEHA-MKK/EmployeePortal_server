//1) import json -server library

const server = require('json-server')

//2) create server using create method inside json -server library
const employeeServer = server.create()

//3) create path for db.json file-router()
const router = server.router('db.json')

//4) create a middleware to convert json to js
const middleware = server.defaults()

//5) server should use router as well as middleware - use()
employeeServer.use(middleware)

employeeServer.use(router)

//6) set a port to server

//process.env - to select the port that is available when the 3000 is consumed or used

const PORT = 3000 || process.env.PORT

//7) run the server
employeeServer.listen(PORT,()=>{
    console.log(`server running successfully at port ${PORT}`);
})