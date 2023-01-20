import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'hgpisxgo',
    dataset: 'production',
    apiVersion: 'v2021-10-21', // use a UTC date string
    useCdn: true,
})

export default client

