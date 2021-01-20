const { getRedirectStatus } = require("next/dist/lib/load-custom-routes")

module.exports = {
  async redirects() {
    return [
      {
        source: "/2017/electron-next",
        destination: "https://github.com/leo/electron-next",
        permanent: true,
      },
    ]
  },
}
