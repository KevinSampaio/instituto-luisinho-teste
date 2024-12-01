import React from 'react';
import './styles.css';
import TechniqueCard from './TechniqueCard';

const Techniques = () => {
  const nageWazaTechniques = [
    { name: 'Seoi-Nage', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/seoi-nage new.png', japaneseLetters: '背負投' },
    { name: 'Sumi-Otoshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/sumi-otoshi new.png', japaneseLetters: '隅落' },
    { name: 'Tai-Otoshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/tai-otoshi new.png', japaneseLetters: '体落' },
    { name: 'Kata-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/kata-guruma new.png', japaneseLetters: '肩車' },
    { name: 'Uki-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/uki-goshi new.png', japaneseLetters: '浮腰' },
    { name: 'Ushiro-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/ushiro-goshi new.png', japaneseLetters: '後腰' },
    { name: 'Harai-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/harai-goshi new.png', japaneseLetters: '払腰' },
    { name: 'Tsuri-Komi-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/tsuri-komi-goshi new.png', japaneseLetters: '浮腰' },
    { name: 'De-Ashi-Barai', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/de-ashi-barai new.png', japaneseLetters: '出足払' },
    { name: 'Osoto-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/osoto-guruma new.png', japaneseLetters: '大外車' },
    { name: 'Hiza-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/hiza-guruma new.png', japaneseLetters: '膝車' },
    { name: 'O-Uchi-Gari', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/o-uchi-gari new.png', japaneseLetters: '大内刈' },
  ];

  const katameWazaTechniques = [
    { name: 'Kesa-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kesa-gatame.png', japaneseLetters: '袈裟固' },
    { name: 'Kata-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kata-gatame.png', japaneseLetters: '肩固' },
    { name: 'Kuzure-Shiho-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kuzure-kami-shiho-gatame.png', japaneseLetters: '三角固' },
    { name: 'Tate-Shiho-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/tate-shiho-gatame.png', japaneseLetters: '縦四方固' },
    { name: 'Do-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/do-jime.png', japaneseLetters: '胴絞' },
    { name: 'Gyak-Joji-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/gyaku-juji-jime.png', japaneseLetters: '逆十字絞' },
    { name: 'Ryo-Te-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/ryo-te-jime.png', japaneseLetters: '両手絞' },
    { name: 'Tsukkomi-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/tsukkomi-jime.png', japaneseLetters: '突込絞' },
    { name: 'Ashi-Garami', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ashi-garami.png', japaneseLetters: '足緘' },
    { name: 'Ude-Garami', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-garami.png', japaneseLetters: '腕緘' },
    { name: 'Ude-Hishigi-Sankaku-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-hishigi-sankaku-gatame.png', japaneseLetters: '腕挫三角固' },
    { name: 'Ude-Hishigi-Waki-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-hishigi-waki-gatame.png', japaneseLetters: '腕挫腋固' },
  ];

  return (
    <div className="techniques-container" aria-labelledby="techniques-title">
      <h1 id="techniques-title">Judo Techniques</h1>
      <div className="techniques-wrapper">
        <div className="category" aria-labelledby="nage-waza-title">
          <div className="title-category">
            <h2 id="nage-waza-title">NAGE-WAZA</h2>
            <div className="japanese-title" aria-hidden="true">
              <span>投げ技</span>
            </div>
          </div>
          <span>Técnicas de Projeção</span>
          <div className="techniques-layout">
            <div className="techniques-list">
              {nageWazaTechniques.map((technique, index) => (
                <TechniqueCard
                  key={index}
                  name={technique.name}
                  imageSrc={technique.imageSrc}
                  japaneseLetters={technique.japaneseLetters}
                  description={technique.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="category" aria-labelledby="katame-waza-title">
          <div className="title-category">
            <h2 id="katame-waza-title">KATAME-WAZA</h2>
            <div className="japanese-title" aria-hidden="true">
              <span>固め技</span>
            </div>
          </div>
          <span>Técnicas de Solo</span>
          <div className="techniques-layout">
            <div className="techniques-list">
              {katameWazaTechniques.map((technique, index) => (
                <TechniqueCard
                  key={index}
                  name={technique.name}
                  imageSrc={technique.imageSrc}
                  japaneseLetters={technique.japaneseLetters}
                  description={technique.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
