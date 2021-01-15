export default function(context, inject) {
    inject('myTestPlugin', {
        test() {
            console.log('test');
        }
    })
}