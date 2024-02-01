import HomePage from "./components/HomePage";
import TextSentiment from "./components/TextSentiment";
import SpeechToText from "./components/SpeechToText";
import { Routes, Route } from "react-router-dom";
import Results from "./components/Results";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Text-sentiment" element={<TextSentiment />} />
        <Route path="/Speech-to-Text-sentiment" element={<SpeechToText />} />
        <Route path="/result" element={<Results />} />
        <Route path="/chatbot" element={<Chatbot />} />

      </Routes>
    </>
  );
}

export default App;
