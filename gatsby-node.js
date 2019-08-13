const slash = require('slash')
const path = require('path')
const slug = require('slug')

exports.createPages = async ({graphql, boundActionCreators}) => {
    let result = await graphql(`
        {
          allGravBakeryWork {
            edges {
              node {
                heading_two
                heading_one
                big_image
                category_name
                category
                logo_dark
                logo_light
                new_way
                one_way
                title
                video
                id
              }
            }
          }
          allGravBakersCzWork {
            edges {
              node {
                heading_two
                heading_one
                big_image
                category_name
                category
                logo_dark
                logo_light
                new_way
                one_way
                title
                video
                id
              }
            }
          }          
          allGravCrowdersWork {
            edges {
              node {
                id
                big_image
                paragraph
                logo_light
                heading_two
                heading_tag
                heading_one
                video
                title
              }
            }
          }         
        }
    `)

    const { createPage } = boundActionCreators
    const productTemplate = path.resolve('src/components/work/Work.tsx')
    const bakersCzTemplate = path.resolve('src/components/work/CzWork.tsx')    
    const crowdersTemplate = path.resolve('src/components/work/CrowdersWork.tsx')


    result.data.allGravBakeryWork
        .edges
        .map(x => x.node)
        .forEach((node, index) => {

        const prev = index === 0 ? null : result.data.allGravBakeryWork.edges[index - 1].node
        const next = index === result.data.allGravBakeryWork.edges.length - 1 ? null : result.data.allGravBakeryWork.edges[index + 1].node

            createPage({
                path: `/bakery-work/${slug(node.title)}`.toLowerCase(),
                component: slash(productTemplate),
                context: {
                    id: node.id,
                    prev,
                    next
                }
            })

            createPage({
                path: `/bakers-work/${slug(node.title)}`.toLowerCase(),
                component: slash(productTemplate),
                context: {
                    id: node.id,
                    prev,
                    next
                }
            })



        })

    result.data.allGravBakersCzWork
        .edges
        .map(x => x.node)
        .forEach((node, index) => {

        const prev = index === 0 ? null : result.data.allGravBakersCzWork.edges[index - 1].node
        const next = index === result.data.allGravBakersCzWork.edges.length - 1 ? null : result.data.allGravBakersCzWork.edges[index + 1].node


            createPage({
                path: `/czbakers-work/${slug(node.title)}`.toLowerCase(),
                component: slash(bakersCzTemplate),
                context: {
                    id: node.id,
                    prev,
                    next
                }
            })



        })

    result.data.allGravCrowdersWork
        .edges
        .map(x => x.node)
        .forEach((node, index) => {

        const prev = index === 0 ? null : result.data.allGravCrowdersWork.edges[index - 1].node
        const next = index === result.data.allGravCrowdersWork.edges.length - 1 ? null : result.data.allGravCrowdersWork.edges[index + 1].node

            createPage({
                path: `/crowders-work/${slug(node.title)}`.toLowerCase(),
                component: slash(crowdersTemplate),
                context: {
                    id: node.id,
                    prev,
                    next
                }
            })



        })




}





const Path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
   module: {
     rules: stage === 'build-html'
       ? [
           {
             test: /ScrollMagic/,
             use: loaders.null(),
           }
         ]
       : []
   },
    resolve: {
      alias: {
        ScrollMagic: Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
        ),
        'animation.gsap': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
        ),
        'debug.addIndicators': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        ),
      },
    },
  })
}