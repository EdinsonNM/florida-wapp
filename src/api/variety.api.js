import Api from './api';
export default class VarietyApi extends Api{
	static getAll(){
		return Api.ajax.getJSON(`${Api.SERVER_URL}/api/parametro/variedad`)
	}
}