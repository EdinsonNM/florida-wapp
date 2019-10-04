import Api from './api';
import queryString from 'query-string';
export default class PartnerApi extends Api {
    static getAll(params) {
        return Api.ajax.getJSON(
            `${Api.SERVER_URL}/api/socio/filter?${queryString.stringify(
                params,
                {arrayFormat: 'index'}
            )}`
        );
    }
    static getInfo(id) {
        return Api.ajax.post(`${Api.SERVER_URL}/api/socio/data`, {
            socio_id: id
        });
    }
}
