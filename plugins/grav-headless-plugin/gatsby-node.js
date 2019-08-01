const axios = require('axios').default
const createNodeHelpers  = require('gatsby-node-helpers').default
const slug = require('slug')

exports.sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators
    const data = await fetchSlides()

    data.forEach(x => {
        createNode(x)
    })
    
    const bakeryPages = await fetchBakeryPages()

    bakeryPages.forEach(x => {
        createNode(x)
    })

    const bakersPages = await fetchBakersPages()

    bakersPages.forEach(x => {
        createNode(x)
    })    

    return
}

fetchSlides = async () => {
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
        const response = await axios.get('http://admin.aptours.ba/bakery-slider', {
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

fetchBakeryPages = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakeryPages', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://admin.aptours.ba/en/bakery', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchBakersPages = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakersPages', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://admin.aptours.ba/en/bakers', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}