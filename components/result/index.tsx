import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import codeSubmission from '@/app/utils/codeSubmission';
import checkStatus from '@/app/utils/checkStatus';

const Result = ({ text }: {text: string}) => {

    const [result, setResult] = React.useState<string>("");

    const codeSubmitHandler = async () => {

        const data = await codeSubmission(text, 63)

        if (data.token) {
            
            const result = await checkStatus(data.token)

            if(result.status.description === "Accepted") {
                setResult(result.stdout)
            }


        }


    }


  return (<Box sx={{display: "inline-block", width: "40vw",}}>
    <Button
        variant="contained"
        onClick={codeSubmitHandler}
        style={{position: "absolute", top: "1rem", right: "1rem"}}>
        Submit
    </Button>
    {atob(result)}
  </Box>)

}
export default Result;