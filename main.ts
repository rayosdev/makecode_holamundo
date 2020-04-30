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
controller.moveSprite(PlayerSprit, 100, 100)
// Movment
game.onUpdate(function () {
    if (PlayerSprit.x > scene.screenWidth()) {
        PlayerSprit.x = 0
    }
    if (PlayerSprit.x < 0) {
        PlayerSprit.x = scene.screenWidth()
    }
    if (PlayerSprit.y > scene.screenHeight()) {
        PlayerSprit.y = 0
    }
    if (PlayerSprit.y < 0) {
        PlayerSprit.y = scene.screenHeight()
    }
})
