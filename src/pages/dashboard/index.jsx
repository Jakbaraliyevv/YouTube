import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.scss";
import Navbar from "../../components/navbar";
function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard__all">
      <Navbar />

      <div className="dashboard__left__all">
        <div className="dashboard__left">
          <Link className="dashbord__style" to={"/dashboard"}>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <h3>Home</h3>
          </Link>
          <Link className="dashbord__style" to={"/dashboard/explor"}>
            <FontAwesomeIcon icon={faCompass} className="icon" />
            <h3>Explor</h3>
          </Link>
          <Link className="dashbord__style" to={"/dashboard/students"}>
            <FontAwesomeIcon icon={faFileVideo} className="icon" />
            <h3>Shorts</h3>
          </Link>
          <Link className="dashbord__style" to={"/dashboard/sub"}>
            <FontAwesomeIcon icon={faLayerGroup} className="icon" />
            <h3>Subscriptions</h3>
          </Link>
        </div>
        <div className="border"></div>
        <div className="you">
          <Link className="dashbord__style" to={"/dashboard/you"}>
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            <h3>You</h3>
          </Link>
          <Link className="dashbord__style" to={"/dashboard/history"}>
            <FontAwesomeIcon icon={faIdCardClip} className="icon" />
            <h3>History</h3>
          </Link>
          <Link className="dashbord__style" to={"/dashboard/libery"}>
            <FontAwesomeIcon icon={faFaceFrown} className="icon" />
            <h3>Libery</h3>
          </Link>
        </div>
      </div>
      <div className="dashboard__right">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
