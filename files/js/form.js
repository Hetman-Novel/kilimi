$(document).ready(function() {

	$(".js-scroll-top").on("click", function() {
        $("html,body").animate({scrollTop:0}, 100)
    });

});

document.addEventListener("DOMContentLoaded", function() {
    
    let toOrderForm = document.querySelector('.to-order__form')
    if (toOrderForm) {

        // Stage 1

        // Tabs
        let tab1stage1 = document.getElementById('tab-1-stage-1')
        let tab2stage1 = document.getElementById('tab-2-stage-1')
        let stage1tabContent1 = document.getElementById('stage-1-tab-content-1')
        let stage1tabContent2 = document.getElementById('stage-1-tab-content-2')
        tab1stage1.addEventListener('click', () => {
            tab2stage1.classList.remove('tab-active')
            tab1stage1.classList.add('tab-active')
            stage1tabContent2.classList.remove('tab-content-active')
            stage1tabContent1.classList.add('tab-content-active')
        })
        tab2stage1.addEventListener('click', () => {
            tab1stage1.classList.remove('tab-active')
            tab2stage1.classList.add('tab-active')
            stage1tabContent1.classList.remove('tab-content-active')
            stage1tabContent2.classList.add('tab-content-active')
        })

        // Stage 2

        // Tabs
        let tab1stage2 = document.getElementById('tab-1-stage-2')
        let tab2stage2 = document.getElementById('tab-2-stage-2')
        let stage2tabContent1 = document.getElementById('stage-2-tab-content-1')
        let stage2tabContent2 = document.getElementById('stage-2-tab-content-2')
        tab1stage2.addEventListener('click', () => {
            tab2stage2.classList.remove('tab-active')
            tab1stage2.classList.add('tab-active')
            stage2tabContent2.classList.remove('tab-content-active')
            stage2tabContent1.classList.add('tab-content-active')
        })
        tab2stage2.addEventListener('click', () => {
            tab1stage2.classList.remove('tab-active')
            tab2stage2.classList.add('tab-active')
            stage2tabContent1.classList.remove('tab-content-active')
            stage2tabContent2.classList.add('tab-content-active')
        })

        // Stage
        let toOrderDigitalStages = document.querySelector('.to-order__digital-stages')
        let toStageTwo = document.getElementById('to-stage-two')
        let toStageThree = document.getElementById('to-stage-three')
        let blockStageOne = document.getElementById('block-stage-one')
        let blockStageTwo = document.getElementById('block-stage-two')
        const blockStageThree = document.getElementById('block-stage-three')

        toStageTwo.addEventListener('click', () => {
            toOrderDigitalStages.classList.remove('stage-one-active')
            toOrderDigitalStages.classList.add('stage-two-active')
            blockStageOne.classList.remove('show-stage')
            blockStageTwo.classList.add('show-stage')

        })
        toStageThree.addEventListener('click', () => {
            toOrderDigitalStages.classList.remove('stage-two-active')
            toOrderDigitalStages.classList.add('stage-three-active')
            blockStageTwo.classList.remove('show-stage')
            blockStageThree.classList.add('show-stage')
        })

        // Delivery type
        let wrapSelects = document.getElementById('wrap-selects')
        document.getElementById('delivery-by-courier').addEventListener('click', () => {
            wrapSelects.classList.add('select-delivery-by-courier')
        })
        document.getElementById('delivery-department').addEventListener('click', () => {
            wrapSelects.classList.remove('select-delivery-by-courier')
        })
    }

    // Ajax JavaScript
    let sendingToOrderForm = document.getElementById("sending-to-order-form")
    if (sendingToOrderForm) {
        sendingToOrderForm.addEventListener("submit", function(event) {
            event.preventDefault();

            document.querySelector('.to-order__after').classList.remove('hidden')
            document.querySelector('.to-order__before').classList.add('hidden')

        })
    }
})

