import PropTypes from "prop-types";

export default function Sheet(props) {
  return (
    <div className="ml-2 flex min-w-fit max-w-full cursor-pointer flex-col justify-between rounded-xl bg-teal-200 px-6 py-4 text-center transition-all duration-300 hover:bg-teal-300 sm:flex-row">
      <div
        onClick={() => {
          props.sheetChanger(props.sheetList);
        }}
      >
        {props.sheetList[0]}
      </div>
      <div
        className="mx-auto my-auto h-fit w-10 sm:mx-0"
        onClick={() => {
          if (
            confirm(`Are you sure you want to delete ${props.sheetList[0]}?`)
          ) {
            props.deleteSheet(props.sheetList);
          }
        }}
      >
        <div className="rounded-xl border-[2px] border-rose-400 bg-rose-200 text-rose-400 transition-all duration-300 hover:border-rose-200 hover:bg-rose-400 hover:text-rose-100">
          X
        </div>
      </div>
    </div>
  );
}

Sheet.propTypes = {
  sheetList: PropTypes.array.isRequired,
  sheetChanger: PropTypes.func,
  deleteSheet: PropTypes.func,
};
