"use client"

import CodeEditorWindow from "@/components/editor";
import Result from "@/components/result";
import { useState } from "react";

const CodeEditor = () => {


  const [code, setCode] = useState<string>("Sample output");

  const onChange = (a: string, value: string) => {
    console.log(a, value);
    setCode(value);
  }




  return (<div style={{display: "flex"}}>
    <CodeEditorWindow onChange={onChange} theme="vs-dark" language="javascript" code="" />
    <Result text={code} />
  </div>)


}

export default CodeEditor;