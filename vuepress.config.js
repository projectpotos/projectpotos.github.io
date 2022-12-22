import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { sidebar } from './sidebar'
import { navbar } from './navbar'

export default  {
  lang: 'en-US',
  title: 'Project Potos',
  description: 'Create Your Own Potos Linux Client',
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'https://github.com/projectpotos',
    docsRepo: 'https://github.com/projectpotos/projectpotos.github.io',
    editLinkText: '✏ Help to make the docu better and edit this page on Github ✌',
    sidebarDepth: 2,
    contributors: false,
    navbar,
    sidebar,
  }),
}
