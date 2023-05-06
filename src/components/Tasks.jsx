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
    const response = await fetch("http://localhost:8001");
    const data = await response.json();
    this.setState(data);
  }

  async componentDidUpdate() {
    const response = await fetch("http://localhost:8001");
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
    fetch("http://localhost:8001/changeData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  addNewTask = (taskName, taskDescription) => {
    const data = this.state;
    data.tasks[this.props.currentSheet][1].push([taskName, taskDescription]);
    fetch("http://localhost:8001/changeData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  changeTask = (taskName, newTaskName, newTaskDescription) => {
    const [i1, i2] = this.findTask(
      this.state.tasks,
      this.props.currentSheet,
      taskName
    );
    const data = this.state;
    data.tasks[i1][1][i2] = [newTaskName, newTaskDescription];
    fetch("http://localhost:8001/changeData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  render() {
    return (
      <div className="flex-grow overflow-hidden">
        <div className="flex justify-around bg-emerald-600 py-5 text-2xl font-semibold text-slate-200 shadow-md drop-shadow-md">
          <div>
            <h2 className="text-center text-5xl">
              Tasks{" "}
              {this.state.tasks[this.props.currentSheet] ? (
                <> - {this.state.tasks[this.props.currentSheet][0]}</>
              ) : (
                ""
              )}
            </h2>
          </div>
          <button
            className="rounded-xl border-2 border-green-300 bg-green-300 px-5 py-2 text-black/80 shadow-lg transition-all duration-300 hover:border-green-500 hover:bg-green-100 hover:text-black"
            onClick={() => {
              const taskName = prompt("Enter the name of the task:-");
              const taskDescription = prompt("Enter the description:-");
              this.addNewTask(taskName, taskDescription);
            }}
          >
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
                        editFunc={this.changeTask}
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
