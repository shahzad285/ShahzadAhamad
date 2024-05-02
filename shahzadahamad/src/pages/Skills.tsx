import { useState } from "react";

export default function Skills(){ 
    const [selectedItem, setSelectedItem] = useState("Imobisoft");
const handleItemClick = (item: string) => {
    setSelectedItem(item);
};

const items = ["Imobisoft", "Careerbuilder", "Finoit Inc", "Infosys"];
return <>
    <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">Skills</p>
    <div className="flex justify-center items-center my-24">
        <div className="w-2/5 items-center text-center">
            <ul className="">
            {items.map((item) => (
                        <li
                            key={item}
                            className={`cursor-pointer py-2 ${selectedItem === item ? "text-green-500 font-bold text-xl" : "hover:text-blue-500 hover:font-semibold hover:text-lg"}`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
        <div className="w-3/5 flex items-center justify-center">
          <div  className={`${selectedItem==="Imobisoft"?"block":"hidden"}`}>Imobisoft</div>
          <div className={`${selectedItem==="Careerbuilder"?"block":"hidden"}`}>Careerbuilder</div>
          <div  className={`${selectedItem==="Finoit Inc"?"block":"hidden"}`}>Finoit Inc</div>
          <div className={`${selectedItem==="Infosys"?"block":"hidden"}`}>Infosys</div>
        </div>
    </div>
</>
}