const accordionList = document.querySelectorAll('.accordion')
const detailsList = document.querySelectorAll('details')

for (const accordion of accordionList) {
    if (accordion.children && accordion.children.length) {
        for (const detail of accordion.children) {
            detail.addEventListener('toggle', (event) => {
                if (detail.open) {
                    // go thru all children of accordion and close any open ones
                    for (const otherDetail of accordion.children) {
                        if (otherDetail !== detail && otherDetail.open) {
                            otherDetail.open = false
                        }
                    }
                    if (detail.dataset.detailsKey) {
                        const imgToHide = document.getElementsByClassName('stacked-img show')[ 0 ]
                        imgToHide.classList.remove('show')
                        imgToHide.classList.add('hide')

                        const imgToShow = document.getElementById(detail.dataset.detailsKey)
                        imgToShow.classList.remove('hide')
                        imgToShow.classList.add('show')
                    }
                }
            })
        }
    }
}

