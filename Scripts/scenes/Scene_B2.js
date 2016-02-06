var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_B2 SCENE
var scenes;
(function (scenes) {
    var Scene_B2 = (function (_super) {
        __extends(Scene_B2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_B2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_B2.prototype.start = function () {
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("You accepted the golden axe from the angel and \n\n" +
                "went back your way home thinking that you will easily\n\n" +
                "sell the axe to become rich. Sadly, on your way home\n\n" +
                "the axe turned into ashes. And you lived rest of your\n\n" +
                "life as a Hermit and died in peace. Game Over!", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 300);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_B2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Scene_B2.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene_B2;
    })(objects.Scene);
    scenes.Scene_B2 = Scene_B2;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_B2.js.map