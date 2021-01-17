export const handleResponse = (response, cc) => {
    if (response) {
        if (cc.fullResponse) {
            return responese
        } else {
            return response.data
        }
    }
}
export const handleErrors = (e, cc, { error }) => {
    if (e.response.status === 422) {
        const data = e.response.data
        for (let key in data) {
            cc.ref.addError(key, data[key])
        }
    } else if (e.response.status === 500) {
        const data = e.response.data
            // console.log('data', data);
        error({ statusCode: 500, message: data })
    }
}