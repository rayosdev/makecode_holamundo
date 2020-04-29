let PlayerSprit = sprites.create(img`
. . . . . f f f f f . . . . . . 
. . . f f f 4 5 5 f f f f . . . 
. . f f 5 5 5 5 5 5 5 5 f f . . 
. f f 5 5 5 5 5 5 5 5 5 5 f f . 
. f 4 f f f f 5 5 5 5 5 5 f f . 
f f 4 f f f f f f 5 5 f f f . . 
f 4 5 5 f 1 1 f 5 f f f . . . . 
f 4 5 5 f f f f f f . . . . . . 
f 4 5 5 5 f f 5 f 2 2 2 f f f f 
f 4 5 5 5 5 5 5 f f 2 f f 5 5 f 
f 4 5 5 5 5 5 5 5 f f f 5 5 5 f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
. f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
. f f f 5 5 5 5 5 5 5 5 5 5 f f 
. . . f f f f f f f f f f f f . 
`, SpriteKind.Player)
let xpos = 10
let yPos = 40
// Movment
game.onUpdate(function () {
    if (PlayerSprit.x > scene.screenWidth()) {
        PlayerSprit.x += 0
    }
    if (xpos < 0) {
        xpos = scene.screenWidth()
    }
    if (yPos > scene.screenHeight()) {
        yPos = 0
    }
    if (0 < 0) {
        yPos = scene.screenHeight()
    }
    PlayerSprit.x += controller.dx()
    PlayerSprit.y += controller.dy()
})
