let angle = 0
basic.forever(function () {
    angle = input.compassHeading()
    if (angle >= 45) {
        basic.showString("E")
    } else if (angle >= 135) {
        basic.showString("S")
    } else if (angle >= 225) {
        basic.showString("O")
    } else if (angle >= 345 && angle <= 45) {
        basic.showString("N")
    }
})
