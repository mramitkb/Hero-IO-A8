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

const removeAppsFromDB = (id) => {
    const storedApps = getAppsFromDB();

    const updateApps = storedApps.filter(appsId => appsId !== id);
    localStorage.setItem("apps", JSON.stringify(updateApps))
}
export {getAppsFromDB, addAppsToDB, removeAppsFromDB};