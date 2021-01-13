export default function(context) {
    const promise = new Promise((resolve) => { // when we use return nuxt will wait for this else it will not wait for this middleware
        setTimeout(() => {
            console.log('request resolved!');
            resolve({ user_id: 1 });
        }, 2000);
    });
    if (process.server) {
        return promise
    }
}