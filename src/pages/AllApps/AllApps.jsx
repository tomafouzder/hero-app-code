import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()

    const searchedApp = term ? apps.filter(app => app
        .title
        .toLocaleLowerCase()
        .includes(term)) : apps
       



    return (
        <div className='bg-gray-100'>
            <div className='flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center pb-10'>
                <h3 className=''> <span>({searchedApp.length})</span>Apps Found</h3>
                <label className="input">

                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search}
                        onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    searchedApp.map((singleApp) => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;