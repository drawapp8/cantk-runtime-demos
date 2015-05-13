window.animateWindowBg = function(win) {
    win.bgOffsetX = 0;
    win.bgOffsetY = 0;
    win.bgInc = true;
    
    win.drawBgImage = function(canvas) {
        var image = this.getBgImage();
        var imageRect = image.getImageRect();
        var htmlImage = image.getImage();

        if (this.bgInc) {
            this.bgOffsetX++;
            if ((this.bgOffsetX + this.w) >= imageRect.w) {
                this.bgInc = false;
            }
        } else {
            this.bgOffsetX--;
            if (this.bgOffsetX < 1) {
                this.bgInc = true;
            }
        }
        this.bgOffsetY++;
        this.bgOffsetY = this.bgOffsetY % imageRect.h;

        var oy = imageRect.h - this.bgOffsetY;
        var rect = {
            x: this.bgOffsetX,
            y: this.bgOffsetY,
            w: this.w,
            h: this.h
        };

        rect.h = Math.min(this.h, oy);
        this.drawImageAt(canvas, htmlImage, CanTK.UIElement.IMAGE_DISPLAY_SCALE, 0, 0, this.w, rect.h, rect);

        if (oy < this.h) {
            rect.y = 0;
            rect.h = this.h - oy;
            this.drawImageAt(canvas, htmlImage, CanTK.UIElement.IMAGE_DISPLAY_SCALE, 0, oy, this.w, rect.h, rect);
        }

        return;
    }
}
