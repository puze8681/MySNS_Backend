var socketIO = require('socket.io');


var arr = {}

exports.init = function(server){
  var io = socketIO(server);

  io.on("connection", function(socket){

    socket.on("login", (id, pw){
      arr[id] = socket;
    });



    socket.on("message from client", function(msg, from, to){
      arr[id].emit("message from server", msg, from);
    });

  });

  return server;

}

module.exports = socketIO;
