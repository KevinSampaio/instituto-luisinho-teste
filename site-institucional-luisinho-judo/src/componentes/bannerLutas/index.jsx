import React from 'react';
import { Container } from '@mui/material';
import lutasHeroImage from './assets/lutas.svg';
import CardEssence from './cardEssence';
import CardHistory from './cardHistory';
import './styles.css';

const essential = [
    { numero: '1.', titulo: 'Cortesia', text: 'Para ser educado no trato com os outros.' },
    { numero: '2.', titulo: 'Coragem', text: 'Para enfrentar as dificuldades com bravura.' },
    { numero: '3.', titulo: 'Honestidade', text: 'Para ser verdadeiro em seus pensamentos e ações.' },
    { numero: '4.', titulo: 'Honra', text: 'Para fazer o certo e se manter com seus princípios.' },
    { numero: '5.', titulo: 'Modéstia', text: 'Para não agir e pensar de maneira egoísta.' },
    { numero: '6.', titulo: 'Respeito', text: 'Para viver em harmonia com os outros' },
    { numero: '7.', titulo: 'Autocontrole', text: 'Para estar no comando das suas emoções.' },
    { numero: '8.', titulo: 'Amizade', text: 'Para ser um bom companheiro e amigo.' },
];

const history = [
    { image: '/src/componentes/bannerLutas/assets/kano.png', titulo: 'Jigoro Kano', text: 'Criador do Judô.' },
    { image: '/src/componentes/bannerLutas/assets/kawaguchi.png', titulo: 'Takao Kawaguchi', text: 'Medalhista de Judô em 1972.' },
    { image: '/src/componentes/bannerLutas/assets/olimpiadas.png', titulo: 'Paralimpíadas ', text: 'Disputada em Tokyo, 2020.' },
];

export default function LutasHero() {
    return (
        <div className="container_lutasHero">
            <div className="imagem_hero_content">
                <div className="perfectPoint">
                    <div className="title_perfect_point">
                        <h1>LUTA PELO <br />PONTO PERFEITO</h1>
                        <div className="japanese-letters-judo">
                            一本勝負
                        </div>
                    </div>
                    <div className="text_perfect_point">
                        <p>
                            Nas palavras de seu criador: "Arte em que se usa ao máximo a força física e espiritual".
                        </p>
                        <p>
                            Jigoro Kano reuniu alguns elementos de outras artes marciais e, pouco depois de ser criado, o judô foi oficializado no Japão. Essa arte marcial foi aliada com a filosofia ippon-shobu (luta pelo ponto perfeito).
                        </p>
                        <p>
                            Dessa forma, ele desenvolveu 8 princípios básicos relacionados com boas ações dos indivíduos:
                        </p>
                    </div>
                </div>
                <div className="principles">
                    {essential.map((essential, index) => (
                        <CardEssence
                            key={index}
                            numero={essential.numero}
                            titulo={essential.titulo}
                            text={essential.text}
                        />
                    ))}
                </div>
                <div className="judoScore">
                    <h2>PONTUAÇÃO NO JUDÔ</h2>
                    <p>
                        O principal objetivo do judô é derrubar o adversário para o chão. Os combates entre os judocas acontecem no tatame, que normalmente mede 8x8 metros. Para vencer a luta, o judoca precisa derrubar o adversário com as costas e ombros no tatame ou imobilizar o adversário durante um período que pode ir até 20 segundos.
                    </p>
                    <p>
                        Atualmente, há dois tipos de golpes que pontuam no judô. Só o atleta completar dois pontos, ele vence a luta.
                    </p>
                    <div className="points">
                        <p>Wazari: quando o judoca cai de costas no tatame, porém com pouca velocidade. Cada 1 wazari ganha um ponto, ou seja, se o judoca ficar 2 wazari, ele vence a luta.</p>
                        <p>Ippon: quando o judoca cai perfeitamente de costas no tatame. Este golpe é considerado o "nocaute" do judô, pois o judoca ganha 2 pontos, vencendo a luta.</p>
                    </div>
                    <p>
                        As lutas têm duração de 5 minutos. Durante esse período, o combate entre dois judocas deverá apresentar um vencedor. Entretanto, se isso não acontecer, há uma prorrogação, chamada de Golden Score (pontuação de ouro), ou seja, ganha o judoca que conseguir aplicar um golpe (pontuar) ou se o adversário é punido.
                    </p>
                </div>
                <div className="icons">
                    {history.map((history, index) => (
                        <CardHistory
                            key={index}
                            image={history.image}
                            titulo={history.titulo}
                            text={history.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
