"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import * as coursesClient from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const existing = assignments.find((a: any) => a._id === aid);
  const [assignment, setAssignment] = useState<any>({
    title: "New Assignment",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (existing) setAssignment(existing);
  }, [aid]);

  const handleSave = async () => {
    if (existing) {
      await coursesClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } else {
      const newAssignment = await coursesClient.createAssignmentForCourse(cid as string, { ...assignment, course: cid });
      dispatch(addAssignment(newAssignment));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  if (currentUser?.role !== "FACULTY") {
    return <div className="p-3 alert alert-danger">Only faculty can edit assignments.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input className="form-control" id="wd-name"
               value={assignment.title}
               onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="wd-description" rows={5}
                  value={assignment.description}
                  onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
        <div className="col-sm-9">
          <input type="number" className="form-control" id="wd-points"
                 value={assignment.points}
                 onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })} />
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
        <label className="col-sm-3 col-form-label">Assign</label>
        <div className="col-sm-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
              <input className="form-control" id="wd-assign-to" defaultValue="Everyone" />
            </div>
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
              <input type="date" className="form-control" id="wd-due-date"
                     value={assignment.dueDate}
                     onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                <input type="date" className="form-control" id="wd-available-from"
                       value={assignment.availableFrom}
                       onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                <input type="date" className="form-control" id="wd-available-until"
                       value={assignment.availableUntil}
                       onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-lg btn-secondary me-2" id="wd-cancel"
                onClick={() => router.push(`/courses/${cid}/assignments`)}>
          Cancel
        </button>
        <button className="btn btn-lg btn-danger" id="wd-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}