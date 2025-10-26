import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({ data }) => {
    return (
        <div className='bg-gray-100'>
            <h3 className='text-4xl text-center pt-20 pb-10'>App App</h3>
            <Suspense fallback={<span>loading...</span>}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        data.map((singleApp) => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                    }
                </div>

            </Suspense>
        </div>
    );
};

export default Apps;