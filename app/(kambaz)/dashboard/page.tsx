import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
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
            <Link href="/courses/1210" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1210 </h5>
              <p className="wd-dashboard-course-title">
                Professional Development Co-op Course
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/courses/4400" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> DS4400 </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/courses/3175" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> MATH3175 </h5>
              <p className="wd-dashboard-course-title">
                Group Theory
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/courses/2301" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> MISM2301 </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Information Systems
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> MKTG 2345 </h5>
              <p className="wd-dashboard-course-title">
                Marketing Research
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> MGMT 3456 </h5>
              <p className="wd-dashboard-course-title">
                Financial Management
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
      </div>
    </div>
);}
