const flowElemList = document.getElementsByClassName('flow')
const wrapperFlowElemList = document.querySelectorAll('.wrapper.flow')
const imagePlusList = document.getElementsByClassName('image-plus')

for (const flowElem of flowElemList) {
    const nextElem = flowElem.nextElementSibling
    // get all flow elements whose next sibling is owl-carousel
    if (nextElem && nextElem.classList.contains('owl-carousel')) {
        flowElem.classList.add('flow-flushbottom')
        // Add flow-flushtop to the element following the owl-carousel
        const elemAfterCarousel = nextElem.nextElementSibling
        elemAfterCarousel.classList.add('flow-flushtop')
    }
}

// if two immediate siblings have class="wrapper flow"
// add flow-flushbottom to the first sibling
for (const wrapFlowElem of wrapperFlowElemList) {
    const nextElem = wrapFlowElem.nextElementSibling
    if (nextElem && nextElem.classList.contains('wrapper') && nextElem.classList.contains('flow')) {
        wrapFlowElem.classList.add('flow-flushbottom')
    }

    // check if current wrapper.flow element is empty
    if (wrapFlowElem.innerHTML.trim().length === 0) {
        wrapFlowElem.remove()
    }
}

// if a single image is preceeded by H1, H2, H3 then reduce top-flow for the image
for (const imgPlusElem of imagePlusList) {
    const prevElem = imgPlusElem.previousElementSibling

    if (prevElem && (prevElem.tagName == 'H1' || prevElem.tagName == 'H2' || prevElem.tagName == 'H3')) {
        imgPlusElem.classList.remove('top-flow')
        imgPlusElem.classList.add('top-flow-reduce')
    }
}


