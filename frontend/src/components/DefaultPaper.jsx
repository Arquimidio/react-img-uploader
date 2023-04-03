import { Paper } from "@mui/material";

export default function DefaultPaper(props) {
    return (
        <Paper elevation={3} sx={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            borderRadius: '10px'
        }}>
            { props.children }
        </Paper>
    )
}