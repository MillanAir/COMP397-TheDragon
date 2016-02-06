var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("Unfortunately, your axe slipped from your hands and \n\n" +
                "fell into the river. Amazingly, you handled yourself well\n\n" +
                " in the state of Shock!!! Now at this point, you have two \n\n" +
                "options Either Go Back Home and try to come over this bad\n\n" +
                " incidence or dive in the river trying to search for your axe.\n\n " +
                "What do you want to do?", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/2.png");
            this._gameImage.x = config.Screen.CENTER_X - 300;
            this._gameImage.y = config.Screen.CENTER_Y - 350;
            this.addChild(this._gameImage);
            // add the Search button to the PLAY scene
            this._searchButton = new objects.Button("searchButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 300);
            this.addChild(this._searchButton);
            // Search Button event listener
            this._searchButton.on("click", this._HomeButtonClick, this);
            // add the Home button to the PLAY scene
            this._HomeButton = new objects.Button("GoHomeButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 300);
            this.addChild(this._HomeButton);
            // BACK Button event listener
            this._HomeButton.on("click", this._HomeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Play.prototype._HomeButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_A;
            changeScene();
        };
        // BACK Button click event handler
        Play.prototype._searchButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B;
            changeScene();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map