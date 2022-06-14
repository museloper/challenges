import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();
process.env.PORT = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () =>
  console.log(`Listening on http://localhost:${process.env.PORT}`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Put all your backend code here.
const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Ananimous";
  console.log("Connected to Browser ✅");
  socket.on("close", () => {
    console.log("Disconnected from Browser ❌");
  });
  socket.on("message", (msg) => {
    const message = JSON.parse(msg);

    switch (message.type) {
      case "new_message":
        sockets.forEach((e) =>
          e.send(`${socket.nickname} : ${message.payload}`)
        );
        break;
      case "nickname":
        socket["nickname"] = message.payload;
        break;
      default:
        break;
    }
  });
});

server.listen(process.env.PORT, handleListen);
