import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./styles.css";

const Carousel = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { title: "BRANCA", image: "https://kanayamaweb.com.br/images/faixas/branca.png", description: "Cor da pureza, mostra que o judoca deve manter a mente limpa diante do enorme conhecimento que tem a alcançar." },
        { title: "CINZA", image: "https://kanayamaweb.com.br/images/faixas/cinza.png", description: "Dada apenas para praticantes até aproximadamente 15 anos, mostra uma pequena evolução técnica." },
        { title: "AZUL", image: "https://kanayamaweb.com.br/images/faixas/azul.png", description: "Denota amadurecimento e expectativa de evolução, já que o judoca continua dando andamento ao seu aprendizado." },
        { title: "AMARELA", image: "https://kanayamaweb.com.br/images/faixas/amarela.png", description: "Assim como o sol, traz a iluminação. O judoca deve buscar seu brilho, ganhando confiança e desenvolvendo a inteligência." },
        { title: "LARANJA", image: "https://kanayamaweb.com.br/images/faixas/laranja.png", description: "Situada entre os elementos fogo e terra, mostra ao praticante que ele deve fortalecer as energias e a sua vontade de vencer." },
        { title: "VERDE", image: "https://kanayamaweb.com.br/images/faixas/verde.png", description: "Simboliza harmonia e equilíbrio. Representa um oásis, mas também a certeza de que ainda há mais deserto a vencer." },
        { title: "ROXA", image: "https://kanayamaweb.com.br/images/faixas/roxa.png", description: "Gera sentimentos como respeito próprio, dignidade e autoestima. Indica que o judoca deve encontrar novos caminhos e elevar a espiritualidade." },
        { title: "MARROM", image: "https://kanayamaweb.com.br/images/faixas/marrom.png", description: "É a cor da solidificação. Representa a constância, a disciplina, a uniformidade adquirida e a observação das regras." },
        { title: "PRETA", image: "https://kanayamaweb.com.br/images/faixas/preta.png", description: "Representa humildade, autocontrole, maturidade, serenidade, disciplina com responsabilidade, dignidade e conhecimento." },
        { title: "CORAL", image: "https://kanayamaweb.com.br/images/faixas/vermelha-e-branca.png", description: "O judoca alcançou o nível em que pode aspirar à faixa vermelha, porém sem perder a essência da faixa branca." },
        { title: "VERMELHA", image: "https://kanayamaweb.com.br/images/faixas/vermelha.png", description: "Cor do fogo, da paixão e do entusiasmo, sugere motivação, atividade e vontade. Mostra que, mais do que nunca, é necessária força de vontade para não desistir." }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        beforeChange: (current, next) => setActiveIndex(next),
        cssEase: 'ease-in-out',
    };

    return (
        <div className="carousel-container">
            <Slider ref={sliderRef} {...settings}>
                {items.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : 'sideActive'}`}>
                        <div className="carousel-item-wrapper">
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} className="carousel-image" />
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="carousel-navigation"> 
                <button className="nav-button left" onClick={() => sliderRef.current.slickPrev()}></button>
                <button className="nav-button right" onClick={() => sliderRef.current.slickNext()}></button>
            </div>
        </div>
    );
};

export default Carousel;
