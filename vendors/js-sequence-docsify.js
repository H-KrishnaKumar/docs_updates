(function () {

  function findChartBlock(hook, vm) {
    let charts = {}
    function createSequence(sequence) {
      let code = sequence.replace('```sequence\n','')
      code = code.replace('\n```','')
      let d = Diagram.parse(code)
      
      let id = Math.floor(new Date().getTime()*Math.random())
      charts[id] = d
      return '<div class="sequence" id="seq_'+id+'"></div>'
    }

    hook.beforeEach(function (content) {
      let regex = /```sequence\n([\n\{\}\t\s\'\"\,\[\]\_\-\>\:\(\)\+A-Za-zÀ-ÿ]*)\n```/gm
      let newContent = content
      let matches = newContent.match(regex)||[]
      matches.forEach(m=>{
        newContent = newContent.replace(m,createSequence(m))
      })

      return newContent
    });

    hook.doneEach(function () {
      for(let id in charts) {
        charts[id].drawSVG('seq_'+id, {theme: 'hand'})
      }
    })
  }

  var install = function (hook, vm) {
    findChartBlock(hook, vm)
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);
  
}());
