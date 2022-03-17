const product = 'socks'

const app = Vue.createApp({
    // Inorder to simplify the syntax ES6 shorthand are used instead.
    // so shorthand syntax is data(){ return { data: 'value' }}
    data: function() {
        return{
            product: product,
            description: "This is socks product",
            image: "./assets/images/socks_green.jpg" ,
            url: 'https://github.com/blackmitnick/vue-socks-app'

        }
    }
})