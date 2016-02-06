// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameLabel:createjs.Text;
        private _gameImage:createjs.Bitmap;
        private _startButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // add the MENU label to the scene
            this._gameLabel = new createjs.Text("Introduction: One fine day, you as a wood cutter went to\n \n jungle to cut some tree for living...", "28px Consolas", "#fff");
            this._gameLabel.x = config.Screen.CENTER_X-400;
            this._gameLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._gameLabel);
            
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/1.png");
            this._gameImage.x = config.Screen.CENTER_X-300;
            this._gameImage.y = config.Screen.CENTER_Y-350;
            this.addChild(this._gameImage);

            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "BeginButton",
                config.Screen.CENTER_X, 
                config.Screen.CENTER_Y + 120);
            this.addChild(this._startButton);
            
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event:createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
    }
}