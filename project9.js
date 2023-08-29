function showTime() {
    
    'use strict';

    
    var theTime = new Date(),

        hours = theTime.getHours(),
        minutes = theTime.getMinutes(),
        seconds = theTime.getSeconds();
    if (hours < 10) {
        
        hours = '0' + hours;
    }
    if (minutes < 10) {
        
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        
        seconds = '0' + seconds;
    }
    

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}

window.onload = function () {
    'use strict'
    setInterval(showTime, 500);
}



/*

def defend():
    if(answer == 1):
        print("you approched to an enemy")
        while True:
            try:
                answer1 = float(input('What would you like to do? \n (Please enter 1 or 2).'))
                if answer1!= 1 and answer1 != 2:
                    print('Please enter 1 or 2.')
                else:
                    break
            except ValueError:
                    print('Please enter 1 or 2.')
    elif(answer == 2):
        cave()
        while True:
            try:
                answer = float(input('What would you like to do? \n (Please enter 1 or 2).'))
                if answer!= 1 and answer != 2:
                    print('Please enter 1 or 2.')
                else:
                    break
            except ValueError:
                print('Please enter 1 or 2.')
            

def cave():
    print('you go to the dark cave')
    print_pause('there is something in front of you')


defend()
*/