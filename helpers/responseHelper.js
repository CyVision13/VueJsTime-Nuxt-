export const handleResponse = (response, cc) => {
    if (response) {
        if (cc.fullResponse) {
            return responese
        } else {
            return response.data
        }
    }
}
export const handleErrors = (e, cc) => {
    if (e.response.status === 422) {
        const data = e.response.data
        for (let key in data) {
            cc.ref.addError(key, data[key])
        }
    }
}