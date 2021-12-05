let navbar = document.querySelector(".header .navbar");

document.querySelector("#nav-toggle").onclick = () => {
  navbar.classList.toggle("active");
};
document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)