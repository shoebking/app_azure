import React, { useState } from 'react';
import './SpeechToText.css'; // You can create a separate CSS file for styling
import MainPage from "./MainPage";
const SpeechToText = () => {
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  let speechSdk;

  const startListening = async () => {
    speechSdk = require('microsoft-cognitiveservices-speech-sdk');

    const speechConfig = speechSdk.SpeechConfig.fromSubscription('24e1f5f0f2ef4f17a3ae860986ca152b', 'eastus');
    const audioConfig = speechSdk.AudioConfig.fromDefaultMicrophoneInput();

    const recognizer = new speechSdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizing = (s, e) => {
      console.log(`RECOGNIZING: ${e.result.text}`);
    };

    recognizer.recognized = (s, e) => {
      if (e.result.reason === speechSdk.ResultReason.RecognizedSpeech) {
        setTranscription(e.result.text);
      } else if (e.result.reason === speechSdk.ResultReason.NoMatch) {
        console.log('No speech could be recognized');
      }
    };

    recognizer.startContinuousRecognitionAsync();

    setIsListening(true);
  };

  const stopListening = () => {
    if (speechSdk) {
      speechSdk.closeAllSpeechRecognition();
    }
    setIsListening(false);
  };

  return (
    <MainPage>
    <div className="container">
      <h1 className="centered white-text">Speech to Text</h1>
      <div className="button-container">
        <button className="start-button" onClick={startListening} disabled={isListening}>
          <span role="img" aria-label="play">&#9654;</span> Start Recording
        </button>
        <button className="stop-button" onClick={stopListening} disabled={!isListening}>
          <span role="img" aria-label="stop">&#9632;</span> Stop Recording
        </button>
      </div>
      <div className="result-box white-text">
        <p>Transcription: {transcription}</p>
      </div>
    </div>
    </MainPage>
  );
};

export default SpeechToText;
