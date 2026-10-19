function angleClock(hour: number, minutes: number): number {

    let minAng = minutes * 6
    let hourAng = (hour % 12) * 30 + minutes * 0.5
    let ang = Math.abs(minAng - hourAng)
    return ang > 180 ? 360 - ang : ang
}