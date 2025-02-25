(function () {
  function findYoutubeVideos(hook, vm) {
    hook.beforeEach(function (content) {
      let newContent = content
      const regex = /(?:\[(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w\-]+)(?:&(?:amp;)?[\w\?=]*)?\])/gm

      while ((m = regex.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }
        if (m[1]) {
          let imageURL = `https://img.youtube.com/vi/${m[1]}/0.jpg`
          let videoURL = `http://www.youtube.com/watch?v=${m[1]}`
          let videoLink = `<a href="${videoURL}" class="mediabox"><img src="${imageURL}" data-no-zoom></a>`
          newContent = newContent.replace(m[0], videoLink)
        }
      };
      return newContent;
    });
  }

  function detectVideos(hook, vm) {
    hook.ready(function () {
      MediaBox('.mediabox')
    })
  }

  var install = function (hook, vm) {
    findYoutubeVideos(hook, vm)
    detectVideos(hook, vm)
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);

}());
