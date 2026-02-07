import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/1234/home" className="text-decoration-none text-dark">
                <img src="/images/reactjs.jpg" className="card-img-top" width="100%" height={160} alt="React" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">CS1234 React JS</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/1210/home" className="text-decoration-none text-dark">
                <img src="/images/glacier.jpg" className="card-img-top" width="100%" height={160} alt="Glacier" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">CS1210</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Professional Development Co-op Course
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/4400/home" className="text-decoration-none text-dark">
                <img src="/images/tetons.jpg" className="card-img-top" width="100%" height={160} alt="Tetons" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">DS4400</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Machine Learning
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/3175/home" className="text-decoration-none text-dark">
                <img src="/images/cliffs.jpg" className="card-img-top" width="100%" height={160} alt="Cliffs" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">MATH3175</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Group Theory
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/2301/home" className="text-decoration-none text-dark">
                <img src="/images/camels.jpg" className="card-img-top" width="100%" height={160} alt="Camels" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">MISM2301</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Introduction to Information Systems
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/2345/home" className="text-decoration-none text-dark">
                <img src="/images/lilly.jpg" className="card-img-top" width="100%" height={160} alt="Lily" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">MKTG2345</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Marketing Research
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col" style={{ width: "300px" }}>
            <div className="card">
              <Link href="/courses/3456/home" className="text-decoration-none text-dark">
                <img src="/images/la.jpg" className="card-img-top" width="100%" height={160} alt="LA" />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">MGMT3456</h5>
                  <p className="card-text overflow-hidden" style={{ height: "100px" }}>
                    Financial Management
                  </p>
                  <Button variant="primary">Go</Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}