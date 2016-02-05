var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_B SCENE
var scenes;
(function (scenes) {
    var Scene_B = (function (_super) {
        __extends(Scene_B, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_B() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_B.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Scene_B Scene", "60px Consolas", "#000000");
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y - 60;
            this.addChild(this._playLabel);
            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button("NextButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_B.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Scene_B.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B1;
            changeScene();
        };
        // BACK Button click event handler
        Scene_B.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B2;
            changeScene();
        };
        return Scene_B;
    })(objects.Scene);
    scenes.Scene_B = Scene_B;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_B.js.map