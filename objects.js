// Objects - Object oriented programming (OOP)

const circle = {
    radius : 1,
    // this is a method
    draw : function (){
        console.log('draw')
    },
    location : {
        'x' : 1,
        'y' : 2
    }
}

console.log(circle.location.x)