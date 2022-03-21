const product = 'socks'

const app = Vue.createApp({
    // Inorder to simplify the ES6 syntax shorthand are used instead.
    // so shorthand syntax is data(){ return { data: 'value' }}
    data: function() {
        return{
            product: product,
            brand: "blackmitnick",
            description: "This is socks product",
            selectedVariant: 0,
            url: 'https://github.com/blackmitnick/vue-socks-app',
            inventory: 100,
            onSale: true,
            details: ['20% wool','30% cotton','20% polyester'],
            variants: [
                { id: 2123,color : 'green',image: './assets/images/socks_green.jpg',quantity: 50},
                { id: 2124,color : 'blue',image: './assets/images/socks_blue.jpg',quantity: 0}
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0,
            onSale : true

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log(index);
          },
        removeFromCart(){
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    },
    computed: {
      title(){
          return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      instock() {
        return this.variants[this.selectedVariant].quantity
      },
      saleMessage() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' is on sale.'
        }
        return ''
    }

    }
})