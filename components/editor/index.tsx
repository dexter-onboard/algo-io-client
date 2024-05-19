"use client"


import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }: {onChange: (a: string, b: string) => any, language: string, code : string, theme : string}) => {
  const [value, setValue] = useState<string>(code || "");

  const handleEditorChange = (value: string| undefined) => {
    setValue(value || "");
    onChange("code", value || "");
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl" style={{display: "inline-block", width: "50vw"}}>
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
