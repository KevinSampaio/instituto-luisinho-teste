import React from "react";
import Card from "../card";
import "./styles.css";

import Kevin from "./assets/kevin1.jpg";
import Professor1 from "./assets/teacher.jpg";
import Professor2 from "./assets/teacher.jpg";


export default function Teachers() {
    const teachers = [
        {
            name: "João da Silva",
            description: "Especialista em judô com mais de 10 anos de experiência.",
            photo: Professor1,
        },
        {
            name: "Kevin Peters",
            description: "Treinador nacional com foco em desenvolvimento juvenil.",
            photo: Kevin,
        },
        {
            name: "Eduardo Matos",
            description: "Faixa preta 5º Dan e mentor de campeões estaduais.",
            photo: Professor2,
        },
    ];

    return (
        <div className="backgroundTeachers">
            <div className="contentTeacher">
                <h1>PROFESSORES:</h1>
                <div className="cardContainer">
                    {teachers.map((teacher, index) => (
                        <Card
                            key={index}
                            name={teacher.name}
                            description={teacher.description}
                            photo={teacher.photo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
