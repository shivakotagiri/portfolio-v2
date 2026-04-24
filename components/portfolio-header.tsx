import Image from "next/image";

export function PortfolioHeader() {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between items-start w-full gap-5">
          <div className="flex-1">
            <h1 className="text-[2.5rem] font-bold">Hi, I&apos;m Shiva</h1>
            <span className="text-muted-foreground text-xl text-justify">
              Software Developer. I love building things and helping people. Very active on Twitter.
            </span>
          </div>
          <Image 
            src={"/my-photo.jpeg"} 
            alt="My Photo" 
            height={100} 
            width={100} 
            className="rounded-full object-cover object-top w-32 h-32"
          />
        </div>
    )
}