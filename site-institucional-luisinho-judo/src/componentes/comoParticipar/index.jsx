import { Container } from "@mui/material";
import "./styles.css";
import { Box } from "@mui/system";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mockAddresses = [
    {
        label: "Av. dos Metalúrgicos, 2255 - Cidade Tiradentes",
        coordinates: { lat: -23.598728, lng: -46.402455 },
    },
    {
        label: "R. Argemiro Sátiro, 330 - Osasco, SP",
        coordinates: { lat: -23.551019, lng: -46.8175317 },
    },
];

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
                paddingBottom: "120px",
            }}
        >
            <div className="container-comoParticipar">
                <div className="title-comoPariticipar">
                    <h1>COMO PARTICIPAR DO PROJETO</h1>
                </div>
                <div className="texto-comoParticipar">
                    <span>
                        Para participar das aulas do instituto basta ir em umas das unidades
                        onde são lecionadas as aulas e realizar sua inscrição junto a um
                        instrutor ou professor.
                    </span>
                    <br />
                    <span>Concentramos nossas atividades em duas unidades:</span>
                </div>
                <div className="mapas-comoParticipar">
                    {mockAddresses.map((address, index) => (
                        <div className="mapa" key={index}>
                            <span>{address.label}</span>
                            <MapContainer
                                center={[address.coordinates.lat, address.coordinates.lng]}
                                zoom={15}
                                style={{ width: "500px", height: "400px", marginTop: "10px" }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[address.coordinates.lat, address.coordinates.lng]}>
                                    <Popup>{address.label}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    ))}
                </div>
            </div>
        </Box>
    );
}
