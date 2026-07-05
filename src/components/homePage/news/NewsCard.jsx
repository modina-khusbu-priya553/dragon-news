import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaRegBookmark } from 'react-icons/fa';
import { IoShareSocialOutline, IoStar } from 'react-icons/io5';


const NewsCard = ({ news }) => {

    const {author, title, details, image_url, rating, total_view} = news;
   
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">

                {/* author info */}

                <div className="bg-[#F3F3F3] flex justify-between py-4 px-5 items-center">
                    <div className="flex gap-3">
                        <div>
                            <Image
                                src={author?.img}
                                alt="author name"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-lg font-semibold">{author?.name}</h2>
                            <p className="text-xs">{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-4xl items-center justify-between">
                        <FaRegBookmark />
                        <IoShareSocialOutline />
                       
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-[#403F3F] font-bold text-xl">{title}</h2>
                </div>

                <figure className="card-body">
                    <Image
                        src={image_url}
                        alt={title}
                        width={500}
                        height={300}
                        className="w-full"
                    />
                </figure>
                <div className="card-body">
                    <p className="text-[#706F6F] text-lg line-clamp-3">{details}</p>
                    <Link className="text-2xl text-orange-400 font-bold" href={`/news/${news._id}`}>Read More</Link>
                </div>
                
                <div className="card-body">
                    <div className="divider"></div>
                    <div className="flex justify-between items-center gap-2 p-2">
                        <div className="flex justify-center items-center gap-2 p-2">
                            <h2 className="text-2xl text-orange-400"><IoStar /></h2>
                            <h2 className="text-[#706F6F] text-2xl"> {rating.number}</h2>
                        </div>
                        <div className="flex justify-center items-center gap-2 p-2">
                            <FaEye className="text-2xl" />
                            <h2 className="text-[#706F6F] text-2xl">{total_view}</h2>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;