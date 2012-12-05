//requires class.js

var djs = Class({
	init: function() {
		this.cv = document.getElementById('cv_world');
		this.ct = this.cv.getContext('2d');
		this.ct.lineWidth = 0.5;
		this.cvX = this.cv.width;
		this.cvY = this.cv.height;
		this.worldX = 20;
		this.worldY = 20;
		this.intervalX = this.cvX / this.worldX;
		this.intervalY = this.cvY / this.worldY;
		  
	},
	
	createGrid: function () {
	    	this.eraseCanvas();      
	    	this.ct.beginPath();
		for(x=1;x<this.worldX;x++) {
			this.ct.moveTo(this.intervalX*x,0);
			this.ct.lineTo(this.intervalX*x,this.cvY);
		}
		
		for(y=1;y<this.worldY;y++) {
			this.ct.moveTo(0,this.intervalY*y);
			this.ct.lineTo(this.cvX,this.intervalY*y);
		}

		this.ct.stroke();
		this.ct.closePath();
	},
     
	createCell: function(x,y) {
		_refX = this.intervalX * x;
	    	_refY = this.intervalY * y;
	    	this.ct.beginPath();
	    	this.ct.rect(_refX,_refY,this.intervalX-this.ct.lineWidth,this.intervalY-this.ct.lineWidth);
	    	this.ct.fillStyle = "#DEDEFF";
	    	this.ct.fill();
	    	this.ct.strokeStyle = "#000000";
	    	this.ct.stroke();
	},
	
	eraseCanvas: function () {
		this.ct.clearRect(0,0,this.cvX,this.cvY); //Erase canvas    
	}

	
});
