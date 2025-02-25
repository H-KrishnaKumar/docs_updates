var $Translations = {
  'en': {
    // Footer
    'footer.platform.title': 'platform',
    'footer.platform.product': 'Product',
    'footer.platform.pricing': 'Pricing',
    'footer.platform.customers': 'Customers',
    'footer.company.title': 'company',
    'footer.company.about-us': 'About us',
    'footer.company.blog': 'Blog',
    'footer.company.news': 'News',
    'footer.company.careers': 'Careers',
    'footer.ressources.title': 'ressources',
    'footer.ressources.contact': 'Contact',
    'footer.ressources.legal-notice': 'Legal Notice',
    'footer.ressources.cookies': 'Cookies preferences',
    'footer.ressources.status': 'Status'
  },
  'fr': {
    // Footer
    'footer.platform.title': 'plate-forme',
    'footer.platform.product': 'Produit',
    'footer.platform.pricing': 'Tarifs',
    'footer.platform.customers': 'Clients',
    'footer.company.title': 'entreprise',
    'footer.company.about-us': 'À propos',
    'footer.company.blog': 'Blog',
    'footer.company.news': 'Actualités',
    'footer.company.careers': 'Carrières',
    'footer.ressources.title': 'ressources',
    'footer.ressources.contact': 'Contact',
    'footer.ressources.legal-notice': 'Mentions légales',
    'footer.ressources.cookies': 'Cookies preferences',
    'footer.ressources.status': 'Statut du service'
  }
}

var $FpTranslate = {
  currentLanguage: '',
  availableLanguages () {
    return ['en', 'fr']
  },
  fallbackLanguage () {
    return 'en'
  },
  findAndSetLanguage () {
    var foundLanguage = null
    for (var lang of this.availableLanguages()) {
      if (window.location.hash.startsWith('#/' + lang.toLowerCase())) {
        foundLanguage = lang.toLowerCase()
        break
      }
    }

    if (!foundLanguage) {
      foundLanguage = this.fallbackLanguage()
      console.error(`Language not found, falling back to "${this.fallbackLanguage()}"`)
    }

    this.setLanguage(foundLanguage)
    return foundLanguage
  },
  setLanguage (language) {
    this.currentLanguage = language
  },
  get (translationString, overrideLanguage) {
    if (!overrideLanguage && this.currentLanguage === '') {
      for (var lang of this.availableLanguages()) {
        if (window.location.hash.startsWith('#/' + lang.toLowerCase())) {
          this.currentLanguage = lang.toLowerCase()
          break
        }
      }
    }

    if ($Translations[this.currentLanguage] && $Translations[this.currentLanguage][translationString] !== undefined) {
      return $Translations[this.currentLanguage][translationString]
    } else {
      return translationString
    }
  }
}
