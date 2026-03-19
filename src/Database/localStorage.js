const getAppsFromDB = () => {
    const storedAppsStr = localStorage.getItem("apps");
    return storedAppsStr ? JSON.parse(storedAppsStr) : [];
}

const addAppsToDB = (id) => {
    const storedApps = getAppsFromDB();

    if(!storedApps.includes(id)) {
        storedApps.push(id);
        localStorage.setItem("apps", JSON.stringify(storedApps));
    }
}

export {getAppsFromDB, addAppsToDB};