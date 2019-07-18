import Api from './api'
export default class ProcessApi extends Api{
	static getAll(){
		return Api.ajax.getJSON(`${Api.SERVER_URL}/api/parametro/proceso`)
	}
}