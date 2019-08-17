import Taro from '@tarojs/taro';
import {getUserAsync} from "../store/user";

let userInfo;

function getUserInfo(key, def = '') {
    if(!userInfo) {
        userInfo = Taro.getStorageSync('user_info')
        if(!userInfo){
            userInfo = {
                nickname: 'stcer'
            }
        }
    }
    return userInfo[key] ? userInfo[key] : def;
}


export default {
    namespace: 'user',
    state: {
        uid: 0,
        isBindPhone: true,
        isAuthBaseInfo: true,
        access_token: getUserInfo('access_token'),
        nickname: getUserInfo('nickname'),
        mobile: getUserInfo('mobile'),
        errorMessage: getUserInfo('errorMessage'),
    },

    effects: {
        *init({payload}, {put, call}) {
            console.log('-E- dispatch:user.init')
            if(!payload) {
                payload = {}
            }
            let user = yield call(getUserAsync, payload.refresh)
            yield put({
                type: 'save',
                payload: user.getInfo()
            })
        },

        *submit({payload}, {put}){
            console.log('model:user.effects.submit()')
            yield put({
                type: 'save',
                payload,
            });
        }
    },

    reducers: {
        save(state, { payload }) {
            console.log('model:user.reducers.save()', payload)
            return { ...state, ...payload };
        },
    },
}
