const { MongoClient} =require("mongodb");

const URI =
"mongodb+srv://namasteNodejs:6CVgoYOchI3viWfW@namastenode.orh9pzy.mongodb.net/";

const client=new MongoClient(URI);

const dbName="Helloworld";

async function main(){
    await client.connect();
    console.log("connected sucessfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    // const data={
    //     firstName:"SAANA",
    //     lastName:"PRIYA",
    //     Phone :"9897656657",
    //     "City":"Bengaluru"
    // };

    // const insertResult = await collection.insertMany([ {
    //     firstName:"Swara",
    //     lastName:"hani",
    //     Phone :"9897656657",
    //     "City":"Bengaluru"
    // }]);
// console.log('Inserted documents =>', insertResult);

// const updateResult = await collection.updateOne({firstName:"Sahana"},{ $set: { firstName:"ANUPAMA"} });
// console.log("updated name=>",updateResult)

// const findesult = await collection.find();
// console.log("find the result",findesult);

// const findResult = await collection.findOne();
// console.log("find the result",findResult);

// const updResult= await collection.findOneAndUpdate({firstName:"ANUPAMA"},{$set:{city:"Mysore"}},{returnDocument:"after"});
// console.log("updated",updResult);

const result=await collection.initializeOrderedBulkOp();
console.log("results are =>",result);

const indexName = await collection.createIndex({ firstName: 1 });
console.log(indexName);


const resultIndex= await collection.indexExists("firstName_1");
console.log("result index => ",resultIndex)


    // const insertResult = await collection.insertOne([data]);
    // console.log("inserted documents=>",insertResult);

    // //find a document
    // const findResult = await collection.find({}).toArray();
    // console.log("Found documents=>",findResult);

    // const countResult=await collection.countDocuments({});
    // console.log("count of documents in the collection=>",countResult);

    // const result= await collection.find({firstName:"Deep"}).Count();
    //     console.log("result=>",result);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());