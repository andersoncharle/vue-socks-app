const product = 'socks'

const app = Vue.createApp({
    // Inorder to simplify the ES6 syntax shorthand are used instead.
    // so shorthand syntax is data(){ return { data: 'value' }}
    data: function() {
        return{
            cart: 0,
          

        }
    },
    methods: {
        
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