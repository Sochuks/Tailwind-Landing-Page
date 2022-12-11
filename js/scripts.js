const btn = document.getElementById('menu-icon')
const nav = document.getElementById('menu')

btn.addEventListener("click", () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
