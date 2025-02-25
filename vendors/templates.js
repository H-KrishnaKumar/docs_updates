(function () {
  var install = function (hook, vm) {
    hook.beforeEach(function (content) {
      let $content = Docsify.dom.find('section.content article.markdown-section')
      $content.classList.forEach(function(cls){
        if(cls.indexOf('template-')===0) {
          $content.classList.remove(cls)
        }
      })
      let regex = /#@(.*)@#/gm
      while((m = regex.exec(content)) !== null) {
        $content.classList.add('template-'+m[1])
        return content.replace(m[0],'')
      }
      return content
    })
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)
}())
