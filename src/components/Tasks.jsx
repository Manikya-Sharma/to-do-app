import { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

export default class Tasks extends Component {
  state = {
    tasks: [],
  };

  async componentDidMount() {
    const response = await fetch("../src/data/userData.json");
    const data = await response.json();
    this.setState({ tasks: data.tasks });
  }

  render() {
    return (
      <div className="flex-grow overflow-hidden">
        <div>
          <h2 className="bg-emerald-600 py-5 text-center text-2xl font-semibold text-slate-200 shadow-md drop-shadow-md">
            Tasks
          </h2>
        </div>
        <div className="h-full bg-teal-200">
          <ul className="flex flex-col gap-5 py-5 text-lg font-medium leading-relaxed text-cyan-900">
            {this.state.tasks[this.props.currentSheet]
              ? this.state.tasks[this.props.currentSheet][1].map((elem) => {
                  return (
                    <li key={elem[0]} className="ml-2">
                      <Task title={elem[0]} desc={elem[1]} />
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  currentSheet: PropTypes.number,
};
