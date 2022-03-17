navigationmenu=document.querySelector('.navbar');
leftnav=document.querySelector('.leftnav');
rightnav=document.querySelector('.rightnav');
burger=document.querySelector('.burger');
burger.addEventListener('click',()=>{

navigationmenu.classList.toggle('navbar-resp')
leftnav.classList.toggle('visibily-resp')
rightnav.classList.toggle('visibily-resp')


})