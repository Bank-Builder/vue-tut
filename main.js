var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './images/vmSocks-green-onWhite.jpg',
        home: './index.html',
        inventory: 8,
        onSale: false,
        details: ["80% cotton","20% polyester","male socks"],
        variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: './images/vmSocks-green-onWhite.jpg'
        }, 
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: './images/vmSocks-blue-onWhite.jpg'
        }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart:0
        
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
        updateProduct: function (variantImage) {
          this.image=variantImage
        }
    }
})
