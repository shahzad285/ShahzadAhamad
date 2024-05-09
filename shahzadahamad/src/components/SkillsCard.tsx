export default function SkillsCard(data: SkillCardProps) {

    return (
        <div className="sm:w-full lg:8/10 rounded-lg">
            <div className="ml-2 mb-4 text-3xl font-bold text-gray-700 block lg:hidden">{data.pointer}</div>
            <div className="flex flex-wrap">
                {data.skills.map((item) => {
                    return <span className="m-2 px-6 py-4 bg-stone-300 text-gray-600 rounded-md text-lg font-semibold">{item}</span>
                })}
            </div>
        </div>
    )
}

export interface SkillCardProps {
    pointer: string;
    skills: string[];
}


