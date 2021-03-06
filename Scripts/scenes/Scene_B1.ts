// Scene_B1 SCENE
module scenes {
    export class Scene_B1 extends objects.Scene {
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
            this._playLabel = new createjs.Text("Angle once again dived into the river to find your axe.\n\n"+
                                                "This time Angle returned with a Silver Axe.\n\n"+
                                                "What do you want to do?", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X-400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/5.png");
            this._gameImage.x = config.Screen.CENTER_X-300;
            this._gameImage.y = config.Screen.CENTER_Y-350;
            this.addChild(this._gameImage);

            // add the Search button to the PLAY scene
            this._searchButton = new objects.Button(
                "DenyButton",
                config.Screen.CENTER_X + 200,
                config.Screen.CENTER_Y + 300);
            this.addChild(this._searchButton);
           
            // Search Button event listener
            this._searchButton.on("click", this._searchButtonClick, this);

            // add the Home button to the PLAY scene
            this._HomeButton = new objects.Button(
                "AcceptButton",
                config.Screen.CENTER_X - 200,
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
            scene = config.Scene.Scene_B1a;
            changeScene();
        }
        
        // BACK Button click event handler
        private _searchButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B1b;
            changeScene();
        }
    }
}