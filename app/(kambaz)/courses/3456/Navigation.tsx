import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/courses/3456/home" id="wd-course-home-link">Home</Link><br/>
      <Link href="/courses/3456/modules" id="wd-course-modules-link">Modules
        </Link><br/>
      <Link href="/courses/3456/piazza" id="wd-course-piazza-link">Piazza</Link><br/>
      <Link href="/courses/3456/zoom" id="wd-course-zoom-link">Zoom</Link><br/>
      <Link href="/courses/3456/assignments" id="wd-course-assignments-link">
          Assignments</Link><br/>
      <Link href="/courses/3456/quizzes" id="wd-course-quizzes-link">Quizzes
        </Link><br/>
      <Link href="/courses/3456/grades" id="wd-course-grades-link">Grades</Link><br/>
      <Link href="/courses/3456/people/table" id="wd-course-people-link">People</Link><br/>
    </div>
  );}