import { Button } from "@mui/material";
import DefaultPaper from "./DefaultPaper";

export default function SuccessfulUpload(props) {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <DefaultPaper>
            <h2>Successful Upload</h2>
            <div className="image">
                <img src={ props.imgSrc } alt="" />
            </div>
            <div>
                <div className="image-url-container">
                    <p>{ props.imgUrl }</p>
                    <Button onClick={() => copyToClipboard(props.imgUrl)} variant="contained" size="small">Copy</Button>
                </div>
            </div>
            <Button onClick={props.reset} variant="outlined" size="small">Go back</Button>
        </DefaultPaper>
    )
}