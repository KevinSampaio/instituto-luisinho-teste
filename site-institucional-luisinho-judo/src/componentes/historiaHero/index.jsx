import './styles.css';

export default function historiaHero() {
    return (
        <section
            id="historia-hero"
            lang="pt-BR"
            role="region"
            aria-labelledby="historia-title"
            aria-describedby="historia-description"
        >
            <div className="container_historiaHero">
                <div
                    className="image_herohistoria_content"
                    role="img"
                    aria-label="Imagem de fundo representando a história do judô"
                >
                    <div className="texto_historia_judo">
                        <h1 id="historia-title">HISTORIA DO JUDO</h1>
                        <p id="historia-description" className="sr-only">
                            Esta seção apresenta a criação e filosofia do judô, destacando seus princípios e impacto.
                        </p>
                        <div className="paragrafos_historia_judo">
                            <div className="texto_paragrafo">
                                <h4>Criação do judô</h4>
                                <span>
                                    Criado no Japão, no final do século XIX, por Jigoro Kano, um educador e praticante de artes marciais. Kano começou a treinar jiu-jitsu, uma arte marcial tradicional japonesa, mas percebeu que muitas das técnicas eram perigosas e que faltava um enfoque mais educacional.
                                    Seu objetivo era desenvolver um sistema que promovesse tanto o físico quanto o moral, permitindo que as pessoas se aprimorassem não só como lutadores, mas também como seres humanos.
                                    Em 1882, Kano fundou o Kodokan, o primeiro dojo de judô, em Tóquio. Ele combinou técnicas do jiu-jitsu com novos princípios de eficiência e segurança, eliminando golpes que poderiam causar ferimentos graves.
                                    O nome "judô" significa "caminho suave" refletindo a ênfase de Kano em usar a força do oponente contra ele, ao invés de confrontá-la diretamente. Assim, o judô não era apenas uma arte de combate, mas uma forma de treinamento para a mente e o espírito, com o objetivo de contribuir para a sociedade como um todo.
                                </span>
                            </div>
                            <div className="texto_paragrafo">
                                <h4>Filosofia</h4>
                                <span>
                                    A filosofia do judô, criada por Jigoro Kano, vai além de uma arte marcial; ela é um caminho para o desenvolvimento pessoal e social. O judô preza pelo "Seiryoku Zenyo", que significa o uso máximo da eficiência com o mínimo de esforço, e pelo "Jita Kyoei", que é a ideia de benefício mútuo e prosperidade para todos.
                                    Princípios que ensinam a importância de respeitar o próximo, praticar a humildade e sempre buscar o aperfeiçoamento contínuo.
                                    No tatame, o judoca aprende a cair e se levantar, a vencer e aceitar a derrota, aplicando esses ensinamentos na vida, promovendo harmonia, disciplina e autocontrole.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
