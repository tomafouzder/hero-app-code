import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Link } from 'react-router';

const Apps = ({ data }) => {
    return (
        <div className='bg-gray-100'>
            <h3 className='text-4xl text-center pt-20 pb-10'>App App</h3>
            <Suspense fallback={<span>loading...</span>}>

                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        data.map((singleApp) => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                    }
                </div>

            </Suspense>

            <div className='flex justify-center items-center'>
                <Link to={`/allApps`}>
                <button className='btn my-10'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Apps;