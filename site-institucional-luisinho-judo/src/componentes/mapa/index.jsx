import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, CircularProgress } from "@mui/material";

/*
TODO: passar função para o back-end;
Usar o CEP é mais confiável: se possuir o CEP, desconsiderar o restante dos campos e utilizá-lo para a busca.
Se não, tentar usar os demais campos do endereço. Exibir erro caso falhe.
*/
async function buscarCoordenadasPorCep(cep) {
    try {
        const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(viaCepUrl);
        const data = await response.json();

        if (data.erro) {
            throw new Error("CEP inválido ou não encontrado!");
        }

        const enderecoCompleto = `${data.logradouro}, ${data.localidade}, ${data.uf}`;
        return await buscarCoordenadas(enderecoCompleto);
    } catch (error) {
        throw new Error("Erro ao buscar dados pelo CEP.");
    }
}

async function buscarCoordenadas(endereco) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        endereco
    )}&format=json&addressdetails=1&limit=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
        const { lat, lon } = data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    } else {
        throw new Error("Endereço não encontrado!");
    }
}

const Mapa = ({ endereco }) => {
    const [coords, setCoords] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const buscarCoordenadasEndereco = async () => {
            try {
                if (endereco.cep) {
                    const coordenadas = await buscarCoordenadasPorCep(endereco.cep);
                    setCoords(coordenadas);
                } else if (endereco.logradouro && endereco.cidade && endereco.uf) {
                    const enderecoCompleto = `${endereco.logradouro}, ${endereco.cidade}, ${endereco.uf}`;
                    const coordenadas = await buscarCoordenadas(enderecoCompleto);
                    setCoords(coordenadas);
                } else {
                    throw new Error("Informações de endereço incompletas.");
                }
            } catch (error) {
                console.error("Erro ao buscar coordenadas:", error.message);
                setErro(error.message);
            }
        };

        buscarCoordenadasEndereco();
    }, [endereco]);

    return (
        <Box
            className="flexRowCenter"
            sx={{
                width: "500px",
                margin: "auto",
                height: "300px",
                boxShadow: 3,
                borderRadius: 4,
                overflow: "hidden",
                m: 2,
            }}
        >
            {coords ? (
                <MapContainer
                    center={[coords.latitude, coords.longitude]}
                    zoom={13}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[coords.latitude, coords.longitude]}>
                        <Popup>{endereco.local || "Localização encontrada"}</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <>
                    {erro ? (
                        <Typography color="error">{erro}</Typography>
                    ) : (
                        <CircularProgress color="secondary" />
                    )}
                </>
            )}
        </Box>
    );
};

export default Mapa;
