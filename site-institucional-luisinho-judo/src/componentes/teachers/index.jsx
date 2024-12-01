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
            appearance: "um homem de pele clara, cabelo curto e olhos castanhos",
        },
        {
            name: "Kevin Peters",
            description: "Treinador nacional com foco em desenvolvimento juvenil.",
            photo: Kevin,
            appearance: "um homem jovem de pele clara, cabelo loiro e barba curta",
        },
        {
            name: "Eduardo Matos",
            description: "Faixa preta 5º Dan e mentor de campeões estaduais.",
            photo: Professor2,
            appearance: "um homem de pele morena, cabelo raspado e expressão séria",
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
                            appearance={teacher.appearance}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
