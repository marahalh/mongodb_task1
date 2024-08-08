
const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "task1"

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('Connection Error has occured!..')
    }
    console.log('Connected to Mongodb')

    const db = res1.db(dbname)

    //////////////////////////////////////////////////////////////


    db.collection('laptops').insertOne({
        type: 'HP',
        model: 'model1',
        price: 850
    }, (error, data) => {
        if (error) {
            console.log('An error on Insert" ' + error)
        }
        console.log(data.insertedId)
    })

    db.collection('laptops').insertOne({
        type: 'HP',
        model: 'model2',
        price: 870
    }, (error, data) => {
        if (error) {
            console.log('An error on Insert" ' + error)
        }
        console.log(data.insertedId)
    })

    //////////////////////////////////////////////////////////////
    
    db.collection('laptops').insertMany(
        [{
            type: 'Samsung',
            model: 'model1',
            price: 700
        },
        {
            type: 'Samsung',
            model: 'model2',
            price: 710
        },
        {
            type: 'Dell',
            model: 'model1',
            price: 750
        },
        {
            type: 'Dell',
            model: 'model2',
            price: 650
        },
        {
            type: 'Acer',
            model: 'model1',
            price: 780
        },
        {
            type: 'Acer',
            model: 'model2',
            price: 800
        },
        {
            type: 'Toshiba',
            model: 'model1',
            price: 800
        },
        {
            type: 'Toshiba',
            model: 'model2',
            price: 800
        },

        {
            type: 'Asus',
            model: 'model1',
            price: 800

        },
        {
            type: 'Asus',
            model: 'model2',
            price: 800

        }], (error, data) => {
            if (error) {
                console.log('Bulk Insert Error! ')
            }
            // console.log(data.insertedCount)
        }
    )

    ///////////////////////////////////////////////////////////////////


    /*  db.collection('laptops').find({ price: 800 }).toArray((error, laptops) => {
         if (error) {
             return console.log('Find error!')
         }
         console.log(laptops)
     }) */

    ///////////////////////////////////////////////////////////////////////


    /* db.collection('laptops').find({ price: 800 }).limit(3).toArray((error, laptops) => {
        if (error) {
            return console.log('error has occured')
        }
        console.log(laptops)
    }) */

    ////////////////////////////////////////////////////////////////////


    /* var mycolls = db.collection('laptops').find({}).limit(4).toArray((error, laptops) => {
        if (error) {
            return console.log('error has occured')
        }
        var mycollIDs = laptops.map(x => x._id)

        db.collection('laptops').updateMany({ _id: { $in: mycollIDs } }, { $set: { model: 'updatedModel' } })
    })
 */
    /////////////////////////////////////////////////////////////////////

     /* mycolls = db.collection('laptops').find({price: 800}).limit(4).toArray((error, laptops) => {
        if (error) {
            return console.log('error has occured')
        }
        var mycollIDs = laptops.map(x => x._id)

        db.collection('laptops').updateMany({ _id: { $in: mycollIDs } }, { $inc: { price: 40 } })
    }) */

    ////////////////////////////////////////////////////////////////////


   /*  db.collection('laptops').updateMany({ }, {
                $inc: {price: 100 }
    })
    .then((data) => {console.log(data.modifiedCount)})
        .catch((error) => {console.log(error)})
            */

    ////////////////////////////////////////////////////////////////////

/* 
      db.collection('laptops').deleteMany({price: 940 })
          .then((data1) => {console.log(data1.deletedCount)})
          .catch((error) => {console.log(error)}) */


           
    /////////////////////////////////////////////////////////////////////////////////////////////



})




