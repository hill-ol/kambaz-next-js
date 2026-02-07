import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      
      <div className="dropdown d-inline me-1 float-end">
        <button 
          className="btn btn-lg btn-secondary dropdown-toggle" 
          type="button" 
          id="wd-publish-all-btn" 
          data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#" id="wd-publish-all">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" id="wd-publish-modules-only">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" id="wd-unpublish-all-modules-and-items">
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" id="wd-unpublish-modules-only">
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>
      
      <button className="btn btn-lg btn-secondary me-1 float-end" id="wd-view-progress">
        View Progress
      </button>
      
      <button className="btn btn-lg btn-secondary me-1 float-end" id="wd-collapse-all">
        Collapse All
      </button>
    </div>
  );
}