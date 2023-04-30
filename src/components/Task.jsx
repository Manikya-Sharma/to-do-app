import PropTypes from "prop-types";

function Task(props) {
  return (
    <div>
      <div className="flex gap-3">
        <input type="checkbox" className=""></input>
        <h3>{props.title}</h3>
      </div>
      <div className="text-sm ml-7 font-normal">
        <p>{props.desc ? props.desc.slice(0, 30) + " ..." : ""}</p>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default Task;
