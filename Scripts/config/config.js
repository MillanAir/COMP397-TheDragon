var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.Scene_A = 2;
        Scene.Scene_A1 = 3;
        Scene.Scene_A2 = 4;
        Scene.Scene_A2a = 5;
        Scene.Scene_A2b = 6;
        Scene.Scene_B = 7;
        Scene.Scene_B1 = 8;
        Scene.Scene_B1a = 9;
        Scene.Scene_B1b = 10;
        Scene.Scene_B2 = 11;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 720;
        Screen.HEIGHT = 1280;
        Screen.CENTER_X = 640;
        Screen.CENTER_Y = 360;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map