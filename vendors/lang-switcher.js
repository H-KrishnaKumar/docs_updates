(function () {
  function langSwitcher(hook, vm, languages) {
    hook.beforeEach(function (content) {
      var htmlLang = ''
      languages.forEach(lang => {
        var classList = []
        if (window.location.hash.startsWith('#/' + lang.toLowerCase())) { classList.push('active') }
        htmlLang += `<a href="/#/${lang.toLowerCase()}/" class="${classList.join(' ')}">${lang.toUpperCase()}</a>`
      });

      var oldLanguageSwitcher = Docsify.dom.find('section.language-switcher');
      if (oldLanguageSwitcher) { oldLanguageSwitcher.remove() }
      var elLang = Docsify.dom.create('section', htmlLang);
      var body = Docsify.dom.find('body');
      elLang.classList.add('language-switcher');
      Docsify.dom.before(body, elLang);
    })
  }
  
  var CONFIG = ["EN"];
  
  var install = function (hook, vm) {
    var languages = vm.config.langSwitcher || CONFIG;
    langSwitcher(hook, vm, languages)
  };
  
  $docsify.plugins = [].concat(install, $docsify.plugins);
  
}());
