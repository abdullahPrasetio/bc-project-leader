import axios from 'configs/axios'
const projects = {
    getAll: (options = { params: {} }) =>
        axios.get('/projects/v1/user/project-leader', options),
    get: (id) => axios.get(`/projects/v1/user/project-leader/${id}`),
    // update: (form) => axios.put(`/projects/${form.id}`, form),
    // create: (form) => axios.post(`/projects`, form),
    // delete: (id) => axios.delete(`/projects/${id}`),
    updateStatus: (form) => axios.post(`projects/change-status`, form),
}
export default projects
