import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'memorymatch';
  msg = "";
  clicks:number;
  click1:number;
  click2:number;
  click1id:string;
  click2id:string;
  //imgsrc: string = "./assets/q.png";
  imgsrc:string[][];
  resolvedimages:number;

  constructor(){
  	this.clicks=0;
  	this.click1=0;
  	this.click2=0;
  	this.resolvedimages=0;
  	this.msg="Clicks: 0";
  	this.imgsrc=[];
  	for ( var i:number = 0; i < 4; i++ ) {
	  		this.imgsrc[i]=[];
	  		for( var j:number=0; j <4; j++){
	  			this.imgsrc[i][j]="./assets/q.png";
	  		}
    	}
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  getClick(id1:string,id2:string,n:number){

  	if(this.imgsrc[id1][id2]=="./assets/ok.png"){

  	}
  	else{
  	this.clicks++;
    this.msg = "Clicks: " + this.clicks;
    console.log("Now click1: "+this.click1);
    console.log("Now click2: "+this.click2);
   
    //check if 1st selection
    if(this.click1==0)
    {
    	this.click1=n;
    	this.click1id=id1+id2;
    	console.log("Click1: "+this.click1);
    	//display clicked image
    	this.imgsrc[id1][id2] = "./assets/cat"+n+".jpg";
    	//console.log(this.imgsrc);
    }
    else 
    {
        if(this.click2==0 && this.click1id!=id1+id2)
        {
			this.click2=n;
			this.click2id=id1+id2;
			console.log("Click2: "+this.click2);
			//show image
			this.imgsrc[id1][id2] = "./assets/cat"+n+".jpg";
			//console.log(this.imgsrc);
    	}


    	//check if both click1 and click2 match
   		 if(this.click1==this.click2 && this.click1>0){
   		 	setTimeout(() => 
    			{
   		 	console.log("good move resolved cat no "+this.click1);
   		 		this.resolvedimages++;
   		 		this.imgsrc[this.click1id.charAt(0)][this.click1id.charAt(1)] = "./assets/ok.png";
   		 		this.imgsrc[this.click2id.charAt(0)][this.click2id.charAt(1)] = "./assets/ok.png";
    			//display permanently
    			//set counter for remaining images if reaches 0 then game finished
    			this.click1=0;
    			this.click2=0;
    			this.click1id="";
    			this.click2id=""; 
    			if(this.resolvedimages>=8){
    			alert("Task Completed in "+this.clicks+" clicks.")
    			}
    			},2000);
	    		}else{
    			//hide both images again 
    			setTimeout(() => 
    			{
    			this.delay(2000);
    		    this.imgsrc[this.click1id.charAt(0)][this.click1id.charAt(1)] = "./assets/q.png";
   		 	    this.imgsrc[this.click2id.charAt(0)][this.click2id.charAt(1)] = "./assets/q.png";
    			this.click1=0;
    			this.click2=0;
    			this.click1id="";
    			this.click2id="";
    			},2000);
    		}


    }
  }
  }

   

}
