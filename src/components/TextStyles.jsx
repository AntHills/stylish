import { useRef, useState } from "react";
import PropertyEditor from "./PropertyEditor.jsx";

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
      <PropertyEditor />
    </div>
  );
}

export default TextStyles;
