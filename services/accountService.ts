import axios from "axios";

type CallbackFunction = (data: any) => void;

export function getUser(id: number | string, callback: CallbackFunction) {
    axios.get(`/users/${id}`)
        .then(response => {
            callback && callback(response.data)
        })
        .catch(function (error) {
            callback && callback(null)
        })
}

export function getUserAccounts(id: number | string, callback: CallbackFunction) {
    axios.get(`/users/${id}/accounts`)
        .then(response => {
            callback && callback(response.data)
        })
}

export function getAccount(id: number | string, callback: CallbackFunction) {
    axios.get(`/accounts/${id}`)
        .then(response => {
            callback && callback(response.data)
        })
}