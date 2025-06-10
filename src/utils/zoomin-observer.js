const zoominElements = document.querySelectorAll('.zoom-in')

const zoominOptions = {
    threshold: 0.1
}

const zoomOnScroll = new IntersectionObserver((entries, zoomOnScroll) => {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return
    } else {
        entry.target.classList.add('appear')
        zoomOnScroll.unobserve(entry.target)
    }
})
}, zoominOptions)

zoominElements.forEach(zoomer => {
    zoomOnScroll.observe(zoomer)
})
