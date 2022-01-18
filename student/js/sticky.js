window.onscroll = () => setSticky()

const tabs = document.getElementById('tabs')

const sticky = tabs.offsetTop

const setSticky = () => {
  if (window.pageYOffset >= sticky) {
    tabs.classList.add('sticky')
  } else {
    tabs.classList.remove('sticky')
  }
}
