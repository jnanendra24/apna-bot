import FileUpload from "./components/FileUpload";
import Questions from "./components/Questions";
import { useState } from "react";

function App() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  return (
    <>
      { 
        !isFileUploaded && 
        <FileUpload setIsFileUploaded={setIsFileUploaded} />
      }

      {
        isFileUploaded &&
        <Questions />
      }
    </>
  )
}

export default App;
