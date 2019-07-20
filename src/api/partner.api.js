import Api from './api'

export default class PartnerApi extends Api{
	static getAll(){
		return Api.ajax.getJSON(`${Api.SERVER_URL}/api/socio/filter`)
	}
	static getInfo(id){
		return Api.ajax.post(`${Api.SERVER_URL}/api/socio/data`, {socio_id: id})
	}
}