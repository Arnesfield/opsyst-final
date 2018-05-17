export default function(router) {
  router.beforeEach((to, from, next) => {
    const title = to.meta.title || to.name
    document.title = title
    next()
  })
}
