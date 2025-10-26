import React from 'react';
import iconImg from '../../assets/icon-downloads.png'
import iconImg2 from '../../assets/icon-ratings.png'
import { Link } from 'react-router';


const SingleApp = ({ singleApp }) => {
    const { id, image, title, ratingAvg, downloads } = singleApp;

    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 p-1 border hover:scale-105 transition ease-in-out shadow-sm ">
                <figure className='rounded-2xl overflow-hidden h-64'>
                    <img className=''
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="pt-4">
                    <h2 className="card-title my-4">{title}</h2>

                    <div className="flex justify-between items-center">
                        <div className='flex items-center gap-2 bg-gray-100
                 px-3 rounded-2xl'>
                            <img className='w-4 ' src={iconImg} alt="" />
                            <p className='text-[#00d390]' >{downloads}</p>
                        </div>
                        <div className='flex items-center gap-2 bg-gray-100
                 px-3 rounded-2xl'>
                            <img className='w-4 ' src={iconImg2} alt="" />
                            <p className='text-[#00d390]' >{ratingAvg}</p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleApp;