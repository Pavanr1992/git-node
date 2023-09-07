const person1 = async ()=>{
    var arr = [{"name":"Promise 1"}]
    return new Promise((resolve,reject)=>{
        resolve(arr)
    })
}
const person2 = async ()=>{
    var arr = [{"name":"Promise 2"}]
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(arr)
        },6000)
      //  reject("There is an error")
    })
}
const getPromise = async (req,res)=>{
    try{
    let status = await Promise.all([person1(),person2()])
    console.log(status)

    res.send({"message":status})
    }catch(error){
        res.send({"error":error}) 
    }

}
module.exports = { getPromise }