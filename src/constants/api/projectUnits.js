import axios from 'configs/axios'
const projectUnits = {
    getAll: (options = { params: {} }) =>
        axios.get('/project/units/v1/user/project-leader/', options),
    get: (id) => axios.get(`/project/units/v1/user/project-leader/${id}/show`),
    // update: (form) => axios.put(`/project/units/${form.id}`, form),
    // create: (form) => axios.post(`/project/units`, form),
    // delete: (id) => axios.delete(`/project/units/${id}`),
    // getVariant: (options = { params: {} }) =>
    //     axios.get('project/units/variant-units'),
    // getProperties: (id) => axios.get(`project/units/variant-units/${id}`),
    // updateStatus: (form) => axios.post(`project/units/change-status`, form),
    getProgress: (options = { params: {} }) =>
        axios.get('project/units/v1/user/project-leader/get-progress', options),
}
export default projectUnits
