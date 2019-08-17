import { Store } from 'laco'
import {makeStore} from "@util/index";
import {isH5} from "@config/index";
import Taro from "@tarojs/taro";
import {request} from "@util/request";
import {getShareUid} from "@config/global";
import {cacheAsyncData} from "@util/tool";
import UserModel from "./userModel";

export const UserStore = new Store({
    token: "",
    uid: 0,
    nickname: '游客',
    isAuthBaseInfo: false,
    isBindPhone: false,
    isHasCard: false,
    isShopUser: false,
    },
    'UserStore'
);

export const useUserStore = makeStore(UserStore)

/**
 * user UserModel
 */
let user;

export function getUserAsync(refresh) {
    if (!refresh && user) {
       return Promise.resolve(user);
    }

    return cacheAsyncData('user', function() {
        return requestUserData().then(function(info){
            UserStore.set(
                ({state}) => ({
                    ...state,
                    ...info
                }),
                'Add count'
            );
            if(!user){
                user = new UserModel(info);
            } else {
                user.set(info)
            }
            return user;
        })
    }, refresh)
}

export function getUserSync() {
    return user;
}

export function getUser(callback, refresh) {
    getUserAsync(refresh).then((data) => {
        callback(data);
    })
}

async function requestUserData() {
    console.log('user: gen code')
    if(isH5()){
        return Promise.resolve({
            nickname: '游客',
            uid: 0
        })
    }

    let code = await Taro.login()
    console.log(`user.code:`, code)

    return request('/wxapp/code', {
        code: code.code,
        fromUid: getShareUid()
    }, 'get').then((data) => {
        return data
    });
}
