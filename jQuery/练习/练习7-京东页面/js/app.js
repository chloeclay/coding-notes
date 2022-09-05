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

  // 6. 点击切换地址tab
  function toggleTabs () {
    $('#store_tabs>li').click(function () {
      $('#store_tabs>li').removeClass('hover')
      this.className = 'hover'
    })
  }
  
  // 5. 鼠标移入移出切换地址显示隐藏
  function address () {
    $('#store_select').hover(function () {
      $(this).children(':gt(0)').show()
      $('#store_close').click(function () {
        $('#store_select').children(':gt(0)').hide()
      })
    },function () {
      $(this).children(':gt(0)').hide()
      
    })
  }

  // 4. 分享按钮显示或隐藏更多图标
  function shareMore () {
    var isOpened = false
    $('#shareMore').click(function () {
      if (isOpened) {
        $(this).parent().width(155)
        $('.share_kaixin,.share_douban').hide()  
        $(this).children().removeClass('backword')      
        isOpened = false
      } else {
        $(this).parent().width(200)
        $('.share_kaixin,.share_douban').show()
        $(this).children().addClass('backword')
        isOpened = true
      }
    })
  }

  // 3. 搜索框关键字匹配列表
  function searchTab () {
    $('#txtSearch')
      .on('keyup focus',function () {
        var text = this.value.trim()
        if (text) {
          $('#search_helper').show()
        }
      })
      .blur(function () {
        $('#search_helper').hide()
      })
  }

  // 2. 二级菜单显示隐藏
  function subShowHide ( ) {
    $('.cate_item').hover(function () {
      $(this).children().eq(1).show()
    },function () {
      $(this).children().eq(1).hide()
    })
  }

  // 1. 鼠标移入显示,移出隐藏
  // 目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
  function showHide() {
    $('[name = show_hide]').hover(function () {
      var id = '#' + this.id
      $(id + '_items').show()
    },function () {
      var id = '#' + this.id
      $(id + '_items').hide()
    })
  }

 })
