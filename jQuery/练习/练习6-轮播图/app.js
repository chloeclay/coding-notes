$(function () {
  // preparation
var $container = $('#container')
var $list = $('#list')
var $points = $('#pointsDiv>span')
var pLength = $points.length
var $prev = $('#prev')
var $next = $('#next')
var index = 0
var moving = false

var IMG_WIDTH = 600
var TIME = 400
var ITEM_TIME = 20

// prev next btns
$prev.click(function () {
  moveList(false)
})
$next.click(function () {
  moveList(true)
})
// auto move
var timer = setInterval(() => {
  moveList(true)
}, 1000);
// hover stop moving
$container.hover(function () {
  clearInterval(timer)
},function () {
  timer = setInterval(() => {
    moveList(true)
  }, 1000);
})
// click points to move imgs
var targetIndex = 0
$points.click(function () {
  targetIndex = $(this).index()
  if (targetIndex != index) {
    moveList(targetIndex)
  }
})


// function 1 : moveList
function moveList(a) {
  // estimate moving status
  if (moving) {
    return
  }
  moving = true

  // calculate offset
  var offset = 0
  if (typeof a === 'boolean') {
    offset = a? -IMG_WIDTH : IMG_WIDTH
  } else {
    offset = -(a - index)*IMG_WIDTH
  }
  
  var currLeft = $list.position().left
  var targetLeft = currLeft + offset
  var itemLeft = offset/(TIME/ITEM_TIME)

  var timer = setInterval(() => {
    currLeft += itemLeft
    if (currLeft === targetLeft) {
      clearInterval(timer)
      moving = false

      // last & first img
      if (currLeft === 0) {
        currLeft = - pLength*IMG_WIDTH
      } else if (currLeft === - (pLength + 1)*IMG_WIDTH) {
        currLeft = - IMG_WIDTH
      }
    }
    // refresh left
    $list.css('left',currLeft)
  }, ITEM_TIME);
  // refresh points color
  changePoints(a)
}

// function 2 : changePoints
function changePoints(a) {
  var targetIndex = 0
  if (typeof a === 'boolean') {
    if (a) {
      targetIndex = index + 1
      if (targetIndex === pLength) {
        targetIndex = 0
      }
    } else {
      targetIndex = index 
      if (targetIndex === -1) {
        targetIndex = pLength - 1
      }
    }
  } else {
    targetIndex = a
  }

  // change style
  $points.eq(index).removeClass('on')
  $points.eq(targetIndex).addClass('on')

  // refresh index
  index = targetIndex
}
})