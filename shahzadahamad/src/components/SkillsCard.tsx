export default function SkillsCard(data: SkillCardProps) {

    return (
        <div className="mr-8 md:w-10/12 bg-white shadow-lg shadow-slate-400 rounded-lg ">
           <span>{data.skills}</span>
        </div>
    )
}

export interface SkillCardProps {
    pointer: string;
    skills: string[];
}


