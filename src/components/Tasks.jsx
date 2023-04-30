import Task from "./Task";

export default function Tasks() {
  return (
    <div className="flex-grow">
      <div>
        <h2 className="text-center bg-emerald-600 font-semibold text-2xl text-slate-200 drop-shadow-md shadow-md py-5">
          Tasks
        </h2>
      </div>
      <div className="bg-teal-200 pb-auto">
      <ul className="text-lg font-medium flex flex-col gap-5 leading-relaxed py-5 text-cyan-900">
            <li className="ml-2">Sample Task 1</li>
            <li className="ml-2">Sample Task 2</li>
            <li className="ml-2">
                <Task title="Sample Task 3" desc="I am a sample task"/>
            </li>
        </ul>
      </div>
    </div>
  );
}
