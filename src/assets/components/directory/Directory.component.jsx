import { DirectoryMenuContainer } from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/Directory-item.component";
import { Outlet } from "react-router-dom";
import Caroucel from "../caroucel/Caroucel.component";
import Footer from "../footer/Footer.component";

export default function Directory({ categories }) {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <div className="p-2 m-3 bg-transparent border border-solid text-[#748697] h-80 flex justify-center items-center">
        <h1>Algum banner</h1>
      </div>
      <div className="w-full flex justify-center p-10">
        <h1>Categories</h1>
      </div>
      <DirectoryMenuContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryMenuContainer>
      <div className="p-20">
        <Caroucel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
