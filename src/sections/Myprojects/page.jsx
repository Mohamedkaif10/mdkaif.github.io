import React from "react";
import tlweb from "../../assets/tlimage.png";
import IIC from "../../assets/IIC-IITH.png";
import Micromosue from "../../assets/Micromouse.png";
import Gymkhana from "../../assets/Gymkhana.png";
import Tayog from "../../assets/Tayog.png";

const Card = ({ imageSrc, title, description, link }) => {
    return (
        <div 
            id="Projects" 
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 transform transition-transform hover:-translate-y-2 hover:scale-105 hover:z-10 hover:border-2 hover:border-blue-500"
            style={{ 
                transition: 'transform 0.3s ease, z-index 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 255, 0.8), 0 6px 6px rgba(0, 0, 255, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
        >
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
            title: "Official Website of Gymkhana",
            description: "Gymkhana: gymkhana.iith.ac.in",
            link: "https://gymkhana.iith.ac.in/",
        },
        {
            imageSrc: Tayog,
            title: "Official Website of Tayog",
            description: "Tayog: gymkhana.iith.ac.in",
            link: "https://gymkhana.iith.ac.in/",
        },
    ];

    return (
        <div className="mt-12 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        </div>
    );
};

export default CardsGrid;
