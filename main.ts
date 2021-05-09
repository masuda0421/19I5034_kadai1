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
// Bボタンを押したら悲しい顔
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
input.onGesture(Gesture.Shake, function () {
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
// Bボタンを押したら悲しい顔
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
// Bボタンを押したら悲しい顔
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
