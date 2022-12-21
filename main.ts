input.onButtonPressed(Button.A, function () {
    if (dot.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        difficulty += -20
        basic.pause(difficulty)
    } else {
        game.removeLife(1)
    }
})
let difficulty = 0
let dot: game.LedSprite = null
game.setScore(0)
game.setLife(3)
dot = game.createSprite(2, 2)
difficulty = 200
basic.forever(function () {
    dot.move(1)
    dot.ifOnEdgeBounce()
    basic.pause(difficulty)
})
