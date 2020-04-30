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
let Enemy1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . 2 . 
. 2 a 3 2 2 . . . . . . 2 2 2 . 
. 2 a f 1 2 2 . . . . 2 2 3 a . 
. 2 a a f f 2 . . . 2 2 1 3 a . 
. 2 2 a a f 2 2 2 2 2 f f 3 a . 
. 2 2 2 a a a 2 2 2 a f f a a . 
. . . 2 f f f f f 2 a a a 2 2 . 
. . . 2 1 1 1 1 f f f f f f 2 . 
. . . 2 2 1 2 1 2 1 2 2 1 2 2 . 
. . . . 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Enemy1.setPosition(136, 11)
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
game.onUpdate(function () {
    if (Enemy1.x > PlayerSprit.x) {
        Enemy1.x += -1
    } else {
        if (Enemy1.x < PlayerSprit.x) {
            Enemy1.x += 1
        }
    }
    if (Enemy1.y > PlayerSprit.y) {
        Enemy1.y += -1
    } else {
        if (Enemy1.y < PlayerSprit.y) {
            Enemy1.y += 1
        }
    }
})
