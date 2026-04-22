import Image from "next/image";
import Rust from "@/public/icons/rust.svg"

export function SkillItem({ name }: { name: string }) {
    return (
        <div className="flex border py-2.5 px-4 gap-1 w-fit rounded-2xl">
            <Image className="w-5 h-5" src={Rust} alt="Icon" width={100} height={100} />
            <span>
                { name }
            </span>
        </div>
    )
}