export function middleware(request, event) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return;
  }

  let target = 'https://twitter.com/notquiteleo';

  if (pathname === '/2017/electron-next') {
    target = 'https://github.com/leo/electron-next';
  }

  return Response.redirect(target);
}
