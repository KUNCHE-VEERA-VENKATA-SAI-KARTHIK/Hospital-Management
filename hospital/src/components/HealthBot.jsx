
import React, { useEffect, useState } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import './HealthBot.css';

const HealthBot = () => {
  const [directLine, setDirectLine] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const secret = 'Bm9Nt45r-yQ.y0_P-V4MEEQP3CEzk7R7UafGQlR6MsQE299Q40ruLyA';

    try {
      const directLine = createDirectLine({ secret });
      setDirectLine(directLine);
    } catch (err) {
      setError('Failed to connect to the bot. Please try again later.');
      console.error(err);
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!directLine) {
    return <div>Loading chat...</div>;
  }

  return (
    <div className="health-bot-container">
      <ReactWebChat directLine={directLine} />
    </div>
  );
};

export default HealthBot;

