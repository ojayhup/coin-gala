// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14001400020101010101010101010101010101010101010d030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0e030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0e030a0a0a0a020101010101010c0101010d0a0a0e030a0a0a0a03020101010d0a0a0a0a0a0e0a0a0e0302010c0105030a0a0a0e0a0a0a0a0a0e0a0a0e03030a0a0a0a030a0a0a0401010d0a0a0e0a0a0e03030a0a0a0a0b0a0a0a0a0a0a0e0a0a0e0a0a0e03030a0a0a0a030a0a0a0a0a0a0e0a0a0e0a0a0e030607090a0a030a0a0a0a0a0a0e0a0a0e0a0a0e060709030a0a030a0a0a0a0a0a0e0a0a0e0a0a0e120a03030a0a030a0a0a0a0a0a0e0a0a0e0a0a0e0a0a03031313030f100a0a0a110e0a0a0e0a0a0e0a0a03030a0a06070c07070707080a0a0e0a0a0e0a0a030313130a0a0a130a130a0a0a0a0e0a0a0e0a0a03030a0a0a0a0a130a130a0a0a0a0e0a0a0e0a0a0306070707070707070707070707080a0a0e0a0a030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0e0a0a0b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0e0a0a060707070707070707070707070707070708`, img`
22222222222222222222
2..................2
2..................2
2....2222222.2222..2
2....222222.....2..2
222.222...2.....2..2
22....2...2222..2..2
22...........2..2..2
22....2......2..2..2
2222..2......2..2..2
2222..2......2..2..2
..22..2......2..2..2
..22..2......2..2..2
..222222.22222..2..2
..22......2.....2..2
..22......2.....2..2
..222222222222222..2
..2................2
...................2
..222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.floorLight0,sprites.dungeon.stairWest,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.stairLadder,myTiles.tile2,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
