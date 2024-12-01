import { Container } from '@mui/material';
import Hero from './assets/hero.svg';
import './styles.css';

export default function Page() {
    return (
        <div className="container_hero">
            <div className="image_hero_content">
                <img src={Hero} alt="Imagem de dois lutadores de judô, onde um lutador está aplicando o golpe Seoi-Nage e em baixo há uma frase do criador do Judô, Jigoro Kano, dizendo o seguinte, 'somente se aproxima da perfeição quem a procura com constância sabedoria e sobretudo humildade'." />
            </div>
            <button className="button_hero">CONHEÇA MAIS</button>
        </div>
    );
}
