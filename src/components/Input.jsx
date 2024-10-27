import React from "react";
import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classs =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-400";
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase  text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classs} {...props} />
      ) : (
        <input {...props} className={classs} ref={ref} />
      )}
    </div>
  );
});

export default Input;
