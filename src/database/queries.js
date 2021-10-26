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
                return data;
            })
    })
}