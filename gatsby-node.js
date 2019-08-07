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
        }
    `)

    const { createPage } = boundActionCreators
    const productTemplate = path.resolve('src/components/work/Work.tsx')

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
}