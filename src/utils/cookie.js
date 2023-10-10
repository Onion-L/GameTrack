import Cookie from 'js-cookie';

export const addNewCookie = (key,value,expires='7') => {
    return new Promise((resolve, reject)=> {
        if(Cookie.get(key) !== value) {
            Cookie.set(key, value, {expires:expires});
            resolve('cookie is set');
        }
    })
}

export const getCookie = (key) => {
    return new Promise((resolve, reject) => {
        resolve(Cookie.get(key));
    })
}

export const setCookie =  (key,value,expires='7') => {
    return new Promise((resolve, reject) => {
        if (!Cookie.get(key)) {
            reject('Cannot find the cookie');
        } else {
            Cookie.set(key, value,{expires:expires});
            resolve('Cookie is changed');
        }
    })
}

export const removeCookie = (key,value,expires='7') => {
    return new Promise((resolve,reject) => {
        if(Cookie.get(key)) {
            Cookie.remove(key);
        }else {
            reject('Cannot find the cookie');
        }
    })
}
