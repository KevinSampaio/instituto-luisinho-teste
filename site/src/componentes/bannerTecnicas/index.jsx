import { Container } from '@mui/material';
import Tecnicas from '../tecnicas'
import './styles.css';

export default function tecnicaHero() {
    return (
        <div className="container_tecniqueHero">
            <div className="image_hero_content">
                <div className="text_techniques">
                    <h1>TÉCNICAS DO JUDÔ</h1>
                    <span>Podemos dividir as técnicas do judô em 2 grandes grupos:</span>  
                </div>
            </div>
            <Tecnicas/>  
        </div>
        
    );
}