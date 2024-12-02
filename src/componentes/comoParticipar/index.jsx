import { Container } from "@mui/material";
import "./styles.css";
import { Box } from "@mui/system";

export default function ComoParticipar() {
    return (
        <Box
            className="box-container"
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                bgcolor: "var(--branco)",
                height: "100%",
                paddingTop: "50px",
                paddingBottom: "120px"
            }}>
            <div className="container-comoParticipar">
                <div className="title-comoPariticipar">
                    <h1>COMO PARTICIPAR DO PROJETO</h1>
                </div>
                <div className="texto-comoParticipar">
                    <span>Para participar das aulas do instituto basta ir em umas das unidades onde são lecionadas as aulas e realizar sua inscrição junto a um instrutor ou professor.</span> <br />
                    <span>Concentramos nossas atividades em duas unidades:</span>
                </div>
                <div className="mapas-comoParticipar">
                    <div className="mapa">
                        <span>Av. dos Metalúrgicos, 2255 - Cidade Tiradentes</span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019.9651314892951!2d-46.4024550730343!3d-23.598727881513756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f7507e4475b%3A0x6ed27f5014e8712b!2sCentro%20de%20Esportes%20e%20Lazer%20Andr%C3%A9%20Vital%20Ribeiro%20Soares%20(CE%20Tiradentes)!5e0!3m2!1spt-BR!2sbr!4v1728431660741!5m2!1spt-BR!2sbr"
                            width="500"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mapa">
                        <span>R. Argemiro Sátiro, 330 - Osasco, SP</span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.482845366402!2d-46.81928232391451!3d-23.55109596121654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffdcde8e2c87%3A0x2dbb058c11d88265!2sR.%20Argemiro%20S%C3%A1tiro%2C%20330%20-%20Bandeiras%2C%20Osasco%20-%20SP%2C%2006160-400!5e0!3m2!1spt-BR!2sbr!4v1730086655210!5m2!1spt-BR!2sbr"
                            width="500"
                            height="400"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </Box >
    );
}
