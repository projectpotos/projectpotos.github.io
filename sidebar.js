import { resolve } from 'path'
import { readdirSync } from 'fs'
function getFiles(dir) {
    var base = resolve(__dirname, 'docs');
    return readdirSync(resolve(base, dir))
        .filter(function (file) { return file.endsWith('.md') && file !== 'README.md'; })
        .map(function (file) { return "/".concat(dir, "/").concat(file); });
}
export const sidebar = {
  '/guide/': [
    '/guide/getting-started/',
    {
      text: 'Iso Build',
      link: '/guide/iso-build/how-to-build',
      children: [
        '/guide/iso-build/how-to-build.md',
        '/guide/iso-build/config.md',
      ]
    },
    {
      text: 'Specs Repository',
      link: '/guide/specs-repo/overview',
      children: [
        '/guide/specs-repo/overview.md',
        '/guide/specs-repo/structure.md',
      ]
    },
    {
      text: 'Write your own Role',
      link: '/guide/own-role/',
      children: [
        '/guide/own-role/ansible_basics.md',
        '/guide/own-role/potos_playbook.md',
        '/guide/own-role/variables.md',
        '/guide/own-role/molecule.md',
        '/guide/own-role/cicd.md',
        '/guide/own-role/codingconventions.md',
        '/guide/own-role/testing.md',
      ],
    },
    {
      text: 'FAQ',
      link: '/guide/faq/',
    },
  ],
  '/advanced/helloWorld/': getFiles('advanced/helloWorld'),
};
