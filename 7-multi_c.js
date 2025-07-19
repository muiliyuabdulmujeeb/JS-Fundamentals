const args = process.argv.slice(2);

const intValue = args[0]
const parsedIntValue = Number(intValue)

let i = 0
if (Number.isInteger(parsedIntValue)) {
    while (i < parsedIntValue){
        console.log("C is fun")
        i++ } }

        else {
                console.log("Missing number of occurrences")
            }