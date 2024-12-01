import './styles.css'


interface EssenceCardProps {
    numero: string;
    titulo: string;
    text: string;
}

const EssenceCard: React.FC<EssenceCardProps> = ({ numero, titulo, text }) => {
    return (
        <div className="card_essence">
            <div className="card_left_number">
                <div className="card_numero">{numero}</div>
            </div>
            <div className="card_right_text">
                <div className="title_card_essence">
                    <span>
                        {titulo}
                    </span>
                </div>
                <div className="text_card_essence">
                <span>{text}</span>
                </div>
            </div>
        </div>
    );
};

export default EssenceCard;
