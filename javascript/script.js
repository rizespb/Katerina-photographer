////////////////////////////////////////////////////////
/////// Верхнее горизонтальное меню (navigation) для маленьких экранов
////////////////////////////////////////////////////////

// Добавляем активные классы для кнопки (меняется на крестик) и для меню navigation (раскрываем на весь экран)
document.getElementById('id-menu-btn').addEventListener('click', navigationToggleClass);

/// Закрытие меню навигации на маленьких экранах при клике на пункт меню
if (document.documentElement.clientWidth < 800) {
  document.getElementById('id-navigation-list').addEventListener('click', navigationToggleClass);
}

function navigationToggleClass() {
  document.getElementById('id-navigation').classList.toggle('navigation--full-screen');
  document.getElementById('id-menu-btn__icon').classList.toggle('menu-btn__icon--active');
}



