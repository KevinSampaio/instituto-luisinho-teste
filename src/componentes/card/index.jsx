import "./styles.css";
import TeacherImage from "../card/assets/teacher.jpg";

export default function Card() {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-photo">
                    <img src={TeacherImage} alt="" />
                </div>
                <p className="card-text">
                    Informações sobre o professor
                </p>
            </div>
        </div>
    );
}