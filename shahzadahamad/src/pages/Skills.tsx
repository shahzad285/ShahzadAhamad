import { useState } from "react";
import SkillsCard, { SkillCardProps } from "../components/SkillsCard";

export default function Skills(){ 
    const [selectedItem, setSelectedItem] = useState("Frontend");
const handleItemClick = (item: string) => {
    setSelectedItem(item);
};

const skillData: SkillCardProps[] = [
    {
        pointer: "Frontend",
        skills:["HTML","CSS","JavaScript","Typescript","React","Recoil","TailwindCSS"]
    },
    {
        pointer: "Backend",
        skills:["C#","Dotnet","Dotnet core", "SQL","Microsoft SQL Server","Mongo DB","Entity Framework","Entity Framework Core","Linq","Ado.Net","Asp.Net WebAPI","Asp.Net MVC"]
    },
    {
        pointer: "Others",
        skills:["Microsoft Azure","Git","Github","Gitlab","Visual Studio","Visual Studio Code","Sql Server Management Studio","Source tree","Smart git"]
    },
];
return <>
    <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">Skills</p>
    <div className="flex justify-center items-center my-24">
        <div className="hidden lg:block w-2/5 items-center text-center">
            <ul className="">
                {skillData.map((area, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer py-2 ${selectedItem === area.pointer ? "text-green-500 font-bold text-xl" : "hover:text-blue-500 hover:font-semibold hover:text-lg"}`}
                        onClick={() => handleItemClick(area.pointer)}
                    >
                        {area.pointer}
                    </li>
                ))}
            </ul>
        </div>
        <div className="w-full ml-20 lg:ml-0 lg:w-3/5 flex flex-col items-center justify-center">
        {skillData.map((skill, index) => (
                    <div key={index} className={`w-full my-10 lg:my-0 block ${selectedItem !== skill.pointer ? "lg:hidden" : ""}`}>
                        <SkillsCard {...skill} />
                    </div>
                ))}
            
        </div>
    </div>
</>
}