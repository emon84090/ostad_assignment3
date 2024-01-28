"use client";

import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder: placeholder || "Start typings...",
    };
  }, [placeholder]);

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </>
  );
};

export default Create;
