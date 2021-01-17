import qs from "qs";
export default function({ $axios }, inject) {
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

    // Inject to context as $api
    inject("api", api);
}