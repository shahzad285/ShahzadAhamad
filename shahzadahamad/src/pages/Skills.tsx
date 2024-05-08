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
        skills:["Skill1","Skill2","Skill3"]
    },
    {
        pointer: "Backend",
        skills:["Skill4","Skill5","Skill6"]
    },
    {
        pointer: "Others",
        skills:["Skill7","Skill8","Skill9"]
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