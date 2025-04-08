let Temperatura = 0
input.onGesture(Gesture.Shake, function () {
    Temperatura = input.temperature()
    basic.showString("" + Temperatura + "C°")
})
