import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";

export default function Projects() {

    const projectData: ProjectCardProps[] = [
        {
            name: "UniAdmissions",
            companyLogo: "/images/imobisoft.png",
            description: "UniAdmissions helps students in preparing for Oxbridge",
            skills: ["Docker", "Micro services", "ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "Quran app API",
            companyLogo: "/images/imobisoft.png",
            description: "Created APIs for the QuranApp which contains life work of Maulana Wahiduddin",
            skills: ["ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "Treasury Today",
            companyLogo: "/images/imobisoft.png",
            description: "Created APIS for Website and CRM. The Treasury Today Group supply the best in international corporate treasury and finance news and intelligence.",
            skills: ["ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","SSO Linkedin Login","EF Core","Linq"]

        },
        {
            name: "Letter app",
            companyLogo: "/images/imobisoft.png",
            description: "Created APIs for the Letter App, a medical application designed for healthcare professionals to identify injuries and create diagnosis plans.",
            skills: ["ASP.NET Core API",  "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "Don’t Waste Money",
            companyLogo: "/images/imobisoft.png",
            description: "Led end-to-end projects.",
            skills: ["ASP.NET Core API","ABP Framework" , "C#", "Microsoft SQL Server","EF Core","Linq"]

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
                          Worked on SaaS projects.  Spire Pdf`,
            skills: ["ASP.NET Core API","Spire Pdf" , "C#", "Microsoft SQL Server","EF Core","Linq"]

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
            skills: ["ASP.NET Core Web API","Spire Pdf" , "C#", "Microsoft SQL Server","EF Core","Linq"]

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
            skills: ["ASP.NET Web API","ADO.NET", "C#", "Microsoft SQL Server"]

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
            skills: ["ASP.NET Core API","ASP.NET MVC","Angular" , "C#", "Microsoft SQL Server","ADO.Net","SQL Server Profiler"]

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
            skills: ["ASP.NET Core API","ASP.NET MVC","Angular" , "C#"]
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
            skills: ["c#","ASP.NET Web API","ASP.NET Web MVC", "ADO.Net","Microsoft SQL Server","Stored Procedures","Jquery"]

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
            skills: ["c#","ASP.NET Web MVC", "Microsoft SQL Server","Umbraco 7","JQuery","Entity Framework","Linq"]

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
            skills: ["c#","ASP.NET Web API","ASP.NET Web MVC", "Linq","Microsoft SQL Server","Stored Procedures","Entity framework"]

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
            skills: ["c#","ASP.NET Web API", "Linq","Microsoft SQL Server","Entity framework"]

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
            skills: ["c#", "ASP.NET Web MVC","ADO.NET","Microsoft SQL Server","JQuery"]

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
            skills: ["c#", "ASP.NET Web MVC","ADO.NET","Microsoft SQL Server","JQuery"]

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
            skills: ["c#", "ASP.NET Web MVC","MongoDB","JQuery"]

        }
    ];

    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">Projects</p>

<div className="flex flex-col items-center my-10">
        {projectData.map((project, index) => (
            <div key={index} className="w-11/12 md:w-10/12 lg:w-9/12 md my-20">
                <ProjectCard {...project} />
            </div>
        ))}
</div>
    </>
}