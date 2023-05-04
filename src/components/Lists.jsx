import { Component } from "react";
import PropTypes from "prop-types";

export default class Lists extends Component {
  state = {
    tasks: [],
  };

  changeSheet(elem) {
    this.props.sheetChanger(this.state.tasks.indexOf(elem));
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000");
    const data = await response.json();
    this.setState({ tasks: data.tasks });
  }

  render() {
    return (
      <div className="flex overflow-x-auto overflow-y-hidden border-t-2 bg-teal-100 sm:mx-auto sm:block sm:w-[30%] sm:border-none">
        <div>
          <h2 className="lists-text h-56 -rotate-180 bg-emerald-400 text-center text-2xl font-semibold text-white shadow-md drop-shadow-md sm:h-fit sm:rotate-0 sm:py-5 ">
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
                      className="ml-2 min-w-fit max-w-full cursor-pointer rounded-xl bg-teal-200 px-6 py-4 transition-all duration-300 hover:bg-teal-300"
                      onClick={() => {
                        this.changeSheet(elem);
                      }}
                    >
                      {elem[0]}
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

Lists.propTypes = {
  sheetChanger: PropTypes.func.isRequired,
};
