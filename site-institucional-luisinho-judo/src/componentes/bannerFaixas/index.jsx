import { Container } from '@mui/material';
import faixasHeroImage from './assets/secondpart.svg'
import Faixas from '../carousel'
import './styles.css';

export default function faixasHero() {
    return (
        <div className="container_faixasHero">
            <div className="image_hero_content">
                <div className="text_faixas">
                    <div className="japonese-letters">
                        <span>柔道の帯</span>
                    </div>
                    <h1>FAIXAS DO JUDÔ</h1>
                </div>
                <Faixas />
            </div>
        </div>
    );
}