import "./styles.css";

export default function Card({ name, description, photo, appearance }) {
    return (
        <div
            className="card"
            role="region"
            aria-labelledby={`card-title-${name}`}
            aria-describedby={`card-description-${name}`}
        >
            <div className="card-content">
                <div className="card-photo" role="img" aria-label={`Foto do professor ${name}, ${appearance}`}>
                    <img src={photo} alt={`Professor ${name}, ${appearance}`} />
                </div>
                <p id={`card-title-${name}`} className="card-title">
                    {name}
                </p>
                <p id={`card-description-${name}`} className="card-description">
                    {description}
                </p>
            </div>
        </div>
    );
}
