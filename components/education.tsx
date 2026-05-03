import { ListItem } from "./list-item";
import { HoverUnderline } from "./ui/hover-underline";

export function Education() {
    return (
        <div className="">
            <div className="space-y-5">
                <HoverUnderline delay={0.25} text="Education" className="sm:text-xl text-base font-semibold" />
                <div className="flex flex-col">
                    <ListItem delay={0.75} />
                </div>
            </div>
        </div>
    )
}