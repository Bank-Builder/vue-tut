var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Woolies",
        product: 'Socks',
        selectedVariant: 0,
        home: './index.html',
        inventory: 0,
        onSale: false,
        details: ["80% cotton","20% polyester","male socks"],
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
        
    },
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
      }
    }
})
