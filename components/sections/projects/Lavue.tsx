import Image from "next/image";
import { MoveUpRight} from 'lucide-react'

export const Lavue = () => {
  return (
    <div className="flex flex-col ms-36 me-36 mt-36 mb-10 h-[200%] bg-[#1C1C1C]">
        <div>
            <hr/>
        </div>
        <div className="mt-20 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <p className="text-5xl">Lavue</p>
                <p>2025</p>
            </div>
            <div className="flex flex-row text-2xl gap-20">
                <p className="w-[50%]">Fictional project created for a Brief of the Week. A premium fragrance launch website blending regional storytelling with a clean, elegant design.</p>
                <p className="w-[30%]">Web Development • 3D </p>
            </div>
            <div>
                <a className="mt-10 flex flex-row gap-2" href="https://botw-lavue.vercel.app/" target="_blank">
                    <p className="text-2xl">See the project</p>
                    <MoveUpRight /></a>
            </div>
            <div className="w-full flex flex-col items-center mt-20">

                <Image src={'/img/lavue.png'} alt={"Screen Lavue Landing page"}
                       width={1280}
                       height={832}
                       className="rounded-3xl"
                />
            </div>
        </div>
    </div>
  )
}
