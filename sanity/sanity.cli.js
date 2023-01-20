import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hgpisxgo',
    dataset: 'production',
    apiVersion: 'v2021-10-21', // use a UTC date string
  }
})
