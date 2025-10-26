import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const AppDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const singleCard = data.find(app => app.id === parseInt(id));
    const { image, title } = singleCard;

    const handleMarkAsInstall = id => {
        addToStoredDB(id)
    }

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
                        <button onClick={() => { handleMarkAsInstall(id) }} className="btn btn-primary">Install Now (291 MB)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;