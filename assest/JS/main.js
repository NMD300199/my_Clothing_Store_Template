var myList = document.querySelector('.list');
var myMenu = document.querySelector('.navbar-child');
var myExited = document.querySelector('.exit') 
var myJane = document.querySelectorAll('.navbar-jane');
var myJaneChild = document.querySelectorAll('.navbar-jane-child');
var myHover = document.querySelectorAll('.open-btn');
var myBtn = document.querySelectorAll('.btn');
myList.onclick = function() {
    myMenu.classList.remove('close')
}

myExited.onclick = function() {
    myMenu.classList.add('close')
}

for (var i = 0; i < myJane.length; i++) {
    myJane[i].onclick = function(e) {
        for (var j = 0; j < myJaneChild.length; j++) {
            myJaneChild[j].classList.toggle('close')
        }
    }
}

// for (var i = 0; i < myHover.length; i++) {
//     myHover[i].onmouseover = function() {
//         for (var j = 0; j < myBtn.length; j++) {
//             myBtn[j].classList.toggle('close')
//         }
//     }
// }

// myHover.onmouseover = function() {
//     myBtn.classList.toggle('close')
// }