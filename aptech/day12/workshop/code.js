const barBtn = document.querySelector('.barToggle');
const navBar = document.querySelector('.navBar');
barBtn.addEventListener('click', function () {
    console.log('<<=== ok ===>>', );
    navBar.classList.toggle('d-small-none');
  })
