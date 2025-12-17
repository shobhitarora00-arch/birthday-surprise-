// simple swipe/scroll flip effect
document.querySelectorAll('.page').forEach(page => {
  page.addEventListener('click', () => {
    page.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  });
});
