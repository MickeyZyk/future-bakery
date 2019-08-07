const axios = require('axios').default
const createNodeHelpers  = require('gatsby-node-helpers').default
const slug = require('slug')

exports.sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators
/*
    const bakerySlides = await fetchBakerySlides()

    bakerySlides.forEach(x => {
        createNode(x)
    })

*/

    const bakeryAbout = await fetchBakeryAbout()

    bakeryAbout.forEach(x => {
        createNode(x)
    })

    const bakeryWork = await fetchBakeryWork()

    console.log("RAW" , bakeryWork)

    bakeryWork.forEach(x => {

        createNode(x)

    })    
/*

    const bakersSlides = await fetchBakersSlides()

    bakersSlides.forEach(x => {
        createNode(x)
    })       

*/
    const bakersAbout = await fetchBakersAbout()

    bakersAbout.forEach(x => {
        createNode(x)
    }) 

    const bakersWork = await fetchBakersWork()

    bakersWork.forEach(x => {
        createNode(x)
    })     
/*
    const crowdersSlides = await fetchCrowdersSlides()

    crowdersSlides.forEach(x => {
        createNode(x)
    })       
*/
    const crowdersAbout = await fetchCrowdersAbout()

    crowdersAbout.forEach(x => {
        createNode(x)
    }) 

    const crowdersWork = await fetchCrowdersWork()

    crowdersWork.forEach(x => {
        createNode(x)
    })     

    return
}

/*
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
        const response = await axios.get('http://future.stratego.ba/bakery', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.header
            .map(x => x.slider)
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
*/
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
        const response = await axios.get('http://future.stratego.ba/en/bakery/work', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-bakery-work/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

/*
fetchBakersSlides = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `Bakers`
    })

    const ProductNode = createNodeFactory('Slide', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/bakers', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.header
            .map(x => x.slider)
            .map(x => Object.assign(x, {
                path: `/bakers-slides/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

*/
fetchBakersAbout = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakersAbout', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/bakers/pages', {
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

fetchBakersWork = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakersWork', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/bakers/work', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page-bakers-work/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}
/*
fetchCrowdersSlides = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `Crowders`
    })

    const ProductNode = createNodeFactory('Slide', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/crowders', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.header
            .map(x => x.slider)
            .map(x => Object.assign(x, {
                path: `/crowders-slides/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}
*/
fetchCrowdersAbout = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('CrowdersAbout', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/crowders/pages', {
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

fetchCrowdersWork = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('CrowdersWork', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/crowders/work', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-crowders-work/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}
