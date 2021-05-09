// P0でウィンク
input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # . . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// 右に傾けるとオーって感じの顔
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// Aでニコリ
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// 左に傾けるとポカーン顔
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// P2で頬を膨らませる
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// 揺れると無表情
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// A＋Bで通常ニコリ
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// Bでニヤリ
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
// P1でムっとした顔
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
// 落すとジト目
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        . . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
