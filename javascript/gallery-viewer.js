////////////////////////////////////////////////////////
/////// Увеличение и просмотр изображний 
////////////////////////////////////////////////////////

{

    let DOM = {
      galleryImageClass: 'gallery__image',
      galleryViewBoxActiveClass: 'gallery-view-box--active',
      viewBoxID: 'galleryViewBoxID',
      closeButtonID: 'ID-close-btn',
      arrowLeft: 'ID-arrow-left',
      arrowRight: 'ID-arrow-right'
    };
    
    // В переменную viewBox сохраняем узел - контрейнер для просмотра изображений
    let viewBox = document.getElementById(DOM.viewBoxID);
    
    // Получаем Node List всех изображений
    let imageNodeList = document.querySelectorAll(`.${DOM.galleryImageClass}`);
    

    // Навешиваем обработчик на каждое изображение в галлерее и описываем функцию открытия изображения в просмотрщике view-box
    for (let i = 0; i < imageNodeList.length; i++) {
    
      imageNodeList[i].addEventListener('click', newImage);
    }

    // Навешиваем обработчик событий на стрелки перелистывания изображений влево и вправо
    document.getElementById(DOM.arrowLeft).addEventListener('click', previousImage);
    document.getElementById(DOM.arrowRight).addEventListener('click', nextImage);

    //viewBox.addEventListener('click', nextImage); // Перелистывание изображений кликом в любом месте экрана
    //viewBox.addEventListener('touchmove', nextImage); // Перелистывание изображений свайпом

    
    // Функция вывода изображения в просмотрщик при клике на любое изображение галлереи
    function newImage(element) {
    
      //Добавляем просмотрщику класс active и делаем его видимым
      viewBox.classList.add(DOM.galleryViewBoxActiveClass);
    
      // Получаем целевой элемент 
      let targetEl = element.target;
    
      // Создаем новый элемент в просмотрщике view-box с таким же src, как и у элемента, по которому кликнули
      //newElement = '<img src="' + targetEl.src + '" alt="Beautiful photo" + >';
      let newElement = `<img src="${targetEl.src}" alt="Beautiful photo" id="${targetEl.id}">`;
    
      viewBox.insertAdjacentHTML("afterbegin", newElement); 
    };


    
    // Закрываем просмотр изображение при клике на крестик
    document.getElementById(DOM.closeButtonID).addEventListener('click', function(event) {
    
      event.stopPropagation(); // предотвращает распостранение евента, который висит на родителях
      
      // Убираем ActiveClass у просмотрщика viewBox
      viewBox.classList.remove(DOM.galleryViewBoxActiveClass);
    
      // Удаляем в просмотрщике первый и единственный дочерний элемент
      viewBox.firstChild.remove();
    });
    


    // Функция вывода следующего изображения при клике на область просмотра (на view-box)
    function nextImage() {
      let activeImageID = parseInt(viewBox.firstChild.id.split('-')[1]);
    
      // Задаем ID следующего изображения, проверяя, не является ли изображение последним в контейнере
      let nextImageID;
      if (activeImageID === imageNodeList.length - 1 ) {
        nextImageID =0;
      } else {
        nextImageID = activeImageID + 1;
      }
    
      // Путь к файлу следующего изображения
      let NextImageSrc = document.querySelector(`#galleryImageID-${nextImageID}`).src;
    
      // Удаляем в просмотрщике первый и единственный дочерний элемент
      document.getElementById('galleryViewBoxID').firstChild.remove();
      //viewBox.removeChild(viewBox.querySelector('img'));
    
      let nextElement = `<img src="${NextImageSrc}" alt="Beautiful photo" id="#galleryImageID-${nextImageID}">`;
    
      viewBox.insertAdjacentHTML("afterbegin", nextElement); 
    
    }



    // Функция вывода предыдущего изображения при клике на область просмотра (на view-box)
    function previousImage() {
      let activeImageID = parseInt(viewBox.firstChild.id.split('-')[1]);
      console.log(activeImageID);
    
      // Задаем ID следующего изображения, проверяя, не является ли изображение последним в контейнере
      let previousImageID;
      if (activeImageID === 0 ) {
        previousImageID = imageNodeList.length - 1;
      } else {
        previousImageID = activeImageID - 1;
      }
    
      // Путь к файлу следующего изображения
      let previousImageSrc = document.querySelector(`#galleryImageID-${previousImageID}`).src;
    
      // Удаляем в просмотрщике первый и единственный дочерний элемент
      document.getElementById('galleryViewBoxID').firstChild.remove();
    
      let previousElement = `<img src="${previousImageSrc}" alt="Beautiful photo" id="#galleryImageID-${previousImageID}">`;
    
      viewBox.insertAdjacentHTML("afterbegin", previousElement); 
    }
    
}