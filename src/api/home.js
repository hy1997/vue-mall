import request from '../api/axios'

export function searchMusic(params) {
    return request({

        url: '/search',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded ;charset=UTF-8'
        },
        params

    })
}
export function getMusicById(params) {
    return request({

        url: '/song/url',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded ;charset=UTF-8'
        },
        params

    })
}
