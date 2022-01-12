import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
    data() {
        return {
            categoryArr: ['海鮮','蔬果','肉品'],
            is_add: false,
            addProduct:{
                category: '',
                content: '',
                description: '',
                id: '',
                is_enabled: false,
                origin_price: 0,
                price: 0,
                title: '',
                unut: '包',
                num: 20,
                imageUrl: '',
                imagesUrl: [
                    "https://y3.yooho.com.tw/images/202111/goods_img/8034_G_1637633031624.jpg",
                    "https://y3.yooho.com.tw/images/202112/goods_img/8113_G_1640645888820.jpg"
                ]
            },
            products: [
                {
                    category: "生鮮類別",
                    content: "尺寸：10x10cm",
                    description: "北海道專用日本生食級干貝，採用等級最高 帶來滿滿幸福感！",
                    id: "p-001",
                    is_enabled: true,
                    origin_price: 1300,
                    price: 800,
                    title: "日本生食干貝",
                    unit: "盒",
                    num: 20,
                    imageUrl: "https://sweetvegetable.com.tw/wp-content/uploads/2021/12/-scaled-e1640143233821-300x300.jpeg",
                    imagesUrl: [
                        "https://y3.yooho.com.tw/images/202111/goods_img/8034_G_1637633031624.jpg",
                        "https://y3.yooho.com.tw/images/202112/goods_img/8113_G_1640645888820.jpg"
                    ]
                },
                {
                    category: "肉品類別",
                    content: "重量：600 g",
                    description: "台糖優選豬肉，保證絕對沒有瘦肉精萊克多巴安 帶來滿滿幸福感！",
                    id: "p-002",
                    is_enabled: false,
                    origin_price: 200,
                    price: 150,
                    title: "松阪豬肉",
                    unit: "包",
                    num: 20,
                    imageUrl: "https://sweetvegetable.com.tw/wp-content/uploads/2021/08/%E6%9D%BE%E9%98%AA%E8%B1%AC%E8%82%89%E7%89%87-300x300.jpg",
                    imagesUrl: [
                        "https://www.sunny-porkhouse.com/archive/image/product1/images/layoutlist/1595470422.jpg",
                        "https://y3.yooho.com.tw/images/201909/goods_img/5625_G_1567466429837.jpg"
                    ]
                },
            ],
            tempProduct: {},
        }
    },
    methods: {
        addProductHandler() {
            this.addProduct.id = new Date().getTime();
            this.products.push(this.addProduct);
            this.clearProduct();
        },
        deleteProduct(id){
            let index = this.products.findIndex(product => product.id == id);
            this.products.splice(index, 1);
            this.tempProduct.id == id ? this.tempProduct = {} : this.tempProduct;
        },
        clearProduct(){
            this.addProduct = {
                category: '',
                content: '',
                description: '',
                id: '',
                is_enabled: false,
                origin_price: 0,
                price: 0,
                title: '',
                unut: '包',
                num: 20,
                imageUrl: '',
                imagesUrl: [
                    "https://y3.yooho.com.tw/images/202111/goods_img/8034_G_1637633031624.jpg",
                    "https://y3.yooho.com.tw/images/202112/goods_img/8113_G_1640645888820.jpg"
                ]
            }
            this.is_add = false;
        }
    }
}).mount('#app');