import { useState } from "react";
import  ExperienceCard, { ExperienceCardProps } from "../components/ExperienceCard";

export default function Experience() {
    const [selectedItem, setSelectedItem] = useState("Imobisoft");
    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    const experienceData: ExperienceCardProps[] = [
        {
            experienceTime: "exp1",
            logo: "logo1",
            name: "Imobisoft",
            role: "Role at Imobisoft",
            description: "Description about your experience at Imobisoft",
            location: "Location of Imobisoft"
        },
        {
            experienceTime: "exp2",
            logo: "logo2",
            name: "Careerbuilder",
            role: "Role at Careerbuilder",
            description: "Description about your experience at Careerbuilder",
            location: "Location of Careerbuilder"
        },
        {
            experienceTime: "exp3",
            logo: "logo3",
            name: "Finoit Inc",
            role: "Role at Finoit Inc",
            description: "Description about your experience at Finoit Inc",
            location: "Location of Finoit Inc"
        },
        {
            experienceTime: "exp4",
            logo: "logo4",
            name: "Infosys",
            role: "Role at Infosys",
            description: "Description about your experience at Infosys",
            location: "Location of Infosys"
        }
    ];
    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">EXPERIENCE</p>
        <div className="flex justify-center items-center my-24">
            <div className="hidden md:block w-2/5 items-center text-center">
                <ul className="">
                    {experienceData.map((experience,index) => (
                        <li
                            key={index}
                            className={`cursor-pointer py-2 ${selectedItem === experience.name ? "text-green-500 font-bold text-xl" : "hover:text-blue-500 hover:font-semibold hover:text-lg"}`}
                            onClick={() => handleItemClick(experience.name)}
                        >
                            {experience.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-5/6 md:w-3/5 flex  flex-col items-center justify-center">
            {experienceData.map((experience, index) => (
                        <div key={index} className={`block md:${selectedItem === experience.name ? "block" : "hidden"}`}>
                            <ExperienceCard {...experience} />
                        </div>
                    ))}
                {/* <div className={`block md:${selectedItem === "Imobisoft" ? "block" : "hidden"}`}>
                    Imobisoft
                </div>
                <div className={`block md:${selectedItem === "Careerbuilder" ? "block" : "hidden"}`}>
                    Careerbuilder
                </div>
                <div className={`block md:${selectedItem === "Finoit Inc" ? "block" : "hidden"}`}>
                    Finoit Inc
                </div>
                <div className={`block md:${selectedItem === "Infosys" ? "block" : "hidden"}`}>
                    Infosys
                </div> */}
            </div>
        </div>
    </>
}