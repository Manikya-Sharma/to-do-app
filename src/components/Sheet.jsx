import PropTypes from "prop-types";

export default function Sheet(props) {
  return (
    <div className="ml-2 flex min-w-fit max-w-full cursor-pointer justify-between rounded-xl bg-teal-200 px-6 py-4 transition-all duration-300 hover:bg-teal-300">
      <div
        onClick={() => {
          props.sheetChanger(props.sheetList);
        }}
      >
        {props.sheetList[0]}
      </div>
      <div
        className="w-10"
        onClick={() => {
          if (
            confirm(`Are you sure you want to delete ${props.sheetList[0]}?`)
          ) {
            props.deleteSheet(props.sheetList);
          }
        }}
      >
        <img src="./src/assets/delete-svgrepo-com.png" alt="delete" />
      </div>
    </div>
  );
}

Sheet.propTypes = {
  sheetList: PropTypes.array.isRequired,
  sheetChanger: PropTypes.func,
  deleteSheet: PropTypes.func,
};
