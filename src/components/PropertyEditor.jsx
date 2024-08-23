import { useState, useRef } from "react";

function PropertyEditor({ name, propertySetter }) {
  const [isActive, setIsActive] = useState(true);

  function handleActiveChange() {
    setIsActive(!isActive);
  }

  return (
    <div
      className={`property-editor-container ${
        isActive ? "property-active" : "property-inactive"
      }`}
    >
      <p>Property name</p>
      <input
        className="property-checkbox"
        type="checkbox"
        checked={isActive}
        onChange={handleActiveChange}
      />
      <input type="text" />
    </div>
  );
}

export default PropertyEditor;
