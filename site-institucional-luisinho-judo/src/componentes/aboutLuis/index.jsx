import "./styles.css";
import sobreLuis from "./assets/curiosidadesLuisinho.png";
import { Box } from "@mui/material";

export default function AboutLuis() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "24", width: "100%" }}>
            <div className="tertiary-section">
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="title">SOBRE LUISINHO</h1>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
                    <img src={sobreLuis} alt="Luisinho, um homem de 55 anos, preto, cabelo careca e com cara séria na imagem" />
                    <span className="sr-only">
                        Frase que eu gosto: "Judo não é uma luta é uma arte"
                    </span>
                    <span className="sr-only">
                        Conquista: Participou de missões no exercíto brasileiro
                    </span>
                    <span className="sr-only">
                        Superação: Vindo do nordeste, de uma família humilde, realizou seu sonho que é ensinar judô para as pessoas.
                    </span>
                    <span className="sr-only">
                        Curiosidade: Quebrou a clavícula e continuou treinando
                    </span>
                    <span className="sr-only">
                        
                    </span>
                </Box>
            </div>
        </Box>
    );
}
