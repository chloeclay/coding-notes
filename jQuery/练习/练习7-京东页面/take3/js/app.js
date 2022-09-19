/*
 1. 鼠标移入显示,移出隐藏
 目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */
;
$(function () {
  
  largeImg()
  showImgM ()
  moveImgS ()
  showHide ()

  // 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
  function largeImg () {
    var $mask = $('#mask')
    var $maskTop = $('#maskTop')
    var $largImgBox = $('#largeImgContainer')
    var $largeImg = $('#largeImg')
    var $mediumImg = $('#mediumImg')
    var boxW = $maskTop.width()
    var boxH = $maskTop.height()
    var maskL = $mask.width()

    $maskTop.hover(function () {
      $mask.show()
      var src = $mediumImg.attr('src').replace('-m.','-l.')
      $largeImg.attr('src', src)
      $largImgBox.show()

      // move large img
      $largeImg.on('load',function () {
        var largeImgH = $largeImg.height()
        var largeImgW = $largeImg.width()
        $largImgBox.width(largeImgW / 2)
        $largImgBox.height(largeImgH / 2)
        $('#loading').hide()
        $largeImg.show()

        // move mask & largeImg
        $maskTop.mousemove(function (event) {
          // move mask
          var x = event.offsetX
          var y = event.offsetY
          var maskX = x - maskL/2
          var maskY = y - maskL/2
          if (maskX < 0) {
            maskX = 0
          } else if (maskX > boxW - maskL) {
            maskX = boxW - maskL
          }
          if (maskY < 0) {
            maskY = 0
          } else if (maskY > boxH - maskL) {
            maskY = boxH - maskL
          }
          $mask.css({
            left:maskX,
            top:maskY
          })
          // move large img
          var largeImgLeft = - (largeImgW/boxW )* maskX
          var largeImgTop = - (largeImgH/boxH) * maskY
          $largeImg.css({
            left:largeImgLeft,
            top:largeImgTop
          })

        })
      })
    },function () {
      $largImgBox.hide()
      $mask.hide()
    })
  }
  // 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
  function showImgM () {
    $('#icon_list>li>img').hover(function () {
      $(this).addClass('hoveredThumb')
      var newSrc = $(this).attr('src').replace('.jpg','-m.jpg')
      $('#mediumImg').attr('src',newSrc)
    },function () {
      $(this).removeClass('hoveredThumb')
    })
  }
  // 9. 点击向右/左, 移动当前展示商品的小图片
  function moveImgS () {
    var $prev = $('#preview>h1>a:first')
    var $next = $('#preview>h1>a:last')
    var $ul = $('#icon_list')
    var clickNum = 0
    var showNum = 5
    var imgNum = $ul.children().length
    var liWidth = $ul.children(0).width()

    if (imgNum > showNum) {
      $next.attr('class','forward')
    }
    $next.click(function () {
      if (clickNum === imgNum - showNum) {
        return
      }
      clickNum++
      $prev.attr('class','backward')
      if (clickNum === imgNum - showNum) {
        $next.attr('class','forward_disabled')
      } 
      $ul.css('left',-clickNum * liWidth)
    })

    $prev.click(function () {
      if (clickNum === 0) {
        return
      }
      clickNum--
      $next.attr('class','forward')
      if (clickNum === 0) {
        $prev.attr('class','backward_disabled')
      } 
      $ul.css('left',-clickNum * liWidth)

    })
  }

  // 1. 鼠标移入显示,移出隐藏
  //  目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
  function showHide () {
    $('li[name="show_hide"]').hover(function () {
      var id = '#' + this.id + '_items'
      $(id).show()
    },function () {
      var id = '#' + this.id + '_items'
      $(id).hide()
    })
  }

})

