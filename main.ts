let Temp = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showString("" + (Temp))
})
basic.forever(function () {
    Temp = input.temperature()
})
