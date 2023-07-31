import { useState } from 'react';
import ChatHistory from './ChatHistory';
import { TbSend } from 'react-icons/tb';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleMessage = () => {
    const newMessage = { text: input };
    setMessages([...messages, newMessage]);
    setInput('');
    console.log(newMessage)
  };

  return (
    <div className="grid grid-cols-4 h-60  text-white bg-slate-600">
      <div className="col-span-1  bg-black ">
        <ChatHistory />
      </div>
      <div className="col-span-3 relative flex  flex-col ">
        <div
          id="result"
          className="mt-8 p-4 rounded-lg shadow bg-gray-900 h-screen "
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={'p-2 text-right'}
            >
              <div className="bg-slate-600 text-center  p-7  ">
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className=" sticky bottom-0 p-4 bg-gray-900">
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-lg bg-gray-800 text-white"
              placeholder="Type your text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input ? (
              <button
                className="p-2 px-4 bg-blue-500 text-white rounded-r-lg"
                onClick={handleMessage}
              >
                <TbSend></TbSend>
              </button>
            ) : (
              <button
                className="p-2 px-4 bg-blue-500 text-white rounded-r-lg"
                onClick={handleMessage}
                disabled={true}
              >
                <TbSend></TbSend>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
