////////////////////////////////////////////////////////
/////// Отправка формы с помощью ajax-запросов
////////////////////////////////////////////////////////

$(document).ready(function() {

  $("#id-booking__form--btn").on("click", function() {
  
    var name = $("#id-booking__name").val(); // Получаем имя через ID соответствующего поля
    var tel = $("#id-booking__tel").val(); // Получаем e-mail через ID соответствующего поля
    var date = $("#id-booking__date").val(); // Получаем сообщение через ID соответствующего поля
    var control = $("#id-control-field").val(); // Получаем содеримое контрольного поля
    
    $.ajax({
    
      url: "/php/sendmail.php", // Куда отправляем данные (обработчик)
      type: "post",

      data: {
        "name": name,
        "tel": tel,
        "date": date,
        "control": control
      },

      success: function(data) {
      
        $(".booking__form--result").html(data); // Выводим результат
        
      }
      
    });
    
  });
  
});



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



