// Scene_A SCENE
module scenes {
    export class Scene_A extends objects.Scene {
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
            this._playLabel = new createjs.Text("You decided to go back. You lived rest of your miserable\n\n"+
                                                "life as a Hermit and died in peace. Game Over!", "28px Consolas", "#fff");
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