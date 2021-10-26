import { db } from './firestore.js';

export const getData = async (collection) => {
    return await new Promise(resolve => {
        db.collection(collection)
            .onSnapshot(snapshotChange => {
                let data = [];
                snapshotChange.forEach((doc) => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                    resolve(data);
                });
            })
    })
}

export const addData = async (collection,document) => {
    return await new Promise((resolve,reject) => {
        db.collection(collection).add(document)
            .then(function(doc) {
                console.log("Tutorial created with ID: ", doc.id);
                resolve(doc.id);
            })
            .catch(function(error) {
                console.error("Error adding Tutorial: ", error);
                reject(error);
            });
    })
}