import React, { useState, useEffect } from "react";

const AutoTypeComponent = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState([
    "Consulting",
    "Talent Acquisition",
    "Client Engagement",
    "Onboarding",
    "Digital Transformation",
  ]);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeWords = async () => {
      for (let i = 0; i < words[wordIndex].length; i++) {
        setText(words[wordIndex].substring(0, i + 1));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = words[wordIndex].length; i >= 0; i--) {
        setText(words[wordIndex].substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const interval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 400);

    typeWords();

    return () => {
      clearInterval(interval);
    };
  }, [wordIndex, words]);

  return (
    <div className="autotype">
      <span className="text">{text}</span>
      {showCursor && <span className="cursor">&#124;</span>}
    </div>
  );
};

export default AutoTypeComponent;
