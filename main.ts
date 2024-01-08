input.onButtonPressed(Button.A, function () {
    music.setVolume(127)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
let Distance = 0
let time = 0
music.setVolume(0)
music.setTempo(240)
basic.showIcon(IconNames.EighthNote)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    time = pins.pulseIn(DigitalPin.P8, PulseValue.High)
    Distance = Math.idiv(time, 58)
    basic.pause(2000)
})
basic.forever(function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (Distance == 0 || Distance > 1000) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (Distance <= 50) {
        basic.pause(250)
    } else {
        basic.pause(750)
    }
})
