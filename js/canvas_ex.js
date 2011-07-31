CanvasRenderingContext2D.prototype['fillRoundedRect'] = function(x, y, w, h, c) {
   this.beginPath();
   this.arc(x + c, y + c, c, Math.PI, Math.PI * 1.5, false);
   this.lineTo(x + w - c, y);
   this.arc(x + w - c, y + c, c, Math.PI * 1.5, 0, false);
   this.lineTo(x + w, y + h - c);   
   this.arc(x + w - c, y + h - c, c, 0, Math.PI * 0.5, false);
   this.lineTo(x + c, y + h);
   this.arc(x + c, y + h - c, c, Math.PI * 0.5, Math.PI, false);
   this.lineTo(x, y + c);
   this.closePath();
   this.fill();
}