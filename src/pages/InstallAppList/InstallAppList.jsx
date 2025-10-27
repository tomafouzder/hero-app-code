import React, { useState } from 'react';
import { loadInstallList, removeFromInstall } from '../../utility/addToDB';



const InstallAppList = () => {

    const [appList, setAppList] = useState(() => loadInstallList());
    const [sortInstall, setSortInstall] = useState('none')




    const sortedItem = (
        () => {
            if (sortInstall === 'size-asc') {
                return [...appList].sort((a, b) => a.size - b.size)
            }
            else if (sortInstall === 'size-desc') {
                return [...appList].sort((a, b) => b.size - a.size)
            }
            else { return appList }
        })()

    const handleRemoveInstall = (id) => {
        // remove from localstorage
        removeFromInstall(id)
        // ui instant update:
        setAppList(prev => prev.filter(a => a.id !== id))
    }


    return (
        <div className='space-y-6'>
            <div className='flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center pb-10'>
                <h3 className=''>
                    <span>({appList.length})Apps Found</span>
                </h3>

                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-border'
                        value={sortInstall}
                        onChange={e => setSortInstall(e.target.value)} >
                        <option value="none">Sort by size</option>
                        <option value="size-asc">Low-&gt;High</option>
                        <option value="size-desc">High-&gt;Low</option>
                    </select>
                </label>
            </div>

            <div className="space-y-3">
                {
                    sortedItem.map(a =>
                        <div key={a.id} className="card card-side bg-base-100 border shadow">
                            <figure>
                                <img
                                    className='w-40 h-40 object-cover'
                                    src={a.image}
                                    alt={a.title}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{a.title}</h2>
                                <p>{a.size}</p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleRemoveInstall(a.id)}
                                        className="btn btn-primary">Uninstall</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default InstallAppList;