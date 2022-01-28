const {initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const credentials = require('./credentials.json');

initializeApp({
    credential: cert(credentials)
});

const db = getFirestore();

db.collection('Customers').doc('wZxl2vqcVg4ZEpDQlmNa').get()
.then(doc => {
    console.log(doc.id, ' => ', doc.data());
})
.catch(err => console.error(err));

db.collection('Products').where('Item','==','Lipstick').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(console.error);


