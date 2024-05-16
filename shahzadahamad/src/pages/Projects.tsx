import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";

export default function Projects() {

    const projectData: ProjectCardProps[] = [
        {
            name: "UniAdmissions",
            companyLogo: "/images/imobisoft.png",
            description: "UniAdmissions helps students in preparing for Oxbridge",
            skills: ["Docker", "Micro services", "ASP.NET Core", "Technical Leadership", "C#", "Microsoft SQL Server"]

        },
        {
            name: "Quran app API",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Treasury Today",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Letter app",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Don’t Waste Money",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Hi Force",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "PKU Bite",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "COPDPredict",
            companyLogo: "/images/imobisoft.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Workterra",
            companyLogo: "/images/careerbuilder.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Iqnite",
            companyLogo: "/images/finoit.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "COPD",
            companyLogo: "/images/finoit.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "EconomyEnergy",
            companyLogo: "/images/finoit.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Futuretrack",
            companyLogo: "/images/finoit.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "FFMS",
            companyLogo: "/images/finoit.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "Virtute",
            companyLogo: "/images/infosys.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "PMO Dashboard",
            companyLogo: "/images/infosys.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        },
        {
            name: "NewsLetter Tool",
            companyLogo: "/images/infosys.png",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            skills: ["skill1", "skill2"]

        }
    ];

    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">Projects</p>

<div className="flex flex-col items-center my-10">
        {projectData.map((project, index) => (
            <div key={index} className="w-9/12 my-20">
                <ProjectCard {...project} />
            </div>
        ))}
</div>
    </>
}