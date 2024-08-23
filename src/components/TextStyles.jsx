import { useRef, useState, useLayoutEffect } from "react";
import PropertyEditor from "./PropertyEditor.jsx";

function TextStyles() {
  const [text, setText] = useState("This is the example text");
  const [textSize, setTextSize] = useState();
  const textExample = useRef();

  function handleTextChange(event) {
    setText(event.target.value);
  }

  useLayoutEffect(() => {
    textExample.current.style.fontSize = textSize;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="This is the example text"
        value={text}
        onChange={handleTextChange}
      />
      <p ref={textExample}>{text}</p>
      <PropertyEditor name="Font Size" propertySetter={setTextSize} />
    </div>
  );
}

export default TextStyles;
