import { resolve } from 'path'
import { readdirSync } from 'fs'
function getFiles(dir) {
    var base = resolve(__dirname, 'docs');
    return readdirSync(resolve(base, dir))
        .filter(function (file) { return file.endsWith('.md') && file !== 'README.md'; })
        .map(function (file) { return "/".concat(dir, "/").concat(file); });
}
export const navbar = [
  {
    text: 'Guide',
    children: [
      '/guide/introduction/',
      '/guide/getting-started/',
      {
        link: '/guide/iso-build/how-to-build',
        text: 'Iso Build',
      },
      {
        link: '/guide/specs-repo/overview',
        text: 'Specs Repository',
      },
      {
        link: '/guide/own-role',
        text: 'Write your own Role'
      },
      {
        link: '/guide/faq',
        text: 'FAQ',
      },
    ],
  },
  {
    text: 'Advanced',
    children: [
      {
        link: '/advanced/helloWorld/',
        text: 'Hello World',
      },
    ],
  },
  {
    text: 'Jobs',
    link: 'https://adfinis.com/en/about-us/jobs/',
  },
]
