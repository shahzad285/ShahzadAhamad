export default function ExperienceCard(data:ExperienceCardProps)
{

    return (
    <div className="bg-white">
        <div>{data.experienceTime}</div>
        <div>
            <div>{data.logo}</div>
            <div>{data.name}</div>
            <div>{data.role}</div>            
        </div>
        <div>{data.description}</div>
        <div>{data.location}</div>

    </div>
    )
}

export interface ExperienceCardProps {
    logo:string;
    name: string;
    description: string;
    role:string;
    experienceTime:string;
    location:string;
  }