import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "😶": "Speechless",
    "🤔": "Thinking",
    "🙄": "Sarcastic Eye-Roll",
    "😒": "Unamused",
    "💖": "Sparkling Heart",
    "🔔": "Bell",
    "🎮": "Video Game",
    "😍": "I love it",
    "💡": "Light-Bulb",
    "😏": "Sly smirk",
    "😘": "Blowing a kiss",
    "🪔": "Diya"
  };

  let [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Uh-oh, looks like we don't quite know what that emoji means";
    }

    setMeaning(meaning);
  }

  let emojiArray = Object.keys(emojiDictionary);

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={emojiInputHandler}
        id="inputBox"
        placeholder="Enter an emoji to look up its meaning, or choose one from the list below"
      />

      <br />

      <h2 id="meaningBox"> {meaning} </h2>

      <div id="listDiv">
        <ul id="emojiList">
          {emojiArray.map((emoji) => {
            return (
              <li
                onClick={() => emojiClickHandler(emoji)}
                className="emoticons"
                key={emoji}
              >
                {" "}
                {emoji}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
