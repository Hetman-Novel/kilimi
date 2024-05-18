let parentBlock = document.querySelector('.same-width-tab');
if (parentBlock) {
    let tabs = parentBlock.querySelectorAll('.tab');
    let maxWidth = 0;
    tabs.forEach(function(tab) {
        let tabWidth = tab.offsetWidth;
        if (tabWidth > maxWidth) {
            maxWidth = tabWidth;
        }
    });
    tabs.forEach(function(tab) {
        tab.style.width = maxWidth + 'px';
    });
}

document.addEventListener("DOMContentLoaded", function () {
	var parentTabs = document.querySelectorAll('.tabs__wrap-tab .tabs__tab');

	parentTabs.forEach(function (parentTab) {
		parentTab.addEventListener('click', function () {
			var parentTabId = this.getAttribute('data-tab');
			var correspondingParentTabContent = document.querySelector('.tabContent[data-tabcontent="' + parentTabId + '"]');

			// Убираем активные классы у всех родительских вкладок и контентов
			document.querySelectorAll('.tabs__wrap-tab .tabs__tab').forEach(function (tab) {
				tab.classList.remove('tab-active');
			});
			document.querySelectorAll('.tabContent').forEach(function (content) {
				content.classList.remove('content-active');
			});

			// Добавляем активные классы к выбранной родительской вкладке и контенту
			this.classList.add('tab-active');
			correspondingParentTabContent.classList.add('content-active');
		});
	});

	var subTabs = document.querySelectorAll('#subTabs .subTab');

	subTabs.forEach(function (subTab) {
		subTab.addEventListener('click', function (event) {
			event.stopPropagation(); // Останавливаем всплытие события

			var subTabId = this.getAttribute('data-tab');
			var correspondingSubTabContent = document.querySelector('#subTabs .subTabContent[data-tabcontent="' + subTabId + '"]');
			var tabsWrapTab = document.querySelector('#subTabs .tabs__wrap-tab');

			// Удаляем предыдущий класс у блока tabs__wrap-tab
			tabsWrapTab.classList.forEach(function(className) {
				if(className.startsWith('step-')) {
					tabsWrapTab.classList.remove(className);
				}
			});

			// Добавляем класс в зависимости от выбранной суб-вкладки
			tabsWrapTab.classList.add('step-' + subTabId);

			// Убираем активные классы у всех суб-вкладок и контентов
			document.querySelectorAll('#subTabs .subTab').forEach(function (subTab) {
				subTab.classList.remove('subTab-active');
			});
			document.querySelectorAll('.subTabContent').forEach(function (content) {
				content.classList.remove('subContent-active');
			});

			// Добавляем активные классы к выбранной суб-вкладке и контенту
			this.classList.add('subTab-active');
			correspondingSubTabContent.classList.add('subContent-active');
		});
	});

});