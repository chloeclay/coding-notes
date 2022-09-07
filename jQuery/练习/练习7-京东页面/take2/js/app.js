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

/*
1. 对哪个/些元素绑定什么监听?
2. 对哪个/些元素进行什么DOM操作?
*/
;$(function () {
  showHide()
  subShowHide() 
  searchTab()
  shareMore()
  address()
  toggleTabs()
  minicart()
  tabsChange()
  moveUl()
  hoverMiniPics()
  hoverMediumImg()

  // 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
  function hoverMediumImg () {
    var $mask = $('#mask')
    var $maskTop = $('#maskTop')
    var $maskTop = $('#maskTop')
    var $mediumImg = $('#mediumImg')
    var $largeImgContainer = $('#largeImgContainer')
    var $loading = $('#loading')
    var $largeImg = $('#largeImg')
    var boxWidth = $maskTop.width()
    var boxHeight = $maskTop.height()
    var maskWidth = $mask.width()

    // move the little yellow square
    $maskTop.hover(function () {
      $mask.show()

      // load largeImg
      var src = $mediumImg.attr('src').replace('-m.','-l.')
      $largeImg.attr('src',src)
      $largeImgContainer.show()

      $largeImg.on('load',function () {
        // 2. move large img
          // change large img's container size
          var largeWidth = $largeImg.width()
          var largeHeight = $largeImg.height()
          $largeImgContainer.css({
            width: largeWidth/2,
            heigth: largeHeight/2
          })
          $loading.hide()
          $largeImg.show()
        // 1. move little yellow square
        // get mouse position
        $maskTop.mousemove(function (event) {
          // 1st 
          var mouseTop = event.offsetY
          var mouseLeft = event.offsetX
          var maskTop = mouseTop - maskWidth / 2
          var maskLeft = mouseLeft - maskWidth / 2
          
          if (maskTop < 0) {
            maskTop = 0
          } else if (maskTop > boxHeight - maskWidth) {
            maskTop = boxHeight - maskWidth
          }
          if (maskLeft < 0) {
            maskLeft = 0
          } else if (maskLeft > boxWidth - maskWidth) {
            maskLeft = boxWidth - maskWidth
          }
          $mask.css({
            left: maskLeft,
            top: maskTop
          })
          // 2nd
          var largeLeft = -maskLeft * largeWidth / boxWidth
          var largeTop = -maskTop * largeHeight / boxHeight
          $largeImg.css({
            left: largeLeft,
            top: largeTop
          })
        })
        
      })

            

    },function () {
      $mask.hide()
      $largeImgContainer.hide()
      $largeImg.hide()
    })
  }

  // 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
  function hoverMiniPics () {
    var $lis = $('#icon_list>li')
    $lis.hover(function () {
      $(this).children().addClass('hoveredThumb')
      var src = $(this).children().attr('src').replace('.jpg','-m.jpg')
      $('#mediumImg').attr('src',src)
    },function () {
      $(this).children().removeClass('hoveredThumb')
    })
  }

  // 9. 点击向右/左, 移动当前展示商品的小图片
  function moveUl () {
    var $ul = $('#icon_list')
    var $left = $('#preview>h1>a:first')
    var $right = $('#preview>h1>a:last')
    var $lis = $ul.children('li')
    var SHOW_COUNT = 5
    var img_count = $lis.length
    var move_count = 0
    var IMG_WIDTH = $lis.eq(0).width()
    if (img_count>SHOW_COUNT) {
      $right.attr('class','forward')
    }
    $right.click(function () {
      if (move_count === img_count - SHOW_COUNT) {
        return
      }
      move_count++
      $left.attr('class','backward')
      if (move_count === img_count - SHOW_COUNT) {
        $right.attr('class','forward_disabled')
      }
      $ul.css('left',-move_count*IMG_WIDTH)
    })
    
    $left.click(function () {
      if (move_count === 0) {
        return
      }
      move_count--
      $right.attr('class','forward')
      if (move_count === 0) {
        $left.attr('class','backward_disabled')
      }
      $ul.css('left',-move_count*IMG_WIDTH)
    })
  }

  // 8. 点击切换产品选项 (商品详情等显示出来)
  function tabsChange () {
      var $lis = $('#product_detail>ul>li')
      var $divs = $('#product_detail>div:gt(0)')
      $lis.click(function () {
        var index = $(this).index()
        $lis.removeClass('current')
        this.className = 'current'
        $divs.hide()
        $divs.eq(index).show()
    })
  }

  // 7. 鼠标移入移出切换显示迷你购物车
  function minicart () {
    $('#minicart').hover(function () {
      this.className = 'minicart'
      $(this).children(':last').show()
    },function () {
      this.className = ''
      $(this).children(':last').hide()
    })
  }

  // 6. 点击切换地址tab
  function toggleTabs () {
    $('#store_tabs>li').click(function () {
      $('#store_tabs>li').removeClass('hover')
      this.className = 'hover'
    })
  }
  
  // 5. 鼠标移入一出切换地址显示隐藏
  function address () {
    $('#store_select')
      .hover(
        function () {
          $(this).children(':gt(0)').show()
        },
        function () {
          $(this).children(':gt(0)').hide()
        }
      )
      // close btn
      .children(':last')
      .click(function () {
        $('#store_select').children(':gt(0)').hide()
      })
  }

  // 4. 分享按钮显示或隐藏更多图标
  function shareMore () {
    // status
    var isOpen = false
    $('#shareMore').click(
      // my test version
        // function () {
        //   if (isOpen) {
        //     isOpen = false
        //       // icons
        //       $('.share_kaixin,.share_douban').css('display','none')
        //       // block width
        //       $('#dd').width(150)
        //       // arrow
        //       $(this).children().removeClass('backword')
        //   } else {
        //     isOpen = true
        //       // icons
        //       $('.share_kaixin,.share_douban').css('display','')
        //       // block width 
        //       $('#dd').width(200)
        //       // arrow
        //       $(this).children().addClass('backword')
        //   }
      // teachers version
      function () {
        var $a = $('#shareMore')
        var $asToChange = $a.prevAll(':lt(2)')
        var $block = $a.parent()
        var $b = $a.children()
        if (isOpen) {
          $b.removeClass('backword')
          $asToChange.hide()
          $block.width(155)
        } else {
          $b.addClass('backword')
          $asToChange.show()
          $block.width(200)
        }
        isOpen = !isOpen
      }
        )
  }

  // 3. 搜索框关键字匹配列表
  function searchTab () {
    $('#txtSearch').on('keyup focus',function () {
      if (this.value.trim()) {
        $('#search_helper').show()
      }
    })
                   .blur(function () {
                    $('#search_helper').hide()
    })
  }

  // 2. 二级菜单显示隐藏
  function subShowHide ( ) {
    $('#category_items>div').hover(function () {
      $(this).children(':last').show()
    },function () {
      $(this).children(':last').hide()
    })
  }

  // 1. 鼠标移入显示,移出隐藏
  // 目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
  function showHide() {
    $('[name = show_hide]').hover( 
      function () {
        var itemsName = this.id + '_items'
        $('#'+itemsName).show()
      },function () {
        var itemsName = this.id + '_items'
        $('#'+itemsName).hide()
    })
  }

 })
