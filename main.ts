function MOTER_LED () {
	
}
function LSD () {
    모터of = 0
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("soil Hum1", 0, 0)
    I2C_LCD1602.ShowString("000%", 11, 0)
    I2C_LCD1602.ShowString("Moter" + 모터of + "[", 0, 0)
    I2C_LCD1602.ShowString("000%]", 11, 1)
}
function MotorPower () {
	
}
function SoilHumi () {
    if (토습 >= 100) {
        I2C_LCD1602.ShowString(convertToText(토습), 11, 0)
    } else if (토습 >= 10) {
        I2C_LCD1602.ShowString("0" + convertToText(토습), 11, 0)
    } else {
        I2C_LCD1602.ShowString(convertToText("00" + convertToText(토습)), 11, 0)
    }
}
let 토습 = 0
let 모터of = 0
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.BacklightOff()
basic.pause(500)
I2C_LCD1602.BacklightOn()
basic.showIcon(IconNames.House)
I2C_LCD1602.ShowString("Grow F1owerpot", 1, 0)
I2C_LCD1602.ShowString("kit", 5, 1)
basic.pause(100)
basic.clearScreen()
LSD()
basic.forever(function () {
    토습 = Math.round(Math.map(pins.analogReadPin(AnalogPin.P0), 1023, 195, 0, 100))
    토습 = Math.round(Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 1023, 0, 100))
    MOTER_LED()
    MotorPower()
    LSD()
})
