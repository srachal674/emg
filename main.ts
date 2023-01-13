basic.showString("EMG")
let emg = 0
basic.forever(function () {
    emg = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("EMG", emg)
})
