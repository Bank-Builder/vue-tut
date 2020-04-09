Vue.component('product-details', {
        props: {
        product: {
            type: String,
            required: true
        }
    },
    template: `
    <ul><li v-for="detail in details"> {{ detail }} </li></ul>
    
    `,
    data () {
        return {
            product_details: {
                socks: ["80% cotton","20% polyester","male socks"],
                shirts: ["60% cotton","40% polyester","v-neck"]
            }    
        }    
    },
    computed: {
      details () {
        return this.product_details[this.product]
      }
    }
})

Vue.component('product', {
    props: {
        premium: {
          type: Boolean,
          required: true
        }
    },
    template:`
            <div class="product">  
            <div class="product-image">
                <img v-bind:src="image" >
                <a v-bind:href="home">..Home</a>
            </div>

            <div class="product-info">
                <h1> {{ title }} </h1>
                <span v-if="onSale"> On Sale! </span>
                <p v-if="inventory > 10"> In stock </p>
                <p v-else-if="inventory<=10 && inventory > 0"> Almost out of stock! </p>
                <p v-else :style="tstStock()"> Out of stock </p>
                <p>Shipping is: {{ shipping }} </p>
                
                
                <product-details product="socks"></product-details>
                
                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }" 
                    @mouseover="updateProduct( index )">
                </div>
                
                <ul> 
                  <li v-for="size in sizes">{{ size }}</li>
                </ul>
                
                <button v-on:click="addToCart" 
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }">Add to cart</button>
                <button v-on:click="removeFromCart"
                  :class="{ disabledButton: cart==0 }">Remove from cart</button>
                
                <div class="cart">
                  <p>Cart ({{cart}})</p>
                </div>
            </div>  
        </div>
    `,
  data () {
      return     {
        brand: "Vue Woolies",
        product: 'Socks',
        selectedVariant: 0,
        home: './index.html',
        inventory: 0,
        onSale: false,
        variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: './images/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        }, 
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: './images/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
          
        }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart:0,
        textStyle: { 'text-decoration': 'line-through' }
    }},
  methods: {
        addToCart: function () {
          this.cart +=1
        },
        removeFromCart: function () {
          this.cart -=1
          if (this.cart < 0) { 
            this.cart = 0;
          }
        },
        tstStock: function () {
          if (this.inStock) {
            this.textStyle['text-decoration'] = 'line-through'
          }
          else {
            this.textStyle['text-decoration'] = ''
          }
          return this.textStyle;
        },
        updateProduct: function (index) {
          this.selectedVariant = index
        }
    },
  computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      },
      inStock () {
        return this.variants[this.selectedVariant].variantQuantity
      },
      shipping () {
        if (this.premium) {
          return "Free"
        }  
        return "2.99"
      }
    }

})

var app = new Vue({
    el: '#app',
    data: {
      premium: false
    }
})
