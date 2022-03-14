radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(1)
    } else {
        basic.showIcon(IconNames.No)
        radio.sendNumber(2)
    }
})
