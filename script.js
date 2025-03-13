window.onload = function (){
    var canvasWidth=900;
    var canvasHeight=900;
    var blocksize= 30;
    var ctx;
    var delay = 100;
    var snakee;
    
    
    init();
    
               function init() {
    var canvas = document.createElement('canvas');
    canvas.width= canvasWidth;
    canvas.height= canvasHeight;
    canvas.style.border= "1px solid";
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    snakee= new snake([[6,4],[5,4],[4,4]],"right");
    refreshCanvas();
    
    }
    
    
    
    function refreshCanvas(){
         
    
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas,delay);
    
    
    }
    
    function drawBlock(ctx,position){
    
    var x= position[0] * blocksize;
    var y= position[1] * blocksize;
    ctx.fillRect(x,y,blocksize,blocksize);
       }
     function  snake (body,direction){
    
        this.direction=direction;
        this.body= body;
        this.draw = function(){
    
          ctx.save();
          ctx.fillStyle="#ff0000";
         for(var i=0; i<this.body.length;i++){
    
            drawBlock(ctx,this.body[i]);
    
         }
          ctx.restore();
        }
        this.advance= function (){
    
         var nextPosition= this.body[0].slice();
             switch(this.direction){
                case "right":
                    nextPosition[0]++;
                    break;
                case "left": nextPosition[0]--;
                    break;
                case "down":nextPosition[1]++;
                    break;
                case "up": nextPosition[1]--;
                    break;
                    default:
                           throw("invalid direction");          
    }
             this.body.unshift(nextPosition);
             this.body.pop();
    
        }
    
        this.setDirection = function (newDirection)
         {
            var allowedDirections;
            switch(this.direction){
                case "right":
                case "left": 
                allowedDirections=["up","down"];
                    break;
                case "down":
                 case "up": 
                 allowedDirections=["left","right"];
                 break;
                 default:
                   throw("invalid direction"); 
                             
    }
    
    if(allowedDirections.indexOf(newDirection) > -1)
    {
        this.direction= newDirection;
       
    }
    
    
        }
        
        
    
    
    
        
    
    }
    document.onkeydown= function handleKeyDown(e){
    
        var key= e.key;
        var newDirection;
         switch(key) 
         
         {  case "ArrowLeft": 
        
            newDirection = "left"; 
            break;
            case "ArrowUp":
            newDirection = "up"; 
        
              break;
         case "ArrowRight":
            newDirection = "right"; 
            break;
        
              case "ArrowDown": 
              newDirection = "down"; 
              break;
              default:
                return;    
        
        
        
         }
        
        snakee.setDirection(newDirection);
        }
    
    }
    
   

