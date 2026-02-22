"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical, IoSearchSharp } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

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
            {assignments.map((assignment: any) => (
              <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <div className="flex-grow-1">
                    <Link
                      href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="wd-assignment-link text-dark text-decoration-none">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <strong>{assignment.title}</strong>
                          <div className="text-muted small">
                            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFrom} at 12:00am
                          </div>
                          <div className="text-muted small">
                            <strong>Due</strong> {assignment.dueDate} at 11:59pm | {assignment.points} pts
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
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}