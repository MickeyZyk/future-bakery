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


    const bakeryContact = await fetchBakeryContact ()

    bakeryContact.forEach(x => {
        createNode(x)
    })  

    const bakersContact = await fetchBakersContact ()

    bakersContact.forEach(x => {
        createNode(x)
    }) 

    const czBakersContact = await fetchCzBakersContact ()

    czBakersContact.forEach(x => {
        createNode(x)
    }) 

    const crowdersContact = await fetchCrowdersContact ()

    crowdersContact.forEach(x => {
        createNode(x)
    }) 


        const apiResponse = await axios.get('http://futurebakery.appio.cz/grav/en/bakers/login', {
            params: {
                "return-as": "json"
            }
        })

      const newNode = {
        heading: apiResponse.data.header.heading,
        //subheading: apiResponse.data.header.subheading,
        image: apiResponse.data.header.image,
        link_one_text: apiResponse.data.header.link_one_text,
        link_one_url: apiResponse.data.header.link_one_url,
        link_two_text: apiResponse.data.header.link_two_text,
        link_two_url: apiResponse.data.header.link_two_url,
        link_three_text: apiResponse.data.header.link_three_text,
        link_four_text: apiResponse.data.header.link_four_text,
        link_four_url: apiResponse.data.header.link_four_url,        
        id: apiResponse.data.header.heading, // required by Gatsby
        internal: {
          type: 'TestNode', 
          contentDigest: 'something'
          // required by Gatsby
          //contentDigest: createContentDigest('testnode') // required by Gatsby, must be unique
        }
      };
      // This is where we actually create the data node, by passing in the newNode object.
      createNode(newNode);


       // console.log(apiResponse.data.header)
      // Process data into nodes.
      //apiResponse.data.header.forEach(item => createNode(processDatum(item)))
      // We're done, return.


    

    const bakersData = await fetchBakersData()
/*
    bakersData.forEach(x => {
        createNode(x)
    })
*/
 
    //console.log("BakersData", bakersData);
    //createNode(bakersData);

    
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakery', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakers', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/cz/czbakers', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/crowders', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakery/pages', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakery/work', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/cz/czbakers/work', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakers/pages', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/cz/czbakers/pages', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/crowders/pages', {
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/crowders/work', {
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



fetchBakeryContact = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakeryContact', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakery/contact', {
            params: {
                "return-as": "json"
            }
        })
        //console.log(response.data.children)
        return response.data.children

            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-bakery-contact/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchBakersContact = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('BakersContact', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakers/contact', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-bakers-contact/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchCzBakersContact = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('CzBakersContact', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/czbakers/contact', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-czbakers-contact/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        //throw e
    }
}

fetchCrowdersContact = async () => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix: `grav`
    })

    const ProductNode = createNodeFactory('CrowdersContact', node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/crowders/contact', {
            params: {
                "return-as": "json"
            }
        })
    
        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                id: x.title,
                path: `/grav-page-crowders-contact/${slug(x.title)}`.toLowerCase()
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
        const response = await axios.get('http://futurebakery.appio.cz/grav/en/bakers/login', {
            params: {
                "return-as": "json"
            }
        })
    
            //console.log("BAKERS DATA: ", response.data.header)
/*

        return response.data.header
            //.map(x => x)
            .map(x => Object.assign(x, {
                id: x.title,                  
                path: `/bakers-login-data/${slug(x.title)}`.toLowerCase()
            }))
            .map(ProductNode)

*/
            let source = {};
            source.id = response.data.header.title;
            source.path = `/bakers-login-data/${slug(response.data.header.title)}`.toLowerCase();

            //console.log("SOURCE", source);

            //let assigned = Object.assign(ProductNode, source);

            //console.log("ASSIGNED", assigned);

            //ProductNode.id = response.data.header.title;
            //ProductNode.path = `/bakers-login-data/${slug(response.data.header.title)}`.toLowerCase() ;

            //console.log("ProductNode", ProductNode)



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
        const response = await axios.get('http://futurebakers.wnh.cz/app/api/project', {
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

