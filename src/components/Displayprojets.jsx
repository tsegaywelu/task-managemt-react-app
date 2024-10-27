import React from "react";
import Button from "./Button";

const Displayprojets = ({ onStartAddProject, listofprojects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl mt-10">
      <h1 className="mb-8 md:text-xl font-bold text-stone-200">
        list of the projects{" "}
      </h1>
      {listofprojects.map((project, index) => (
        <div key={index}>
          <p>{project.titile}</p>
          <p>{project.description}</p>
          <p>{project.duedata}</p>
        </div>
      ))}

      <Button onClick={onStartAddProject}> + add projects</Button>
    </aside>
  );
};

export default Displayprojets;
