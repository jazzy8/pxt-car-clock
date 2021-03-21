radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("cur::00,1")
    if (receivedNumber > -45 && receivedNumber < 45) {
        serial.writeLine("shw::North")
    } else if (receivedNumber > -135 && receivedNumber < -45) {
        serial.writeLine("shw::West")
    } else if (receivedNumber > -225 && receivedNumber < -135) {
        serial.writeLine("shw::South")
    } else {
        serial.writeLine("shw::East")
    }
    basic.pause(325)
    serial.writeLine("cur::00,1")
    basic.pause(100)
    serial.writeLine("shw::" + receivedNumber)
    basic.pause(325)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "calib") {
        serial.writeLine("cls::all")
    }
})
serial.redirect(
SerialPin.P14,
SerialPin.P15,
BaudRate.BaudRate115200
)
basic.pause(200)
serial.writeLine("shw::--")
basic.pause(325)
serial.writeLine("cur::00,1")
serial.writeLine("shw::Calibrating")
