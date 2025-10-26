import React from 'react';
import useApps from '../../Hooks/useApps';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = () => {
    const { apps } = useApps()

    return (
        <div className='bg-gray-100'>
            <div>
                <h3 className='text-4xl text-center pb-10'> All App Show</h3>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    apps.map((singleApp) => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;