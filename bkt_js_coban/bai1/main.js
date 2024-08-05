//cau1: Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
console.log("cau1.1:");

function getStringHasMaxLength(arr) {
    if (arr.length === 0) return [];

    // Tìm độ dài lớn nhất trong mảng
    let maxLength = 0;
    for (let str of arr) {
        if (str.length > maxLength) {
            maxLength = str.length;
        }
    }

    // Lọc các chuỗi có độ dài bằng với độ dài lớn nhất
    return arr.filter(str => str.length === maxLength);
}

// Ví dụ 
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd'])); //trả về 2 chuỗi có độ dài lớn nhất là: ['aba', 'vcd']

//cau 2: Cho mảng users
const users = [{
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];
//cau2.1:  Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function getUsersByAgeAndStatus(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true);
}
//ví dụ:
console.log("cau2.1");
const filteredUsers = getUsersByAgeAndStatus(users);
console.log(filteredUsers);


//cau2.2: Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function sortUsersByAge(users) {
    return users.slice().sort((a, b) => a.age - b.age);
}
//ví dụ:
console.log("cau2.2");
const sortedUsers = sortUsersByAge(users);
console.log(sortedUsers);

//cau3:
function getCountElement(arr) {
    // Khởi tạo một đối tượng rỗng để lưu kết quả
    let countObj = {};

    // Duyệt qua từng phần tử trong mảng
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        // Nếu phần tử đã tồn tại trong đối tượng kết quả, tăng giá trị lên 1
        if (countObj[element]) {
            countObj[element]++;
        } else {
            // Nếu phần tử chưa tồn tại, gán giá trị ban đầu là 1
            countObj[element] = 1;
        }
    }

    return countObj;
}

// Ví dụ
console.log("cau3");
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));