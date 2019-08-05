const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Future Bakery',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['ProximaNova', 'Bradley'],
          urls: ['../fonts/proxima-nova-webfontkit.css','../fonts/bradley_webfontkit.css']
        }
      }
    },  
    'gatsby-plugin-ueno',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },     
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    //'gatsby-plugin-styled-components',
    'grav-headless-plugin',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ueno-gatsby-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      }
    },
  ],
}
