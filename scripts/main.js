
// // 获取标题的引用
// let myHeading = document.querySelector('h1');
// // 修改文本
// myHeading.textContent = 'Hello World';

// 获取 <img> 元素的引用
let myImage = document.querySelector('img');
//  绑定其事件与对应的匿名函数
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/彩色艺术.jpg') {
        myImage.setAttribute('src', 'images/船.jpg');
    } else {
        myImage.setAttribute('src', 'images/彩色艺术.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        // 将数据存储到浏览器中，setItem() 创建一个 'name' 数据项
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}