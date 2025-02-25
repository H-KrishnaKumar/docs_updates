(function () {
  function createChartReactJS(json) {
    return `<div class='chart'>\n\n\`\`\`json\n${json}\`\`\`\n<iframe src="${window.location.origin}/charts/reactjs/production/#${encodeURIComponent(json)}"></iframe><div class="clearfix"></div></div>`
  }

  function createChartVueJS(json) {
    return `<div class='chart'>\n\n\`\`\`json\n${json}\`\`\`\n<iframe src="${window.location.origin}/charts/vuejs/production/#${encodeURIComponent(json)}"></iframe><div class="clearfix"></div></div>`
  }

  function findChartBlock(hook, vm) {
    hook.beforeEach(function (content) {

      let regex = /```forepaas-reactjs\n([\w\s\,\{\}\:\"\t\n\[\]]*)```/gm
      let newContent = content
      while((m = regex.exec(content)) !== null) {
        newContent = newContent.replace(m[0],createChartReactJS(m[1]))
      }

      regex = /```forepaas-vuejs\n([\w\s\,\{\}\:\"\t\n\[\]]*)```/gm
      while((m = regex.exec(content)) !== null) {
        newContent = newContent.replace(m[0],createChartVueJS(m[1]))
      }

      return newContent
    });
  }

  var install = function (hook, vm) {
    findChartBlock(hook, vm)
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);
  
}());
