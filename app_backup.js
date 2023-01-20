// console.log("hello guys ...")
const f=require('./filehandling/filemain')

// f.writeToFile("first")
// f.writeToFile("data")

var ar=f.readJsonData("data")


f.filterData(ar)