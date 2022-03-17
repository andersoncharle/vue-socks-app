const product = 'Socks'

const app = Vue.createApp({
    // Inorder to simplify the syntax ES6 shorthand are used instead.
    // so shorthand syntax is data(){ return { data: 'value' }}
    data: function() {
        return{
            message: product
        }
    }
})