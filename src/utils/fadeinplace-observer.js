const fadeinplaceElements = document.querySelectorAll('.fade-in-place')

const fadeInPlaceOptions = {
    threshold: 0.2
}

const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return
    } else {
        entry.target.classList.add('appear')
        fadeInOnScroll.unobserve(entry.target)
    }
})
}, fadeInPlaceOptions)

fadeinplaceElements.forEach(fadeinplace => {
    fadeInOnScroll.observe(fadeinplace)
})
