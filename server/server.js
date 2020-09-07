const http= require("http");
//creating a server
const server =http.createServer(((req, res) => {
    console.log('requst made');
}));
server.listen(3000,'localhost',()=>{
    console.log('lidtining for requests on port 30000');
})