export default function ProjectCard(data: ProjectCardProps) {

    return (
        <div className=" bg-white shadow-lg shadow-slate-400 rounded-lg ">
            <div className="flex py-4 border-b border-gray-200 justify-between mx-4">
                <div></div>
                <div className="text-center  font-normal text-lg  md:text-3xl text-green-700 ">{data.name}</div>
                <img src={data.companyLogo} alt="" />
            </div>
            <div className="md:py-8 pl-10 text-gray-700 border-b border-gray-200 mx-4">
                {data.description}
            </div>
            <div className="ml-10 py-4 overflow-hidden">
            {data.skills.map((item, index) => (
                <span 
                    key={index} 
                    className="my-2 mr-4 px-2 py-1 bg-stone-200 text-gray-600 rounded-md text-lg font-normal inline-block"
                >
                    {item}
                </span>
            ))}
            </div>

        </div>
    )
}

export interface ProjectCardProps {
    name: string;
    companyLogo: string;
    description: string;
    skills: string[];
}