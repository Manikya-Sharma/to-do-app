import Lists from "./Lists"
import Tasks from "./Tasks"

export default function MainApp(){
    return (
        <div className="flex gap-0 pt-5">
            <Lists/>
            <div className="w-[2px] bg-zinc-500"></div>
            <Tasks/>
        </div>
    )
}