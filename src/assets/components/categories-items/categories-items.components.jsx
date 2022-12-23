import CategoryItem from "../category-item/category-item.component";
import { Outlet } from "react-router-dom";
import "./caterogies.style.scss";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div>
      <div>
        <Outlet />
      </div>
      <div className="p-2 m-1 bg-white text-black h-80 flex justify-center items-center">
        <h1>Algum banner</h1>
      </div>
      <div className="w-full flex justify-center p-10">
        <h1>Categories</h1>
      </div>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className="p-2 m-1 text-white h-96 flex justify-between items-center">
        <div className="bg-white text-black w-20 h-6 rounded-xl text-center hover:bg-slate-300">back</div>
        <div className="bg-slate-300/50 w-full m-1 h-full text-center my-3">foto</div>
        <div className="bg-slate-300/50 w-full m-1 h-full text-center my-3"> foto</div>
        <div className="bg-slate-300/50 w-full m-1 h-full text-center my-3"> foto</div>
        <div className="bg-slate-300/50 w-full m-1 h-full text-center my-3">foto</div>
        <div className="bg-slate-300/50 w-full m-1 h-full text-center my-3"> foto</div>
        <div className="bg-white text-black  h-6 rounded-xl text-center hover:bg-slate-300">next</div>
      </div>
      <div className="p-2 m-1 bg-white text-black h-80 flex justify-center items-center">
        <h1>Footer</h1>
      </div>
    </div>
  );
};
export default Categories;
