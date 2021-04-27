import request from 'api/request';

export const login = (params: any) => request.post(`auth/login`, params);
