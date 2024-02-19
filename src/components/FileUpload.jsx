import React from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import {BeatLoader} from 'react-spinners';

export default function FileUpload({ setIsFileUploaded }) {
    const [file, setFile] = React.useState(null); // storing the uploaded file
    const [error, setError] = React.useState(null); // storing the error if any
    const [isUploading, setIsUploading] = React.useState(false); // to show the loading bar

    // function to check file size
    const checksize = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 20 * 1024 * 1024) {
            setError('File size cannot exceed more than 20mb');
        }
        else if(file && file.name.split(".").pop().toLowerCase() !== "pdf"){
            setError("Please select a pdf file")
        }
        else {
            setFile(file);
            setError(null);
        }
    }

    // function to upload file

    const upload = () => {
        if (error)
            alert(error)
        else if (!file)
            setError('Please select a file');
        else {
            setFile(null);
            setIsUploading(true)
            setTimeout(() => {
                setIsUploading(false);
                setIsFileUploaded(true);
            }, 4000)
        }

    }

    //return the file input
    return (
        <div
            className="flex flex-col items-center justify-center h-screen"
        >
            <div
                className='flex border-2 items-center border-gray-300 shadow-md p-3 w-80'
            >
                <input
                    className={`${error ? "file:bg-red-400" : "file:bg-blue-500"} rounded-md file:rounded-3xl file:text-white file:border-none file:p-2 file:hover:m-2 file:hover:cursor-pointer file:hover:scale-110 file:hover:bg-blue-400 file:transition-all file:duration-300 file:ease-in-out mr-2`}
                    type="file"
                    accept='.pdf'
                    file={file}
                    onChange={e => checksize(e)}
                />
                {!isUploading && <button onClick={upload}><MdOutlineCloudUpload className='text-4xl hover:scale-125 transition-all ease-in-out'/></button>}
                {isUploading && <BeatLoader loading={isUploading} color='#4299e1' />}
            </div>
            <span className="text-red-600">{error}</span>
        </div>
    )
}
