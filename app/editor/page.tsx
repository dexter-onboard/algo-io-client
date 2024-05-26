"use client"

import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import CodeEditorWindow from "@/components/editor";
import Result from "@/components/result";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const CodeEditor = () => {
  const [code, setCode] = useState<string>("Sample output");

  const onChange = (a: string, value: string) => {
    console.log(a, value);
    setCode(value);
  }

  const router = useRouter();

  const handleSelect = () => {
      router.push('/home');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={handleSelect} >
            JS Compiler
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{display: "flex"}}>
        <CodeEditorWindow onChange={onChange} theme="vs-dark" language="javascript" code="" />
        <Result text={code} />
      </div>
      <Box sx={{ p: 3, position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f8f8f8' }}>
        <Typography variant="body1" color="text.secondary" align="center">
          Made with ❤️ for bubu
        </Typography>
      </Box>
    </div>
  );
}

export default CodeEditor