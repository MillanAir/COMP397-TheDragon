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
            // add the MENU label to the scene
            this._playLabel = new createjs.Text("After searching for hours, you could not be able to locate\n\n" +
                "your axe. You become deeply distressed that you start crying\n\n" +
                "bitterly. At this moment, an angel appeared there and asked you\n\n" +
                "that why you were crying. You sobbed out the whole sad story. The \n\n" +
                "angel felt sorry for you and dived into the river to find your axe.\n\n" +
                " soon angel returned with a Golden Axe in her hand.\n\n " +
                "What do you want to do?", "28px Consolas", "#fff");
            this._playLabel.x = config.Screen.CENTER_X - 400;
            this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            //add the Image to the scene
            this._gameImage = new createjs.Bitmap("../../Assets/images/4.png");
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
        Scene_B.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Scene_B.prototype._HomeButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B2;
            changeScene();
        };
        // BACK Button click event handler
        Scene_B.prototype._searchButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.Scene_B1;
            changeScene();
        };
        return Scene_B;
    })(objects.Scene);
    scenes.Scene_B = Scene_B;
})(scenes || (scenes = {}));
//# sourceMappingURL=Scene_B.js.map