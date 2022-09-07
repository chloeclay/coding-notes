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

$(function () {
  showHide()
  hoverSub()
  keyword()
  shareBtns()
  address()
  changeTab()
  miniCart()
  changeContent()
  moveMiniImgs()
  mediumImgs()
  largeImgs()

  // 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
  function largeImgs () {
    var $box = $('#maskTop')
    var $mask = $('#mask')
    var mask_length = $mask.width()
    var box_length = $box.width()
    var $largeBox = $('#largeImgContainer')
    var $largeImg = $('#largeImg')

    var $loading = $('#loading')

    $box.hover(function () {
      $mask.show()


        // large IMG
        
        var src = $('#mediumImg').attr('src').replace('m.jpg','l.jpg')
        $largeImg.attr('src',src)
        $largeBox.show()

        $largeImg.on('load',function () {
          var largeImg_width = $largeImg.width()
          var largeImg_height = $largeImg.height()
  
          $largeBox.width(largeImg_width/2)
          $largeBox.height(largeImg_height/2)
          $loading.hide()
          $largeImg.show()

          $box.on('mousemove',function (event) {
            // move the mask
            var mouseX = event.offsetX
            var mouseY = event.offsetY
            var left = mouseX - mask_length/2
            var top = mouseY - mask_length/2
            if (left < 0) {
              left = 0
            } else if (left > box_length - mask_length) {
              left = box_length - mask_length
            }
            if (top < 0) {
              top = 0
            } else if (top > box_length - mask_length) {
              top = box_length - mask_length
            }
            $mask.css({
              left:left,
              top:top
            })

            // move largeIMG
            var largeImgLeft = -left*largeImg_width / box_length
            var largeImgTop = -top*largeImg_height/box_length
            $largeImg.css({
              left:largeImgLeft,
              top:largeImgTop
            })
          })
          
        })
      
    },function () {
      $mask.hide()
      $largeBox.hide()
      $largeImg.hide()
    })
  }

  // 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
  function mediumImgs () {
    $('#icon_list').children('li').hover(function () {
      var src = $(this).children().attr('src').replace('.jpg','-m.jpg')
      $('#mediumImg').attr('src',src)
    },function () {
      return
    })
  }

  // 9. 点击向右/左, 移动当前展示商品的小图片
  function moveMiniImgs () {
    var $left = $('#preview>h1>a:first')
    var $right = $('#preview>h1>a:last')
    var $imgs = $('#icon_list').children('li')
    var img_width = $imgs.eq(0).width()
    var SHOW_NUM = 5
    var img_num = $imgs.length
    var click_num = 0
    // make right btn clickable
    $right.attr('class','forward')

    // click right btn
    $right.click(function () {
      // make left btn clickable
      $left.attr('class','backward')
      if (click_num === img_num - SHOW_NUM) {
        return
      }
      click_num++
      if (click_num === img_num - SHOW_NUM) {
        $right.attr('class','forward_disabled')
      }
      // move imgs
      $('#icon_list').css('left',-img_width*click_num)
    })
    // click left btn
    $left.click(function () {
      // make right btn clickable
      $right.attr('class','forward')
      if (click_num === 0) {
        return
      }
      click_num--
      if (click_num === 0) {
        $left.attr('class','backward_disabled')
      }
      // move imgs
      $('#icon_list').css('left',-img_width*click_num)
    })
  }

  // 8. 点击切换产品选项 (商品详情等显示出来)
  function changeContent () {
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
  function miniCart () {
    $('#minicart').hover(function () {
      this.className = 'minicart'
      $(this).children('div').show()
    },function () {
      this.className = ''
      $(this).children('div').hide()
    })
  }

  // 6. 点击切换地址tab
  function changeTab () {
    $('#store_tabs>li').click(function () {
      $('#store_tabs>li').removeClass('hover')
      $(this).addClass('hover')
    })
  }

  // 5. 鼠标移入移出切换地址的显示隐藏
  function address () {
    $('#store_select').hover(function () {
      $(this).children(':gt(0)').show()
      $('#store_close').click(function () {
        $(this).hide()
        $(this).prev(0).hide()
      })
    },function () {
      $(this).children(':gt(0)').hide()
    })
  }

  // 4. 点击显示或者隐藏更多的分享图标
  function shareBtns () {
    var isOpen = false
    $('#shareMore').click(function () {
      if (isOpen) {
        isOpen = false
        $('.share_kaixin').hide()
        $('.share_douban').hide()
        $('#dd').width(155)
        $(this).children().removeClass('backword')
      } else {
        isOpen = true
        $('.share_kaixin').show()
        $('.share_douban').show()
        $('#dd').width(200)
        $(this).children().addClass('backword')
      }
    })
  }

  // 3. 输入搜索关键字, 列表显示匹配的结果
  function keyword () {
    $('#txtSearch')
        .on('keyup focus', function () {
          var text = $(this).val().trim()
          if (text) {
            $('#search_helper').show()
          }
        })
        .blur(function () {
          $('#search_helper').hide()
        })
  }

  // 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
  function hoverSub () {
    $('.cate_item').hover(function () {
      $(this).children('div').show()
    },function () {
      $(this).children('div').hide()
    })
  }

  // 1. 鼠标移入显示,移出隐藏  
  function showHide () {
    $('div[name = show_hide]').hover(function () {
      var id = this.id + '_items'
      $('#'+id).show()
    },function () {
      var id = this.id + '_items'
      $('#'+id).hide()
    })
  }
})
