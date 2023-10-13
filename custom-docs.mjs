import { readFile, writeFile } from 'fs'
import glob from 'glob'

glob('docs/*.?(html|css|ts.html)', function (err, files) {
  if (err) {
    console.log('err', err)
    return
  }

  files.forEach((path) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.log('err', err)
        return
      }
      let replaced = data.replace(/Namespaces/g, 'Components')
      // replaced = replaced.replace(/Methods/g, 'Linked components')
      // let replaced = data.replace(
      //   /<title>(.*)<\/title>/,
      //   '<title>Docs by Xabier Lameiro</title>'
      // )

      // if (path === 'public/docs/index.html') {
      //   replaced = replaced.replace(/src="/g, 'src="docs/')
      //   replaced = replaced.replace(/href="/g, 'href="docs/')
      //   replaced = replaced.replace(/href="docs\/index.html"/g, 'href="/docs"')
      //   replaced = replaced.replace(/url\('/g, "url('docs/")
      // }

      // replaced = replaced.replace(
      //   /href="index.html">Home/g,
      //   'href="/docs">Home'
      // )

      // replaced = replaced.replace(
      //   /<a href="docs\/https:\/\/github.com\/jsdoc\/jsdoc">JSDoc 3.6.11<\/a>/g,
      //   '<a href="https://xabierlameiro.com">Xabier Lameiro</a>'
      // )

      // replaced = replaced.replace(
      //   /<a href="https:\/\/github.com\/jsdoc\/jsdoc">JSDoc 3.6.11<\/a>/g,
      //   '<a href="https://xabierlameiro.com">Xabier Lameiro</a>'
      // )

      // replaced = replaced.replace(
      //   /<\/title>/,
      //   '</title><link rel="icon" href="/favicon.svg" title="The favicon"><meta name="robots" content="noindex">'
      // )

      writeFile(path, replaced, 'utf-8', function (err, a) {
        if (err) {
          console.log('err', err)
          return
        }
      })
    })
  })
})

// readFile('docs/styles/clean-jsdoc-theme-base.css', 'utf8', (err, data) => {
//   if (err) {
//     console.log('err', err)
//     return
//   }

//   let replaced = data.replace(
//     /nav(?:\r\n|\r|\n){/g,
//     'nav { position:sticky; top:20px;'
//   )

//   writeFile(
//     'docs/styles/clean-jsdoc-theme-base.css',
//     replaced,
//     'utf-8',
//     function (err, a) {
//       if (err) {
//         console.log('err', err)
//         return
//       }
//     }
//   )
// })
