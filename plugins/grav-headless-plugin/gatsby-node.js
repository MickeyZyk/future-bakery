const axios = require('axios').default
const createNodeHelpers  = require('gatsby-node-helpers').default
const slug = require('slug')

exports.sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators

    const bakerySlides = await fetchBakerySlides()

    bakerySlides.forEach(x => {
        createNode(x)
    })
    
    const bakeryAbout = await fetchBakeryAbout()

    bakeryAbout.forEach(x => {
        createNode(x)
    })

    const bakeryWork = await fetchBakeryWork()

    bakeryWork.forEach(x => {
        createNode(x)
    })       

    const bakersPages = await fetchBakersPages()

    bakersPages.forEach(x => {
        createNode(x)
    }) 

    const crowdersPages = await fetchCrowdersPages()

    crowdersPages.forEach(x => {
        createNode(x)
    }) 


    return
}

fetchBakerySlides = async () => {
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
        const response = await axios.get('http://future.stratego.ba/bakery/slider', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/bakery-slides/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchBakeryAbout = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakeryAbout', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/bakery/pages', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page-bakery-about/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchBakeryWork = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakeryWork', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/bakerywork', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page-bakery-work/${slug(x.title)}`.toLowerCase()
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
        const response = await axios.get('http://future.stratego.ba/en/bakers', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page-bakers-about/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchCrowdersPages = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('CrowdersPages', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/crowders', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page-crowders-about/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}