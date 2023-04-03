import { useRef, useState } from "react"
import { Button } from "@mui/material";
import DefaultPaper from "./DefaultPaper";
import imageExample from "../assets/images/image-example.png";

export default function ImageUploader(props) {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);

    const handleDragging = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true);
        } else if(e.type === 'dragleave') {
            setIsDragging(false);
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if(e.dataTransfer.files && e.dataTransfer.files[0]) {
            props.handleUpload(e.dataTransfer.files[0]);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.files && e.target.files[0]) {
            props.handleUpload(e.target.files[0]);
        }
    }

    const onUploadButtonClick = () => {
        inputRef.current.click();
    }

    return (
        <DefaultPaper>
            <h1>Upload your image</h1>
            <p>File should be JPG or PNG</p>
            <form className="column" onSubmit={(e) => e.preventDefault()} onDragEnter={handleDragging} id="file-upload-form">
                <input ref={inputRef} onChange={handleChange} type="file" id="custom-file-input" name="file" />
                <img src={imageExample} alt="uploaded example"/>
                <p className="drag-text">Drag & Drop your images here</p>
                <label className="file-upload-label" htmlFor="custom-file-input">
                </label>
                { 
                    isDragging && 
                    <div id="drag-file-element" 
                        onDragEnter={handleDragging} 
                        onDragLeave={handleDragging} 
                        onDragOver={handleDragging} 
                        onDrop={handleDrop}>
                    </div>
                }
            </form>
            <div>
                <Button 
                    variant="contained" 
                    onClick={onUploadButtonClick}
                    className="file-upload-button"
                    type="submit"
                >
                    Choose a file
                </Button>
            </div>
        </DefaultPaper>
    )
}