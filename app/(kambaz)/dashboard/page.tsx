import Link from "next/link";
import Button from "react-bootstrap/Button";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link href={`/courses/${course._id}/home`} className="text-decoration-none text-dark">
                  <img src={course.image} className="card-img-top" width="100%" height={160} alt={course.name} />
                  <div className="card-body">
                    <h5 className="card-title text-nowrap overflow-hidden">{course.name}</h5>
                    <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </p>
                    <Button variant="primary">Go</Button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}