const getJobIdsFromLS = () => {
    const getJobIds = localStorage.getItem('job_ids');
    if (getJobIds) return JSON.parse(getJobIds);
    return [];
}



const setJobIdInLS = (id) => {

    const getJobIds = getJobIdsFromLS();
    const isExists = getJobIds.find(jobId => jobId === id);
    if (!isExists) {
        getJobIds.push(id);
        localStorage.setItem('job_ids', JSON.stringify(getJobIds));
        return 1;
    }
    return 0;
}

export { getJobIdsFromLS, setJobIdInLS }