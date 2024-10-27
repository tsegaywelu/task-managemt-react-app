import Displayprojets from "./components/Displayprojets";
import Newproject from "./components/Newproject";
import Noproject from "./components/Noproject";
import { useState } from "react";
function App() {
  const [projectstate, setprojectstate] = useState({
    projectid: undefined,
    projects: [],
  });
  function handlestartproject() {
    setprojectstate((prev) => {
      return {
        ...prev, // This spreads the properties of the previous state
        projectid: null, // This updates only the projectid field
      };
    });
  }

  let content;
  if (projectstate.projectid === undefined) {
    content = <Noproject onStartAddProject={handlestartproject} />;
  } else if (projectstate.projectid === null) {
    content = <Newproject onAdd={handleAddProject} />;
  }

  //this is how to add a projet
  function handleAddProject(projectData) {
    setprojectstate((prevState) => {
      const projectid = Math.random();
      const newProject = {
        ...projectData,
        id: projectid,
      };

      return {
        ...prevState,
        projectid: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  //console.log(projectstate.projects);
  return (
    <main className="h-screen my-8 flex gap-8 ">
      {/* <Newproject /> */}
      <Displayprojets
        onStartAddProject={handlestartproject}
        listofprojects={projectstate.projects}
      />
      {content}
    </main>
  );
}

export default App;
