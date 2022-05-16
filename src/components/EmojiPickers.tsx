import { useState } from "react";

  function EmojiPickers(): JSX.Element {
  const [storedEmoji, getNewEmoji] =
    useState<string[]>([]);


  const handleMoodChangeToShocked = () => {
    getNewEmoji(["🤯",...storedEmoji]);
  };
  const handleMoodChangeToHappy = () => {
    getNewEmoji(["😀",...storedEmoji]);
  };
  const handleMoodChangeToSad = () => {
    getNewEmoji(["😢",...storedEmoji]);
  };
  const handleMoodChangeToContent = () => {
    getNewEmoji(["😌",...storedEmoji]);
  };
  const handleMoodChangeToGoofy = () => {
    getNewEmoji(["😜",...storedEmoji]);
  };
  const handleReset = () => {
    getNewEmoji([]);
  };

  const jsxEmojiList: JSX.Element[] = storedEmoji.map(createJSXEmojiListItem)
  let EmojiShown: JSX.Element[] = []
  if (jsxEmojiList.length > 5){
     EmojiShown = jsxEmojiList.splice(0,6)  
  } else if (jsxEmojiList.length < 5) {
    EmojiShown = jsxEmojiList
  }


  return(
    <>
      <h1>Emoji picker</h1>
      <ul>
         <p>Your stored emojis: {EmojiShown}</p>
      </ul>
      <p>Current Emoji:{storedEmoji.slice(0,1)} </p>
      <button onClick={handleMoodChangeToShocked}>🤯</button>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToContent}>😌</button>
      <button onClick={handleMoodChangeToGoofy}>😜</button>
      <hr />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

function createJSXEmojiListItem(eachEmojiFromStoredEmojiArray: string): JSX.Element {
  return <li>{eachEmojiFromStoredEmojiArray}</li>
}


export default EmojiPickers
