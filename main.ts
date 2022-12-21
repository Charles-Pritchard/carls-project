input.onButtonPressed(Button.A, function () {
    if (dot.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        difficulty += -20
        basic.pause(difficulty)
    } else {
        basic.showString("" + (game.score()))
        game.gameOver()
    }
})
let difficulty = 0
let dot: game.LedSprite = null
game.setScore(0)
dot = game.createSprite(2, 2)
difficulty = 200
basic.forever(function () {
    dot.move(1)
    dot.ifOnEdgeBounce()
    basic.pause(difficulty)
})
