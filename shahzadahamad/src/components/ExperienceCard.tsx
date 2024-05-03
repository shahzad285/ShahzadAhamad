export default function ExperienceCard(data: ExperienceCardProps) {

    return (
        <div className=" w-9/12 bg-white shadow-lg shadow-slate-400 rounded-lg ">
            <div className="border-b border-gray-300 mx-3 py-4 px-3 text-sm text-stone-600">{data.experienceTime}</div>
            <div className="flex justify-between border-b border-gray-300 py-4 px-3 mx-3">
                <div className="pr-5">{data.logo}</div>
                <div className="pr-5 font-normal text-3xl text-green-700">{data.name}</div>
                <div className="text-stone-600 font-semibold">{data.role}</div>
            </div>
            <div className="border-b border-gray-100 p-4 px-3 mx-3 ml-3 text-gray-700">{data.description}</div>
            <div className="bg-gray-100 w-full py-4  text-sm px-6 text-gray-700 ">{data.location}</div>

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
    name: string;
    description: string;
    role: string;
    experienceTime: string;
    location: string;
}