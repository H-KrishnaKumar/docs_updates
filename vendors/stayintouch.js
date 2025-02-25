(function () {
  function createStayInTouch(json) {
    json = json && JSON.parse(json) || {}
    json.title = json.title || 'Stay in touch'
    json.content = json.content || 'Don’t hesitate to stay-in touch and subscribe to our newsletter. Don’t worry! We won’t spam you and keep it at a monthly rate.'
    json.placeholder = json.placeholder || 'Your email here'
    json.button = json.button || 'Get updates'
    json.success = json.success || 'You will receive more information about us soon!'
    
    return '<div class="stayintouch">'+
      '<h2>'+json.title+'</h2>'+
      '<p>'+json.content+'</p>'+
      '<form class="email">'+
        '<input type="email" class="email" placeholder="'+json.placeholder+'"/>'+
        '<button>'+json.button+'</button>'+
      '</form>'+
      '<span style="display:none;">'+json.success+'</span>'+
    '</div>'
  }

  function installElem(elem) {
    let input = elem.getElementsByTagName('input')[0]
    let form = elem.getElementsByTagName('form')[0]
    let span = elem.getElementsByTagName('span')[0]
    form.addEventListener('submit',function(e){
      e.preventDefault()

      // TODO - Bind that with the correct API
      if(input.value) {
        form.style.display = 'none'
        span.style.display = 'block'
      }
      
      return false
    })
  }

  function findStayInTouch(hook, vm) {
    hook.beforeEach(function (content) {

      let regex = /^\(stayintouch\)(\[(.*)\])?/gm
      let newContent = content
      while((m = regex.exec(content)) !== null) {
        newContent = newContent.replace(m[0],createStayInTouch(m[2]))
      }
      return newContent
    })

    hook.ready(function(){
      document.querySelectorAll('.stayintouch').forEach(installElem)
    })
  }

  var install = function (hook, vm) {
    findStayInTouch(hook, vm)
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);
  
}());
