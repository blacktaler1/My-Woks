const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


const grid = 16;
const count = 0;
const score = 0;
const max = 0;

const snake = {
    x:160,
    y:160,

    dx:grid,
    dy:0,

    maxCells:1,
    cells:[],
}
 
const food = {
    x: 320,
    y: 320,
}
function getRandomInt(max,min){
    return Math.floor(Math.random() * (max-min))+min;

}
function loop(){
    if(++count < 4){
        return;
    }
    count = 0;
    context.clearRect( 0, 0, canvas.clientWidth, canvas.clientHeight)

    snake.x +=snake.dx;
    snake.y +=snake.dy;

    if(snake.x < 0){
        snake.x = canvas.clientWidth - grid;
    }
    else if(snake.x >=canvas.clientWidth){
        snake.x = 0;
    }

    if(snake.y < 0){
        snake.y = canvas.clientHeight - grid;
    }
    else if(snake.y >=canvas.clientHeight){
        snake.y = 0;
    }
    snake.cells.unshift({ x:snake.x , y:snake.y});
    
    if(snake.cells.length > snake.maxCells){
        snake.cells.pop();
    }
    context.fillStyle = 'white';
    context.fillRect(food.x, food.y, grid-1, grid-1);

    context.fillStyle = 'red';

    snake.cells.forEach(function(cell,index){
        if(cell.x === food.x && cell.y === food.y){
            snake.maxCells++;

            score +=1;
            document.getElementById('score').innerHTML = score;

            food.x = getRandomInt(0,25)*grid;
            food.y = getRandomInt(0,25)*grid;
        }    
            for(var i === index + 1; i < snake.cells.length ; i++){
                if(){
                    
                }

            }
        

    })
}