import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="1234"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/3000" className="wd-dashboard-course-link">
            <Image src="/images/shell.png" width={200} height={150} alt="3000"/>
            <div>
              <h5> CS 3000 Algorithms and Data </h5>
              <p className="wd-dashboard-course-title">
                Student
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/3001" className="wd-dashboard-course-link">
            <Image src="/images/Cinnamoroll.png" width={200} height={150} alt="3001"/>
            <div>
              <h5> CS 3001 Rescitation for CS 3000 </h5>
              <p className="wd-dashboard-course-title">
                Student
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/chiikawa.png" width={200} height={150} alt="4550"/>
            <div>
              <h5> CS 4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Student
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/2262" className="wd-dashboard-course-link">
            <Image src="/images/miffy.png" width={200} height={150} alt="2262"/>
            <div>
              <h5> ARTG 2262 Prototyping with Code </h5>
              <p className="wd-dashboard-course-title">
                Student
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/2400" className="wd-dashboard-course-link">
            <Image src="/images/piupiu.png" width={200} height={150} alt="2400"/>
            <div>
              <h5> ARTG 2400 Interaction Design Principles </h5>
              <p className="wd-dashboard-course-title">
                Student
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/2100" className="wd-dashboard-course-link">
            <Image src="/images/snoopy.png" width={200} height={150} alt="2100"/>
            <div>
              <h5> CS 2100 Program Design and Implementation 1 </h5>
              <p className="wd-dashboard-course-title">
                TA
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
