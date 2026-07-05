import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const NewsDetailsCard = ({news}) => {
    const {title, details, image_url} = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={image_url}
                        alt={title}
                        width={500}
                        height={300}
                        className="w-full"
                    ></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#403F3F] font-bold text-2xl">{title}</h2>
                    <p className="text-[#706F6F] text-lg">{details}</p>
                    <div className="card-actions justify-start">
                    <Link href={`/category/${news.category_id}`}>
                        <button className="btn btn-primary bg-red-600"><FaArrowLeftLong />AllNews in this category</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;