const app = Vue.createApp({
    data() {
        return {
            iphones: [
                {
                    id: 1,
                    model: 'iPhone 13 Pro Max',
                    description: 'The latest iPhone with Pro camera system.',
                    price: 1099,
                    image: 'download.jpeg',
                },
                {
                    id: 2,
                    model: 'iPhone 12 Mini',
                    description: 'Compact and powerful iPhone 12 Mini.',
                    price: 699,
                    image: 'download (1).jpeg',
                },
                {
                    id: 3,
                    model: 'iPhone SE (2nd Gen)',
                    description: 'A budget-friendly iPhone with A13 Bionic chip.',
                    price: 399,
                    image: 'iphone-se-storage-select-202207-midnight.jpeg',
                },
                {    
                id:4,
                model: 'iPhone 15 Pro Max',
                description: 'Newest model with all of the lastest design',
                price: 1600,
                image: '639218-Product-0-I-638301468016886351.webp'

                }

            ],
            
            contactForm: {
                name: '',
                email: '',
                message: ''
            },
            showConfirmation: false
        };
    },
    methods: {
        addToCart(product) {
            // You can implement the cart functionality here.
            console.log('Added to Cart: ', product.name);
        }
    }
});

app.mount('#app');
