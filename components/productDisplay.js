app.component('product-display',{
// object to configure our componets
   template: 
   /*html*/    
  `<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <!-- :class="{'out-of-stock-img' : !instock}" -->
      <img v-bind:src="image" :alt="description">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <!-- <a :href="url">code with anderson</a> -->
      <!-- <p v-show="instock">In stock</p> -->
      <p v-if="onSale">{{ saleMessage }}</p>

      <p v-if="instock">In stock</p>
      <p v-else>Out of stock</p>
      <!-- <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
      <p v-else>Out of Stock</p>
      <p v-if="onSale">On Sale!</p> -->
      <ul>
        <li v-for="detail in details">
          {{ detail }}
        </li>
      </ul>
      <ul>
        <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
      </ul>
      <div
      class="color-circle"
      :style="{backgroundColor : variant.color}"
       v-for="(variant, index) in variants"
        v-bind:key="variant.id" 
        @mouseover="updateVariant(index)"> 
       </div>
     
    <!--  :class="{disabledButton: !instock}"
      :disabled="!instock" for out of the stock add this in the add button -->
      <button class="button" :class="{ disabledButton: !instock }" :disabled="!instock" v-on:click="addToCart">Add to Cart</button>

      <button class="button" @click="removeFromCart">remove item</button>
    </div>

  </div>
</div>`,
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