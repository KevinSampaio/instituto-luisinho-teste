import './styles.css';
import Card from '../card';

export default function Teachers() {
    return (
        <div className="backgroundTeachers">
            <div className="contentTeacher">
                <h1>PROFESSORES:</h1>
                <div className="cardContainer">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
