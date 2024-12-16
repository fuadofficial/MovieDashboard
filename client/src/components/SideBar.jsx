import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="w-full lg:w-64 bg-gray-900 shadow-lg  text-gray-200 min-h-screen fixed">
      <ul className="py-4 mt-20">
        <Link to="/">
          <li className="px-8 py-4 hover:bg-violet-600 flex items-center gap-3">
            <RiDashboardLine className="h-7 w-7" /> Home
          </li>
        </Link>
        <Link to="movie">
          <li className="px-8 py-4 hover:bg-violet-600 flex items-center gap-3">
            <AiOutlineAppstoreAdd className="h-7 w-7" />
            Add Movie
          </li>
        </Link>
        <Link to="genre">
          <li className="px-8 py-4 hover:bg-violet-600 flex items-center gap-3">
            <BsListCheck className="h-7 w-7" />
            Genre
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
