function fabonacci(n) {
    n <= 2 ? 1 : fabonacci(n-1) + fabonacci(n-2)
}

this.onmessage = function (event) {
    var number = event.data
    var result = fabonacci(number)
    postMessage(result)
}