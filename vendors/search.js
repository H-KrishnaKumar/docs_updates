(function () {
  var INDEXS = {};

  function escapeHtml(string) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#x2F;'
    };

    return String(string).replace(/[&<>"'/]/g, function (s) {
      return entityMap[s];
    })
  }

  function getAllPaths(router) {
    var paths = [];

    Docsify.dom.findAll('.sidebar-nav a:not(.section-link):not([data-nosearch])').forEach(function (node) {
      var href = node.href;
      var originHref = node.getAttribute('href');
      var path = router.parse(href).path;

      if (
        path &&
        paths.indexOf(path) === -1 &&
        !Docsify.util.isAbsolutePath(originHref)
      ) {
        paths.push(path);
      }
    });

    return paths
  }

  function saveData(maxAge) {
    localStorage.setItem('docsify.search.expires', Date.now() + maxAge);
    localStorage.setItem('docsify.search.index', JSON.stringify(INDEXS));
  }

  function genIndex(path, content, router, depth) {
    if (content === void 0) content = '';

    var tokens = window.marked.lexer(content);
    var slugify = window.Docsify.slugify;
    var index = {};
    var slug;

    tokens.forEach(function (token) {
      if (token.type === 'heading' && token.depth <= depth) {
        slug = router.toURL(path, {
          id: slugify(token.text)
        });
        index[slug] = {
          slug: slug,
          title: token.text,
          body: ''
        };
      } else {
        if (!slug) {
          return
        }
        if (!index[slug]) {
          index[slug] = {
            slug: slug,
            title: '',
            body: ''
          };
        } else if (index[slug].body) {
          index[slug].body += '\n' + (token.text || '');
        } else {
          index[slug].body = token.text;
        }
      }
    });
    slugify.clear();
    return index
  }

  /**
   * @param {String} query
   * @returns {Array}
   */
  function search(query) {
    var matchingResults = [];
    var data = [];
    Object.keys(INDEXS).forEach(function (key) {
      data = data.concat(Object.keys(INDEXS[key]).map(function (page) {
        return INDEXS[key][page];
      }));
    });

    query = query.trim();
    var keywords = query.split(/[\s\-，\\/]+/);
    if (keywords.length !== 1) {
      keywords = [].concat(query, keywords);
    }

    var loop = function (i) {
      var post = data[i];
      var isMatch = false;
      var resultStr = '';
      var postTitle = post.title && post.title.trim();
      var postContent = post.body && post.body.trim();
      var postUrl = post.slug || '';

      if (postTitle && postContent) {
        keywords.forEach(function (keyword) {
          // From https://github.com/sindresorhus/escape-string-regexp
          var regEx = new RegExp(
            keyword.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
            'gi'
          );
          var indexTitle = -1;
          var indexContent = -1;

          indexTitle = postTitle && postTitle.search(regEx);
          indexContent = postContent && postContent.search(regEx);

          if (indexTitle < 0 && indexContent < 0) {
            isMatch = false;
          } else {
            isMatch = true;
            if (indexContent < 0) {
              indexContent = 0;
            }

            var start = 0;
            var end = 0;

            start = indexContent < 11 ? 0 : indexContent - 10;
            end = start === 0 ? 70 : indexContent + keyword.length + 60;

            if (end > postContent.length) {
              end = postContent.length;
            }

            var matchContent =
              '...' +
              escapeHtml(postContent)
              .substring(start, end)
              .replace(regEx, ("<em class=\"search-keyword\">" + keyword + "</em>")) +
              '...';

            resultStr += matchContent;
          }
        });

        if (isMatch) {
          var matchingPost = {
            title: escapeHtml(postTitle),
            content: resultStr,
            url: postUrl
          };

          matchingResults.push(matchingPost);
        }
      }
    };

    for (var i = 0; i < data.length; i++) loop(i);

    return matchingResults
  }

  function init$1(config, vm) {
    var isAuto = config.paths === 'auto';
    var isExpired = localStorage.getItem('docsify.search.expires') < Date.now();

    INDEXS = JSON.parse(localStorage.getItem('docsify.search.index'));

    if (isExpired) {
      INDEXS = {};
    } else if (!isAuto) {
      return
    }

    var paths = isAuto ? getAllPaths(vm.router) : config.paths;
    var len = paths.length;
    var count = 0;

    paths.forEach(function (path) {
      if (INDEXS[path]) {
        return count++
      }

      Docsify
        .get(vm.router.getFile(path), false, vm.config.requestHeaders)
        .then(function (result) {
          INDEXS[path] = genIndex(path, result, vm.router, config.depth);
          len === ++count && saveData(config.maxAge);
        });
    });
  }

  var NO_DATA_TEXT = '';
  var options;

  function tpl(defaultValue) {
    if (defaultValue === void 0) defaultValue = '';

    var htmlSearch = `
      <div class="inner-wrap">
        <div class="input-wrap">\n
          <i class="search-icon"></i>
          <input type="search" value="${defaultValue}" />\n
          <i class="clear-icon"></i>
        </div>
        <div class="results">
          <div class="inner-results"></div>
        </div>
      </div>
    `;
    var elSearch = Docsify.dom.create('div', htmlSearch);
    var content = Docsify.dom.find('nav.app-nav');
    var body = Docsify.dom.find('body');
    var elOverlay = Docsify.dom.create('div'); // overlay layer

    Docsify.dom.toggleClass(elSearch, 'search');
    Docsify.dom.toggleClass(elOverlay, 'searching-layer');
    Docsify.dom.before(content, elSearch);
    Docsify.dom.before(body, elOverlay);

  }

  function doSearch(value) {
    var $search = Docsify.dom.find('.app-nav > .search');
    var $results = Docsify.dom.find('.app-nav > .search > .inner-wrap >  div.results')
    var $resultsPanel = Docsify.dom.find('.app-nav > .search > .inner-wrap > .results > div.inner-results');
    var $body = Docsify.dom.find('body');

    if (!value) {
      $search.classList.remove('show');
      $results.classList.remove('show');
      $body.classList.remove('searching');
      $resultsPanel.innerHTML = '';
      return
    }
    var matchs = search(value);

    var html = '';
    matchs.forEach(function (post) {
      html += "<div class=\"matching-post\">\n<a href=\"" + (post.url) + "\">\n<h2>" + (post.title) + "</h2>\n<p>" + (post.content) + "</p>\n</a>\n</div>";
    });

    $search.classList.add('show');
    $results.classList.add('show');
    $body.classList.add('searching');
    $resultsPanel.innerHTML = html || ("<p class=\"empty\">" + NO_DATA_TEXT + "</p>");
    if (options.hideOtherSidebarContent) {
      $sidebarNav.classList.add('hide');
      $appName.classList.add('hide');
    }
  }

  function bindEvents() {
    var $search = Docsify.dom.find('.app-nav > .search');
    var $input = Docsify.dom.find($search, 'input');
    var $inputWrap = Docsify.dom.find($search, '.input-wrap');
    var $results = Docsify.dom.find($search, '.results');
    var $resultsPanel = Docsify.dom.find('.app-nav > .search > .inner-wrap > .results > div.inner-results');
    var $body = Docsify.dom.find('body');
    var $searchingLayer = Docsify.dom.find('.searching-layer');

    var timeId;
    // Prevent to Fold sidebar
    Docsify.dom.on($search, 'click', function (e) {
      return e.target.tagName !== 'A' && e.stopPropagation();
    });

    // Close search on result click
    [$resultsPanel, $searchingLayer].forEach(function (element) {
      Docsify.dom.on(element, 'click', function (el) {
        $search.classList.remove('show');
        $results.classList.remove('show');
        $body.classList.remove('searching');
        $resultsPanel.innerHTML = '';
        $input.value = ''
      });
    })

    Docsify.dom.on($input, 'input', function (e) {
      clearTimeout(timeId);
      timeId = setTimeout(function (_) {
        return doSearch(e.target.value.trim());
      }, 100);
    });
    Docsify.dom.on($inputWrap, 'click', function (e) {
      // Click input outside
      if (e.target.tagName !== 'INPUT') {
        $input.value = '';
        doSearch();
      }
    });
  }

  function updatePlaceholder(text, path) {
    var $input = Docsify.dom.getNode('.search input[type="search"]');

    if (!$input) {
      return
    }
    if (typeof text === 'string') {
      $input.placeholder = text;
    } else {
      var match = Object.keys(text).filter(function (key) {
        return path.indexOf(key) > -1;
      })[0];
      $input.placeholder = text[match];
    }
  }

  function updateNoData(text, path) {
    if (typeof text === 'string') {
      NO_DATA_TEXT = text;
    } else {
      var match = Object.keys(text).filter(function (key) {
        return path.indexOf(key) > -1;
      })[0];
      NO_DATA_TEXT = text[match];
    }
  }

  function updateOptions(opts) {
    options = opts;
  }

  function init(opts, vm) {
    var keywords = vm.router.parse().query.s;

    updateOptions(opts);
    tpl(keywords);
    bindEvents();
    keywords && setTimeout(function (_) {
      return doSearch(keywords);
    }, 500);
  }

  function update(opts, vm) {
    updateOptions(opts);
    updatePlaceholder(opts.placeholder, vm.route.path);
    updateNoData(opts.noData, vm.route.path);
  }

  var CONFIG = {
    placeholder: 'Type to search',
    noData: 'No Results!',
    paths: 'auto',
    depth: 2,
    maxAge: 86400000, // 1 day
    hideOtherSidebarContent: false
  };

  var install = function (hook, vm) {
    var util = Docsify.util;
    var opts = vm.config.search || CONFIG;

    if (Array.isArray(opts)) {
      CONFIG.paths = opts;
    } else if (typeof opts === 'object') {
      CONFIG.paths = Array.isArray(opts.paths) ? opts.paths : 'auto';
      CONFIG.maxAge = util.isPrimitive(opts.maxAge) ? opts.maxAge : CONFIG.maxAge;
      CONFIG.placeholder = opts.placeholder || CONFIG.placeholder;
      CONFIG.noData = opts.noData || CONFIG.noData;
      CONFIG.depth = opts.depth || CONFIG.depth;
      CONFIG.hideOtherSidebarContent = opts.hideOtherSidebarContent || CONFIG.hideOtherSidebarContent;
    }

    var isAuto = CONFIG.paths === 'auto';

    hook.mounted(function (_) {
      init(CONFIG, vm);
      !isAuto && init$1(CONFIG, vm);
    });
    hook.doneEach(function (_) {
      update(CONFIG, vm);
      isAuto && init$1(CONFIG, vm);
    });
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);

}());
