import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;

function createApp(opt) {
    if(app){
        return app;
    }

    // redux日志
    // opt.onAction = [createLogger()];
    app = create(opt);
    app.use(createLoading({}));

    // 适配支付宝小程序
    if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
        global = {};
    }

    if (!global.registered)
        opt.models.forEach(model => app.model(model));

    global.registered = true;

    app.start();
    store = app._store;
    app.getStore = () => store;
    app.dispatch = store.dispatch;
    return app;
}

function getApp() {
    return app;
}

export default {
    getApp,
    createApp,
    getDispatch() {
        return app.dispatch;
    },
};

export function dispatch(...args) {
    return app.dispatch(...args)
}
