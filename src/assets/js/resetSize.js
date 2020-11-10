function setHtmlFontsize() {
  const htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
  const html = document.getElementsByTagName("html")[0];
  html.style.fontSize = htmlwidth / 37.5 + 'px';
}
setHtmlFontsize();
window.addEventListener('resize', setHtmlFontsize)