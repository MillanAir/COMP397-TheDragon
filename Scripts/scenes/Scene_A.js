var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_A SCENE
var scenes;
(function (scenes) {
    var Scene_A = (function (_super) {
        __extends(Scene_A, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_A() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_A.prototype.start = function () {
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("You decided to go back. You lived rest of your miserable\n\n" +
                "life as a Hermit and died in peace. Game Over!", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_A.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Scene_A.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene_A;
    })(objects.Scene);
    scenes.Scene_A = Scene_A;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_A.js.map