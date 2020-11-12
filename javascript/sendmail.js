////////////////////////////////////////////////////////
/////// Отправка формы с помощью ajax-запросов
////////////////////////////////////////////////////////

// Функция отправки для первой формы id-booking__form
$(document).ready(function() {

    $("#id-booking__form--btn").on("click", function() {
      let name = $("#id-booking__name").val(); // Получаем имя через ID соответствующего поля
      let tel = $("#id-booking__tel").val(); // Получаем e-mail через ID соответствующего поля
      let date = $("#id-booking__date").val(); // Получаем сообщение через ID соответствующего поля
      let control = $("#id-control-field").val(); // Получаем содеримое контрольного поля
      
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
        
          $("#id-booking__form--result").html(data); // Выводим результат
          
        }
        
      });
      
    });
    
  });


  // Функция отправки для второй формы id-booking__form--footer

  $(document).ready(function() {

    $("#id-booking__form--btn--footer").on("click", function() {
      let name = $("#id-booking__name--footer").val(); // Получаем имя через ID соответствующего поля
      let tel = $("#id-booking__tel--footer").val(); // Получаем e-mail через ID соответствующего поля
      let date = $("#id-booking__date--footer").val(); // Получаем сообщение через ID соответствующего поля
      let control = $("#id-control-field--footer").val(); // Получаем содеримое контрольного поля
      
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
        
          $("#id-booking__form--result--footer").html(data); // Выводим результат
          
        }
        
      });
      
    });
    
  });