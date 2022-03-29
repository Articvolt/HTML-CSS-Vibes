let _button = document.querySelector("#burger")

let _nav = document.querySelector(".nav")

_button.addEventListener('click', function() {
    _nav.classList.toggle('active')
})