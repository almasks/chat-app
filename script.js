const socket=io("http://localhost:3001",{ transports: ['websocket', 'polling', 'flashsocket'] })
socket.on("chat-message",data=>{
    console.log(data)
})