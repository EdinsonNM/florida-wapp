import Api from './api'
export default class LocationApi extends Api{
	static getAll(){
		return Api.ajax.getJSON(`${Api.SERVER_URL}/api/base_social/localidad`)
	}
}