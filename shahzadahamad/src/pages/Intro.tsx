export default function Intro() {
    return <>
        <div className="flex flex-col lg:flex-row mt-20 md:mt-0 min-h-screen">
            <div className="z-10 text-xl text-slate-300 flex flex-col bg-transparent justify-center items-start p-8 lg:ml-32 lg:w-1/2">
                <h1 className="text-3xl font-semibold mb-4">Hi, I'm Shahzad</h1>
                <p className=" font-normal">
                    A passionate Full Stack Developer with expertise in Azure cloud deployments. I have a knack for problem-solving and a love for creating efficient, scalable solutions. From the backend to the frontend, I bring ideas to life.
                </p>
            </div>
            <div id="profilePhoto" className="z-0 lg:w-2/3 -mt-56 lg:mt-0">
                <img className="w-full h-screen object-cover" src="/images/profilePhoto1.png" alt="Shahzad' Profile Photo" />
            </div>
        </div>
    </>
}