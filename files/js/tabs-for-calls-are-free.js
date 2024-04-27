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
        let deliveryInfo = document.getElementById('delivery-info')
        let selectNovayaPoshota = document.getElementById('select-novaya-poshota')
        let addressField = document.getElementById('address-field')
        let deliveryDepartment = document.getElementById('delivery-department')
        let deliveryByCourier = document.getElementById('delivery-by-courier')
        deliveryByCourier.addEventListener('click', () => {
            selectNovayaPoshota.classList.add('hidden')
            addressField.classList.remove('hidden')
            deliveryInfo.classList.add('hidden')
        })
        deliveryDepartment.addEventListener('click', () => {
            selectNovayaPoshota.classList.remove('hidden')
            addressField.classList.add('hidden')
            deliveryInfo.classList.remove('hidden')
        })
    }
})