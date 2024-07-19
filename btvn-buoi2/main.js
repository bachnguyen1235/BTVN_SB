// Danh sách các sản phẩm có trong giỏ hàng
let products = [{
            name: "Iphone 13 Pro Max", // Tên sản phẩm
            price: 3000000, // Giá mỗi sản phẩm
            brand: "Apple", // Thương hiệu
            count: 2, // Số lượng sản phẩm trong giỏ hàng
        },
        {
            name: "Samsung Galaxy Z Fold3",
            price: 41000000,
            brand: "Samsung",
            count: 1,
        },
        {
            name: "IPhone 11",
            price: 15500000,
            brand: "Apple",
            count: 1,
        },
        {
            name: "OPPO Find X3 Pro",
            price: 19500000,
            brand: "OPPO",
            count: 3,
        },
    ]
    //cau1
products.forEach((element, index) => {
    console.log("giỏ hàng số:", (index + 1));
    console.log(element.name);
    console.log(element.price);
    console.log(element.brand);
    console.log(element.count);
});
//cau2
products.forEach(element => {
    console.log("giỏ hàng số:", (index + 1));
    console.log("tổng tiền:", (element.count * element.price));
});
//cau3
products.forEach(element => {
    if (element.brand == "Apple") {
        console.log("sản phẩm của hãng Apple là:", element.name);
    }
});
//cau4
products.forEach(element => {
    console.log("các sản phẩm có giá trị lớn hơn 20000000");
    if (element.price > 20000000) {
        console.log(element.name);
    }
});
//cau5
products.forEach(element => {
    console.log("các sản phẩm có chữ pro trong tên là:");
    if (element.name.toLowerCase().includes("pro")) {
        console.log(element.name);
    }
});
//cau6
console.log("thêm 1 sản phẩm vào trong products");
products.push({
        name: "xiaomi mi 11t pro", // Tên sản phẩm
        price: 3900000, // Giá mỗi sản phẩm
        brand: "Xiaomi", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    })
    //cau7