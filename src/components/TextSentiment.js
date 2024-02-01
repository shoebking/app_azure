import { React, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import MainPage from "./MainPage";
import "./TextArea.css";
import Button from "./Button/Button";
import axios from 'axios';

const TextSentiment = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const navigate = useNavigate();

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post(
        'https://universitylanguages.cognitiveservices.azure.com/text/analytics/v3.1/sentiment',
        {
          documents: [
            {
              language: 'en',
              id: '1',
              text: text,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'e8a29baf17e542268546de2548666959',
          },
        }
      );

      // Extract sentiment from the response
      const analyzedSentiment = response.data.documents[0].sentiment;
      const a=response.data.documents[0].confidenceScores
      // console.log(response.data.documents[0].confidenceScores)
      setSentiment(analyzedSentiment);
      console.log(sentiment)
      // Navigate to the result page and pass sentiment as a parameter
      navigate('/result', { state: { sentiment: analyzedSentiment,add:a } });
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <MainPage>
      <div className="container">
        <div>
          <h3>Enter The Text to Analyze its Sentiment</h3>
        </div>
        <div>
          <textarea value={text} className="textarea" placeholder="Enter a message..." onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <Button onClick={analyzeSentiment}>Submit</Button>
          {/* <div>{sentiment && <p>Sentiment: {sentiment}</p>}</div> */}
        </div>
      </div>
    </MainPage>
  );
};

export default TextSentiment;
