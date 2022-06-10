import Phaser from 'phaser';
import Player from '../entities/Player';

class Play extends Phaser.Scene {

    constructor() {
        super('PlayScene');
    }

   
    create() {       

        const map = this.createMap();
        const laysers = this.createLayer(map);

        const player = this.createPlayer();

        //this.playerSpeed = 200;

        this.physics.add.collider(player,laysers.platformsColliders );

        //this.cursors = this.input.keyboard.createCursorKeys();

    }


    createMap() {
        const map = this.make.tilemap({key: 'map'});
        map.addTilesetImage('main_lev_build_1', 'tiles-1');
        return map;

    }

    createLayer(map) {
        const tileset = map.getTileset('main_lev_build_1');

        const platformsColliders = map.createStaticLayer('platforms_colliders',tileset);
        const environment = map.createStaticLayer('environment',tileset);
        const platforms = map.createDynamicLayer('platforms', tileset);
        

        //platformsColliders.setCollisionByExclusion(-1, true);
        platformsColliders.setCollisionByProperty({collides: true});

        // platforms.setCollisionByExclusion(-1, true);


        //const platforms = map.createStaticLayer('platforms',tileset);
        return {environment, platforms, platformsColliders};

    }

    createPlayer() {
        //const player = this.physics.add.sprite(100, 200, 'player');
        //const player = new Player(this, 100, 250);


        return new Player(this, 100, 250);
        
    }


}

export default Play;