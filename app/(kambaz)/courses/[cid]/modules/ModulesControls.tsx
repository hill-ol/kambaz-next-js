"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName, setModuleName, addModule,
}: {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end"
              id="wd-add-module-btn"
              onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      <div className="d-inline me-1 float-end position-relative">
        <button className="btn btn-lg btn-secondary dropdown-toggle"
                id="wd-publish-all-btn"
                onClick={() => setShowDropdown(!showDropdown)}>
          <GreenCheckmark />
          Publish All
        </button>
        {showDropdown && (
          <ul className="dropdown-menu show" style={{ zIndex: 1000 }}>
            <li>
              <a className="dropdown-item" href="#" id="wd-publish-all"
                 onClick={() => setShowDropdown(false)}>
                <GreenCheckmark /> Publish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" id="wd-publish-modules-only"
                 onClick={() => setShowDropdown(false)}>
                <GreenCheckmark /> Publish modules only
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" id="wd-unpublish-all-modules-and-items"
                 onClick={() => setShowDropdown(false)}>
                Unpublish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" id="wd-unpublish-modules-only"
                 onClick={() => setShowDropdown(false)}>
                Unpublish modules only
              </a>
            </li>
          </ul>
        )}
      </div>

      <button className="btn btn-lg btn-secondary me-1 float-end" id="wd-view-progress">
        View Progress
      </button>
      <button className="btn btn-lg btn-secondary me-1 float-end" id="wd-collapse-all">
        Collapse All
      </button>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}