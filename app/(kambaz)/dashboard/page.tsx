"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { setEnrollments } from "../enrollments/reducer";
import { RootState } from "../store";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import * as coursesClient from "../courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description",
  });

  const isEnrolled = (courseId: string) =>
    enrollments.some((e: any) => e.user === currentUser?._id && e.course === courseId);

  const fetchCourses = async () => {
    try {
      const [allOrMine, myEnrollments] = await Promise.all([
        showAllCourses
          ? coursesClient.fetchAllCourses()
          : coursesClient.findMyCourses(),
        coursesClient.findMyEnrollments(),
      ]);
      dispatch(setCourses(allOrMine));
      dispatch(setEnrollments(myEnrollments));
    } catch (err) {
      console.error(err);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await coursesClient.createCourse(course);
    await coursesClient.enrollInCourse(newCourse._id);
    dispatch(setCourses([...courses, newCourse]));
    dispatch(setEnrollments([...enrollments,
      { _id: Date.now().toString(), user: currentUser._id, course: newCourse._id }
    ]));
  };

  const onUpdateCourse = async () => {
    await coursesClient.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => c._id === course._id ? course : c)));
  };

  const onDeleteCourse = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  const handleEnrollToggle = async (e: any, courseId: string) => {
    e.preventDefault();
    if (isEnrolled(courseId)) {
      await coursesClient.unenrollFromCourse(courseId);
      dispatch(setEnrollments(enrollments.filter(
        (en: any) => !(en.user === currentUser._id && en.course === courseId)
      )));
    } else {
      await coursesClient.enrollInCourse(courseId);
      dispatch(setEnrollments([...enrollments,
        { _id: Date.now().toString(), user: currentUser._id, course: courseId }
      ]));
    }
  };

  useEffect(() => {
    if (!currentUser) return;
    fetchCourses();
  }, [currentUser, showAllCourses]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <Button variant="primary" className="float-end" id="wd-enrollments-btn"
          onClick={() => setShowAllCourses(!showAllCourses)}>
          Enrollments
        </Button>
      </h1>
      <hr />
      <h5>
        New Course
        <Button variant="primary" className="float-end ms-2"
          id="wd-add-new-course-click" onClick={onAddNewCourse}>Add</Button>
        <Button variant="warning" className="float-end"
          id="wd-update-course-click" onClick={onUpdateCourse}>Update</Button>
      </h5>
      <br />
      <input className="form-control mb-2" value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        placeholder="Course Name" />
      <textarea className="form-control mb-2" rows={3} value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        placeholder="Course Description" />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((c: any) => (
            <div key={c._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link href={isEnrolled(c._id) ? `/courses/${c._id}/home` : "#"}
                  className="text-decoration-none text-dark"
                  onClick={(e) => { if (!isEnrolled(c._id)) e.preventDefault(); }}>
                  <img src={c.image} className="card-img-top"
                    width="100%" height={160} alt={c.name} />
                  <div className="card-body">
                    <h5 className="card-title text-nowrap overflow-hidden">{c.name}</h5>
                    <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                      {c.description}
                    </p>
                  </div>
                </Link>
                <div className="card-body pt-0 d-flex gap-2 flex-wrap">
                  {isEnrolled(c._id) && (
                    <Button variant="primary" as={Link as any}
                      href={`/courses/${c._id}/home`}>Go</Button>
                  )}
                  {showAllCourses && (
                    <Button variant={isEnrolled(c._id) ? "danger" : "success"}
                      id="wd-enroll-btn"
                      onClick={(e) => handleEnrollToggle(e, c._id)}>
                      {isEnrolled(c._id) ? "Unenroll" : "Enroll"}
                    </Button>
                  )}
                  <Button variant="warning" className="ms-auto"
                    id="wd-edit-course-click"
                    onClick={(e) => { e.preventDefault(); setCourse(c); }}>
                    Edit
                  </Button>
                  <Button variant="danger" id="wd-delete-course-click"
                    onClick={(e) => { e.preventDefault(); onDeleteCourse(c._id); }}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}