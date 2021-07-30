//1

function TimeW() {

    const timeTable = {};
    do{
        task = prompt('what task you will do?');
        if(task===null) {
            break;
        }
        time = prompt ('when will you do the task?');
if(time!==null) {
    timeTable[time] = task;
}

    } while(task!==null && time!==null );

    return timeTable;
}

console.log(TimeW());

//2


