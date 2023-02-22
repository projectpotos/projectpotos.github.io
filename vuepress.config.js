import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { taskLists } from '@hedgedoc/markdown-it-plugins'
import { sidebar } from './sidebar'
import { navbar } from './navbar'

export default  {
  lang: 'en-US',
  title: 'Project Potos',
  description: 'Providing the necessary toolchain to your users can be challenging. The goal of Potos is to offer the foundation for tailor-made, enterprise-ready Linux Clients to boost productivity for developers, engineers & scientists. With Linux Clients, you can improve ease of use for technicians by providing the essential tools and apps out of the box.',
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'https://github.com/projectpotos',
    docsRepo: 'https://github.com/projectpotos/projectpotos.github.io',
    docsDir: 'docs',
    editLinkText: '✏ Help to make the docu better and edit this page on Github ✌',
    sidebarDepth: 2,
    contributors: false,
    navbar,
    sidebar,
  }),
  dest: './dist',
  extendsMarkdown: (md) => {
    md.use(taskLists)
  }
}
