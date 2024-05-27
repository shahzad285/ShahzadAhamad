import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";

export default function Projects() {

    const projectData: ProjectCardProps[] = [
        {
            name: "Nyetimer",
            companyLogo: "/images/imobisoft.png",
            description: "Nyetimber, a renowned English sparkling wine producer. I led the development of Nyetimber's inventory management system and its integration with NetSuite ERP. Implemented Single Sign-On (SSO) using Azure Active Directory (AAD) to enhance security and user experience.",
            skills: [ "ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","EF Core","Linq","Netsuite integration","AAD SSO","Git"]

        },
        {
            name: "UniAdmissions",
            companyLogo: "/images/imobisoft.png",
            description: "I developed a comprehensive microservices-based application for UniAdmissions, the world’s first Oxbridge preparation school, aimed at streamlining the university admissions process for students. The system enables students to select universities and subjects they wish to prepare for, and then creates personalized study plans complete with mock tests and practice materials. This project involved designing and implementing microservices architecture, ensuring scalability and efficiency. The platform integrates seamlessly with various educational resources, providing a robust and user-friendly interface for students preparing for competitive exams and university applications​ ",
            skills: ["Docker", "Micro services", "ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","EF Core","Linq"]

        },       
        {
            name: "Treasury Today",
            companyLogo: "/images/imobisoft.png",
            description: " Treasury Today Ltd. focuses on financial news and resources for treasury professionals, I led a team to create web APIs for a CRM and a website. This project included Single Sign-On (SSO) login functionality using LinkedIn credentials and integration with Campaign Monitor for email marketing.",
            skills: ["ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","SSO Linkedin Login","EF Core","Linq"]

        },
        {
            name: "Quran app API",
            companyLogo: "/images/imobisoft.png",
            description: "Created APIs for the QuranApp which contains life work of Maulana Wahiduddin",
            skills: ["ASP.NET Core API", "Technical Leadership", "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "Letter app",
            companyLogo: "/images/imobisoft.png",
            description: "The Letter App is an innovative project that seamlessly integrates with the NHS health system to fetch patient details. This groundbreaking application revolutionizes the process of creating diagnostic letters. It enables healthcare professionals to efficiently generate reports after identifying injuries or bone fractures, using the fetched patient details for personalized and accurate communication. This streamlined approach not only enhances productivity but also ensures precise and timely communication within the healthcare system.",
            skills: ["ASP.NET Core API",  "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "Don’t Waste Money",
            companyLogo: "/images/imobisoft.png",
            description: "Don’t Waste Money carved their way into the aggregator industry by helping their customers find the best deals possible across energy, security and a host of other categories.I led backend development efforts, crafting efficient APIs using the ABP .NET framework to power the aggregator tool and leverage customer data for targeted marketing campaigns. Integrating SendGrid for email campaigns, I enhanced customer engagement and satisfaction, significantly improving system performance and solidifying DWM's position as an industry leader in providing top-notch deals across various categories.",
            skills: ["ASP.NET Core API","ABP Framework" , "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "Hi Force",
            companyLogo: "/images/imobisoft.png",
            description: "Hi-force Specializing in hydraulic tools for the Oil & Gas and Construction sectors, Hi-force relies on a global sales team for custom solutions. I led the technical implementation of a digital platform, streamlining document processing and sharing. By developing efficient algorithms and sharing mechanisms, we enhanced document management, boosting collaboration and productivity within the organization.",
            skills: ["ASP.NET Core API","Spire Pdf" , "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "PKU Bite",
            companyLogo: "/images/imobisoft.png",
            description: "PKU is a rare metabolic disorder that disrupts the body's ability to break down and utilize protein-containing foods due to a deficiency of the enzyme phenylalanine hydroxylase (PAH). I led the the project PKU bite aimed at assisting patients in managing their dietary restrictions effectively. These APIs empower patients to identify foods that should be strictly avoided, as well as those that can be consumed with caution or are preferred. By providing personalized dietary guidance through innovative technology, we aim to improve the quality of life for individuals living with PKU",
            skills: ["ASP.NET Core Web API","Spire Pdf" , "C#", "Microsoft SQL Server","EF Core","Linq"]

        },
        {
            name: "COPDPredict",
            companyLogo: "/images/imobisoft.png",
            description: "The COPD Predict Application is a SAAS based predictive healthcare tool designed to assist healthcare professionals and patients in the early detection and management of Chronic Obstructive Pulmonary Disease (COPD). It helps in tracking and predicting possible exacerbation. By gathering comprehensive patient data, including medical history, symptoms, lifestyle factors, and relevant diagnostic test results.",
            skills: ["ASP.NET Web API","ADO.NET", "C#", "Microsoft SQL Server"]

        },
        {
            name: "Workterra",
            companyLogo: "/images/careerbuilder.png",
            description: "Workterra is a fully configurable, easy-to-use benefits administration and enrollment platform designed to simplify the growing complexity of benefits for HR and employees. My work included enhancements and maintenance, as well as developing new modules for the platform.",
            skills: ["ASP.NET Core API","ASP.NET MVC","Angular" , "C#", "Microsoft SQL Server","ADO.Net","SQL Server Profiler"]

        },     
        {
            name: "COPD",
            companyLogo: "/images/finoit.png",
            description: "COPD is a progressive lung disease that makes it difficult to breathe. This project helps clinicians track the condition of patients and indicate probable exacerbations. I added multiple functionalities and provided support and maintenance for the system.",
            skills: ["c#","ASP.NET Web API","ASP.NET Web MVC", "ADO.Net","Microsoft SQL Server","Stored Procedures","Jquery"]

        },
        {
            name: "EconomyEnergy",
            companyLogo: "/images/finoit.png",
            description: "Economy Energy was a UK-based energy company providing gas and electricity services to residential customers. Known for competitive pricing and straightforward tariffs, the company aimed to make energy more affordable for households. I worked on the CMS Umbraco, adding administrative functionalities and performing maintenance tasks.",
            skills: ["c#","ASP.NET Web MVC", "Microsoft SQL Server","Umbraco 7","JQuery","Entity Framework","Linq"]

        },
        {
            name: "Futuretrack",
            companyLogo: "/images/finoit.png",
            description: "I worked on performance optimization and enhancements for a project with DJ Workforce, a specialist in vehicle security installation. DJ Workforce operates across some of the UK’s largest commercial fleet vehicles, ensuring top-notch security solutions for their clients. My contributions were aimed at improving system performance and implementing new features to enhance overall functionality.",
            skills: ["c#","ASP.NET Web API","ASP.NET Web MVC", "Linq","Microsoft SQL Server","Stored Procedures","Entity framework"]

        },
        {
            name: "FFMS",
            companyLogo: "/images/finoit.png",
            description: "I worked on the backend of a project involving a Field Force Management System (FFMS). This system is designed to help companies efficiently organize and manage their workforce. By incorporating advanced features, FFMS enables automation, enhances efficiency, and fosters a connected and collaborative work environment. My contributions focused on developing and optimizing backend functionalities to ensure seamless operations and robust performance of the system",
            skills: ["c#","ASP.NET Web API", "Linq","Microsoft SQL Server","Entity framework","SAAS"]

        },
         {
            name: "NewsLetter Tool",
            companyLogo: "/images/infosys.png",
            description: "Crafted as a solo developer, this newsletter tool empowers users to effortlessly send newsletters to targeted recipients. Designed with simplicity and efficiency in mind, this tool streamlines the process of creating and distributing newsletters, enabling users to engage with their audience effectively and drive meaningful connections.",
            skills: ["c#", "ASP.NET Web MVC","MongoDB","JQuery","SMTP"]

        },
        {
            name: "PMO Dashboard",
            companyLogo: "/images/infosys.png",
            description: "Designed specifically for project managers, this platform provides comprehensive oversight of multiple projects, allowing managers to track progress, monitor milestones, and evaluate the attendance of employees. With intuitive features tailored for project management needs, including real-time updates and customizable reporting, this tool empowers managers to make informed decisions, optimize resource allocation, and ensure project success",
            skills: ["c#", "ASP.NET Web MVC","ADO.NET","Microsoft SQL Server","JQuery"]

        },
        {
            name: "Virtute",
            companyLogo: "/images/infosys.png",
            description: "Developed as part of training at Infosys, this project is an educational website where tutors can upload learning materials, and students can access them and attempt mock tests to prepare for exams.",
            skills: ["c#", "ASP.NET Web MVC","ADO.NET","Microsoft SQL Server","JQuery"]

        }
           
    ];

    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">Projects</p>

<div className="flex flex-col items-center my-10">
        {projectData.map((project, index) => (
            <div key={index} className="w-11/12 md:w-10/12 lg:w-9/12 my-10 md:my-20">
                <ProjectCard {...project} />
            </div>
        ))}
</div>
    </>
}