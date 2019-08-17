import request from "@util/request";
import {getUserAsync} from "../store/user";

export function get(api, data, authToken){
    return requestData('get', api, data, authToken)
}

export function post(api, data) {
    return requestData('post', api, data, true)
}

const requestData = (method, api, data, authToken) => {
    if(!data) {
        data = {}
    }

    if(authToken) {
        return getUserAsync().then(function(user){
            if(!data.token) {
                data.token = user.getToken()
            }
            return request(api, data, method)
        })
    } else {
        let user = getUserSync();
        if(user && !data.token){
            data.token = user.getToken()
        }
        return request(api, data, method)
    }
}
