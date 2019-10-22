const axios = require('axios').default
const createNodeHelpers  = require('gatsby-node-helpers').default
const slug = require('slug')

exports.sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators

    const bakerySlides = await fetchBakerySlides()

    bakerySlides.forEach(x => {
        createNode(x)
    })

    const bakersSlides = await fetchBakersSlides()

    bakersSlides.forEach(x => {
        createNode(x)
    }) 


    const bakersCzSlides = await fetchBakersCzSlides()

    bakersCzSlides.forEach(x => {
        createNode(x)
    }) 

    const crowdersSlides = await fetchCrowdersSlides()

    crowdersSlides.forEach(x => {
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

    const bakersWorkCz = await fetchBakersCzWork()

    bakersWorkCz.forEach(x => {
        createNode(x)
    })  

    const bakersAbout = await fetchBakersAbout()

    bakersAbout.forEach(x => {
        createNode(x)
    }) 

    const bakersCzAbout = await fetchBakersCzAbout()

    bakersCzAbout.forEach(x => {
        createNode(x)
    }) 

    const crowdersAbout = await fetchCrowdersAbout()

    crowdersAbout.forEach(x => {
        createNode(x)
    }) 

    const crowdersWork = await fetchCrowdersWork()

    crowdersWork.forEach(x => {
        createNode(x)
    })    

    const bakersData = await fetchBakersData()

    bakersData.forEach(x => {
        createNode(x)
    })  

    
/*
    const bakersLogin = await fetchBakersLogin()

    bakersLogin.forEach(x => {
        createNode(x)
    }) 
*/
    
    
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
        const response = await axios.get('http://future.stratego.ba/en/bakery', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.header.slider
            .map(x => x)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/bakery-slides/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}


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
        const response = await axios.get('http://future.stratego.ba/en/bakers', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.header.slider
            .map(x => x)
            .map(x => Object.assign(x, {
                id: x.title,                  
                path: `/bakers-slides/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchBakersCzSlides = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `BakersCz`
    })

    const ProductNode = createNodeFactory('SlideCz', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/cz/czbakers', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.header.slider
            .map(x => x)
            .map(x => Object.assign(x, {
                id: x.title,                  
                path: `/bakers-slides-cz/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

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
        const response = await axios.get('http://future.stratego.ba/en/crowders', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.header.slider
            .map(x => x)
            .map(x => Object.assign(x, {
                id: x.title,                
                path: `/crowders-slides/${slug(x.title)}`.toLowerCase()
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

fetchBakersCzWork = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakersCzWork', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/cz/czbakers/work', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-bakers-cz-work/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}


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

fetchBakersCzAbout = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakersCzAbout', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/cz/czbakers/pages', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                path: `/grav-page-bakers-cz-about/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

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


fetchBakersData = async () => {

    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `BakersData`
    })

    const ProductNode = createNodeFactory('BakersData', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://future.stratego.ba/en/bakers/login', {
            params: {
                "return-as": "json"
            }
        })
    
            console.log(response.data)

        return response.data
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,                  
                path: `/bakers-login-data/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)



    }
    catch (error) {
        console.log(error)
        //throw e
    }
}






/*

fetchBakersLogin = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `api`
    })

    const ProductNode = createNodeFactory('BakersLogin', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('https://futurebakers.wnh.cz/app/api/project', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data
            .map(x => x)
            .map(x => Object.assign(x, {
                id: x.name,
                date:  convertDate(x.date),   
                path: `/api-login/${slug(x.name)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

*/

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.') ;
}

