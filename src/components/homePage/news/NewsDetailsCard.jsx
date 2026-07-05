import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const NewsDetailsCard = ({newsDetails}) => {
    
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={newsDetails.image_url}
                        alt={newsDetails.title}
                        width={500}
                        height={300}
                        className="w-full"
                    ></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#403F3F] font-bold text-2xl">{newsDetails.title}</h2>
                    <p className="text-[#706F6F] text-lg">{newsDetails.details}</p>
                    <div className="card-actions justify-start">
                    <Link href={`/category/${newsDetails.category_id}`}>
                        <button className="btn btn-primary bg-red-600"><FaArrowLeftLong />AllNews in this category</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;