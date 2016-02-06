var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_B1b SCENE
var scenes;
(function (scenes) {
    var Scene_B1b = (function (_super) {
        __extends(Scene_B1b, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_B1b() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_B1b.prototype.start = function () {
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("Now this time Angel return with your original iron Axe\n\n" +
                "Now either you can accept the Axe or argue with the foolish\n\n" +
                "angel that your axe was made of Diamond.\n\n " +
                "What do you want to do?", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/6.png");
            this._gameImage.x = config.Screen.CENTER_X - 300;
            this._gameImage.y = config.Screen.CENTER_Y - 350;
            this.addChild(this._gameImage);
            // add the Search button to the PLAY scene
            this._searchButton = new objects.Button("DenyButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 300);
            this.addChild(this._searchButton);
            // Search Button event listener
            this._searchButton.on("click", this._searchButtonClick, this);
            // add the Home button to the PLAY scene
            this._HomeButton = new objects.Button("AcceptButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 300);
            this.addChild(this._HomeButton);
            // BACK Button event listener
            this._HomeButton.on("click", this._HomeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_B1b.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Scene_B1b.prototype._HomeButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_A2;
            changeScene();
        };
        // BACK Button click event handler
        Scene_B1b.prototype._searchButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_A1;
            changeScene();
        };
        return Scene_B1b;
    })(objects.Scene);
    scenes.Scene_B1b = Scene_B1b;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_B1b.js.map