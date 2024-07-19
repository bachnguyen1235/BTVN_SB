//bai1
function calculateFactorial(n) {
    if (n < 0) {
        console.log("hay nhap so nguyen duong");
    }
    if (n == 1 || n == 0) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;

    }
    return result;
}
//bai2
function reverseString(str) {
    let splitString = str.split("");
    return splitString.reverse().join("");
}
//bai3
function chao(code) {
    switch (code) {
        case "VN":
            console.log("Xin chào");
            break;
        case "TQ":
            console.log("ní hảo");
            break;
        case "LAOS":
            console.log("xa wua di ca");
            break;
        case "EN":
            console.log("HELLO");
            break;
        case "CAM":
            console.log("em chào anh, anh trúng thưởng 1 con SH");
            break;
    }
    //bai4
    function cutSring(str) {
        while (str.lenght < 15) {
            console.log("hay nhap nhieu hon 15 ki tu");
            return;
        }
        let strCut = str.substring(10);
        return strCut + "...";
    }
}