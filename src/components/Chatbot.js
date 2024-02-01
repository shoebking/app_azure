// ChatComponent.js
import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

const ChatComponent = () => {
  const directLine = useMemo(
    () =>
      createDirectLine({
        token: 'kd53QXLXidQ.3pKx7K3JD-NjKTGfG4M8jVJ0X8Jjsxi4je0M-eThDzk', // Replace with your Direct Line token
      }),
    []
  );

  return <ReactWebChat directLine={directLine} userID="DAWOOD" />;
};

export default ChatComponent;
