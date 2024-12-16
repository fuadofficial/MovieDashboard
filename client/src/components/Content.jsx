import { Outlet } from "react-router-dom";
import AddGenre from "../pages/AddGenre";
import AddMovie from "../pages/AddMovie";
import MovieList from "./MovieList";

const Content = () => {
  return (
    <div class="w-full lg:flex-1 bg-gray-600 mt-14">
      {/* <header class="py-4 bg-gray-200 mt-10">
        <h1 class="text-lg font-bold">Page Title</h1>
      </header> */}
      <main class="p-4 ml-72 pt-10">
       <Outlet/>
      </main>
    </div>
  );
};

export default Content;
