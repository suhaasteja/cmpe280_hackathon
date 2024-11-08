import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ChatWidget = () => {
  useEffect(() => {
    addResponseMessage('Welcome to the chat! How can I help you?');
  }, []);

  // Handle user messages
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // API call
    addResponseMessage("I'll get back to you shortly!");
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="My Chat Widget"
      subtitle="Ask us anything"
    />
  );
};

export default ChatWidget;
