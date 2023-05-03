import { useState } from "react";
import Lists from "./Lists";
import Tasks from "./Tasks";

export default function MainApp() {
  const [currentSheet, setCurrentSheet] = useState(0);

  return (
    <div className="flex gap-0 pt-5">
      <Lists sheetChanger={setCurrentSheet} />
      <div className="w-[2px] bg-zinc-500"></div>
      <Tasks currentSheet={currentSheet} />
    </div>
  );
}
