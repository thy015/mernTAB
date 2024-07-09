const { rejects } = require("assert");
const { resolve } = require("path");
const userLeft=false
const userWatchingPubhorn=false
let p=new Promise((resolve,reject)=>{
    let a=1+1
    if(a==2){
        resolve('Thank you')
    }else{
        reject('F you')
    }
})



function watchTutorialPromise(){
    return new Promise((resolve,rejects)=>{
        if(userLeft){
            rejects({
                name:'User left',
                message:'sad'
            })
        }else if(userWatchingPubhorn){
            rejects({
                name:'Why',
                message:'You can do better than this'
            })
        }else{
            resolve('Thumbs up n subscribe')
        }
    })
}
Promise.all([
    p,
    watchTutorialPromise()
]).then((m)=>{
    console.log(m)
}).catch((e)=>{
    console.log(e)
})

function makeRequest(location){
    return new Promise((resolve,rejects)=>{
        console.log(`Making req to ${location}`)
        if(location==='Sanf'){
            resolve('I miss you already')
        }else{
            rejects('Please stay away from my life')
        }
    })
}
function processRequest(res){
    return new Promise((resolve,rejects)=>{
        console.log('Proc res')
        resolve(`Extra information+${res}`)
    })
}


async function isWork(){
    try{
        const response= await makeRequest('Sanf')
        console.log('Response received')
        const processedRes= await processRequest(response)
        console.log(processedRes)
    }catch(e){
        console.log(e)
    }
}
isWork()
