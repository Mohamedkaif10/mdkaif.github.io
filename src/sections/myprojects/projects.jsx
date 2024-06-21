import React from "react";
import tlweb from "../../assets/tlimage.png";
import IIC from "../../assets/IIC-IITH.png";
import Micromosue from "../../assets/Micromouse.png";
import Gymkhana from "../../assets/Gymkhana.png";
import Tayog from "../../assets/Tayog.png"
const Card = ({ imageSrc, title, description, link }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-96 transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-2 hover:border-blue-500">
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <a href={link} className="text-blue-400 underline">
                    {link}
                </a>
            </div>
        </div>
    );
};

const CardsGrid = () => {
    const cards = [
        {
            imageSrc: tlweb,
            title: "Tinkerers' Lab, IIT Hyderabad",
            description: "Official Website: tinkererslab.iith.ac.in",
            link: "https://tinkererslab.iith.ac.in/",
        },
        {
            imageSrc: IIC,
            title: "Innovation Council, IIT Hyderabad",
            description: "IIC-IITH Website: innovationcouncil.iith.ac.in",
            link: "https://innovationcouncil.iith.ac.in/",
        },
        {
            imageSrc: Micromosue,
            title: "Micromouse Maze Solver",
            description: "Micromouse: tinkererslabiith.github.io/TL-Maze-Mouse/",
            link: "https://tinkererslabiith.github.io/TL-Maze-Mouse/",
        },
        {
            imageSrc: Gymkhana,
            title: "official website of Gymkhana",
            description: "Gymkhana: gymkhana.iith.ac.in",
            link: "https://gymkhana.iith.ac.in/",
        },
        {
            imageSrc: Tayog,
            title: "official website of Gymkhana",
            description: "Gymkhana: gymkhana.iith.ac.in",
            link: "https://gymkhana.iith.ac.in/",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default CardsGrid;
