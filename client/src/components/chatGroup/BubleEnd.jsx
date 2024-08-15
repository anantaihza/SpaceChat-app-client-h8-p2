import React from 'react';

export default function BubleEnd({ chat }) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={chat.img}
          />
        </div>
      </div>
      <div className="chat-header font-bold">{chat.author}</div>
      <div className="chat-bubble">{chat.message}</div>
      <div className="chat-footer opacity-50">{chat.time}</div>
    </div>
  );
}
