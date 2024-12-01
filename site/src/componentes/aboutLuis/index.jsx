import "./styles.css";
import sobreLuis from "./assets/curiosidadesLuisinho.png";
import { Box, Container } from "@mui/material";

export default function AboutLuis() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "24", width: "100%"}}>
        <div className="tertiary-section">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <h1 className="title">SOBRE LUISINHO</h1>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={sobreLuis} alt="" />
            </Box>
        </div>
        </Box>
    );
}
