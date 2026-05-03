import { ListItem } from "./list-item";

export function Education() {
    return (
        <div className="">
            <div className="space-y-3">
                <div className="text-base font-semibold sm:text-xl">Education</div>
                <div className="flex flex-col">
                    <ListItem delay={0.75} />
                </div>
            </div>
        </div>
    )
}