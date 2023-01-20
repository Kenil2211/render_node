const fs=require('fs')

module.exports.writeToFile=(fname)=>{

    fs.writeFileSync(fname+".txt","Hello")
}

module.exports.readJsonData=(fname)=>{
    let d=fs.readFileSync(fname+".txt","utf-8")
    // let ar_data=JSON.parse(d)
    // console.log(ar_data)
    return (JSON.parse(d))
}

module.exports.filterData=(ar)=>
{
    console.log("Sort on Gender ")
    console.log(ar.filter(x=>{
        return (x.gender==='Male'?true:false)
    }))
}