export default scroll = {
  beforeRouteLeave(to, from, next) {
    if (from.meta.keepAlive) {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      localStorage.setItem(from.name, scrollTop)
    }
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(window.scrollTo)
    if (to.meta.keepAlive && localStorage.getItem(to.name)) {
      window.scrollTo(0,localStorage.getItem(to.name))
    } else {
      window.scrollTo(0,0)
    }
    next();
  },
}