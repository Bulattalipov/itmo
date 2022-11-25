export default function tabs() {
  const tabsContainers = Array.from(document.querySelectorAll('.js-init-tabs'));

  tabsContainers.forEach(tabsContainer => {
    const btns = Array.from(tabsContainer.querySelectorAll('.js-tab-btn'));

    if(btns.length === 0) {
      const tabsBody = tabsContainer.querySelector('.js-tab-body');
      tabsBody.classList.add('active');

      return;
    }

    const bodies = Array.from(tabsContainer.querySelectorAll('.js-tab-body'));

    btns.forEach((btn, i) => {
      if (i === 0) {
        btn.classList.add('active');
        btn.parentElement.classList.add('parent-active');
        bodies[i].classList.add('active');
      } else {
        btn.classList.remove('active');
        btn.parentElement.classList.remove('parent-active');
        bodies[i].classList.remove('active');
      }
    })

    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach((b, j) => {
          if (j == i) {
            b.classList.add('active');
            b.parentElement.classList.add('parent-active');
            bodies[j].classList.add('active');
          } else {
            b.classList.remove('active');
            b.parentElement.classList.remove('parent-active');
            bodies[j].classList.remove('active');
          }
        })
      })
    })
  })
}