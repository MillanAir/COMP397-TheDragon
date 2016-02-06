// Scene_A2 SCENE
module scenes {
    export class Scene_A2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _gameImage:createjs.Bitmap;
        private _HomeButton: objects.Button;
        private _searchButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the MENU label to the scene
            this._playLabel = new createjs.Text("Angle give the Axe back to you. You thanked the Angel\n\n"+
                                                "Angle become very impressed by your honesty and presented\n\n"+
                                                "you Golden and Silver Axe in recognition of your truthful nature", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X-400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/8.png");
            this._gameImage.x = config.Screen.CENTER_X-700;
            this._gameImage.y = config.Screen.CENTER_Y-350;
            this.addChild(this._gameImage);
            
            // add the Home button to the PLAY scene
            this._HomeButton = new objects.Button(
                "FinishButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 300);
            this.addChild(this._HomeButton);
           
            // BACK Button event listener
            this._HomeButton.on("click", this._HomeButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // NEXT Button click event handler
        private _HomeButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_A2a;
            changeScene();
        }       
    }
}