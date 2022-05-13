basic.showIcon(IconNames.Angry)
basic.pause(5000)
basic.showLeds(`
    # . # # #
    # . # . #
    # . # . #
    # . # . #
    # . # # #
    `)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 180)
    }
})
