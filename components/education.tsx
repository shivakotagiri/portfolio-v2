import { ListItem } from "./list-item";

export function Education() {
    return (
        <div className="">
            <div className="flex flex-col gap-5">
                <h1 className="text-xl font-semibold">Education</h1>
                <div className="flex flex-col">
                    <ListItem />
                </div>
            </div>
        </div>
    )
}