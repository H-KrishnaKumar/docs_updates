(function () {
  function findRedirectLinks(hook, vm) {
    hook.beforeEach(function (content) {
      let newContent = content
      const regex = /^(?:{([\s\S]*?)}\((.*)\))(\_)?$/gm
      const matches = newContent.match(regex)

      while ((m = regex.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }

        let block = m[0]
        let url = m[2]
        let text = m[1] ? vm.compiler.compile(m[1]) : url
        let targetBlank = m[3] ? 'target="_blank"' : ''

        if (text && url) {
          let classes = ['redirection-link']
          let linkHTML = `<div class="${classes.join(' ')}"><a href="${url}" ${targetBlank}>${text}</a></div>`

          newContent = newContent.replace(block, linkHTML)
        }
      }

      return newContent
    })
  }

  var install = function (hook, vm) {
    findRedirectLinks(hook, vm)
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)

}())
