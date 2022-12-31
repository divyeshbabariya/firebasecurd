var admin = require('firebase-admin')
var serviceAccount = require("../../api-demo-616e3-firebase-adminsdk-tl98e-0e459f0b28.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const db = admin.firestore();
module.exports = { admin, db };