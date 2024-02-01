import React, { useEffect } from 'react';
import { DirectLine } from 'botframework-directlinejs';

const Chatbot = () => {
  useEffect(() => {
    // Your Azure Bot Service Direct Line secret
    const directLineSecret = 'kd53QXLXidQ.3pKx7K3JD-NjKTGfG4M8jVJ0X8Jjsxi4je0M-eThDzk';

    // Create a DirectLine object
    const directLine = new DirectLine({ secret: directLineSecret });

    // Initialize Web Chat
    const webChatOptions = {
      directLine: directLine,
    };

    window.WebChat.renderWebChat(webChatOptions, document.getElementById('webchat'));

    return () => {
      // Cleanup when the component is unmounted
      directLine.end();
    };
  }, []); // Run only once on mount

  return <div id="webchat"></div>;
};

export default Chatbot;
