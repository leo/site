export function middleware(event) {
  console.log('Test')
  
  const { pathname } = event.request.nextUrl

  if (pathname === "/") {
    return
  }

  let target = "https://twitter.com/notquiteleo"

  if (pathname === "/2017/electron-next") {
    target = "https://github.com/leo/electron-next"
  }

  event.respondWith(Response.redirect(target))
}
