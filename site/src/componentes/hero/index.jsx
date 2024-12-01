import { Container } from '@mui/material';
import Hero from './assets/hero.svg';
import './styles.css';

export default function Page() {
    return (
        <div className="container_hero">
            <div className="image_hero_content">
                <img src={Hero} alt="" />
            </div>
            <button className="button_hero">CONHEÇA MAIS</button>
        </div>
    );
}