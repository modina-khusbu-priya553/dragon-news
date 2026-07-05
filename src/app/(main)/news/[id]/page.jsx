import React from 'react';
import {newsDetailsData} from '@/lib/newsData';
import NewsDetailsCard from '@/components/homePage/news/NewsDetailsCard';
import RightSidebar from '@/components/homePage/news/RightSidebar';

const NewsDetailsPage = async ({params}) => {
    const { id } = await params;
    const newsDetails = await newsDetailsData(id);
    return (
        <div className="grid grid-cols-12 container mx-auto gap-6">
            <div className="col-span-9">
                <h2>Dragon News</h2>
                <div>
                    {newsDetails.map(news => (
                        <NewsDetailsCard key={news._id} news={news} />
                    ))}
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar/>
            </div>
        </div>
    );
};

export default NewsDetailsPage;