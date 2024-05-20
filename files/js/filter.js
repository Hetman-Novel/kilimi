document.addEventListener('DOMContentLoaded', function() {

   // Range for price
   function getVals() {
      // Get slider values
      var parent = this.parentNode;
      var slides = parent.getElementsByTagName("input");
      var slide1 = parseFloat( slides[0].value );
      var slide2 = parseFloat( slides[1].value );
      // Neither slider will clip the other, so make sure we determine which is larger
      if(slide1 > slide2) {
         var tmp = slide2; slide2 = slide1; slide1 = tmp;
      }
      var displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
   }
   // Initialize Sliders
   var sliderSections = document.getElementsByClassName("range-slider");
   for(var x = 0; x < sliderSections.length; x++) {
      var sliders = sliderSections[x].getElementsByTagName("input");
      for(var y = 0; y < sliders.length; y++) {
         if(sliders[y].type ==="range") {
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
         }
      }
   }

   // Custom select for Filter
   if (window.matchMedia("(max-width: 1024px)").matches) {
      let showFilter = document.getElementById('show-filter')
      if (showFilter) {
            let closeFilter = document.getElementById('close-filter')
            let catalogFilter = document.querySelector('.catalog__filter')
            showFilter.addEventListener('click', () => {
               catalogFilter.classList.add('show')
               document.body.classList.add('_lock')
            })
            closeFilter.addEventListener('click', () => {
               catalogFilter.classList.remove('show')
               document.body.classList.remove('_lock')
            })
      }
   }
   let customSelect = this.querySelector('.custom-select')
   if (customSelect) {
      if ('ontouchstart' in window) {
         var customSelects = document.querySelectorAll('.custom-select');
         customSelects.forEach(function(customSelect) {
            var customSelectHeader = customSelect.querySelector('.custom-select__header');
            customSelectHeader.addEventListener('click', function(event) {
               customSelects.forEach(function(cs) {
                  if (cs !== customSelect && cs.classList.contains('is-active')) {
                     cs.classList.remove('is-active')
                  }
               })
               customSelect.classList.toggle('is-active')
            })
         })
         document.addEventListener('click', function(event) {
            if (!event.target.closest('.custom-select')) {
               customSelects.forEach(function(customSelect) {
                  customSelect.classList.remove('is-active')
               });
            }
         })
      } else {
         let customSelects = document.querySelectorAll('.custom-select');
         customSelects.forEach(function(customSelect) {
            customSelect.addEventListener('mouseover', function(event) {
               if (!event.target.closest('.custom-select').classList.contains('is-active')) {
                  event.target.closest('.custom-select').classList.add('is-active')
               }
            })
            customSelect.addEventListener('mouseout', function(event) {
               if (!event.relatedTarget || !event.relatedTarget.closest('.custom-select')) {
                  event.target.closest('.custom-select').classList.remove('is-active')
               }
            })
         });
      }
   }

   // Генерация уникального идентификатора
   function generateId() {
      return Math.random().toString(36).substr(2, 9); // Генерируем случайную строку
   }

   // Функция создания блока выбранных фильтров
   function createFilterSelectedBlock(text, id) {
      // Проверяем, существует ли уже блок с таким ID
      if (document.getElementById(id)) {
         console.log("Block with id", id, "already exists. Not creating a new one.");
         return; // Если блок уже существует, выходим из функции
      }
      
      let filterSelected = document.createElement('div');
      filterSelected.classList.add('filter-selected');
      filterSelected.setAttribute('id', id); // Устанавливаем id блока
      let buttonId = `remove-${id}`; // Генерируем id для кнопки удаления блока
      filterSelected.innerHTML = `
         <p>${text}</p>
         <button type="button" id="${buttonId}">
            <img src="images/svg/filter-remove-selectd.svg" alt="">
         </button>
      `;
      let button = filterSelected.querySelector(`#${buttonId}`);
      button.addEventListener('click', () => removeFilterSelectedBlock(id)); // Добавляем обработчик клика
      wrapSelects.appendChild(filterSelected);
      
      // Проверяем и удаляем кнопку "Удалить все"
      if (typeof checkAndRemoveDeleteAllButton === 'function') {
         checkAndRemoveDeleteAllButton();
      }
   }

   // Функция удаления блока выбранных фильтров
   function removeFilterSelectedBlock(id) {
      let filterSelected = document.getElementById(id); // Получаем блок по id
      if (filterSelected) {
         filterSelected.remove(); // Удаляем блок
         let relatedCheckbox = document.querySelector(`.custom-checkbox[data-checkbox-id="${id}"]`);
         if (relatedCheckbox) {
            relatedCheckbox.removeAttribute('data-checkbox-id'); // Удаляем атрибут
            relatedCheckbox.querySelector('.custom-checkbox__input').checked = false; // Ставим состояние чекбокса в false
         }
         manageDeleteAllButton();
      }
   }

   // Функция удаления всех блоков выбранных фильтров
   function deleteAllFilterSelectedBlocks() {
      let filterSelecteds = document.querySelectorAll('.filter-selected');
      filterSelecteds.forEach(filterSelected => {
         filterSelected.remove();
      });
      manageDeleteAllButton(); // Проверяем и управляем видимостью кнопки "Удалить все" после удаления блоков
   }

   // Проверка и управление кнопкой "Удалить все"
   function manageDeleteAllButton() {
      let filterSelecteds = document.querySelectorAll('.filter-selected');
      let deleteAllButton = document.getElementById('filter-delete-all');
      if (filterSelecteds.length > 0) {
         // Если есть блоки, убираем класс hidden у кнопки "Удалить все"
         if (deleteAllButton) {
            deleteAllButton.classList.remove('hidden');
         }
      } else {
         // Если блоков нет, добавляем класс hidden к кнопке "Удалить все"
         if (deleteAllButton) {
            deleteAllButton.classList.add('hidden');
         }
      }
   }

   // Удаление атрибута data-checkbox-id у всех .custom-checkbox и сброс состояния .custom-checkbox__input
   function resetCustomCheckboxes() {
      let customCheckboxes = document.querySelectorAll('.custom-checkbox');
      customCheckboxes.forEach(customCheckbox => {
         customCheckbox.removeAttribute('data-checkbox-id');
         let checkboxInput = customCheckbox.querySelector('.custom-checkbox__input');
         if (checkboxInput) {
            checkboxInput.checked = false;
         }
      });
   }

   // Добавление обработчика клика на кнопку "Удалить все"
   let deleteAllButton = document.getElementById('filter-delete-all');
   if (deleteAllButton) {
      deleteAllButton.addEventListener('click', () => {
         let filterSelecteds = document.querySelectorAll('.filter-selected');
         filterSelecteds.forEach(filterSelected => {
            filterSelected.remove();
         });
         manageDeleteAllButton(); // Управляем видимостью кнопки "Удалить все"
         resetCustomCheckboxes(); // Сбрасываем состояние .custom-checkbox
      });
   }

   // Вызываем функцию для проверки и управления кнопкой "Удалить все" при загрузке страницы
   manageDeleteAllButton();

   // Генерация блоков выбранных фильтров
   let wrapSelects = document.querySelector('.wrap-selects');
   let customCheckboxes = document.querySelectorAll('.custom-checkbox');
   if (customCheckboxes) {
      customCheckboxes.forEach(customCheckbox => {
         customCheckbox.addEventListener('click', () => {
            let checkboxInput = customCheckbox.querySelector('.custom-checkbox__input');
            let text = customCheckbox.querySelector('.custom-checkbox__text').textContent;
            let id = generateId(text);

            // Если есть атрибут data-checkbox-id и это не первый клик, удаляем его и блок с соответствующим id
            if (customCheckbox.dataset.checkboxId && !checkboxInput.checked) {
                  let checkboxId = customCheckbox.dataset.checkboxId;
                  removeFilterSelectedBlock(checkboxId);
            }
            // Если нет атрибута data-checkbox-id, создаем блок и присваиваем ему id
            else if (!customCheckbox.dataset.checkboxId) {
                  customCheckbox.dataset.checkboxId = id;
                  createFilterSelectedBlock(text, id);
            }
            manageDeleteAllButton(); // Проверяем и управляем кнопкой "Удалить все"
         });
      });
   }

});