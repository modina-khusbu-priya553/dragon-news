import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg ">All categories</h2>
            <ul className='flex flex-col gap-3 mt-6'>
            {categories.news_category.map(categorie => {
            return <li 
                key={categorie.category_id} 
                className={`${activeId === categorie.category_id && "bg-slate-100"} 
                p-3 rounded-r-md font-bold text-center text-md`}>
                    {categorie.category_name}</li>
            })}
            </ul>
        </div>
    );
};

export default LeftSidebar;