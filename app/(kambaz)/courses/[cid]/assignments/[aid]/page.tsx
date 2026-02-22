"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          className="form-control"
          id="wd-name"
          defaultValue={assignment?.title || ""}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={5}
          defaultValue={assignment?.description || ""}
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="wd-points"
            defaultValue={assignment?.points || 100}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-3 col-form-label">Assignment Group</label>
        <div className="col-sm-9">
          <select className="form-select" id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label">Display Grade as</label>
        <div className="col-sm-9">
          <select className="form-select" id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">Submission Type</label>
        <div className="col-sm-9">
          <div className="border p-3">
            <select className="form-select mb-3" id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="In Person">In Person</option>
              <option value="No Submission">No Submission</option>
            </select>

            <div className="mb-2"><strong>Online Entry Options</strong></div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-website-url" />
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label">Assign</label>
        <div className="col-sm-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
              <input className="form-control" id="wd-assign-to" defaultValue="Everyone" />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
              <input
                type="date"
                className="form-control"
                id="wd-due-date"
                defaultValue={assignment?.dueDate || ""}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-from"
                  defaultValue={assignment?.availableFrom || ""}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-until"
                  defaultValue={assignment?.availableUntil || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <Link href={`/courses/${cid}/assignments`} className="btn btn-lg btn-secondary me-2" id="wd-cancel">
          Cancel
        </Link>
        <Link href={`/courses/${cid}/assignments`} className="btn btn-lg btn-danger" id="wd-save">
          Save
        </Link>
      </div>
    </div>
  );
}