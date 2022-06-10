import Phaser from 'phaser';

import PlayScene from './scenes/Play';
import PreloadScene from './scenes/Preload';


const WIDTH = 1280;
const HEIGHT = 600;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
}


const Scenes = [PreloadScene, PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

//const initScenes = () => Scenes.map((Scene) => new Scene(SHARED_CONFIG))

const config = {
  
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {     
      debug: true      
    }    
  },
  
  scene: initScenes()
  
}

const initialBirdPosition = {x: config.width * 0.1 , y:config.height/2 }

new Phaser.Game(config); 