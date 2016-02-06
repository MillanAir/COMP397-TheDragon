var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene_A2 SCENE
var scenes;
(function (scenes) {
    var Scene_A2 = (function (_super) {
        __extends(Scene_A2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Scene_A2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Scene_A2.prototype.start = function () {
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("Angle give the Axe back to you. You thanked the Angel\n\n" +
                "Angle become very impressed by your honesty and presented\n\n" +
                "you Golden and Silver Axe in recognition of your truthful nature", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/8.png");
            this._gameImage.x = config.Screen.CENTER_X - 600;
            this._gameImage.y = config.Screen.CENTER_Y - 350;
            this.addChild(this._gameImage);
            // add the Home button to the PLAY scene
            this._HomeButton = new objects.Button("FinishButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 300);
            this.addChild(this._HomeButton);
            // BACK Button event listener
            this._HomeButton.on("click", this._HomeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Scene_A2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Scene_A2.prototype._HomeButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_A2a;
            changeScene();
        };
        return Scene_A2;
    })(objects.Scene);
    scenes.Scene_A2 = Scene_A2;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_A2.js.map