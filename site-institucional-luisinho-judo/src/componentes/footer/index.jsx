import "./styles.css";
import Logo from "./assets/logo.svg";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <Container
            component="footer"
            maxWidth={false}
            sx={{
                paddingX: '85px',
            }}
        >
            <div
                className="container_footer"
                role="contentinfo"
                aria-label="Rodapé do site"
            >
                <div className="leftSection_footer">
                    <img
                        src={Logo}
                        alt="Logo do Instituto Luisinho Judô"
                    />
                    <div className="text">
                        <p>INSTITUTO LUISINHO JUDO</p>
                    </div>
                </div>

                <div className="rightSection_footer">
                    <div className="info">
                        <div className="title-footer">
                            <h3 id="map-title">Mapa do site</h3>
                        </div>
                        <div
                            className="container_info"
                            role="navigation"
                            aria-labelledby="map-title"
                        >
                            <a href="#" aria-label="Ir para a página inicial">Home</a>
                            <a href="/historia-judo" aria-label="Ir para a página do Instituto">Instituto</a>
                            <a href="/historia-hero" aria-label="Ir para a página da História do Judô">História do Judô</a>
                            <a href="/seja-parceiro" aria-label="Ir para a página de Fale Conosco">Fale Conosco</a>
                        </div>
                    </div>

                    <div className="info">
                        <div className="title-footer">
                            <h3 id="partners-title">Parceiros</h3>
                        </div>
                        <div
                            className="container_info"
                            role="list"
                            aria-labelledby="partners-title"
                        >
                            <span role="listitem">Instituto Life</span>
                            <span role="listitem">Associação Shiroma de Judô</span>
                            <span role="listitem">CE Tiradentes</span>
                        </div>
                    </div>

                    <div className="info">
                        <div className="title-footer">
                            <h3 id="social-title">Redes Sociais</h3>
                        </div>
                        <div
                            className="container_info"
                            role="list"
                            aria-labelledby="social-title"
                        >
                            <span role="listitem">
                                <InstagramIcon
                                    sx={{ marginRight: '8px', verticalAlign: 'middle' }}
                                    aria-label="Instagram"
                                />
                                @institutosenseiluisinho2015
                            </span>
                            <span role="listitem">
                                <WhatsAppIcon
                                    sx={{ marginRight: '8px', verticalAlign: 'middle' }}
                                    aria-label="WhatsApp"
                                />
                                (11) 991473505
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
