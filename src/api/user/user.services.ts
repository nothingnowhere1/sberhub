import axios from 'axios/index';

export const apiUserAuth = async (data: any): Promise<any> => {
	axios.post('/api/user/auth', data);
};