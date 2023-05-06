import PropTypes from "prop-types";

function Task(props) {
  return (
    <div className="group mx-auto w-[80%] rounded-lg border-[2px] border-transparent bg-teal-100 px-5 py-2 transition-all duration-300 hover:border-green-800">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              className="w-5"
              onClick={() => {
                props.completionFunc(props.title);
              }}
            ></input>
            <h3>{props.title}</h3>
          </div>
          <div className="ml-7 max-h-12 max-w-sm truncate text-sm font-normal">
            <p>{props.desc}</p>
          </div>
        </div>
        <button
          className="rounded-2xl border-[2px] border-fuchsia-700 bg-fuchsia-400 px-4 py-2 text-rose-900 shadow-xl drop-shadow-xl transition-all duration-300 hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:text-white/80"
          onClick={() => {
            const name = prompt("Enter the new task name:-");
            const desc = prompt("Enter the task description:-");
            props.editFunc(props.title, name, desc ? desc : "");
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  completionFunc: PropTypes.func,
  editFunc: PropTypes.func,
};

export default Task;
