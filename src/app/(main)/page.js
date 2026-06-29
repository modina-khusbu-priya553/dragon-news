import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";

 const newsCategoriesData = async() =>{

    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
  }

export default async function Home() {

  const categories = await newsCategoriesData();
  
  return (
    <div className="grid grid-cols-12 gap-4 my-14 container mx-auto">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={'02'}></LeftSidebar>
      </div>
      <div className="col-span-6">Dragon nesw</div>
      <div className="font-bold col-span-3"><RightSidebar></RightSidebar></div>

    </div>
  );
}
