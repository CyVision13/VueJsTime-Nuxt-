import qs from "qs";
import { handleErrors, handleResponse } from "../helpers/responseHelper";

export default function({ $axios, ...context }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: "application/json",
            },
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "brackets" });
        },
    });

    // Set baseURL to something different
    // api.setBaseURL("https://jsonplaceholder.typicode.com/");
    api.setBaseURL("http://6e77g.mocklab.io");

    api._post = function(url, body, config = {}) {
        const { cc, ...requestConfig } = config;
        return api
            .post(url, body, config)
            .then((response) => {
                return handleResponse(response, cc);
            })
            .catch((e) => {
                handleErrors(e, cc, context);
            });
    };
    api._get = function(url, config = {}) {
        const { cc, ...requestConfig } = config;
        return api
            .get(url, config)
            .then((response) => {
                return handleResponse(response, cc);
            })
            .catch((e) => {
                handleErrors(e, cc, context);
            });
    };
    // Inject to context as $api
    inject("api", api);
}