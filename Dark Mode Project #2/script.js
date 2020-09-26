const icon = document.querySelector('.icon');
const body = document.getElementById('body');
const title = document.querySelector('.title');

icon.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    title.style.color = 'black';
} else {
    body.classList.add('dark');
    title.style.color = "white";
  }
  

});

// icon.addEventListener('click', () => {
//   if (body.classList != 'dark') {
//     body.classList.add('dark');
//     icon.style.color = '#fff';
// } else {
//     body.classList.remove('dark');
// }
// })
