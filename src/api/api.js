import { ajax } from 'rxjs/ajax';
export default class Api{
	static ajax = ajax
	static SERVER_URL = process.env.REACT_APP_SERVER_URL

}