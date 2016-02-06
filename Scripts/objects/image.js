var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    var Image = (function (_super) {
        __extends(Image, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        function Image(imageString) {
            _super.call(this, imageString);
        }
        return Image;
    })(createjs.Bitmap);
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map