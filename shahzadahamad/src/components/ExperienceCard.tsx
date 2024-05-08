export default function ExperienceCard(data: ExperienceCardProps) {

    return (
        <div className="mr-8 md:w-10/12 bg-white shadow-lg shadow-slate-400 rounded-lg ">
            <div className="flex justify-between border-b border-gray-300 py-4 px-2 md:px-3 mx-1 md:mx-3 align-middle ">
                <a href={data.companyLink} target="_blank"><div className="pr-5"><img src={data.logo} alt="" /> </div></a>
                <a href={data.companyLink}><div className=" font-normal text-lg  md:text-3xl text-green-700">{data.name}</div></a>
                <div className="text-stone-600 font-bold hidden md:block">{data.role}</div>
            </div>            
            <div className="text-stone-600 font-extrabold block my-2 pl-3 md:hidden">{data.role}</div>
            <div className="border-b border-gray-100 md:py-8 pl-10 text-gray-700">{/* Rendering the description as separate paragraphs */}           
                <ul className="list-disc pl-5">
                    {data.description
                        .split('\n')
                        .map((line, index) => {                           
                                return <li className="py-1" key={index}>{line}</li>                           
                        })}
                </ul></div>
            <div className="bg-gray-100 w-full py-4  text-sm px-6 text-gray-700 ">{data.experienceTime} | {data.location} </div>

        </div>


        // return <div className="card">
        //     <div className="card-content">
        //         <div className="row">
        //             <div className="col s12 m2">
        //                 <a className="https://www.lightspeedhq.com/" target="_blank"><img alt="Lightspeed logo" src="/assets/img/lightspeed-logo.png" className="responsive-img center-block"/></a>
        //             </div>
        //             <div className="col s12 m10">
        //                 <p>
        //                     <span className="card-title"><a href="https://www.lightspeedhq.com/" target="_blank" className="teal-text hoverline">Lightspeed</a></span>
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="role brown-text">Principal Front-End Developer</div>
        //         <p>
        //             <em className="grey-text">The one-stop commerce platform for retail, hospitality and golf merchants around the world.</em>
        //         </p>
        //         <ul>
        //             <li>
        //                 Focusing on front-end development and integrating Upserve's best-in-class insights product into Lightspeed's flagship all-in-one cloud-based POS system.
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="card-action">
        //         <span>Apr 2021 - Present | Providence, RI</span>
        //     </div>
        // </div>


    )
}

export interface ExperienceCardProps {
    pointer: string;
    logo: string;
    companyLink: string;
    name: string;
    description: string;
    role: string;
    experienceTime: string;
    location: string;
}