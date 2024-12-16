import { SiThemoviedatabase } from "react-icons/si";
import { BsSearch,BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-gray-900 fixed z-10 text-white">
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl">
          <SiThemoviedatabase className="h-14 w-14 ml-10 text-violet-500 p-1 hover:bg-violet-700 hover:bg-opacity-50 hover:rounded-lg" />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <BsSearch className="h-5 w-5"/>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BsBell className="h-5 w-5"/>
            <span className="badge badge-xs badge-primary indicator-item">11</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
