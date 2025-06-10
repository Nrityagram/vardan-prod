const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const client = require("../utils/sanityClient")
const urlFor = require("../utils/imageUrl");
const serializers = require("../utils/serializers");

const pageSettings = require("../utils/pageSettings")


function generateMarkdownPage(ngPage) {
    // set all flags to false
    pageSettings.initialise()

    let markdownPage = {}

    if (ngPage.mastheadImageDesk) {
        const mastheadImageDesk = new Object()
        mastheadImageDesk.imgSource = urlFor(ngPage.mastheadImageDesk).width(1600).height(876).url()
        if (ngPage.mastheadImageDeskCredit) {
            mastheadImageDesk.credit = ngPage.mastheadImageDeskCredit
        }
        if (ngPage.mastheadImageDeskAlt) {
            mastheadImageDesk.alt = ngPage.mastheadImageDeskAlt
        }

        let mastheadImagesCredits, mastheadImageSources

        // check for tablet and mobile images
        if (ngPage.mastheadImagesScreenTypes?.length > 0) {
            const keys = ngPage.mastheadImagesScreenTypes
            const credits = ngPage.mastheadImagesCredit
            const keyCreditPairs = keys.map((key, index) => [ key, credits[ index ] ])
            // {"tablet": "credit for tablet", "mobile": "credit for mobile"}
            mastheadImagesCredits = Object.fromEntries(keyCreditPairs)
            const imgSources = ngPage.mastheadImageSources
            const keyImagePairs = keys.map((key, index) => [ key, imgSources[ index ] ])
            // {"tablet": "asset + props of tablet img", "mobile": "asset + props of mobile img"}
            mastheadImageSources = Object.fromEntries(keyImagePairs)

            if (!keys.includes("tablet")) {
                mastheadImagesCredits.tablet = mastheadImagesCredits.mobile
                mastheadImageSources.tablet = mastheadImageSources.mobile
            }
            if (!keys.includes("mobile")) {
                mastheadImagesCredits.mobile = mastheadImagesCredits.tablet
                mastheadImageSources.mobile = mastheadImageSources.tablet
            }
            // crop the images for tablet and mobile and get the URL of final image
            mastheadImageSources.tablet = urlFor(mastheadImageSources.tablet).width(768).height(1024).url()
            mastheadImageSources.mobile = urlFor(mastheadImageSources.mobile).width(425).height(768).url()
        } else {
            // No images for tablet and mobile specified
            // Use the Desk Image and resize for tablet and mobile
            mastheadImagesCredits = new Object()
            mastheadImagesCredits.tablet = mastheadImageDesk.credit
            mastheadImagesCredits.mobile = mastheadImageDesk.credit

            mastheadImageSources = new Object()
            mastheadImageSources.tablet = urlFor(ngPage.mastheadImageDesk).width(768).height(1024).url()
            mastheadImageSources.mobile = urlFor(ngPage.mastheadImageDesk).width(425).height(768).url()
        }

        markdownPage = {
            title: ngPage.title,
            slug: ngPage.slug,
            mastheadImageDesk: mastheadImageDesk,
            mastheadImagesSources: mastheadImageSources,
            mastheadImagesCredits: mastheadImagesCredits
        }

    } else {
        markdownPage = {
            title: ngPage.title,
            slug: ngPage.slug,
        }
    }

    if (ngPage.contentBlocks) {
        let contentBlocks = []

        ngPage.contentBlocks.forEach((block) => {
            const content = BlocksToMarkdown(block.content, {
                serializers,
                ...client.config(),
            })

            const singleBlock = {
                content,
                bgcolour: block.bgColour ? block.bgColour : "",
                anchorId: block.anchorId ? block.anchorId : ""
            }
            contentBlocks.push(singleBlock)
        })
        markdownPage.contentBlocks = contentBlocks
        markdownPage.pageSettings = pageSettings.getAll()
    }
    // console.dir(markdownPage.pageSettings)

    return markdownPage

}

async function loadPages() {
    const pages = await client.fetch(
        '*[_type=="page"]{ title, "slug":slug.current, "mastheadImageDeskCredit":mastheadImageDesk.credit, "mastheadImageDeskAlt":mastheadImageDesk.alt, mastheadImageDesk, "mastheadImagesCredit": mastheadImages[].credit, "mastheadImagesScreenTypes": mastheadImages[].screensize, "mastheadImageSources": mastheadImages[], contentBlocks[]{"bgColour":bgColour.label, "anchorId":anchorLinkName, content[]{..., _type=="pictureCards"=>{"cards":@.cards[]{...,"credit":@.credit,"alt":@.alt,"slug":@.pageReference->slug,"cardTitle":@.cardTitle,"cardSubtitle":@.cardSubtitle}}, _type=="redButton"=>{...,"slug":@.pageReference->slug, "modalId":@._key, "modalWindow":@.modalWindow{modalTitle, content[]{..., markDefs[]{..., _type=="intlink"=>{..., "slug":@.pageReference->slug}}}}}, _type=="radioButtonList"=>{..., "options":@.options[]{...,"slug":@.pageReference->slug}}, markDefs[]{..., _type=="intlink"=>{...,"slug":@.pageReference->slug}, _type=="popuplink"=>{..., "modalId":@._key, "modalWindow":@.modalWindow{modalTitle, content[]{..., markDefs[]{...,_type=="intlink"=>{..., "slug":@.pageReference->slug}}}}}}, children[]{...}}}}'
    ).catch((err) => console.error(err));

    const markdownResult = pages.map(generateMarkdownPage)

    return markdownResult
}

module.exports = loadPages;