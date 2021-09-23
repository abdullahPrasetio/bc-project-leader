import axios from 'configs/axios'
const projectSites = {
    getAll: (options = { params: {} }) =>
        axios.get('/project/sites/v1/user/project-leader/', options),
    get: (id) => axios.get(`/project/sites/v1/user/project-leader/${id}`),
    // update: (form) => axios.put(`/project/sites/v1/user/project-leader/${form.id}`, form),
    // create: (form) => axios.post(`/project/sites/v1/user/project-leader/`, form),
    // delete: (id) => axios.delete(`/project/sites/v1/user/project-leader/${id}`),
    updateStatus: (form) =>
        axios.post(`project/sites/v1/user/project-leader/change-status`, form),
}
export default projectSites
