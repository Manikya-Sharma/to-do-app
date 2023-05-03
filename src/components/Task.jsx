import PropTypes from "prop-types";

function Task(props) {
  return (
    <div className="group mx-auto w-[80%] rounded-lg border-[2px] border-transparent bg-teal-100 px-5 py-2 transition-all duration-300 hover:border-green-800">
      <div className="flex gap-3">
        <input type="checkbox" className="w-5"></input>
        <h3>{props.title}</h3>
      </div>
      <div className="ml-7 max-h-12 max-w-sm truncate text-sm font-normal">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default Task;
