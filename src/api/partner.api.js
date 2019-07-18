import Api from './api'

export default class PartnerApi extends Api{
	static getAll(){
		return Api.ajax.getJSON(`${Api.SERVER_URL}/api/socio/filter`)
	}
}