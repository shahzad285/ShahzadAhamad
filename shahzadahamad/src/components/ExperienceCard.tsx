export default function ExperienceCard(data:ExperienceCardProps)
{

    return (
    <div className="bg-white shadow-lg shadow-slate-400 rounded-lg">
        <div className="border-b border-gray-300 w-full py-3 px-3 text-sm">{data.experienceTime}</div>
        <div className="flex justify-between py-4 px-3 ">
            <div className="pr-5">{data.logo}</div>
            <div className="pr-5">{data.name}</div>
            <div className="">{data.role}</div>            
        </div>
        <div className="border-b border-gray-100 w-full pb-4 px-3 ">{data.description}</div>
        <div className="bg-gray-50 w-full pb-4  text-sm px-3 ">{data.location}</div>

    </div>
    )
}

export interface ExperienceCardProps {
    pointer:string;
    logo:string;
    name: string;
    description: string;
    role:string;
    experienceTime:string;
    location:string;
  }