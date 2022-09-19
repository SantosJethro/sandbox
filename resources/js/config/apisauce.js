import { create } from 'apisauce';
// import { nodeAppUrl } from './env';

const api = create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')  
  },
});

// const nodeApi = create({
//   baseURL: nodeAppUrl,
//   headers: {
//     'X-Requested-With': 'XMLHttpRequest',
//     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')  
//   },
// });


export const GET_AUTH_USER = '/api/auth';
export const LOGOUT_USER = '/auth/logout';

//users

export const getAuthUser = () => api.get('/auth/get-user-info');

export const logoutUser = () => api.post('/auth/logout-user');

export const getUserByType = (params) => api.post('/users/list-user-by-type', params);

export const getUserById = (params) => api.post('/users/getUser',params);

export const addUpdateUser = (params) => api.post('/users/add-or-update-user', params);

export const getUserServices = () => api.get('/users/services-user');

//services

export const getAllServicesUser = () => api.get('/services/all-services-user');
export const getAllServices = (params) => api.post('/services/all-services', params);


//services_operator

export const assignOrUnassign = (params) => api.post('/operator-services/assign-or-unassign',params);

export const assignToService = (params) => api.post('/operator-services/assign-to-service',params);

export const unassignToService = (params) => api.post('/operator-services/unassign-to-service',params);

//personas
export const getPersonas = () => api.get('/persona/list-personas');

export const addUpdatePersona = (params) => api.post('persona/add-or-update-persona',params);

//widget

export const getWidget = (params) => api.post('/widget/list-widget',params);
export const addUpdateWidget = (params) => api.post('/widget/add-or-update-widget',params);
export const statusChangerWidget = (params) => api.post('/widget/change-to-status',params);

//access widgets 

export const getWidgetByCode = (params) => api.post('/widget/get-by-code',params);

//canned messages

export const getCannedMessages = () => api.get('/canned/list-canned-messages');
export const addUpdateCannedMessages = (params) => api.post('/canned/add-or-update-canned-messages', params);


//role
export const addRole = (params) => api.post('/roles/add-role', params);
export const updateRole = (params) => api.post('/roles/update-role', params);
export const changeUserRole = (params) => api.post('/roles/change-user-role', params);
export const getAllRoles = () => api.get('/roles/get-all-roles');
export const getUserRoles = () => api.get('/roles/get-user-roles');

// Permission
export const addPermission = (params) => api.post('/permissions/add-permission', params);
export const getAllPermission = () => api.get('/permissions/get-all-permissions');
//permission and role
export const getRolesPermission = () => api.get('roles-and-permission/get-roles-permissions');
//reports

export const getSessionReport = (params) => api.post('/report/session', params);
export const getOperatorReport = (params) => api.post('/report/operator', params);
export const getOperatorLogs = (params) => api.post('/report/operator/logs', params);
export const getExportData = (params) => api.post('/report/export', params);

//the chat parts
//session
export const createSession = (params) => api.post('/session/new', params);
export const createOfflineSession = (params) => api.post('/session/offline', params);
export const endChatSession = (params) => api.post('/session/endSession', params);
export const addNewInbound = (params) => api.post('/session/addInbound', params);
export const fetchConvo = (params) => api.post('/session/fetchConvo', params);


export default api;