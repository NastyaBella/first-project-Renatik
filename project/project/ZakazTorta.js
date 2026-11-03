// let company="5454";

// const buttonClose = document.querySelector('.main-nav__close-button');
// const buttonOpen = document.querySelector('.page-header__open-nav-button');
// const menuElement = document.querySelector('.main-nav__list');
// const mainNav = document.querySelector('.main-nav');
// mainNav.classList.remove('main-nav--nojs');

// menuElement.hidden = true;
// buttonClose.hidden = true;
// buttonOpen.hidden = false;

// buttonClose.addEventListener('click', () => {
//   menuElement.hidden = true;
//   buttonClose.hidden = true;
//   buttonOpen.hidden = false;
// })

// buttonOpen.addEventListener('click', () => {
//   menuElement.hidden = false;
//   buttonOpen.hidden = true;
//   buttonClose.hidden = false;
// })
<form id="Zakaz" action="/apply/" method="POST"> 
<label> Ваше имя: <input type="text" name="name" id="name"onblur="if(this.value.length == 0) this.value = 'Имя автора'" onfocus="if(this.value == 'Имя автора') this.value = '' "/ ></label>
  <label> Почта: <input type="email" name="email" id="email" placeholder=" " required></input></label>
    <label> Способ получения: <select name="specialization" required> 
    <option value="doctavka" selected>Доставка</option> 
    <option value="samovivos">Самовывоз</option>
    </select> 
    </label> 
    <label> <input type="checkbox" name="zvezda" value="1"> </input></label>
    <label> Фото: <input type="file" accept="image/jpeg" name="photo" required></input></label>
    <button type="submit">Заказать</button>
     </form>