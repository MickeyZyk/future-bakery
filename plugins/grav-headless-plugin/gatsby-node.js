/*

const axios = require('axios').default
const createNodeHelpers  = require('gatsby-node-helpers').default
const slug = require('slug')

exports.sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators
    const data = await fetchProducts()

    data.forEach(x => {
        createNode(x)
    })
    
    return
}

fetchProducts = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `Bakery`
    })

    const ProductNode = createNodeFactory('Slide', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://localhost:8000/bakery-slider', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/bakery-slides/${slug(x.name)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

*/