import Api from './api'
export default class CertificationApi extends Api{
	static getAll(){
		return Api.ajax.getJSON(`${Api.SERVER_URL}/api/certificacion/list`)
	}
}