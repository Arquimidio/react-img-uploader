import { LinearProgress } from "@mui/material";
import DefaultPaper from "./DefaultPaper";

export default function LoadingScreen() {
    return (
        <DefaultPaper>
            <h1>Awesome! Your image is being uploaded</h1>
            <LinearProgress />
        </DefaultPaper>
    )
}
