import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { upDateList } from '../../utility/addToDB';



const AppDetails = () => {

    const { id } = useParams();
    const { apps, loading } = useApps()

    const app = apps.find(app => app.id === parseInt(id));
    if (loading) return <p>Loading....</p>
    const { image, title, size } = app || {}

    // const handleMarkAllInstall = () => {
    //     const existingList = JSON.parse(localStorage.getItem('appList')) || []
    //     let upDatedList = []

    //     if (existingList) {
    //         const isDuplicate = existingList.some(a => a.id === app.id)
    //         if(isDuplicate) return alert('Already Exist')
    //         upDatedList = [...existingList, app]
    //     }
    //     else {
    //         upDatedList.push(app)
    //     }
    //     localStorage.setItem('appList', JSON.stringify(upDatedList))
    // }

    return (
        <div className='bg-gray-100'>
            <div className="card card-side bg-gray-100 py-10 max-w-7xl mx-auto shadow-sm">
                <figure>
                    <img className='w-80'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions ">
                        <button onClick={()=>upDateList(app)} className="btn btn-primary">Install Now
                            <span>({size} MB)</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;

//  onClick={() => { handleMarkAsInstall(id) }}