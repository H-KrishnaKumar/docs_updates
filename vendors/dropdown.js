(function () {
  function findApiBlocks(hook, vm) {
    hook.beforeEach(function (content) {
      let newContent = content
      //|||
      //Title * ImgPath like en/technical/api-reference/data-manager/dropzone/Picture.png
      //::::
      //Content
      // |||
      const regex = /(?:\|\|\|[\s]?([\s\S]*?)\n::::\n([\s\S]*?)\n\|\|\|)/gm
      this.i = 1
      let listHtml
      let sectionHtml
      let block = ""
      let contentHtml

      while ((m = regex.exec(content)) !== null) {
        block += m[0] + '\n\n'
        let m1 = m[1].split('*')
        let blockList = vm.compiler.compile(m1[0])
        let blockContent = vm.compiler.compile(m[2])
        this.blockListImg = ''
        if (m1 && m1[1]) {
          let listImg = m1[1]
          this.blockListImg = `<img src="${listImg}" height="18" width="18" style="position:relative;top:5px;pointer-events:none;">`
        }  
        if (blockList && blockContent) {
          listHtml = listHtml || "";
          listHtml += `<li 
          style="cursor:pointer;border-radius:4px;padding: .15rem .75rem;top: 18px; position: relative;
          letter-spacing: 0.6px;font-family: Source Sans Pro;font-size: 14px;line-height: 25px;" 
          class="tabs-list${this.i} dropdown-list">
          ${blockListImg}${blockList}</li>`
          contentHtml = contentHtml || "";
          contentHtml += `<div class="tabs-list${this.i} tabs-content" style="padding: 5px;background-color: #F6F9FC;
          color: #3E4550;font-family: Courier;letter-spacing: 0.6px;font-size: 14px;line-height: 25px;">${blockContent}</div>`
          this.i++
        }
      }
      sectionHtml = `<ul class="tabs-ul" style="display:flex;list-style:none;margin-left:-24px;height:30px;">${listHtml}</ul><div>${contentHtml}</div>`
      block = block.slice(0 , -2)
      newContent = newContent.replace(block, sectionHtml)
      return newContent
    })
  }

  function callReady(hook) {
    hook.ready(function (_) {
      document.querySelectorAll('.tabs-content').forEach(v=> { v.style.display = "none" })
      document.querySelector(`.tabs-content`).style.display = "block"
      document.querySelector('.tabs-list1').style.backgroundColor = "#F6F9FC"
      document.querySelectorAll('.tabs-ul p').forEach(v=> { v.style.marginTop = "-2px";v.style.marginLeft = "5px"; })
      document.querySelectorAll('*[class^="tabs-list"]').forEach(e=> {
        e.addEventListener('click', (event) => {
          let listClass = '.' + event.target.parentNode.classList[0]
          if (!listClass.includes('tabs-list')) {
            listClass = '.' + event.target.classList[0]
          }
          if (!listClass.includes('tabs-list')) return
          event.preventDefault();
          document.querySelectorAll('.tabs-content').forEach(v=> { v.style.display = "none"; })
          document.querySelector(`${listClass}.tabs-content`).style.display = "block"
          document.querySelectorAll('.dropdown-list').forEach(v=> { v.style.backgroundColor = "unset"; })
          document.querySelector(listClass).style.backgroundColor = "#F6F9FC"
        }, false)
      })
    })
  }

  var install = function (hook, vm) {
    findApiBlocks(hook, vm)
    callReady(hook)
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)

}())
