import React from 'react';
import { Container, Typography } from '@mui/material';
import Tecnicas from '../tecnicas';
import './styles.css';

export default function TecnicaHero() {
    return (
        <Container
            component="main"
            className="container_tecniqueHero"
            role="region"
            aria-labelledby="techniques-hero-title"
        >
            <div className="image_hero_content">
                <header className="text_techniques">
                    <Typography
                        variant="h1"
                        id="techniques-hero-title"
                        gutterBottom
                        component="h1"
                        sx={{ fontSize: '2rem', fontWeight: 'bold' }}
                    >
                        TÉCNICAS DO JUDÔ
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ fontSize: '1rem', color: 'text.secondary' }}
                    >
                        Podemos dividir as técnicas do judô em 2 grandes grupos:
                    </Typography>
                </header>
            </div>
            <section aria-labelledby="techniques-section-title">
                <Typography variant="h2" id="techniques-section-title" sx={{ display: 'none' }}>
                    Lista de Técnicas
                </Typography>
                <Tecnicas />
            </section>
        </Container>
    );
}
