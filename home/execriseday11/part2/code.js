const modalBtn = document.querySelector('.modalhand');
const barBtn = document.querySelector('.content-select')
const closeBtn = document.querySelector('.modal-header-close')
const contentBtn = document.querySelector('.modal-content')
const downBtn = document.querySelector('.modal-item-down')
function opened() {
    modalBtn.classList.add('open');

}
function closed() {
    modalBtn.classList.remove('open');
    document.querySelector('.modal-item-body').classList.remove("open");

}
barBtn.addEventListener('click', opened);
closeBtn.addEventListener('click', closed);
modalBtn.addEventListener('click', closed);
contentBtn.addEventListener('click', function (e) {
    e.stopPropagation();
})
// sản phẩm down trong phần nav thu gọn

downBtn.addEventListener('click', function () {

    document.querySelector('.modal-item-body').classList.toggle("open");

})

