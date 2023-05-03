export default function Navbar() {
  return (
    <div className="flex w-full justify-between py-5 leading-relaxed md:block">
      <img
        src="./src/assets/check.png"
        alt="logo"
        className="ml-5 w-24 md:mx-auto md:w-16"
      ></img>
      <div className="mx-auto my-auto">
        <h1 className="mt-2 text-center text-3xl font-bold text-cyan-700">
          To-Do List
        </h1>
        <p className="text-center font-semibold text-cyan-500">
          The only to-do list you will ever need!
        </p>
      </div>
    </div>
  );
}
