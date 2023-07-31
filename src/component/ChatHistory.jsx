// import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs';
import { BiMessageSquare } from 'react-icons/bi';

const ChatHistory = () => {
  const historyChat = [
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
    'React qu',
    
    'React qu',
  ];

  return (
    <div className="h-screen "> 
      <div className="flex text-center m-3 gap-3 sticky top-0 ">
        <div className="w-3/4 border border-white rounded-md p-3">
          <BsPlusLg className="text-center inline mr-5" /> New Chat
        </div>
        <div className="w-1/4 border border-white rounded-md p-3">
          <BsReverseLayoutSidebarReverse className="mx-auto" />
        </div>
      </div>
      <div className="overflow-y-scroll h-full"> 
        {historyChat.map((chat, index) => (
          <div className="bg-slate-400 m-2" key={index}>
            <BiMessageSquare className="inline text-left ml-4" />
            <span className="text-center">{chat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
