import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div class="w-full lg:flex-1 bg-gray-600 mt-14">
      <main class="p-4 ml-72 pt-10">
       <Outlet/>
      </main>
    </div>
  );
};

export default Content;
