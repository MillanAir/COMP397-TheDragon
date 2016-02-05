var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_A1 SCENE
var scenes;
(function (scenes) {
    var Scene_A1 = (function (_super) {
        __extends(Scene_A1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_A1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_A1.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Scene_A1", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y - 60;
            this.addChild(this._playLabel);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_A1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Scene_A1.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene_A1;
    })(objects.Scene);
    scenes.Scene_A1 = Scene_A1;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_A1.js.map