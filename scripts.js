function navigateToPage(page) {
  const pages = ['loginPage', 'browsePage'];
  pages
    .filter((value) => {
      return page !== value;
    })
    .forEach((elementId) => {
      document.getElementById(elementId).classList.add('hide');
    });
  var page = document.getElementById(page);
  page.classList.remove('hide');
}
