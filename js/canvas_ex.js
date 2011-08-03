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

CanvasRenderingContext2D.prototype['fillPoly'] = function(x, y, v, l) {
   var angle = ((v - 2) * 180) / v;
   this.beginPath();
   var p = { x : x, y : y };
   this.moveTo(p.x, p.y);
   for (var i = 0; i < v; i++) {
      p.x = p.x - (Math.cos(i * (180 - angle) * (Math.PI / 180)) * l);
      p.y = p.y - (Math.sin(i * (180 - angle) * (Math.PI / 180)) * l);
	  this.lineTo(p.x, p.y);
   }
   this.closePath();
   this.fill();   
}