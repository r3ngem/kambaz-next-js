import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
      <Link href="/Courses/1234/Modules" id="wd-course-modules-link">Modules
        </Link><br/>
      <a href="https://piazza.com/class/mf1li76n4is6m/post/77" id="wd-course-piazza-link">Piazza</a><br/>
      <a href="https://northeastern.instructure.com/courses/225902/external_tools/35048" id="wd-course-zoom-link">Zoom</a><br/>
      <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link">
          Assignments</Link><br/>
      <a href="https://northeastern.instructure.com/courses/225902/quizzes" id="wd-course-assignments-link">Quizzes
        </a><br/>
      <a href="https://northeastern.instructure.com/courses/225902/grades" id="wd-course-grades-link">Grades</a><br/>
      <Link href="/Courses/1234/People/Table" id="wd-course-people-link">People</Link><br/>
    </div>
  );}
