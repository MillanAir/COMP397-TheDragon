var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_A2a SCENE
var scenes;
(function (scenes) {
    var Scene_A2a = (function (_super) {
        __extends(Scene_A2a, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_A2a() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_A2a.prototype.start = function () {
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("You went back home and sold the Golden and Silver Axes\n\n" +
                "and became Rich and lived rest of your life as a king.", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/king.gif");
            this._gameImage.x = config.Screen.CENTER_X - 600;
            this._gameImage.y = config.Screen.CENTER_Y - 350;
            this.addChild(this._gameImage);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_A2a.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Scene_A2a.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene_A2a;
    })(objects.Scene);
    scenes.Scene_A2a = Scene_A2a;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_A2a.js.map