
const { db, admin } = require("../util/admin");
exports.student = async (req, res) => {
    try {
        db.collection('student').get().then((snap) => {
            const data = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            res.status(200).json({
                message: "success....!!!",
                status: 200,
                data: data,
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong, please try again",
            status: 500
        });
    }
}
exports.addStudData = async (req, res) => {
    try {
        var student_name = req.body.student_name
        var student_phone = req.body.student_phone
        var student_dob = req.body.student_dob
        var student_gender = req.body.student_gender

        if (student_name == null) {
            res.status(403).send("NAME IS REQUIRED...!!!!");
        }
        else if (student_phone.length != 10) {
            res.status(403).send("INSERT VALID PHONE NUMBER...!!!!");
        }
        else if (student_gender == null) {
            res.status(403).send("GENDER IS REQUIRED...!!!!");
        }
        else if (student_dob == null) {
            res.status(403).send("DATE OF BIRTH IS REQUIRED...!!!!");
        }
        else {
            var date = new Date();
            console.log("date", date);
            const student = req.body;
            console.log("user", student);

            await db.collection("student").add(student);

            res.status(200).json({
                message: "INSERTED....!!!",
                status: 200,
                data: student
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong....!!!!",
            status: 500
        })

    }
}
exports.studViewById = async (req, res) => {
    try {
        const snap = await admin.firestore().collection('student').doc(req.params.id).get();
        const studData = snap.data();
        console.log(studData);
        if (studData == undefined) {
            res.status(404).json({
                message:"student not found",
                status:404
            })
        }
        else {
            res.status(200).json({
                message: "success....!!!",
                status: 200,
                data: studData
            })

        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong, please try again",
            status:500
        });
    }
}
exports.studDeleteById = async (req, res) => {
    try {

        const snap = await admin.firestore().collection('student').doc(req.params.id).get();
        const studData = snap.data();
        console.log("----", studData);
        if (studData == undefined) {
            res.status(404).json({
                message:"student not found",
                status:404
            })
        }
        else {
            await admin.firestore().collection("student").doc(req.params.id).delete();
            res.status(200).json({
                message: "deleted successfully....!!!",
                status: 200,
            })


        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong, please try again", status:500 });
    }
}
exports.studUpdateById = async (req, res) => {
    try {
        const snap = await admin.firestore().collection('student').doc(req.params.id).get();
        const studData = snap.data();

        const body = req.body;

        if (studData == undefined) {
            res.status(404).json({
                message:"student not found",
                status:404
            })

        }
        else {
            await admin.firestore().collection('student').doc(req.params.id).update(body);
            res.status(200).json({
                message: "updated successfully....!!!",
                status: 200
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong, please try again", status:500 });

    }
}