document.querySelectorAll('.indexIntro').forEach((div) => {
    div.addEventListener('click', (e) => {
        e.target.querySelector("p")?.classList.toggle('hidden');
      })
})
