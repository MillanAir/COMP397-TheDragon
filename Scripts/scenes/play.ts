// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
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
            this._playLabel = new createjs.Text("Unfortunately, your axe slipped from your hands and \n\n"+
                                                "fell into the river. Amazingly, you handled yourself well\n\n"+
                                                " in the state of Shock!!! Now at this point, you have two \n\n"+
                                                "options Either Go Back Home and try to come over this bad\n\n"+
                                                " incidence or dive in the river trying to search for your axe.\n\n "+
                                                "What do you want to do?", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X-400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/2.png");
            this._gameImage.x = config.Screen.CENTER_X-300;
            this._gameImage.y = config.Screen.CENTER_Y-350;
            this.addChild(this._gameImage);

            // add the Search button to the PLAY scene
            this._searchButton = new objects.Button(
                "searchButton",
                config.Screen.CENTER_X + 200,
                config.Screen.CENTER_Y + 300);
            this.addChild(this._searchButton);
           
            // Search Button event listener
            this._searchButton.on("click", this._HomeButtonClick, this);

            // add the Home button to the PLAY scene
            this._HomeButton = new objects.Button(
                "GoHomeButton",
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
            scene = config.Scene.Scene_A;
            changeScene();
        }
        
        // BACK Button click event handler
        private _searchButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B;
            changeScene();
        }
    }
}