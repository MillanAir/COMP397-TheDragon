/// <reference path = "_reference.ts" />

// global variables
var canvas:HTMLElement;
var stage:createjs.Stage;
var stats:Stats;

var currentScene:objects.Scene;
var scene:number;

// Game Scenes
var menu:scenes.Menu;
var play:scenes.Play;
var scene_a:scenes.Scene_A;
var scene_a1:scenes.Scene_A1;
var scene_a2:scenes.Scene_A2;
var scene_a2a:scenes.Scene_A2a;
var scene_a2b:scenes.Scene_A2b;
var scene_b:scenes.Scene_B;
var scene_b1:scenes.Scene_B1;
var scene_b1a:scenes.Scene_B1a;
var scene_b1b:scenes.Scene_B1b;
var scene_b2:scenes.Scene_B2;


function init():void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event:createjs.Event):void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
          case config.Scene.Scene_A:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_a = new scenes.Scene_A();
            currentScene = scene_a;
            console.log("Starting A Scene");
            break;
          case config.Scene.Scene_A1:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_a1 = new scenes.Scene_A1();
            currentScene = scene_a1;
            console.log("Starting A1 Scene");
            break;
          case config.Scene.Scene_A2:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_a2 = new scenes.Scene_A2();
            currentScene = scene_a2;
            console.log("Starting A2 Scene");
            break;
          case config.Scene.Scene_A2a:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_a2a = new scenes.Scene_A2a();
            currentScene = scene_a2a;
            console.log("Starting A2a Scene");
            break;   
          case config.Scene.Scene_A2b:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_a2b = new scenes.Scene_A2b();
            currentScene = scene_a2b;
            console.log("Starting A2b Scene");
            break;
          case config.Scene.Scene_A2a:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_a2a = new scenes.Scene_A2a();
            currentScene = scene_a2a;
            console.log("Starting A2a Scene");
            break;
          case config.Scene.Scene_B:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_b = new scenes.Scene_B();
            currentScene = scene_b;
            console.log("Starting B Scene");
            break;
          case config.Scene.Scene_B1:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_b1 = new scenes.Scene_B1();
            currentScene = scene_b1;
            console.log("Starting B1 Scene");
            break;
          case config.Scene.Scene_B1a:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_b1a = new scenes.Scene_B1a();
            currentScene = scene_b1a;
            console.log("Starting B1a Scene");
            break;
          case config.Scene.Scene_B1b:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_b1b = new scenes.Scene_B1b();
            currentScene = scene_b1b;
            console.log("Starting B1b Scene");
            break; 
          case config.Scene.Scene_B2:
            // show the PLAY scene
            stage.removeAllChildren();
            scene_b2 = new scenes.Scene_B2();
            currentScene = scene_b2;
            console.log("Starting B2 Scene");
            break;
    }

    console.log(currentScene.numChildren);
}