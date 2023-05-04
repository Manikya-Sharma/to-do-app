import { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

export default class Tasks extends Component {
  state = {
    username: "",
    password: "",
    tasks: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8000");
    const data = await response.json();
    this.setState(data);
  }

  async componentDidUpdate() {
    const response = await fetch("http://localhost:8000");
    const data = await response.json();
    this.setState(data);
  }

  findTask = (tasks, sheet, title) => {
    let index2 = 0;
    for (const taskNum of tasks[sheet][1]) {
      if (taskNum[0] == title) {
        break;
      }
      index2 = index2 + 1;
    }
    return [sheet, index2];
  };

  taskCompletion = (title) => {
    const [i1, i2] = this.findTask(
      this.state.tasks,
      this.props.currentSheet,
      title
    );
    const data = this.state;
    data.tasks[i1][1].splice(i2, 1);
    console.log(data);
    fetch("http://localhost:8000/changeData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  render() {
    return (
      <div className="flex-grow overflow-hidden">
        <div className="flex justify-around bg-emerald-600 py-5 shadow-md drop-shadow-md text-2xl font-semibold text-slate-200">
          <div>
            <h2 className="text-5xl text-center">
              Tasks {this.state.tasks[this.props.currentSheet]?<> - {this.state.tasks[this.props.currentSheet][0]}</>: ""}
            </h2>
          </div>
          <button className="py-2 px-5 bg-green-300 text-black/80 hover:bg-green-100 hover:text-black rounded-xl transition-all duration-300 border-2 border-green-300 hover:border-green-500 shadow-lg hover:text-[1.55rem]">
            + New Task
          </button>
        </div>
        <div className="h-full bg-teal-200">
          <ul className="flex flex-col gap-5 py-5 text-lg font-medium leading-relaxed text-cyan-900">
            {this.state.tasks[this.props.currentSheet]
              ? this.state.tasks[this.props.currentSheet][1].map((elem) => {
                  return (
                    <li key={elem[0]} className="ml-2">
                      <Task
                        title={elem[0]}
                        desc={elem[1]}
                        completionFunc={this.taskCompletion}
                      />
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
