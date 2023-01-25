import classes from "./StartingPageContent.module.css";
import io from "socket.io-client";
import { useRef, useState } from "react";
import Chat from "./Chat";

// connecting frontend to backend
const socket = io.connect("https://rapid-chat.onrender.com/");

function StartingPageContent() {
  const initialName = localStorage.getItem("name");
  const initialRoom = localStorage.getItem("room");
  const unameref = useRef("");
  const uroomRef = useRef("");
  const [username, setUsername] = useState(initialName);
  const [room, setRoom] = useState(initialRoom);
  // const [showChat, setShowChat] = useState(false);
  // const username = "";
  // const room = "";

  const nameHandler = () => {
    if (unameref.current.value !== "") {
      setUsername(unameref.current.value);
      localStorage.setItem("name", unameref.current.value);
      unameref.current.value = "";
    }
  };

  const roomHandler = () => {
    if (uroomRef.current.value !== "") {
      setRoom(uroomRef.current.value);
      localStorage.setItem("room", uroomRef.current.value);
      unameref.current.value = "";
    }
  };

  const roomHandler2 = () => {
    setUsername("");
    localStorage.removeItem("name");
  };

  // const joinRoom = () => {
  if (username !== "" && room !== "") {
    socket.emit("join_room", room);
  }
  // };

  const leaveRoom = () => {
    socket.emit("leave_room", room);
    localStorage.removeItem("room");
    setRoom("");
  };

  return (
    <>
      {username === "" || username === null ? (
        <div className={classes.papa}>
          <div className={classes.auth}>
            <div className={classes.control}>
              <h1>Enter Nickname</h1>
              <input
                type="text"
                placeholder=""
                ref={unameref}
                onKeyUp={(event) => {
                  event.key === "Enter" && nameHandler();
                }}
              />
              <button
                className={classes.button30}
                onClick={nameHandler}
                style={{ alignContent: "right" }}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      ) : room === "" || room === null ? (
        <div className={classes.papa}>
          <div className={classes.auth}>
            <div className={classes.control}>
              <h1>Enter Room</h1>
              <input
                type="text"
                placeholder=""
                ref={uroomRef}
                onKeyUp={(event) => {
                  event.key === "Enter" && roomHandler();
                }}
              />
              <button className={classes.button30} onClick={roomHandler}>
                Enter Room
              </button>
              <button className={classes.button30} onClick={roomHandler2}>
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Chat
          socket={socket}
          username={username}
          room={room}
          leaveRoom={leaveRoom}
        />
      )}
    </>
  );
}

export default StartingPageContent;
