import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState<string>('');
  const [storedValueFromCurrentRender, queueRerenderWithNewStoredValue] =
    useState<string>('');

  const handleMoodChangeToShocked = () => {
    queueRerenderWithNewEmojiValue("🤯");
    queueRerenderWithNewStoredValue(emojiValueFromCurrentRender)
  };
  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewEmojiValue("😀");
    queueRerenderWithNewStoredValue(emojiValueFromCurrentRender)
  };
  const handleMoodChangeToSad = () => {
    queueRerenderWithNewEmojiValue("😢");
    queueRerenderWithNewStoredValue(emojiValueFromCurrentRender)
  };
  const handleMoodChangeToContent = () => {
    queueRerenderWithNewEmojiValue("😌");
    queueRerenderWithNewStoredValue(emojiValueFromCurrentRender)
  };
  const handleMoodChangeToGoofy = () => {
    queueRerenderWithNewEmojiValue("😜");
    queueRerenderWithNewStoredValue(emojiValueFromCurrentRender)
  };


  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your last two emojis:{emojiValueFromCurrentRender} {storedValueFromCurrentRender}</p>
      <p>Current Emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={handleMoodChangeToShocked}>🤯</button>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToContent}>😌</button>
      <button onClick={handleMoodChangeToGoofy}>😜</button>
    </>
  );
}