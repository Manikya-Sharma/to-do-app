import { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

export default class Tasks extends Component {

  state = {
    tasks:[]
  }

  async componentDidMount() {
    const response = await fetch("../src/data/userData.json");
    const data = await response.json();
    this.setState({tasks: data.tasks});
  }

  render() {
    return (
      <div className="flex-grow">
        <div>
          <h2 className="text-center bg-emerald-600 font-semibold text-2xl text-slate-200 drop-shadow-md shadow-md py-5">
            Tasks
          </h2>
        </div>
        <div className="bg-teal-200 pb-auto">
          <ul className="text-lg font-medium flex flex-col gap-5 leading-relaxed py-5 text-cyan-900">
            {this.state.tasks[this.props.currentSheet] ? this.state.tasks[this.props.currentSheet].map((elem)=>{
              return (
                <li key={elem[0]} className="ml-2">
                  <Task title={elem[0]} desc={elem[1]} />
                </li>
              )
            }) : ""}

          </ul>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  currentSheet: PropTypes.number,
};
