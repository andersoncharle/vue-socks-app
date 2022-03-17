const product = 'socks'

const app = Vue.createApp({
    // Inorder to simplify the ES6 syntax shorthand are used instead.
    // so shorthand syntax is data(){ return { data: 'value' }}
    data: function() {
        return{
            product: product,
            description: "This is socks product",
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/blackmitnick/vue-socks-app',
            instock: false,
            inventory: 100,
            onSale: true,
            details: ['20% wool','30% cotton','20% polyester'],
            variants: [
                { id: 2123,color : 'green',image: './assets/images/socks_green.jpg'},
                { id: 2124,color : 'blue',image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0,

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }
})