const { Router } = require('express');
const Cargo = require('../models/cargo')

const router = Router()


router.get("/cargos", (req, res) => {
    Cargo.find({}).then((data) =>
        res.status(200).send(data)
    )
});

router.post("/cargos", (req, res, next) => {
    if (!req.body.title || !req.body.description) {
        next(`Wrong body for creation of cargo.
            {
                "title": ${req.body.title}, "description: ${req.body.description}"}`)
    } else {
        Cargo.findOne({ "title": req.body.title }).then(data => {
            if (data) {
                res.status(200).send("There is the cargo with the title")
            } else {
                return Cargo.create(req.body)
            }
        }).then(data => {
            res.status(200).send(data)
        })
    }
});

router.put("/cargos/:id", (req, res) => {
    Cargo.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Cargo.findOne({ _id: req.params.id }).then((data) => {
            res.status(200).send(data)
        })
    })

});

router.delete("/cargos/:id", (req, res) => {
    Cargo.findOne({ _id: req.params.id }).then((data) => {
        if (data) {
            data.deleteOne({ _id: req.params.id })
            res.status(200).send(`{"message": "${req.params.id} has been deleted"}`)
        } else {
            res.status(200).send(`{"message": "${req.params.id} not found"}`)
        }

    }).catch(err => { console.log(err) })
});

module.exports = router