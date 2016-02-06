// Scene_A1 SCENE
module scenes {
    export class Scene_A1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the MENU label to the scene
            this._playLabel = new createjs.Text("You seriously think the angel is fool enough to bring \n\n"+
                                                "you the Diamond Axe. The Happy Angel soon turned into \n\n"+
                                                "angry demon and threw your axe back into water.And you \n\n"+
                                                "know what happened next.... you lived rest of your\n\n"+
                                                "life as a Hermit and died in disbelief. Game Over!", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X-400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);


            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y+200);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}