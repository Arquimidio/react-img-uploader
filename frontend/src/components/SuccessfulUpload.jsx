import { Button } from "@mui/material";
import DefaultPaper from "./DefaultPaper";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from "react";

export default function SuccessfulUpload(props) {
    const [linkWasCopied, setLinkWasCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    }

    const handleUrlCopy = () => {
        changeCopy();
        copyToClipboard(props.imgUrl);
    }

    const changeCopy = () => {
        setLinkWasCopied(true);
        setTimeout(() => setLinkWasCopied(false), 2000);
    }

    const renderCopyButton = () => {
        return linkWasCopied
            ? <Button color="success" size="small" variant="contained">Copied!</Button>
            : <Button onClick={handleUrlCopy} variant="contained" size="small">Copy</Button>
    }

    return (
        <DefaultPaper>
            <div className="column">
                <CheckCircleIcon sx={{
                    fontSize: '4rem'
                }}color="success" className="center"/>
                <h1>Successful Upload!</h1>
            </div>
            <div className="image">
                <img src={ props.imgSrc } alt="" />
            </div>
            <div>
                <div className="image-url-container">
                    <p>{ props.imgUrl }</p>
                    { renderCopyButton() }
                </div>
            </div>
            <Button onClick={props.reset} variant="outlined" size="small">Go back</Button>
        </DefaultPaper>
    )
}