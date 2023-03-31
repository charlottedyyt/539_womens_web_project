document.querySelectorAll('.indexIntro').forEach((div) => {
  div.addEventListener('click', (e) => {
    if (div.contains(e.target)) {
      div.querySelector("p")?.classList.toggle('hidden');
    }
  })
})
