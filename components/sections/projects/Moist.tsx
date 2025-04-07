import Image from "next/image";
import { MoveUpRight} from 'lucide-react'

export const Moist = () => {
    return (
        <div className="flex flex-col ms-36 me-36 mt-36 mb-10 h-[200%] bg-[#1C1C1C]">
            <div>
                <hr/>
            </div>
            <div className="mt-20 flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                    <p className="text-5xl">Moist</p>
                    <p>2025</p>
                </div>
                <div className="flex flex-row text-2xl gap-20">
                    <p className="w-[50%]">Fictional project created for a Brief of the Week. Promotional website for a summer collection of three new canned drinks, featuring a fresh and playful design aimed at a young audience.</p>
                    <p className="w-[30%]">Web Development • 3D </p>
                </div>
                <div className="mt-10 flex flex-row gap-2">
                    <a href="https://moist-botw.vercel.app/" target="_blank"><p className="text-2xl">See the project</p></a>
                    <MoveUpRight />
                </div>
                <div className="w-full flex flex-col items-center mt-20">

                    <Image src={'/img/moist.png'} alt={"Screen Skillsnotation"}
                           width={1280}
                           height={832}
                           className="rounded-3xl"
                    />
                </div>
            </div>
        </div>
    )
}
