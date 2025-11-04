// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002030303030303030303030303030304080000000000000000000000000000010800090909090909090909090900000108000900000000000000000009000001080009000009000009090909090900010800090909090000000000000009000108000000000000000009000000090901080000000000000000090000000000010800090909090000000909090909090108000900000000000009000000000001080009090909090909090900090900010800090000000000090000000000000108000900000900000900000000090001080009000009090909090909090900010800090000000000000000000000000107060606060606060606060606060605`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . 2 . . . . . . . . . 2 . . 2 
2 . 2 . . 2 . . 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 . . . . . . . 2 . 2 
2 . . . . . . . . 2 . . . 2 2 2 
2 . . . . . . . . 2 . . . . . 2 
2 . 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 . 2 . . . . . . 2 . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 . 2 . . 2 . . 2 . . . . 2 . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath6,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
