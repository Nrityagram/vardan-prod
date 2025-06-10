const settings = new Object()

module.exports = {
    initialise: function () {
        settings.sliderOnPage = false
        settings.radioButtonsOnPage = false
        settings.gismapOnPage = false
        settings.youtubeOnPage = false
        settings.marqueeOnPage = false
        settings.timelineOnPage = false
        settings.scrollToTop = false
    },
    setSlider: function () {
        settings.sliderOnPage = true
    },
    setRadio: function () {
        settings.radioButtonsOnPage = true
    },
    setGismap: function () {
        settings.gismapOnPage = true
    },
    setYoutube: function () {
        settings.youtubeOnPage = true
    },
    setMarquee: function () {
        settings.marqueeOnPage = true
    },
    setTimeline: function () {
        settings.timelineOnPage = true
    },
    setScrollToTop: function () {
        settings.scrollToTop = true
    },
    getAll: function () {
        return {
            "slider": settings.sliderOnPage,
            "radio": settings.radioButtonsOnPage,
            "gismap": settings.gismapOnPage,
            "youtube": settings.youtubeOnPage,
            "marquee": settings.marqueeOnPage,
            "timeline": settings.timeline,
            "scrollToTop": settings.scrollToTop,
        }
    }
};