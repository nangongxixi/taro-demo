
export function isFunction(fn) {
    return Object.prototype.toString.call(fn)=== '[object Function]';
}

/**
 * catch api data
 * @type {{}}
 */
let cache = {};

export function cacheAsyncData(key, asyncCall, refresh) {
    if (!refresh && cache[key]) {
        if(cache[key] instanceof Promise){
            return cache[key]
        } else {
            return Promise.resolve(cache[key])
        }
    }

    cache[key] = asyncCall().then(data => {
        cache[key] = data;
        return data
    });

    return cache[key]
}
