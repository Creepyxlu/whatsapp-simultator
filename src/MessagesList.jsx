import React from "react"
import MessageItem from "./MessageItem"


const MessagesList = ({messages}) =>{
    let MessagesListJSX = messages.map(
      (message) => {
        return <MessageItem
        emisor={message.emisor} 
        texto ={message.texto} 
        hora={message.hora}
        id = {message.id}
        status={message.status}
        key={message.id}
        />
      }
    )
    return (
      <div className="messages-list">
        {MessagesListJSX}
      </div>
    )
}

export default MessagesList/* Para importar */