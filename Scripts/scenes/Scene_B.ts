// Scene_B SCENE
module scenes {
    export class Scene_B extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _nextButton: objects.Button;
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Scene_B Scene", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y-60;
            this.addChild(this._playLabel);

            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
           
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 60);
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
        
        // NEXT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B1;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B2;
            changeScene();
        }
    }
}