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
          variantColor: "green"
        }, 
        {
          variantId: 2235,
          variantColor: "blue"         
        }
        ],
        sizes: ["S", "M", "L", "XL"]
        
    }
})
