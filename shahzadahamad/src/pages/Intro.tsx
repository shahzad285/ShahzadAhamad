export default function About() {
    return <>
        <div className="">
            <p className="text-6xl font-bold tracking-tighter mb-6">Shahzad Ahamad</p>
            <p className="text-2xl mb-3">Hello, World! 👋</p>

            <span> I'm Shahzad Ahamad, a passionate Full Stack Developer with expertise in Azure cloud deployments. I have a knack for problem-solving and a love for creating efficient, scalable solutions. From the backend to the frontend, I bring ideas to life.</span>
        </div>
        <div id="profilePhoto" className="hidden lg:block ">
            <img className="w-full h-auto " src="/images/profilePhoto.png" alt="" />
        </div>
    </>
}