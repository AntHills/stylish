import { useRef, useState } from "react";

function TextStyles() {
  const [text, setText] = useState("This is the example text");
  const textExample = useRef();

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="This is the example text"
        value={text}
        onChange={handleTextChange}
      />
      <p ref={textExample}>{text}</p>
    </div>
  );
}

export default TextStyles;
