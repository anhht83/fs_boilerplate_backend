const { Server } = require("socket.io");

module.exports = (server: any): any => {
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });
  io.on("connect", () => {
    console.log("a user connected");
  });

  io.on("disconnect", () => {
    console.log("Client disconnected");
  });
  return io;
};