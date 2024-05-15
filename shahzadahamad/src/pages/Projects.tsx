import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";

export default function Projects() {

    const projectData: ProjectCardProps[] = [
        {
            name: "UniAdmissions",
            description: "UniAdmissions helps students in preparing for Oxbridge",
            skills: ["Docker", "Micro services","ASP.NET Core","Technical Leadership","C#","Microsoft SQL Server"]

        },
        {
            name: "Quran app API",
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
        <div className=" my-24 flex flex-col items-center justify-center">
            {projectData.map((project, index) => (
                <div key={index} className="w-full my-10 lg:my-0 block ">
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    </>
}