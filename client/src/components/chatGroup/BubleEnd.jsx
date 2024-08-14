import React from 'react';

export default function BubleEnd({ chat }) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://static.vecteezy.com/system/resources/previews/027/245/487/non_2x/male-3d-avatar-free-png.png"
          />
        </div>
      </div>
      <div className="chat-header">{chat.author}</div>
      <div className="chat-bubble">{chat.message}</div>
      <div className="chat-footer opacity-50">{chat.time}</div>
    </div>
  );
}
