export default (req, res) => {
  let target = "https://twitter.com/notquiteleo"

  if (req.url === "/2017/electron-next") {
    target = "https://github.com/leo/electron-next"
  }

  res.writeHead(308, {
    Location: target,
  })

  res.end()
}
