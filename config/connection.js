const mongoClient = require('mongodb').MongoClient
const state = {
    db:null
}


module.exports.connect = function(done){
    const url = 'mongodb://localhost:3000'
    const dbname = 'mall'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db = data.db(dbname)

        done()

    })


}

module.exports.get = function(){
    return state.db
}