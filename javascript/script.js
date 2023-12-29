document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
      header.classList.add('scroll')
    }
    else {
      header.classList.remove('scroll')
    }
})

document.addEventListener('scroll', () => {
  const header = document.querySelector("#myList");

  if (window.scrollY > 0) {
    header.classList.add('scroll')
  }
  else {
    header.classList.remove('scroll')
  }
})

icons.addEventListener("click", () => {
  nav.classList.toggle("active")
})