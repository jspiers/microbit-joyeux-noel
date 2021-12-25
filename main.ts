function playSound (num: number) {
    if (num == 1) {
        soundExpression.hello.play()
    } else if (num == 2) {
        soundExpression.happy.play()
    } else if (num == 3) {
        soundExpression.slide.play()
    } else if (num == 4) {
        soundExpression.yawn.play()
    }
}
input.onButtonPressed(Button.A, function () {
    if (nextsound == 4) {
        nextsound = 1
    } else {
        nextsound += 1
    }
})
function joyeuxNoel (name: string) {
    basic.showString("Joyeux Noel " + name + "!", 90)
}
input.onButtonPressed(Button.B, function () {
    playSound(sound)
    basic.showIcon(IconNames.EigthNote)
    basic.showNumber(sound)
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.sad.play()
    basic.showIcon(IconNames.Angry)
    basic.pause(100)
    basic.showNumber(sound)
})
radio.onReceivedValue(function (name, value) {
    playSound(value % 10)
    basic.showString(name.charAt(0))
    basic.showNumber(sound)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue(kid, sound)
    basic.showIcon(IconNames.Happy)
    basic.showNumber(sound)
})
let nextsound = 0
let kid = ""
let sound = 0
radio.setTransmitSerialNumber(true)
radio.setGroup(158)
sound = 0
kid = "Alex"
joyeuxNoel(kid)
nextsound = 1
basic.forever(function () {
    if (sound != nextsound) {
        sound = nextsound
        basic.showNumber(sound)
    }
})
