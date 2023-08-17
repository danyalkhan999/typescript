// type aliases
type stringOrNum = string | number;
type objWithName = {name: String, uid: stringOrNum}


const logDetails = (uid: stringOrNum, item: string) =>{
    console.log(`${item} has uid of ${uid}`)
}

const greet = (user: objWithName) => {
    console.log(`Welcome ${user.name}`)
}