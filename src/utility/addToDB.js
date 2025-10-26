const getStoredApp = () => {
    const storesAppSTR = localStorage.getItem("appList");

    if (storesAppSTR) {
        const storedAppData = JSON.parse(storesAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();
    if (storedAppData.includes(id)) {
        alert("app already exist")
    }
    else {
        storedAppData.push(id);

        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList", data);
    }
}

export { addToStoredDB, getStoredApp };
