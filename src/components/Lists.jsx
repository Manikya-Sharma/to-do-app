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
    const response = await fetch("../src/data/userData.json");
    const data = await response.json();
    this.setState({ tasks: data.tasks });
  }

  render() {
    return (
      <div className="w-[30%] mx-auto">
        <div>
          <h2 className="text-center bg-emerald-400 font-semibold text-2xl text-white drop-shadow-md shadow-md py-5">
            Lists
          </h2>
        </div>
        <div className="bg-teal-100">
          <ul className="text-lg font-medium flex flex-col gap-5 leading-relaxed py-5 text-cyan-800">
            {this.state.tasks
              ? this.state.tasks.map((elem) => {
                  return (
                    <li
                      key={elem}
                      className="ml-2 cursor-pointer w-fit"
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
