const args = process.argv.slice(2)

const a = Number(args[0])
const b = Number(args[1])

function add(param1, param2){
    if (Number.isInteger(param1) && Number.isInteger(param2)){
        sum = param1 + param2
        console.log(sum)
    } else {
        console.log(NaN)
    }
    
}

add(a, b)