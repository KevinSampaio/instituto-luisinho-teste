import './styles.css'


interface EssenceCardProps {
    image: string;
    titulo: string;
    text: string;
}

const EssenceCard: React.FC<EssenceCardProps> = ({ image, titulo, text }) => {
    return (
        <div className="card_history">
            <div className="card_top_image">
                <img src={image} alt="" />
            </div>
            <div className="text_card_history">
                <div className="title_card_history">
                    <span>
                        {titulo}
                    </span>
                </div>
                <div className="text_card_history_text">
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
};

export default EssenceCard;
