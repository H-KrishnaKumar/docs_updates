(function () {

  function createNewsletter(hook, languages) {

    window.loadFooterForm = () => {

      var currentLang = $FpTranslate.currentLanguage

      var newsletterIds = {
        "fr": {
          region: "eu1",
          portalId: "25015229",
          formId: "e512367c-3a4a-4815-8e4f-a0b21b0fab58",
          sfdcCampaignId: "7010O000001ZjaCQAS"
        },
        "en": {
          region: "eu1",
          portalId: "25015229",
          formId: "e512367c-3a4a-4815-8e4f-a0b21b0fab58",
          sfdcCampaignId: "7010O000001ZjaCQAS"
        },
        "en": {
          region: "eu1",
          portalId: "25015229",
          formId: "e512367c-3a4a-4815-8e4f-a0b21b0fab58",
          sfdcCampaignId: "7010O000001ZjaCQAS"
        }
      }

      hbspt.forms.create({
        portalId: newsletterIds[currentLang].portalId,
        formId: newsletterIds[currentLang].formId,
        css: "",
        sfdcCampaignId: newsletterIds[currentLang].sfdcCampaignId,
        target: "#hubspot-footer-form",
        region: newsletterIds[currentLang].region,
      });
    }

    hook.afterEach((html, next) => {
      next(html)
    })
  }

  function footer(hook, vm, languages) {
    hook.beforeEach(function (content) {
      var year = new Date().getFullYear()
      var currentLang = $FpTranslate.findAndSetLanguage()
      var htmlLang = ''

      languages.forEach(lang => {
        htmlLang += `<li>`
        if (window.location.hash.startsWith('#/' + lang.toLowerCase())) {
          var lng = lang.toLowerCase()
          currentLang = lng
          htmlLang += `<abbr lang="${lng}" title="${lang.toUpperCase()}">${lang.toUpperCase()}</abbr>`
        } else {
          htmlLang += `
            <a href="/#/${lang.toLowerCase()}/">
              <abbr lang="${lang.toLowerCase()}" title="${lang.toUpperCase()}">${lang.toUpperCase()}</abbr>
            </a>
          `
        }
        htmlLang += `</li>`
      });
      htmlLang = `<ul>${htmlLang}</ul>`

      var htmlFooter = `
        <ul class='footer-navigation inner-container'>
          <li class="logo-box">
            <a class="footer-logo" href="https://labs.ovhcloud.com/en/data-platform/" target="_blank">
              <img src="/_assets/dataplatform-logo-white.png" alt="Data Platform logo" data-no-zoom>
            </a>
            <small>&copy; 2015-${year} ForePaaS</small>
            <nav id="language">
              ${htmlLang}
            </nav>
          </li>
          <li class="menu-box">
            <span>${$FpTranslate.get('footer.platform.title')}</span>
            <ul>
              <li>
                <a href="https://www.forepaas.com/platform/" target="_blank">${$FpTranslate.get('footer.platform.product')}</a>
              </li>
              <li>
                <a href="https://www.forepaas.com/pricing/" target="_blank">${$FpTranslate.get('footer.platform.pricing')}</a>
              </li>
              <li>
                <a href="https://www.forepaas.com/customers/" target="_blank">${$FpTranslate.get('footer.platform.customers')}</a>
              </li>
            </ul>
          </li>
          <li class="menu-box">
            <span>${$FpTranslate.get('footer.company.title')}</span>
            <ul>
              <li>
                <a href="https://www.forepaas.com/about-us" target="_blank">${$FpTranslate.get('footer.company.about-us')}</a>
              </li>
              <li>
                <a href="https://www.forepaas.com/category/blog/" target="_blank">${$FpTranslate.get('footer.company.blog')}</a>
              </li>
              <li>
                <a href="https://www.forepaas.com/news" target="_blank">${$FpTranslate.get('footer.company.news')}</a>
              </li>
              <li>
                <a href="https://www.forepaas.com/careers" target="_blank">${$FpTranslate.get('footer.company.careers')}</a>
              </li>
            </ul>
          </li>
          <li class="menu-box">
            <span>${$FpTranslate.get('footer.ressources.title')}</span>
            <ul>
              <li>
                <a href="https://www.forepaas.com/contacts" target="_blank">${$FpTranslate.get('footer.ressources.contact')}</a>
              </li>
              <li>
                <a href="https://www.forepaas.com/legal-notice" target="_blank">${$FpTranslate.get('footer.ressources.legal-notice')}</a>
              </li>
              <li>
                <a href="https://status.forepaas.com" target="_blank">${$FpTranslate.get('footer.ressources.status')}</a>
              </li>
              <li>
                <a href="javascript:openAxeptioCookies()">${$FpTranslate.get('footer.ressources.cookies')}</a>
              </li>
            </ul>
          </li>
          <li class="social-box">
            <div id="hubspot-footer-form"></div>
            <ul class="social-link">
              <li>
                <a href="https://www.facebook.com/ForePaaS-133205567206519/" target="_blank">
                  <img src="/_assets/fb.png" data-no-zoom>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/forepaas" target="_blank">
                  <img src="/_assets/twitter.png" data-no-zoom>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/forepaas" target="_blank">
                  <img src="/_assets/linkedin.png" data-no-zoom>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      `;

      var oldFooter = Docsify.dom.find('footer.site-footer');
      if (oldFooter) { oldFooter.remove() }
      var elFooter = Docsify.dom.create('footer', htmlFooter);
      var main = Docsify.dom.find('main');
      elFooter.classList.add('site-footer');
      main.parentNode.insertBefore(elFooter, main.nextSibling);
    })
  }

  var LANGS = ["en"];

  var install = function (hook, vm) {
    var languages = vm.config.langSwitcher || LANGS
    footer(hook, vm, languages)
    createNewsletter(hook, languages)
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)
}())
