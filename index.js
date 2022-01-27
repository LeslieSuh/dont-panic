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
  hamberger = document.querySelectorAll('.menu_icon_gam'),
  menus = document.querySelectorAll('.navbar_menu_gam'),
  logos = document.querySelectorAll('.logo');

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
    menus.forEach((menu) => {
      menu.classList.toggle('menuDrop');
    });
  });
}
for (const item2 of items2) {
  item2.addEventListener('click', () => {
    blog.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    menus.forEach((menu) => {
      menu.classList.toggle('menuDrop');
    });
  });
}
let pageOffset = window.pageYOffset; // 현재
logos.forEach((logo) => {
  logo.addEventListener('click', () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

hamberger.forEach((btn) => {
  btn.addEventListener('click', () => {
    menus.forEach((menu) => {
      menu.classList.toggle('menuDrop');
    });
  });
});
window.addEventListener('scroll', () => {
  console.log(pageOffset);
});
