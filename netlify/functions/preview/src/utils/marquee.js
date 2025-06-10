const marquee = document.querySelector('.marquee')

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//     addAnimation();
// }
addAnimation();
function addAnimation() {
  marquee.setAttribute("data-animated", true)

  const marqueeContent = marquee.querySelector('.marquee-content')
  const marqueeChildren = Array.from(marqueeContent.children)

  marqueeChildren.forEach(item => {
    const duplicatedItem = item.cloneNode(true)
    // hide the duplicated item from the screen reader
    duplicatedItem.setAttribute("aria-hidden", true)
    marqueeContent.appendChild(duplicatedItem)
  })
}

// Click and Drag to Scroll
// Wes Bos' tutorial https://www.youtube.com/watch?v=C9EWifQ5xqA
// Your codepen example https://codepen.io/achanda007/pen/ExrGMyr
const marqueeContent = marquee.querySelector('.marquee-content')
let isDown = false
let startX
let scrollLeft

marqueeContent.addEventListener('mousedown', (e) => {
  isDown = true
  marqueeContent.classList.add('active')
  startX = e.pageX - marquee.offsetLeft
  scrollLeft = marquee.scrollLeft
})

marqueeContent.addEventListener('mouseleave', () => {
  isDown = false
  marqueeContent.classList.remove('active')
})

marqueeContent.addEventListener('mouseup', () => {
  isDown = false
  marqueeContent.classList.remove('active')
})

marqueeContent.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - marquee.offsetLeft
  const walk = x - startX
  marquee.scrollLeft = scrollLeft - walk

})