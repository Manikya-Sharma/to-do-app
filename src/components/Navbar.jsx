export default function Navbar() {
  return (
    <div className="w-full py-5 leading-relaxed flex justify-between md:block">
      <img src="./src/assets/check.png" alt="logo" className="ml-5 md:mx-auto w-24 md:w-16"></img>
      <div className="mx-auto my-auto">
        <h1 className="text-center text-3xl font-bold mt-2 text-cyan-700">To-Do List</h1>
        <p className="text-center font-semibold text-cyan-500">The only to-do list you will ever need!</p>
      </div>
    </div>
  )
}
