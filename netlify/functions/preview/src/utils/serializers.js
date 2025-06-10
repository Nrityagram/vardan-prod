const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const urlFor = require("../utils/imageUrl");
const client = require("../utils/sanityClient")
const serializers = require("../utils/serializersSimpleContent")
const serializersTimeline = require("../utils/serializersTimelineContent")

const pageSettings = require("../utils/pageSettings")


function formatPopupContent(str) {
    // Order is important - first h4 then h3 then h2 and last h1

    //  Replace substrings that begin with #### and end with a newline
    str = str.replace(/####(.*)\n/g, '<h4>$1</h4>')

    // Replace substrings that begin with ### and end with a newline
    str = str.replace(/###(.*)\n/g, '<h3>$1</h3>')

    // Replace substrings that begin with ## and end with a newline
    str = str.replace(/##(.*)\n/g, '<h2>$1</h2>')

    // Replace substrings that begin with a single # and end with a newline
    str = str.replace(/#(.*)\n/g, '<h1>$1</h1>')

    return str
}

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

// asset._ref:image-2be3816058af1a2aedbbae41c381def16ee052ec-1079x1095-jpg
const decodeAssetId = id => {
    const [ , assetId, dimensions, format ] = pattern.exec(id)
    const [ width, height ] = dimensions.split("x").map(v => parseInt(v, 10))

    return {
        assetId,
        dimensions: { width, height },
        format,
    }
}

module.exports = {
    types: {
        a11yImage: ({ node }) => {
            const image = new Object()
            image.credit = node.credit
            image.caption = node.imgcaption
            image.alt = node.imgalt
            image.assets = decodeAssetId(node.asset._ref)

            const widths = { "mob": 560, "tab": 768, "desk": 1046 }
            const webpURLs = new Object()
            const sizes = "(max-width: 800px) 200px, 50vw"
            const loadingOption = "lazy", decoding = "async"
            const desk_h = image.assets.dimensions.height / image.assets.dimensions.width * widths.desk

            for (const screenKey in widths) {
                webpURLs[ screenKey ] = urlFor(node).format('webp').width(widths[ screenKey ]).url()
            }

            // console.dir(webpURLs)

            return `<div class="image-plus top-flow"><picture><source type="image/webp" srcset="${webpURLs[ "mob" ]} 560w, ${webpURLs[ "tab" ]} 768w, ${webpURLs[ "desk" ]} 1046w" sizes="${sizes}">
            <img alt="${image.alt}" loading="${loadingOption}" decoding="${decoding}" src="${webpURLs[ "mob" ]}" width="${widths[ "desk" ]}" height="${desk_h}"></picture><div class="credit" data-image-credit="${image.credit}" ></div></div>`
        },
        // a11yImageTimeline: ({ node }) => {

        // },
        imageSlider: ({ node }) => {
            pageSettings.setSlider()
            // const aspectRatio = 1046 / 618 // Fixed for slider images
            const widths = { "mob": 425, "tab": 768, "desk": 1600 }
            // ht = w / aspectRatio
            const heights = { "mob": 251, "tab": 454, "desk": 945 }
            const images = node.images
            const imageDetailList = new Array()
            const sizes = "(max-width: 800px) 200px, 50vw"
            const loadingOption = "lazy", decoding = "async"

            images.forEach(image => {
                const webpURLs = new Object()
                const credit = image.credit ? image.credit : ""
                const alt = image.alt ? image.alt : ""
                const assets = decodeAssetId(image.asset._ref)
                const desk_h = assets.dimensions.height / assets.dimensions.width * widths.desk

                for (const screenKey in widths) {
                    webpURLs[ screenKey ] = urlFor(image).format('webp').width(widths[ screenKey ]).height(heights[ screenKey ]).url()
                }

                const pictureElem = `<div class="item rounded"><picture><source type="image/webp" srcset="${webpURLs[ "mob" ]} 425w, ${webpURLs[ "tab" ]} 768w, ${webpURLs[ "desk" ]} 1600w" sizes="${sizes}"><img alt="${alt}" loading="${loadingOption}" decoding="${decoding}" src="${webpURLs[ "mob" ]}" width="${widths[ "desk" ]}" height="${desk_h}"></picture><div class="photo-credit">Photo : ${credit}</div></div>`

                imageDetailList.push(pictureElem)
            });

            const sliderImagesHTML = imageDetailList.join('')
            // console.log(sliderImagesHTML)

            return `</div><div class="owl-carousel ultra-wide owl-theme">${sliderImagesHTML}</div><div class="wrapper flow">`
        },
        pictureCards: ({ node }) => {
            // const aspectRatio = 559 / 359 // Fixed for slider images
            const widths = { "tab": 560, "desk": 768 }
            // ht = w / aspectRatio
            const heights = { "tab": 359, "desk": 492 }
            const cards = node.cards
            const cardDetailList = new Array()
            const sizes = "(max-width: 800px) 200px, 50vw"
            const loadingOption = "lazy", decoding = "async"

            cards.forEach(card => {
                const webpURLs = new Object()

                const cardTitle = card.cardTitle ? card.cardTitle : ""
                const cardSubtitle = card.cardSubtitle ? card.cardSubtitle : ""
                const onClickOption = card.onClickOption
                const credit = card.credit ? card.credit : ""
                const alt = card.alt ? card.alt : ""

                const assets = decodeAssetId(card.asset._ref)
                const desk_h = assets.dimensions.height / assets.dimensions.width * widths.desk

                for (const screenKey in widths) {
                    webpURLs[ screenKey ] = urlFor(card).format('webp').width(widths[ screenKey ]).height(heights[ screenKey ]).url()
                }

                const outerHTML = onClickOption == "intlink" ? `<div class="image-plus card" onClick="location.href='/${card.slug.current}';">` : `<div class="image-plus card" onClick="location.href='${card.url}';">`

                const pictureElem = `${outerHTML}<picture><source type="image/webp" srcset="${webpURLs[ "tab" ]} 560w, ${webpURLs[ "desk" ]} 768w" sizes="${sizes}"><img alt="${alt}" loading="${loadingOption}" decoding="${decoding}" src="${webpURLs[ "tab" ]}" width="${widths[ "desk" ]}" height="${desk_h}"></picture><div class="credit" data-image-credit="${credit}"></div><div class="card-title">${cardTitle}<div class="sub-title">${cardSubtitle}</div></div></div>`

                cardDetailList.push(pictureElem)
            });

            let pictureCardsHtml = ''
            if (cardDetailList.length > 1) {
                pictureCardsHtml = `</div><div class="wrapper ultra-wide flow"><div class="even-columns"><div class="left-column">${cardDetailList[ 0 ]}</div><div class="right-column">${cardDetailList[ 1 ]}</div></div></div><div class="wrapper flow">`
            } else {
                pictureCardsHtml = `</div><div class="wrapper ultra-wide flow"><div class="center-column">${cardDetailList[ 0 ]}</div></div><div class="wrapper flow">`
            }

            return pictureCardsHtml
        },
        redButton: ({ node }) => {
            const btnText = node.buttonText
            const onClickOption = node.onClickOption

            let btnHtml = ''
            switch (onClickOption) {
                case 'extlink':
                    btnHtml = `<div class="button red-plastic center" onClick="location.href='${node.url}';"><div class="glare"></div>${btnText}</div>`
                    break;
                case 'intlink':
                    btnHtml = `<div class="button red-plastic center" onClick="location.href='/${node.slug?.current}';"><div class="glare"></div>${btnText}</div>`
                    break;
                case 'paypallink':
                    btnHtml = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="center"><input type="hidden" name="cmd" value="_s-xclick" /><input type="hidden" name="hosted_button_id" value="${node.paypalButtonId}" /><input type="image" src="https://res.cloudinary.com/nrityagram/image/upload/v1701072823/ng-donate-now-paypal_zg0qwu.png" border="0" name="submit" width="230" alt="PayPal – The safer, easier way to pay online!" /><img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" /></form>`
                    break;
                case 'modal':
                    const { modalId, modalWindow } = node
                    const modalTitle = modalWindow.modalTitle
                    const modalContent = BlocksToMarkdown(modalWindow.content, {
                        serializers,
                        ...client.config()
                    })

                    const modifiedModalContent = formatPopupContent(modalContent)

                    btnHtml = `<div class="open-modal modal-button" id="openModal-${modalId}"><div class="button red-plastic center"><div class="glare"></div>${btnText}</div></div><dialog id="m${modalId}" class="modal"><div class="wrapper flow flow-flushtop flow-flushbottom"><div class="modal-header"><h4>${modalTitle}</h4><div class="close-button" id="closeModal-${modalId}" aria-label="close">&#215;</div></div><div class="modal-content flow-inbetween">${modifiedModalContent}</div></div></dialog><script type="text/javascript">const modal_${modalId} = document.querySelector('#m${modalId}');const openModal_${modalId} = document.querySelector('#openModal-${modalId}');const closeModal_${modalId} = document.querySelector('#closeModal-${modalId}');openModal_${modalId}.addEventListener('click', () => {modal_${modalId}.showModal();});closeModal_${modalId}.addEventListener('click', () => {modal_${modalId}.close();});</script>`
                    break;
                default:
                    break;
            }
            return btnHtml
        },
        radioButtonList: ({ node }) => {
            pageSettings.setRadio()

            const options = node.options
            const optionListName = 'radioOptions-'.concat(node._key)
            const optionDetailList = new Array()
            const optionKeyList = new Array()
            const onClickActionList = new Array()

            for (const option of options) {
                const key = 'option-'.concat(option._key)
                const optionText = option.optionText

                const optionHtml = `<div><label for="${key}" class="radio"><input type="radio" value="${key}" name="${optionListName}" class="radio-options-${node._key}" id="${key}" />${optionText}</label></div>`

                const link = option.actionType == 'intlink' ? '/'.concat(option.slug?.current) : option.url
                const optionCase = `case '${key}': location.href = "${link}"; break;`

                onClickActionList.push(optionCase)
                optionKeyList.push(key)
                optionDetailList.push(optionHtml)
            }

            const allSwitchCases = onClickActionList.join('')
            const radioSwitchCaseJS = `<script type="text/javascript"> const allOptions_${node._key} = document.querySelectorAll('.radio-options-${node._key}'); allOptions_${node._key}.forEach((targetOption) => { targetOption.addEventListener('click', () => { switch (targetOption.id) {${allSwitchCases}}});}); </script>`

            const optionsListHtml = optionDetailList.join('')

            return `<div class="flow-inbetween">${optionsListHtml}</div>${radioSwitchCaseJS}`
        },
        ngTable: ({ node }) => {
            if (node.tableContent) {
                const rowsHtml = new Array()
                for (const row of node.tableContent.rows) {
                    const rowHtml = new Array()
                    for (let index = 0; index < row.cells.length; index++) {
                        const element = row.cells[ index ];
                        const cellHtml = index < 1 ? `<td><b>${element}</b></td>` : `<td>${element}</td>`
                        rowHtml.push(cellHtml)
                    }
                    const singleRowCellsHtml = rowHtml.join('')
                    const singleRowHtml = `<tr>${singleRowCellsHtml}</tr>`
                    rowsHtml.push(singleRowHtml)
                }
                const allRowsHtml = rowsHtml.join('')
                return `<table class="basic">${allRowsHtml}</table>`
            } else {
                return ``
            }
        },
        timeline: ({ node }) => {
            pageSettings.setTimeline()
            const eventsList = node.timelineArray
            const timelineHtml = new Array()

            for (const event of eventsList) {
                const eventDate = event.timelineEventDate
                // const eventContent = BlocksToMarkdown(event.content, {
                //     serializers,
                //     ...client.config()
                // })
                // console.log(eventDate)
                //     const modifiedEventContent = formatPopupContent(eventContent)
            }

            return `<h3>Timeline goes here. yoohoo</h3>`
        }
    },
    marks: {
        center: ({ mark, children }) => {
            return `<span class="centerflex">${children}</span>`;
        },
        right: ({ mark, children }) => {
            return `<span class="rightflex">${children}</span>`
        },
        semibold: ({ mark, children }) => {
            return `<span style="font-weight: 400">${children}</span>`
        },
        underline: ({ mark, children }) => {
            return `<span class="underline">${children}</span>`
        },
        redtext: ({ mark, children }) => {
            return `<span class="redtext">${children}</span>`
        },
        greytext: ({ mark, children }) => {
            return `<span class="infotext">${children}</span>`
        },
        extlink: ({ mark, children }) => {
            var { url } = mark
            // Get rid of anything following a ? in the link
            url = url.split("?")[ 0 ]
            return `<a href=${url} class="bodylink" target="_blank" rel="noopener noreferer">${children}</a>`
        },
        intlink: ({ mark, children }) => {
            const { slug = {} } = mark
            const href = `/${slug.current}`
            return `<a href=${href} class="bodylink">${children}</a>`
        },
        popuplink: ({ mark, children }) => {
            const { modalId, modalWindow } = mark
            const modalTitle = modalWindow.modalTitle
            const modalContent = BlocksToMarkdown(modalWindow.content, {
                serializers,
                ...client.config()
            })

            const modifiedModalContent = formatPopupContent(modalContent)

            return `<span class="open-modal" id="openModal-${modalId}">
            <a class="bodylink redtext">${children}</a></span><dialog id="m${modalId}" class="modal"><div class="wrapper flow flow-flushtop flow-flushbottom"><div class="modal-header"><h4>${modalTitle}</h4><div class="close-button" id="closeModal-${modalId}" aria-label="close">&#215;</div></div><div class="modal-content flow-inbetween">${modifiedModalContent}</div></div></dialog><script type="text/javascript">const modal_${modalId} = document.querySelector('#m${modalId}');const openModal_${modalId} = document.querySelector('#openModal-${modalId}');const closeModal_${modalId} = document.querySelector('#closeModal-${modalId}');openModal_${modalId}.addEventListener('click', () => {modal_${modalId}.showModal();});closeModal_${modalId}.addEventListener('click', () => {modal_${modalId}.close();});</script>`
        }
    },
    list: ({ type, children }) => {
        // console.dir(type) //-- gives the type of list style, bullet, nobullet,number, etc
        const listStr = children.join('') //remove the , between list items

        switch (type) {
            case 'bullet':
                return `<ul class="basic">${listStr}</ul>`
            case 'nobullet':
                return `<ul class="basic no-bullets">${listStr}</ul>`
            case 'number':
                return `<ol class="basic">${listStr}</ol>`
            default:
                break;
        }
    },
    listItem: ({ node, children }) => {
        // console.log(node.listItem) -- gives the type of list style, bullet, nobullet, numberetc
        return `<li>${children}</li>`
    }
}