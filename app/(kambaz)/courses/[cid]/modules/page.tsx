"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { setModules, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { RootState } from "../../../store";
import * as coursesClient from "../../client";
import { FormControl } from "react-bootstrap";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("New Module");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const mods = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(mods));
  };

  const onCreateModuleForCourse = async () => {
    const newModule = await coursesClient.createModuleForCourse(
      cid as string, { name: moduleName, course: cid }
    );
    dispatch(setModules([...modules, newModule]));
  };

  const onUpdateModule = async (module: any) => {
    await coursesClient.updateModule(module);
    dispatch(setModules(modules.map((m: any) => m._id === module._id ? module : m)));
  };

  const onRemoveModule = async (moduleId: string) => {
    await coursesClient.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  useEffect(() => { fetchModules(); }, [cid]);

  return (
    <div>
      {isFaculty && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={onCreateModuleForCourse} />
      )}
      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroup.Item key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              {isFaculty && (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => onRemoveModule(module._id)}
                  editModule={() => dispatch(editModule(module._id))} />
              )}
              {!module.editing
                ? module.name
                : <FormControl className="w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onUpdateModule({ ...module, editing: false });
                    }} />
              }
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item key={lesson._id}
                    className="wd-lesson ps-5">
                    {lesson.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}