const fs = require('fs')
exports.getRoast = async (args) => {
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync('./yo-mama-source/jokes.json'));
            return resolve(jokes[args.type][args.id])
        }catch(e){
            return reject(new Error("yo mama so stupid she fucked up syntax, probably\nshould be {type:'typet',id:#id}\n\n"+e))
        }
    })
}

exports.getRandom = async() =>{
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync('./yo-mama-source/jokes.json'));
            let bigArray = Object.values(jokes)
            let bruh = []
            for(thing of bigArray){
                bruh.push(...thing)
            }
            return resolve(bruh[Math.floor(Math.random() * bruh.length)])
        }catch(e){
            reject(new Error("something messed up\n\n"+e))
        }
    })
}
exports.getRandomTopic = async(topic) =>{
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync('./yo-mama-source/jokes.json'));
            const bruh = Object.values(jokes[topic])
            return resolve(bruh[Math.floor(Math.random() * bruh.length)])
        }catch(e){
            reject(new Error("something messed up\n\n"+e))
        }
    })
}
exports.getID = async(id) =>{
    return new Promise((resolve,reject)=>{
        try{
            const jokes = JSON.parse(fs.readFileSync('./yo-mama-source/jokes.json'));
            let bigArray = Object.values(jokes)
            let bruh = []
            for(thing of bigArray){
                bruh.push(...thing)
            }
            return resolve(bruh[id])
        }catch(e){
            reject(new Error("something messed up\n\n"+e))
        }
    })
}