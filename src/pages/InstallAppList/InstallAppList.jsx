import React, { useEffect, useState } from 'react';

import { getStoredApp } from '../../utility/addToDB';
import SingleApp from '../SingleApp/SingleApp';
import useApps from '../../Hooks/useApps';


const InstallAppList = () => {

    const [appList, setAppList] = useState([]);

 const { apps, loading, error } = useApps()
   

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        const myAppList = apps.filter(app => convertedStoredApps.includes(app.id))
        setAppList(myAppList)
    }, [])


    return (
        <div className='bg-gray-100'>
            <div className='mx-w-6xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <h3>1 Apps Found</h3>
                    <details className="dropdown">
                        <summary className="btn m-1">open or close</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    {
                        appList.map(a => <SingleApp key={a.id} singleApp={a}></SingleApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstallAppList;