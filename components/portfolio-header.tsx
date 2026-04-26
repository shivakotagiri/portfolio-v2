import Image from "next/image";

export function PortfolioHeader() {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between items-start w-full gap-5">
          <div className="flex-1">
            <h1 className="sm:text-[3rem] text-[2rem] font-bold tracking-tighter">Hi, I&apos;m Shiva</h1>
            <span className="text-muted-foreground sm:text-xl text-base text-justify">
              Software Developer. I love building things and helping people. Very active on Twitter. Learning in public, and growing through consistent practice. 
            </span>
          </div>
          <Image 
            src={"/my-photo.jpeg"} 
            alt="My Photo" 
            height={100} 
            width={100} 
            className="rounded-full object-cover object-top sm:w-32 sm:h-32 w-28 h-28"
          />
        </div>
    )
}