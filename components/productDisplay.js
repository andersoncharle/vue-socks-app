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
</div>`
})