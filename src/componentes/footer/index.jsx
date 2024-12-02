import "./styles.css";
import Logo from "./assets/logo.svg";
import { Container } from "@mui/material";


export default function Footer() {
    return (
        <Container
            maxWidth={false}
            sx={{
                paddingX: '85px',
            }}
        >
            <div className="container_footer">
                <div className="leftSection_footer">
                    <img src={Logo} alt="Logo" />
                    <div className="text">
                        <p>INSTITUTO LUISINHO JUDO</p>
                    </div>
                </div>
                <div className="rightSection_footer">
                    <div className="info">
                        <div className="title-footer">
                            <h3>Mapa</h3>
                        </div>
                        <div className="container_info">
                            <span>Home</span>
                            <span>Instituto</span>
                            <span>História do Judo</span>
                            <span>Fale Conosco</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title-footer">
                            <h3>Parceiros</h3>
                        </div>
                        <div className="container_info">
                            <span>Instituto Life</span>
                            <span>Associação Shiroma de Judô</span>
                            <span>CE Tiradentes</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="title-footer">
                            <h3>Redes Sociais</h3>
                        </div>
                        <div className="container_info">
                            <span>Instagram: </span>
                            <span>WhatsApp: </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}