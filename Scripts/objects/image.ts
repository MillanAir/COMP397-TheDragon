module objects {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Image extends createjs.Bitmap {
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
        }
    }
} 