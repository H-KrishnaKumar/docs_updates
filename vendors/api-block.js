(function () {
  var removePadding = false

  function findApiBlocks(hook, vm) {
    hook.beforeEach(function (content) {
      let newContent = content
      const regex = /(?:\/\/\/[\s]?([\s\S]*?)\n([\s\S]*?)\n:::\n([\s\S]*?)\n\/\/\/)/gm
      const matches = newContent.match(regex)
      if (matches) {
        removePadding = true
      } else {
        removePadding = false
      }

      while ((m = regex.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }

        let block = m[0]
        let opts = m[1]
        let blockContentLeft = vm.compiler.compile(m[2])
        let blockContentRight = vm.compiler.compile(m[3])

        if (blockContentLeft && blockContentRight) {
          let classes = ['api-block']
          let leftHtml = `<div class="left">${blockContentLeft}</div>`
          let rightHtml = `<div class="right">${blockContentRight}</div>`
          let sectionHtml = `<section class="${classes.join(' ')}">${leftHtml}${rightHtml}</section>`

          newContent = newContent.replace(block, sectionHtml)
        }
      }

      return newContent
    })
  }

  function changeClassIfNeeded(hook) {
    hook.doneEach(function (_) {
      let $content = Docsify.dom.find('section.content article.markdown-section')
      if (removePadding) {
        $content.classList.add('api-block')
      } else {
        $content.classList.remove('api-block')
      }
    })
  }

  var install = function (hook, vm) {
    findApiBlocks(hook, vm)
    changeClassIfNeeded(hook)
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)

}())
