// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jamstack',
  siteUrl: 'https://jamstack.anaelbonnafous.fr/',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env.HYGRAPH_URL,
        fieldName: 'hygraph',
        typeName: 'hygraphTypes',

        headers: {
          Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
        },
      },
    },
  ]
}
