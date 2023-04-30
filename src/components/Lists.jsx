export default function Lists() {
  return (
    <div className="w-[30%] mx-auto">
      <div>
        <h2 className="text-center bg-emerald-400 font-semibold text-2xl text-white drop-shadow-md shadow-md py-5">
          Lists
        </h2>
      </div>
      <div className="bg-teal-100">
        <ul className="text-lg font-medium flex flex-col gap-5 leading-relaxed py-5 text-cyan-800">
            <li className="ml-2">Sample List 1</li>
            <li className="ml-2">Sample List 2</li>
        </ul>
      </div>
    </div>
  );
}

