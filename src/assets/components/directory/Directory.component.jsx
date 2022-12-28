import "./directory.styles.scss";
import DirectoryItem from "../directory-item/Directory-item.component";
import { Outlet } from "react-router-dom";
import "./directory.styles.scss";
import Categories from "../../../categories";
import Caroucel from "../caroucel/Caroucel.component";

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
      <div className="p-2 m-5 text-white h-96 flex justify-between items-center">
        <div className="bg-white text-black w-20 h-6 rounded-xl text-center hover:bg-slate-300">
          back
        </div>
        {
          Categories.map((category) => (
            <img className="w-64 h-96" key={category.id} src={category.imageUrl} alt={category.title} />
            // <Caroucel key={category.id} category={category} />
          ))
        }
        <div className="bg-white text-black w-20 h-6 rounded-xl text-center hover:bg-slate-300">
          next
        </div>
      </div>
      <div className="p-2 m-3 bg-white text-black h-80 flex justify-center items-center">
        <h1>Footer</h1>
      </div>
    </div>
  );
}
