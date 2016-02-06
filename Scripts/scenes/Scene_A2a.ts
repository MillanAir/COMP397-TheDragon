// Scene_A2a SCENE
module scenes {
    export class Scene_A2a extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _backButton: objects.Button;
        private _gameImage:createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the MENU label to the scene
            this._playLabel = new createjs.Text("You went back home and sold the Golden and Silver Axes\n\n"+
                                                "and became Rich and lived rest of your life as a king.", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X-400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);

             //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/king.gif");
            this._gameImage.x = config.Screen.CENTER_X-100;
            this._gameImage.y = config.Screen.CENTER_Y-350;
            this.addChild(this._gameImage);
            
            
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