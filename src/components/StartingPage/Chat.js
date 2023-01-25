import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import classes from "./Chat.module.css";

function Chat({ socket, username, room, leaveRoom }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  // sending data to sendmessage backend
  const sendMessage = async () => {
    // const sockets = await io.local.fetchSockets();
    // console.log(sockets.data);
    // let roomUsers = await io.in(room).fetchSockets();
    // console.log(roomUsers);
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const messageData = {
      room: room,
      message: `${username} joined`,
      author: "",
    };
    setMessageList((list) => [...list, messageData]);
    socket.emit("send_message", messageData);
    // socket.emit("active_users", (messageData) => {
    //   console.log(messageData);
    // });
    // eslint-disable-next-line
  }, []);

  const userLeaveHandler = () => {
    // console.log("sadfasdf");
    leaveRoom();
    const messageData = {
      room: room,
      message: `${username} left`,
      author: ""
    };
    setMessageList((list) => [...list, messageData]);
    socket.emit("send_message", messageData);
  };

  // listening any change to socket
  useEffect(() => {
    // listening receive message event
    socket.on("receive_message", (data) => {
      // const updatedData = {...data, key : Math.random.toString()};
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      <div className={classes.chatwindow}>
        <div className={classes.chatheader}>
          <h2>Room - {room}</h2>
        </div>
        <div className={classes.chatbody}>
          <ScrollToBottom className={classes.messagecontainer}>
            {messageList.map((messageContent) => {
              return (
                <div
                  // className={classes.message}
                  // id={
                  //   messageContent.author === ""
                  //     ? "info"
                  //     : username === messageContent.author
                  //     ? "you"
                  //     : "other"
                  // }
                  className={`${classes.message}
                    ${
                      messageContent.author === ""
                        ? classes.info
                        : username === messageContent.author
                        ? classes.you
                        : classes.other
                    }
                    `}
                >
                  <div>
                    <div className={classes.messagecontent}>
                      <p>{messageContent.message}</p>
                    </div>
                    {messageContent.author !== "" &&
                      messageContent.author !== username && (
                        <div className={classes.messagemeta}>
                          <p id="author">{`${messageContent.author} `}</p>
                          <p style={{ color: "#1a4a89" }}>s</p>
                          <p id="time">{` ${messageContent.time}`}</p>
                        </div>
                      )}
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className={classes.chatfooter}>
          <input
            type="text"
            value={currentMessage}
            placeholder="Enter your message"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyUp={(event) => {
              event.key === "Enter" && sendMessage();
            }}
            style={{ backgroundColor: "#ededf5" }}
          />
          <button className={classes.abcdef2} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>

      <button
        type="button"
        className={classes.abcdef}
        onClick={userLeaveHandler}
      >
        Go Back
      </button>
    </div>
  );
}

export default Chat;
