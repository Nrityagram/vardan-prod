const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const urlFor = require("../utils/imageUrl");
const client = require("../utils/sanityClient")
const serializers = require("../utils/serializersSimpleContent")

const path = require("path");
const dir = require("../../eleventy.config").dir
const eleventyImage = require("@11ty/eleventy-img")

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

module.exports = {
    types: {
        a11yImage: async ({ node }) => {
            const image = new Object()
            image.url = urlFor(node).url()
            image.credit = node.credit
            image.caption = node.imgcaption
            image.alt = node.imgalt

            const widths = [ "560", "768", "1046" ]
            const formats = [ "avif", "webp" ]
            const sizes = "(max-width: 800px) 200px, 50vw"
            const loadingOption = "lazy"

            let metadata = await eleventyImage(image.url, {
                widths: widths,
                formats,
                outputDir: path.join(dir.output, "img"),
            })
            const imageAttributes = {
                "alt": image.alt,
                sizes,
                loading: loadingOption,
                decoding: "async",
            }

            const imgHtml = await eleventyImage.generateHTML(metadata, imageAttributes)

            return `<div class="image-plus">${imgHtml}<div class="credit" data-image-credit="${image.credit}" ></div></div>`

            // ************ NOT WORKING ************
            // [object Promise] is rendered on the page
            // You are returning before waiting for the async eleventyImage function to finish
            // ************
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