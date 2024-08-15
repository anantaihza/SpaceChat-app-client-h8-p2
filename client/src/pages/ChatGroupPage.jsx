import axios from '../config/axiosInstance';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import io from 'socket.io-client';
// import { UserContext } from '../contexts/UserContext';
import { getUser } from '../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import BubleEnd from '../components/chatGroup/BubleEnd';
import BubleStart from '../components/chatGroup/BubleStart';

const socket = io.connect('https://naufalbigcat.my.id/');

export default function ChatGroupPage() {
  const { id } = useParams();
  // const user = useContext(UserContext);
  const room = id;
  // const nameUser = user.name;
  const [chatList, setChatList] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const joinRoom = () => {
    socket.emit('join_room', room);
  };

  useEffect(() => {
    joinRoom();
    dispatch(getUser());
  }, []);

  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = async () => {
    if (currentMessage !== '') {
      let hours = new Date(Date.now()).getHours();
      let minutes = new Date(Date.now()).getMinutes();
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      // let img = user.img ? user.img : "https://static.vecteezy.com/system/resources/previews/027/245/487/non_2x/male-3d-avatar-free-png.png"

      const messageData = {
        room: room,
        id: user.id,
        author: user.name,
        message: currentMessage,
        img: user.img
          ? user.img
          : 'https://static.vecteezy.com/system/resources/previews/027/245/487/non_2x/male-3d-avatar-free-png.png',
        time: hours + ':' + minutes,
      };

      setCurrentMessage('');
      await socket.emit('send_message', messageData);
      setChatList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setChatList((list) => [...list, data]);
    });
  }, [socket]);

  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [groupDetail, setGroupDetail] = useState({});

  const fetchGroupDetail = async (id) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `/myGroups/${id}/detail`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setGroupDetail(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleSubmitAPI = async (e) => {
    e.preventDefault();

    if (question.trim()) {
      setLoading(true);

      try {
        const { data } = await axios({
          method: 'post',
          url: '/chats/openai',
          data: {
            inputPrompt: question,
          },
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        });
        setResponse(data.result);
        console.log(data);
      } catch (error) {
        console.log(error);
        toast.error('Error to fetch API');
      }

      setQuestion('');
    }
  };

  useEffect(() => {
    fetchGroupDetail(id);
  }, []);

  return (
    <div className="flex-1 flex flex-col sm:ml-64 min-h-screen">
      <div className="flex items-center justify-between px-20 py-4 md:fixed top-20 md:top-0 left-64 right-0 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full mr-4">
              <img alt="Penerima" src={groupDetail?.Group?.imgGroupUrl} />
              /&gt;
            </div>
          </div>
          <div className="text-lg font-bold text-gray-800">
            {groupDetail?.Group?.name}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-20 my-28">
        {chatList.map((chat, index) => {
          return user.id === chat.id ? (
            <BubleEnd key={index} chat={chat} />
          ) : (
            <BubleStart key={index} chat={chat} />
          );
        })}
      </div>

      <div className="px-20 py-4 bg-white border-t border-gray-200 fixed bottom-0 right-0 left-0 sm:left-64 z-30">
        <div className="flex items-center">
          {/* You can open the modal using ID.showModal() method */}
          <button
            className="text-[#6A74C9] px-2"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                className="w-full max-w-md border-[#6A74C9]"
                onSubmit={handleSubmitAPI}
              >
                <h3 className="text-lg font-bold py-2">
                  Hello, Can I help you!
                </h3>
                <textarea
                  className="w-full p-2 mb-4 rounded bg-[#EFF2F9] text-neutral"
                  rows={4}
                  placeholder="Enter your question?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button> */}
                <button
                  type="submit"
                  className="btn btn-md rounded-lg text-white bg-[#6A74C9]"
                >
                  SUBMIT
                </button>
              </form>
              {response && (
                <div className="mt-6 w-full max-w-md bg-[#EFF2F9] p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Response :</h3>
                  <p>{response}</p>
                </div>
              )}
            </div>
          </dialog>
          <input
            type="text"
            placeholder="Type a message..."
            value={currentMessage}
            className="flex-1 p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6A74C9] pr-16"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button
            className="text-[#6A74C9] p-2 rounded-lg ml-2"
            onClick={sendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
