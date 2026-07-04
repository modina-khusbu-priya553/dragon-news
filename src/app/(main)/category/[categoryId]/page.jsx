import React from 'react';
import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";


// News for leftSidebar
import { newsCategoriesData } from "@/lib/newsData"

// news for all news based on id
import {newsAllData} from "@/lib/newsData";

const NewsCategoryPage = async ({params}) => {
    const {categoryId} = await params;

    // data fetch for left sidebar
    const categories = await newsCategoriesData();

    // data fetch for all news based on id 
    const allNews = await newsAllData(categoryId);
    return (
        <div className="grid grid-cols-12 gap-4 my-14 container mx-auto">

      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={categoryId}></LeftSidebar>
      </div>

      <div className="col-span-6">
        <h2 className="text-2xl font-bold mb-4">Dragon News Home</h2>
        <div className="grid grid-cols-1 gap-4">
          { allNews.length > 0 ?
          (allNews.map(news => {return <div key={news._id}>{news.title}</div>})):
          (<div className="text-center text-2xl font-bold">No news found</div>)
          }
        </div>
        
      </div>

      <div className="font-bold col-span-3">
        <RightSidebar></RightSidebar>
      </div>

    </div>
    );
};

export default NewsCategoryPage;