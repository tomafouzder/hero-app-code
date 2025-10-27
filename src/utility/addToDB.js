export const loadInstallList = () => {
    try {
        const data = localStorage.getItem('appList')
        return data ? JSON.parse(data) : []
    }
    catch (err) {
        console.log(err)
        return []
    }
}

export const upDateList = (app) => {
    const appList = loadInstallList()

    try {
        const isDuplicate = appList.some(a => a.id === app.id)
        if (isDuplicate) return alert("Already add in install")
        const upDateInstallList = [...appList, app]
        localStorage.setItem('appList', JSON.stringify(upDateInstallList))
    }
    catch (err) {
        console.log(err)
    }
}


export const removeFromInstall = id => {
    const appList = loadInstallList()

    try {
        const upDateInstallList = appList.filter(a=> a.id !== id)
        localStorage.setItem('appList', JSON.stringify(upDateInstallList))
    } catch (err) {
        console.log(err)
    }
}




