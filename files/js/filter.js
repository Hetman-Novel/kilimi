document.addEventListener('DOMContentLoaded', function() {

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
      let customSelectHeaders = this.querySelectorAll('.custom-select__header')
      customSelectHeaders.forEach(customSelectHeader => {
            customSelectHeader.addEventListener('click', () => {
               customSelectHeader.parentNode.classList.toggle('is-active')
            })
      })
   }


   // ->

// Функция для генерации ID из текста
function generateId(text) {
   return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// Функция создания блока выбранных фильтров
function createFilterSelectedBlock(text, id, checkboxId) {
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
  button.addEventListener('click', () => removeFilterSelectedBlock(id, checkboxId)); // Добавляем обработчик клика
  wrapSelects.appendChild(filterSelected);
  checkAndRemoveDeleteAllButton();
}

// Функция удаления блока выбранных фильтров
function removeFilterSelectedBlock(id, checkboxId) {
  let filterSelected = document.getElementById(id); // Получаем блок по id
  if (filterSelected) {
      filterSelected.remove(); // Удаляем блок
      let relatedCheckbox = document.querySelector(`.custom-checkbox[data-checkbox-id="${checkboxId}"]`);
      if (relatedCheckbox) {
          relatedCheckbox.querySelector('.custom-checkbox__input').checked = false;
      }
  }
  checkAndRemoveDeleteAllButton();
}

// Генерация блоков выбранных фильтров
let wrapSelects = document.querySelector('.wrap-selects');
let customCheckboxes = document.querySelectorAll('.custom-checkbox');
if (customCheckboxes) {
   customCheckboxes.forEach(customCheckbox => {
       customCheckbox.addEventListener('click', () => {
           let text = customCheckbox.querySelector('.custom-checkbox__text').textContent;
           let id = `filter-${text.toLowerCase().replaceAll(' ', '-')}`; // Генерируем id из текста
           let checkboxId = `checkbox-${text.toLowerCase().replaceAll(' ', '-')}`; // Генерируем id для связанного чекбокса
           customCheckbox.dataset.checkboxId = checkboxId; // Устанавливаем id для чекбокса
           // Проверяем, существует ли уже блок с таким текстом
           if (!wrapSelects.querySelector(`#${id}`)) {
               createFilterSelectedBlock(text, id, checkboxId);
           }
       });
   });
}

// Проверка и удаление кнопки "Удалить все"
function checkAndRemoveDeleteAllButton() {
   let filterSelecteds = document.querySelectorAll('.filter-selected');
   let filterDeleteAll = document.getElementById('filter-delete-all');

   if (filterDeleteAll) {
      if (filterSelecteds.length < 1) {
         filterDeleteAll.classList.add('hidden');
      } else {
         filterDeleteAll.classList.remove('hidden');
      }
      filterDeleteAll.addEventListener('click', () => {
         filterSelecteds.forEach(filterSelected => {
            filterSelected.remove();
         });
         filterDeleteAll.remove(); // Удаляем саму кнопку
      });
   }
       
}

   // <-


});