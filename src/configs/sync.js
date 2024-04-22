"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {

    // return null;

    /* User */
    const User = require('../models/user')
    await User.deleteMany() // !!! Clear collection.
    await User.create({
        "_id": "65343222b67e9681f937f001",
        "username": "admin",
        "password": "Clarusway*123",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "isActive": true,
        "isStaff": true,
        "isAdmin": true
    })
    await User.create({
        "_id": "65343222b67e9681f937f002",
        "username": "staff",
        "password": "Clarusway*123",
        "email": "staff@site.com",
        "firstName": "staff",
        "lastName": "staff",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    })
    await User.create({
        "_id": "65343222b67e9681f937f003",
        "username": "test",
        "password": "Clarusway*123",
        "email": "test@site.com",
        "firstName": "test",
        "lastName": "test",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    })

    /* Brand */
    const Brand = require('../models/brand')
    await Brand.deleteMany() // !!! Clear collection.
    await Brand.create({
        "_id": "65343222b67e9681f937f104",
        "name": "Adidas",
        "image": "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f105",
        "name": "Nike",
        "image": "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f107",
        "name": "Puma",
        "image": "https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f108",
        "name": "Lotto",
        "image": "https://1000logos.net/wp-content/uploads/2021/05/Lotto-logo.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f109",
        "name": "Kinetix",
        "image": "https://seeklogo.com/images/K/kinetix-logo-73FB3FD17D-seeklogo.com.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f110",
        "name": "Reebok",
        "image": "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f122",
        "name": "Samsung",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f123",
        "name": "Ülker",
        "image": "https://cdn.worldvectorlogo.com/logos/ulker.svg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f129",
        "name": "Tommy",
        "image": "https://i.pinimg.com/736x/d3/09/1a/d3091a1a5350fede679b2c7461b0745b.jpg"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f130",
        "name": "LG",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png"
    })
    await Brand.create({
        "_id": "65343222b67e9681f937f131",
        "name": "Apple",
        "image": "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg"
    })

    /* Category */
    const Category = require('../models/category')
    await Category.deleteMany() // !!! Clear collection.
    await Category.create({
        "_id": "65343222b67e9681f937f201",
        "name": "Food",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f202",
        "name": "Drink",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f203",
        "name": "Jewelery",
    })
    await Category.create({
        "_id": "65343222b67e9681f937f204",
        "name": "Electronic",
    })

    /* Firm */
    const Firm = require('../models/firm')
    await Firm.deleteMany() // !!! Clear collection.
    await Firm.create({
        "_id": "65343222b67e9681f937f302",
        "name": "BOYNER",
        "phone": "0212 444 00 54",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boyner_Logo.jpg/800px-Boyner_Logo.jpg",
        "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f303",
        "name": "FLO",
        "phone": "0212 444 22 23",
        "image": "https://akillifabrikalar.com.tr/wp-content/uploads/2021/11/Floo2.png",
        "address": "Mahmutbey, Taşocağı Yolu Cad. No:24, 34218 Bağcılar/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f304",
        "name": "HEPSIBURADA",
        "phone": "0212 444 44 33",
        "image": "https://logowik.com/content/uploads/images/hepsiburada1183.jpg",
        "address": "Kuştepe, Kule 5, Mecidiyeköy Yolu Cd. Trump Towers No:12 Kat 18, 34387 Şişli/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f305",
        "name": "Trendyol",
        "phone": "0212 444 22 22",
        "image": "https://seeklogo.com/images/T/trendyol-logo-EE0DAED204-seeklogo.com.png",
        "address": "Maslak, Büyükdere Cd. No:237, 34485 Sarıyer/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f310",
        "name": "n11",
        "phone": "0212 444 22 66",
        "image": "https://i.pinimg.com/originals/af/d7/12/afd7126448b385ea3013d41797adde20.png",
        "address": "Mahmutbey, Taşocağı Yolu Cad. No:24, 34218 Bağcılar/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f315",
        "name": "Morhipo",
        "phone": "0212 444 44 44",
        "image": "https://upload.wikimedia.org/wikipedia/tr/archive/3/32/20181016101908%21Morhipo.png",
        "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f333",
        "name": "ÜLker",
        "phone": "2124445566",
        "image": "https://www.ulker.com.tr/documents/ulker-logo.png",
        "address": "Kısıklı, Ferah Cd. No:1, 34692 Üsküdar/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f334",
        "name": "Eti",
        "phone": "0212 444 00 53",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Eti_logo.png",
        "address": "Uğur Mumcu, 2271. Sk. No:15, 34270 Sultangazi/İstanbul, Türkiye"
    })
    await Firm.create({
        "_id": "65343222b67e9681f937f335",
        "name": "Çetinkaya",
        "phone": "0212 444 00 55",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1Mug9ruTOC1x8LGeNAr-ouWrWm29Z6u91QMU8ZfE&s",
        "address": "B01-Z02 Maslak Büyükdere Cad. Uso Center 245/A, 34396 Sarıyer/İstanbul, Türkiye"
    })

    /* Product */
    const Product = require('../models/product')
    await Product.deleteMany() // !!! Clear collection.
    await Product.create({
        "_id": "65343222b67e9681f937f421",
        "name": "Tommy",
        "categoryId": "65343222b67e9681f937f203",
        "brandId": "65343222b67e9681f937f107",
        "quantity": 0
    })
    await Product.create({
        "_id": "65343222b67e9681f937f422",
        "name": "Link",
        "categoryId": "65343222b67e9681f937f202",
        "brandId": "65343222b67e9681f937f123",
        "quantity": 910
    })
    await Product.create({
        "_id": "65343222b67e9681f937f423",
        "name": "Cola Turka",
        "categoryId": "65343222b67e9681f937f202",
        "brandId": "65343222b67e9681f937f123",
        "quantity": 750
    })
    await Product.create({
        "_id": "65343222b67e9681f937f426",
        "name": "Rondo",
        "categoryId": "65343222b67e9681f937f201",
        "brandId": "65343222b67e9681f937f123",
        "quantity": 900
    })
    await Product.create({
        "_id": "65343222b67e9681f937f427",
        "name": "Iphone 14 Pro",
        "categoryId": "65343222b67e9681f937f204",
        "brandId": "65343222b67e9681f937f131",
        "quantity": 0
    })

    /* Purchase */
    const Purchase = require('../models/purchase')
    await Purchase.deleteMany() // !!! Clear collection.
    await Purchase.create({
        "_id": "65343222b67e9681f937f513",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f304",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f422",
        "quantity": 1000,
        "price": 20
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f514",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f304",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f423",
        "quantity": 1000,
        "price": 30
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f516",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f304",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f426",
        "quantity": 1000,
        "price": 5
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f519",
        "userId": "65343222b67e9681f937f002",
        "firmId": "65343222b67e9681f937f333",
        "brandId": "65343222b67e9681f937f104",
        "productId": "65343222b67e9681f937f422",
        "quantity": 10,
        "price": 100
    })
    await Purchase.create({
        "_id": "65343222b67e9681f937f520",
        "userId": "65343222b67e9681f937f001",
        "firmId": "65343222b67e9681f937f305",
        "brandId": "65343222b67e9681f937f131",
        "productId": "65343222b67e9681f937f427",
        "quantity": 10,
        "price": 2500
    })

    /* Sale */
    const Sale = require('../models/sale')
    await Sale.deleteMany() // !!! Clear collection.
    await Sale.create({
        "_id": "65343222b67e9681f937f614",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f422",
        "quantity": 100,
        "price": 30
    })
    await Sale.create({
        "_id": "65343222b67e9681f937f615",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f423",
        "quantity": 250,
        "price": 40
    })
    await Sale.create({
        "_id": "65343222b67e9681f937f617",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f123",
        "productId": "65343222b67e9681f937f426",
        "quantity": 100,
        "price": 6
    })
    await Sale.create({
        "_id": "65343222b67e9681f937f624",
        "userId": "65343222b67e9681f937f001",
        "brandId": "65343222b67e9681f937f131",
        "productId": "65343222b67e9681f937f427",
        "quantity": 10,
        "price": 3500
     })

    /* Finished */
    console.log('* Synchronized.')
}