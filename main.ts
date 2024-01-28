namespace SpriteKind {
    export const enemy1 = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    red_ninja = sprites.createProjectileFromSprite(assets.image`ninja`, shark, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeScoreBy(1000)
    otherSprite.z += -1
    if (otherSprite.z == 0) {
        sprites.destroy(otherSprite, effects.halo, 200)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
let enemyFish: Sprite = null
let red_ninja: Sprite = null
let shark: Sprite = null
scene.setBackgroundColor(9)
shark = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ...............ccffff...............
    ..............cddbbbf...............
    .......ffffffcddbbbf................
    .....ffbbbbbbbbbbbbbcfff.......ccccc
    ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
    ..fbbbbbbbbbbcbbcb3bbcccccfffcddbbc.
    .fbcbbbbbbbbbbcbcb3bbccccccccbdbbf..
    .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
    .ffbb1111fffbbcbbbbcccccccbcffbccf..
    ..ff111111111bbbbccccccbbbcc..fbbcf.
    ....ccccccc111bdbbbfddbccc.....ffbbf
    ........ccccccfbdbbbfcc..........fff
    ...............ffffff...............
    `, SpriteKind.Player)
controller.moveSprite(shark)
shark.setStayInScreen(true)
shark.setPosition(100, 97)
game.onUpdateInterval(1000, function () {
    enemyFish = sprites.createProjectileFromSide(img`
        . . . . . . . . 7 7 7 7 7 . . . 
        . . . . . . 7 7 5 5 5 5 5 7 . . 
        . . . . . 7 5 5 5 5 5 5 5 5 7 . 
        . . . . 7 7 7 7 7 7 7 5 5 5 7 . 
        . . . . 7 1 1 7 7 1 7 7 7 7 . . 
        . . . 7 1 1 1 7 7 1 1 1 7 . . . 
        . . . 7 1 1 1 1 7 1 1 1 7 . 7 7 
        . . . 7 d 1 1 1 7 1 1 1 b b 5 7 
        . . 7 7 d 1 7 1 7 1 7 1 5 5 5 7 
        . 7 7 d d 1 1 1 1 1 7 1 b b 5 7 
        7 d d d 1 1 1 1 1 7 7 1 7 . 7 7 
        7 7 7 1 1 1 1 1 1 7 7 7 7 . . . 
        . . . 7 7 1 1 1 7 7 7 5 5 7 . . 
        . . . . . 7 7 7 5 5 5 5 5 7 . . 
        . . . . . . . . 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 27)
    if (Math.percentChance(33)) {
        enemyFish.z = 1
    } else if (Math.percentChance(33)) {
        enemyFish.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . . 4 4 f f 4 4 . . . . . 
            . . . . . 4 4 f 1 4 4 . . . . . 
            . . 4 4 4 4 4 4 4 4 4 4 . . . . 
            . . 4 . . . 4 . d . 4 4 4 4 . . 
            . . 4 . . . 4 . . . 4 . . 4 . . 
            . . . . . . 4 . . . 4 . . 4 . . 
            . . . . . . 4 . . . 4 . . . . . 
            `)
        enemyFish.z = 2
    } else {
        enemyFish.setImage(img`
            ....................................
            ....................................
            ....................................
            ....................................
            ..............ffffff................
            .......ffffff888888f................
            .....ff88888888888888fff.......ccccc
            ...ff8888888888888888888ff....c8888c
            ..f88888888888888888888888fffc8888c.
            .f8888888888888888888888888888888f..
            .f8888888fff888888888888888888888f..
            .ff881111fff8888888888888888ff888f..
            ..ff111111111888888888888888..f888f.
            ....1111111111888888888ccc.....ff88f
            ........111111f88888fcc..........fff
            ...............ffffff...............
            `)
        enemyFish.z = 3
    }
    enemyFish.setPosition(randint(0, 160), 0)
    enemyFish.setKind(SpriteKind.Enemy)
})
