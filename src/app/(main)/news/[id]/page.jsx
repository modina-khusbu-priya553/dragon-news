import React from 'react';
import {newsDetailsData} from '@/lib/newsData';
import NewsDetailsCard from '@/components/homePage/news/NewsDetailsCard';
import RightSidebar from '@/components/homePage/news/RightSidebar';


// dynamic metadata
export const generateMetadata = async ({params}) => {
    const { id } = await params;
    const newsDetails = await newsDetailsData(id);


    return {
    title: newsDetails.title,
    description: newsDetails.description,
  }
}
const NewsDetailsPage = async ({params}) => {
    const { id } = await params;
    const newsDetails = await newsDetailsData(id);
    console.log(newsDetails);
    return (
        <div className="grid grid-cols-12 container mx-auto gap-6">
            <div className="col-span-9">
                <h2>Dragon News</h2>
                <div>
                    <NewsDetailsCard newsDetails={newsDetails} />
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar/>
            </div>
        </div>
    );
};

export default NewsDetailsPage;