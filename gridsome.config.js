// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  titleTemplate: '%s',
  siteUrl: 'http://localhost:8080', // change me
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: '',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },
    {
      use: 'gridsome-plugin-robots-txt',
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      },
    },
  ],
}
