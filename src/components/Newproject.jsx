import React, { useRef } from "react";
import Input from "./Input";

const Newproject = ({ onAdd }) => {
  const title = useRef();
  const discription = useRef();
  const duedate = useRef();

  function handlesave() {
    const thetitle = title.current.value;
    const thediscription = discription.current.value;
    const theduedate = duedate.current.value;
    if (thetitle.trim() === "" || thediscription === "" || theduedate === "") {
      //create modal here
      alert("please fill out all the sapce ");

      return;
    }
    onAdd({
      titile: thetitle,
      description: thediscription,
      duedata: theduedate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex  items-center justify-end gap-4 my-4">
        <ul>
          <li>
            <button
              className="text-stoe-800
             hover:text-stone-950"
            >
              cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 
             text-stone-50 hover:text-stone-100 rounded-md px-6 py-2"
              onClick={handlesave}
            >
              save
            </button>
          </li>
        </ul>
      </menu>
      <div>
        <Input label={"Ttitle"} ref={title} />
        <Input label={"Description"} ref={discription} textarea />
        <Input label={"date"} ref={duedate} type="date" />
      </div>
    </div>
  );
};

export default Newproject;
