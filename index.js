const navbar = document.querySelector('.navmenu_drop_gam'),
  display = document.querySelector('.display_gam'),
  animation_in = document.querySelector('.animation_in_gam'),
  animation_out = document.querySelector('.animation_out_gam'),
  animation_stay = document.querySelector('.animation_stay_gam'),
  navbarHeight = navbar.getBoundingClientRect().height,
  blog = document.querySelector('.container-yummy'),
  items1 = document.querySelectorAll('.item1'),
  items2 = document.querySelectorAll('.item2'),
  content = document.querySelector('.content_gam'),
  hamberger = document.querySelector('.menu_icon_gam'),
  hamberger_fix = document.querySelector('.menu_icon_gam_fix'),
  fixmenu = document.querySelector('.navbar_menu_gam_fix'),
  menu = document.querySelector('.navbar_menu_gam');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-80px';
  }
}

const showAnamation = () => {
  setInterval(() => {
    animation_in.classList.toggle('display_gam');
    animation_out.classList.toggle('display_gam');
  }, 7000);
};

showAnamation();

for (const item1 of items1) {
  item1.addEventListener('click', () => {
    content.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });

    menu.classList.remove('menuDrop');
    fixmenu.classList.remove('menuDrop');
  });
}

for (const item2 of items2) {
  item2.addEventListener('click', () => {
    blog.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    menu.classList.remove('menuDrop');
    fixmenu.classList.remove('menuDrop');
  });
}
// 모바일 크기 맞췩

hamberger.addEventListener('click', () => {
  menu.classList.toggle('menuDrop');
});

hamberger_fix.addEventListener('click', () => {
  fixmenu.classList.toggle('menuDrop');
});
