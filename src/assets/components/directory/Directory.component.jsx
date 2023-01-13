import "./directory.styles.scss";
import DirectoryItem from "../directory-item/Directory-item.component";
import { Outlet } from "react-router-dom";
import "./directory.styles.scss";
import Caroucel from "../caroucel/Caroucel.component";
import Footer from "../footer/Footer.component";

export default function Directory({ categories }) {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <div className="p-2 m-3 bg-white text-black h-80 flex justify-center items-center">
        <h1>Algum banner</h1>
      </div>
      <div className="w-full flex justify-center p-10">
        <h1>Categories</h1>
      </div>
      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className="p-20">
        <Caroucel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
