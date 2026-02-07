'use client';
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical, IoSearchSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white">
            <IoSearchSharp />
          </span>
          <input 
            className="form-control" 
            placeholder="Search for Assignments"
            id="wd-search-assignment" 
          />
        </div>
        <div>
          <button className="btn btn-lg btn-secondary me-1" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-lg btn-danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <ul className="list-group rounded-0" id="wd-assignment-list">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1 border-gray">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <div className="flex-grow-1">
              <div>
                <IoEllipsisVertical className="fs-4 float-end" />
                <FaPlus className="fs-4 float-end me-2" />
              </div>
              <BsGripVertical className="me-2 fs-3" />
              <strong>ASSIGNMENTS</strong>
              <div className="text-muted small">40% of Total</div>
            </div>
          </div>
          
          <ul className="list-group rounded-0 mt-2">
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link 
                    href="/courses/1234/assignments/123"
                    className="wd-assignment-link text-dark text-decoration-none">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>A1 - ENV + HTML</strong>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                        </div>
                        <div className="text-muted small">
                          <strong>Due</strong> May 13 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div>
                        <FaRegCheckCircle className="text-success fs-5 me-2" />
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link 
                    href="/courses/1234/assignments/124"
                    className="wd-assignment-link text-dark text-decoration-none">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>A2 - CSS + BOOTSTRAP</strong>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                        </div>
                        <div className="text-muted small">
                          <strong>Due</strong> May 20 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div>
                        <FaRegCheckCircle className="text-success fs-5 me-2" />
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link 
                    href="/courses/1234/assignments/125"
                    className="wd-assignment-link text-dark text-decoration-none">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>A3 - JAVASCRIPT + REACT</strong>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                        </div>
                        <div className="text-muted small">
                          <strong>Due</strong> May 27 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div>
                        <FaRegCheckCircle className="text-success fs-5 me-2" />
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link 
                    href="/courses/1234/assignments/126"
                    className="wd-assignment-link text-dark text-decoration-none">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>A4 - STATE + REDUX</strong>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 27 at 12:00am
                        </div>
                        <div className="text-muted small">
                          <strong>Due</strong> Jun 3 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div>
                        <FaRegCheckCircle className="text-success fs-5 me-2" />
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link 
                    href="/courses/1234/assignments/127"
                    className="wd-assignment-link text-dark text-decoration-none">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>A5 - NODE + SESSION</strong>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Jun 3 at 12:00am
                        </div>
                        <div className="text-muted small">
                          <strong>Due</strong> Jun 10 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div>
                        <FaRegCheckCircle className="text-success fs-5 me-2" />
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="flex-grow-1">
                  <Link 
                    href="/courses/1234/assignments/128"
                    className="wd-assignment-link text-dark text-decoration-none">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>A6 - MONGO + MONGOOSE</strong>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Jun 10 at 12:00am
                        </div>
                        <div className="text-muted small">
                          <strong>Due</strong> Jun 17 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div>
                        <FaRegCheckCircle className="text-success fs-5 me-2" />
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}