module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      {
        source: "/(.*)",
        destination: "/api/redirect",
      },
    ]
  },
}
