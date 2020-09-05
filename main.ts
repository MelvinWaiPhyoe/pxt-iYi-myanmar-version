/**
 * Makecode Extension for iYiRobot
 * modified from Shenzhen Yahboom Tech and chengenyue
 */

/**
 * Extension for DC and Servo Motors
 */
//% color="#FF6600" icon="\u2606" block="iYi Motor" advanced=false
//% groups=["DC Motor", "Servo Motor"]
namespace iYiMotor{
    export enum iYiDC{
        //% block="မော်တာ၁"
        M1,
        //% block="မော်တာ၂"
        M2
    }

    export enum iYiDCDir{
        //% block="ရှေ့သို့"
        Forward,
        //% block="နောက်သို့"
        Backward
    }

    export enum iYiTurn{
	    //% block="ဘယ်သို့"
	    TurnLeft,
	    //% block="ညာသို့"
	    TurnRight
    }

    export enum iYiSpin{
	    //% block="ဘယ်သို့"
	    SpinLeft,
	    //% block="ညာသို့"
	    SpinRight
    }

    export enum iYiStop{
        //% block="ဘယ်ဘက်"
        Left,
        //% block="ညာဘက်"
        Right
    }

    export enum iYiServo{
        //% block="၁"
        servo1,
        //% block="၂"
        servo2
    }

    /**
     * DC Motor အတွက် Control Function ဖြစ်ပါသည်။
     */
    //% group="DC Motor"
    //% blockId=iYi_DC
    //% block="%iYiDC အား|%iYiDCDir|အမြန်နှုန်း %speed ဖြင့်သွားရန်"
    //% speed.min=0 speed.max=100
    //% weight=50
    export function MotorRun(Motor: iYiDC,Direction: iYiDCDir,speed: number): void{
        let motorspeed = pins.map(speed,0,100,0,1023)
        if (Motor == iYiDC.M1 && Direction == iYiDCDir.Forward){
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P7, motorspeed)
        }
        if (Motor == iYiDC.M1 && Direction == iYiDCDir.Backward){
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.analogWritePin(AnalogPin.P8, motorspeed)
        }
        if (Motor == iYiDC.M2 && Direction == iYiDCDir.Forward){
            pins.digitalWritePin(DigitalPin.P3, 0)
            pins.analogWritePin(AnalogPin.P11, motorspeed)
        }
        if (Motor == iYiDC.M2 && Direction == iYiDCDir.Backward){
            pins.digitalWritePin(DigitalPin.P11, 0)
            pins.analogWritePin(AnalogPin.P3, motorspeed)
        }
    }

    /**
     * စက်ရုပ်အားဘယ်ညာကွေ့ရန်အတွက်ဖြစ်ပါသည်။
     */
    //% group="DC Motor"
    //% blockId=iYi_Turn
    //% block="%iYiTurn|အမြန်နှုန်း %speed ဖြင့်ကွေ့ရန်"
    //% speed.min=0 speed.max=100
    //% weight=40
    export function robotTurn(Turn: iYiTurn,speed: number): void{
        let motorspeed = pins.map(speed,0,100,0,1023)
        if (Turn == iYiTurn.TurnLeft){
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            pins.analogWritePin(AnalogPin.P11, motorspeed)
        }
        if (Turn == iYiTurn.TurnRight){
            pins.digitalWritePin(DigitalPin.P11, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)     
            pins.analogWritePin(AnalogPin.P7, motorspeed)
        }
    }

    /**
     * စက်ရုပ်အားဘယ်ညာလှည့်ရန်အတွက်ဖြစ်ပါသည်။
     */
    //% group="DC Motor"
    //% blockId=iYi_Spin
    //% block="%iYiSpin|အမြန်နှုန်း %speed ဖြင့်လှည့်ရန်"
    //% speed.min=0 speed.max=100
    //% weight=30
    export function robotSpin(Spin: iYiSpin, speed: number): void{
        let motorspeed = pins.map(speed,0,100,0,1023)
        if (Spin == iYiSpin.SpinLeft){
            pins.digitalWritePin(DigitalPin.P7, 0)
            pins.analogWritePin(AnalogPin.P8, motorspeed)
            pins.digitalWritePin(DigitalPin.P3, 0)
            pins.analogWritePin(AnalogPin.P11, motorspeed)
        }
        if (Spin == iYiSpin.SpinRight){
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P7, motorspeed)
            pins.digitalWritePin(DigitalPin.P11, 0)
            pins.analogWritePin(AnalogPin.P3, motorspeed)
        }
    }

    /**
     * ရပ်လိုသည့်မော်တာအားရပ်ရန်အတွက်ဖြစ်ပါသည်။
     */
    //% group="DC Motor"
    //% blockId=iYi_Stop
    //% block="%iYiStop မော်တာအားရပ်ရန်"
    //% weight=20
    export function motorStop(Stop: iYiStop): void{
        if (Stop == iYiStop.Left){
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
        if (Stop == iYiStop.Right){
            pins.digitalWritePin(DigitalPin.P11, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
        }
    }

    /**
     * စက်ရုပ်အားရပ်ရန်အတွက်ဖြစ်ပါသည်။
     */
    //% group="DC Motor"
    //% blockId=Robot_Stop
    //% block="စက်ရုပ်အားရပ်ရန်"
    //% weight=10
    export function robotStop(): void{
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P7, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
    }

    /**
     * Servoမော်တာအားနှစ်သက်ရာဒီဂရီသို့လှည့်ရန်အတွက်ဖြစ်ပါသည်။
     */
    //% group="Servo Motor"
    //% blockId=iYi_Servo
    //% block="Servoမော်တာ %iYiServo အား| %Degree ဒီဂရီလှည့်ရန်"
    //% Degree.min=0 Degree.max=180
    //% weight=20
    export function ServoRun(Servo:iYiServo, Degree:number): void{
        if(Servo == iYiServo.servo1){
            pins.servoWritePin(AnalogPin.P8, Degree)
        }
        if(Servo == iYiServo.servo2){
            pins.servoWritePin(AnalogPin.P12, Degree)
        }
    }

    /** 
     * Servoမော်တာအားရပ်ရန်
    */
    //% group="Servo Motor"
    //% blockId=iYi_Servo_Stop
    //% block="Servoမော်တာ %iYiServo အားရပ်ရန်"
    //% weight=10
    export function ServoStop(Servo: iYiServo): void{
        if(Servo == iYiServo.servo1){
            pins.servoSetPulse(AnalogPin.P8, 0)
        } 
        if(Servo == iYiServo.servo2){
            pins.servoSetPulse(AnalogPin.P12, 0)
        }  
    }
}

/**
 * Extension for Analog and Digital Sensors 
 */
//% color="#C00FC2" icon="\u26ba" block="iYi Sensor" advanced=false
namespace iYiSensor{
    export enum iYiButton{
        //% block="ခလုပ်ကိုနှိပ်လျှင်"
        Press = 0,
        //% block="ခလုပ်ကိုလွှတ်လျှင်"
        Release = 1
    }

    export enum DHTtype{
        //% block="DHT11"
        DHT11,
        //% block="DHT22"
        DHT22
    }

    export enum dataType {
        //% block="စိုထိုင်းဆ"
        humidity,
        //% block="အပူချိန််"
        temperature,
    }

    export enum iYiLineFollower{
        //% block="1"
        line1 = 0,
        //% block="2"
        line2 = 0,
        //% block="3"
        line3 = 0
    }

    export enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
    }

    //% blockId=iYi_Button
    //% block="Pinနံပါတ် %pin| ရှိ %value"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    //% weight=90
    //% group="Push Button"
    export function Button(pin: DigitalPin, value: iYiButton): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == value;
    }

    let _temperature: number = -999.0
    let _humidity: number = -999.0
    let _readSuccessful: boolean = false

    /**
     * DHT11/DHT22 sensorအားစတင်အသုံးပြုနိုင်ရန်ဖြစ်ပါသည်။
     */
    //% blockId=DHTSensorStart
    //% block="DHTအမျိုးအစားရွေးချယ်ရန် %DHTtype"
    //% weight=80
    //% group="DHT"
    export function queryData(DHT: DHTtype){
        //initialize
        let startTime: number = 0
        let endTime: number = 0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)
        let _humidity = -999.0
        let _temperature = -999.0
        let _readSuccessful = false

        startTime = input.runningTimeMicros()

        //request data
        pins.digitalWritePin(DigitalPin.P0, 0) //begin protocol
        basic.pause(18)
        if (true) pins.setPull(DigitalPin.P0, PinPullMode.PullUp) //pull up data pin if needed
        pins.digitalReadPin(DigitalPin.P0)
        control.waitMicros(20)
        while (pins.digitalReadPin(DigitalPin.P0) == 1);
        while (pins.digitalReadPin(DigitalPin.P0) == 0); //sensor response
        while (pins.digitalReadPin(DigitalPin.P0) == 1); //sensor response

        //read data (5 bytes)
        for (let index = 0; index < 40; index++) {
            while (pins.digitalReadPin(DigitalPin.P0) == 1);
            while (pins.digitalReadPin(DigitalPin.P0) == 0);
            control.waitMicros(28)
            //if sensor pull up data pin for more than 28 us it means 1, otherwise 0
            if (pins.digitalReadPin(DigitalPin.P0) == 1) dataArray[index] = true
        }

        endTime = input.runningTimeMicros()

        //convert byte number array to integer
        for (let index = 0; index < 5; index++){
            for (let index2 = 0; index2 < 8; index2++){
                if (dataArray[8 * index + index2]){
                    resultArray[index] += 2 ** (7 - index2)
                } 
            }
        }  

        //verify checksum
        checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
        checksum = resultArray[4]
        if (checksumTmp >= 512) checksumTmp -= 512
        if (checksumTmp >= 256) checksumTmp -= 256
        if (checksum == checksumTmp) _readSuccessful = true
        
        //read data if checksum ok
        if (_readSuccessful) {
            if (DHT == DHTtype.DHT11) {
                //DHT11
                _humidity = resultArray[0] + resultArray[1] / 100
                _temperature = resultArray[2] + resultArray[3] / 100
            } else {
                //DHT22
                let temp_sign: number = 1
                if (resultArray[2] >= 128) {
                    resultArray[2] -= 128
                    temp_sign = -1
                }
                _humidity = (resultArray[0] * 256 + resultArray[1]) / 10
                _temperature = (resultArray[2] * 256 + resultArray[3]) / 10 * temp_sign
            }
        }

        //serial output
        if (true) {
            let DHTstr: string = ""
            if (DHT == DHTtype.DHT11) DHTstr = "DHT11"
            else DHTstr = "DHT22"
            serial.writeLine(DHTstr + " query completed in " + (endTime - startTime) + " microseconds")
            if (_readSuccessful) {
                serial.writeLine("Checksum ok")
                serial.writeLine("Humidity: " + _humidity + " %")
                serial.writeLine("Temperature: " + _temperature + " *C")
            } else {
                serial.writeLine("Checksum error")
            }
            serial.writeLine("----------------------------------------")
        }

        //wait 2 sec after query if needed
        if (true) basic.pause(2000)
    }  

    /**
     * DHT11/22 sensorမှ data ရယူရန်အတွက်ဖြစ်ပါသည်။
     */
    //% blockId=DHTSensorRead
    //% block="DHTမှ %dataType ဖတ်ရန်"
    //% weight=70
    //% group="DHT"
    export function readData(data: dataType): number{
            return data == dataType.humidity ? _humidity : _temperature

    }  

    /**
     * Tracker Sensor 1 မှ data ရယူရန်အတွက်ဖြစ်ပါသည်။
     */
    //% blockId=TrackerSensorRead1
    //% block="tracker sensor 1"
    //% weight=60
    //% group="Tracker"
    export function trackline1(): number {
        return pins.digitalReadPin(DigitalPin.P3);
    }

    /**
     * Tracker Sensor 2 မှ data ရယူရန်အတွက်ဖြစ်ပါသည်။
     */
    //% blockId=TrackerSensorRead2
    //% block="tracker sensor 2 "
    //% weight=50
    //% group="Tracker"
    export function trackline2(): number {
        return pins.digitalReadPin(DigitalPin.P4);
    }

    /**
     * Tracker Sensor 3 မှ data ရယူရန်အတွက်ဖြစ်ပါသည်။
     */
    //% blockId=TrackerSensorRead3
    //% block="tracker sensor 3 "
    //% weight=40
    //% group="Tracker"
    export function trackline3(): number {
        return pins.digitalReadPin(DigitalPin.P5);
    }

    /**
     * Ultrasonic Sensor 1အသုံးပြုရန်အတွက်ဖြစ်ပါသည်။
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% group="Sonar"
    //% blockId=sonar_ping1 
    //% block="Sonar1| unit %PingUnit"
    //% weight=30
    export function ping1(unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P0, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P0, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P0, 0);

        // read pulse
        const d = pins.pulseIn(DigitalPin.P1, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d ;
        }
    }

    /**
     * Ultrasonic Sensor 2အသုံးပြုရန်အတွက်ဖြစ်ပါသည်။
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% group="Sonar"
    //% blockId=sonar_ping2
    //% block="Sonar2| unit %PingUnit"
    //% weight=20
    export function ping2(unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P8, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P8, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P8, 0);

        // read pulse
        const d = pins.pulseIn(DigitalPin.P9, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d ;
        }
    }

    /**
     * Ultrasonic Sensor 3အသုံးပြုရန်အတွက်ဖြစ်ပါသည်။
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% group="Sonar"
    //% blockId=sonar_ping3 
    //% block="Sonar3| unit %PingUnit"
    //% weight=10
    export function ping3(unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P10, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P10, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P10, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P10, 0);

        // read pulse
        const d = pins.pulseIn(DigitalPin.P11, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d ;
        }
    }
}

//% color="#5A4AA5" icon="\u266c" block="iYi Music Gallery" advanced=false
namespace iYiMusic{
    export enum enMusic {
        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,
        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }

    //% blockId=iYi_Music
    //% block="%index | အသံအားဖွင့်ရန်"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MusicPlay(index: enMusic): void{
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }
}

//% color="#C90B0B" icon="\u26cb" block="iYi Display" advanced=false
namespace iYiDisplay{
    export enum enColor {
        //% blockId="OFF" block="ပိတ်သည်"
        OFF = 0,
        //% blockId="Red" block="အနီရောင်"
        Red,
        //% blockId="Green" block="အစိမ်းရောင်"
        Green,
        //% blockId="Blue" block="အပြာရောင်"
        Blue,
        //% blockId="White" block="အဖြူရောင်"
        White,
        //% blockId="Pinkish" block="ပန်းနုရောင်"
        Pinkish,
        //% blockId="Yellow" block="အဝါရောင်"
        Yellow,
    }

    export enum enLED1 {
        //% blockId="OFF" block="ပိတ်သည်"
        OFF = 0,
        //% blockId="ON" block="ဖွင့်သည်"
        ON = 1
    }    

    //% blockId=iYi_Display_LED1 block="LED1|pin %pin|value %value"
    //% weight=5
    //% blockGap=20
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function LED1(pin: DigitalPin, value: enLED1): void {
        pins.digitalWritePin(pin, value);
    }

    //% blockId=iYI_Display_LED2 block="LED2|pin %pin|value %value"
    //% weight=4
    //% blockGap=20
    //% value.min=0 value.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=2
    export function LED2(pin: AnalogPin, value: number): void {
        pins.analogWritePin(pin, value * 1024 / 256);
    }

    //% blockId=iYi_Display_RGB block="RGB|pin1 %pin1|pin2 %pin2|pin3 %pin3|value1 %value1|value2 %value2|value3 %value3"
    //% weight=2
    //% blockGap=20
    //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number): void {
        pins.analogWritePin(pin1, value1 * 1024 / 256);
        pins.analogWritePin(pin2, value2 * 1024 / 256);
        pins.analogWritePin(pin3, value3 * 1024 / 256);
    }

    //% blockId=iYi_Display_RGB2 block="RGB|pin1 %pin1|pin2 %pin2|pin3 %pin3|value %value"
    //% weight=1
    //% blockGap=20
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB2(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, value: enColor): void {
        switch (value) {
            case enColor.OFF: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case enColor.Red: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case enColor.Green: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case enColor.Blue: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.White: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.Pinkish: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.Yellow: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
                break;
            }
        }
    }
    
}

//% color="#0CB441" icon="\u2699" block="iYi Input" advanced=false
namespace iYiInput{
    export enum enButton {
        //% blockId="Press" block="ဖိသောအခါ"
        Press = 0,
        //% blockId="Realse" block="လွှတ်သောအခါ"
        Realse = 1
    }

    
    //% blockId=iYi_Input_Potentiometer block="Potentiometer|pin %pin"
    //% weight=100
    //% blockGap=20
    //% name.fieldEditor="gridpocker" name.fieldOption.columns=5
    export function Potentiometer(pin: AnalogPin): number {
        let value: number;
        value = pins.analogReadPin(pin);
        return value;
    }

    //% blockId=CrocoKit_Input_Button block="%pin|ရှိခလုပ်ကို |%value"
    //% weight=98
    //% blockGap=20
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Button(pin: DigitalPin, value: enButton): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == value;
    }
}

//% color="#DBC409" icon="\u265a" block="iYi Origin" advanced=false
namespace iYiOrigin{
    //%  blockId=iYiOrigin block="မူလအခြေအနေသို့ပြန်သွားရန်"
    export function Oirigin(){

    }
}
