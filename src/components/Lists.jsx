import { Component } from "react";
import PropTypes from "prop-types";
import Sheet from "./Sheet";

export default class Lists extends Component {
  state = {
    username: "",
    password: "",
    tasks: [],
  };

  changeSheet(elem) {
    this.props.sheetChanger(this.state.tasks.indexOf(elem));
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8001");
    const data = await response.json();
    this.setState({ tasks: data.tasks });
  }

  async componentDidUpdate() {
    const response = await fetch("http://localhost:8001");
    const data = await response.json();
    this.setState(data);
  }

  makeNewSheet = (sheetName) => {
    const data = this.state;
    this.props.sheetChanger(data.tasks.length);
    data.tasks.push([sheetName, []]);
    fetch("http://localhost:8001/changeData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  sheetDeletion = (sheetList) => {
    const data = this.state;
    let count = 0;
    for (const sheet of data.tasks) {
      if (sheet == sheetList) {
        break;
      }
      count = count + 1;
    }
    this.props.sheetChanger(count - 1);
    data.tasks.splice(count, 1);
    fetch("http://localhost:8001/changeData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  render() {
    return (
      <div className="flex overflow-x-auto overflow-y-hidden border-t-2 bg-teal-100 sm:mx-auto sm:block sm:w-[30%] sm:border-none">
        <div>
          <h2 className="lists-text h-64 -rotate-180 bg-emerald-400 text-center text-2xl font-semibold text-white shadow-md drop-shadow-md sm:h-fit sm:rotate-0 sm:py-5 sm:text-5xl ">
            Lists
          </h2>
        </div>
        <div className=" h-full w-full">
          <ul className="mx-auto flex w-[80%] gap-5 py-16 text-lg font-medium leading-relaxed text-cyan-800 sm:flex-col sm:py-5">
            {this.state.tasks
              ? this.state.tasks.map((elem) => {
                  return (
                    <li
                      key={elem}
                      className="w-full"
                      onClick={() => {
                        this.changeSheet(elem);
                      }}
                    >
                      <Sheet
                        sheetList={elem}
                        sheetChanger={this.props.sheetChanger}
                        deleteSheet={this.sheetDeletion}
                      />
                    </li>
                  );
                })
              : ""}
            <li
              className="my-auto ml-2 block h-fit min-w-fit max-w-full cursor-pointer rounded-xl border-[5px] border-dotted border-teal-400 bg-teal-200 px-6 py-4 text-center transition-all duration-300 hover:border-teal-800 hover:bg-teal-300 sm:hover:tracking-wider"
              onClick={() => {
                const name = prompt("Enter the name of the new sheet:-");
                this.makeNewSheet(name);
              }}
            >
              + New Sheet
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Lists.propTypes = {
  sheetChanger: PropTypes.func.isRequired,
};
