import Phaser from 'phaser';

class Preload extends Phaser.Scene {

    constructor() {
        super('PreloadScene');
    }

    preload() {
        //this.load.image('sky', 'assets/sky.png');

        //tile 에디터에서 만든 Jason 형태의 타일맵을 로드한다.
        this.load.tilemapTiledJSON('map', 'assets/crystal_world_map.json');

        //타일맵 Jason 안에 사용된 이미지를 로드한다.
        this.load.image('tiles-1', 'assets/main_lev_build_1.png');
        this.load.image('tiles-2', 'assets/main_lev_build_2.png');

        this.load.image('player', 'assets/player/movements/idle01.png');

    }

    create() {
        this.scene.start('PlayScene');
    }

}

export default Preload;