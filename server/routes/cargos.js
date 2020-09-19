const { Router } = require('express');
const Cargo = require('../models/cargo')

const router = Router()

router.get("/", (req, res) => {
    Cargo.find({}).then((data) => res.status(200).send(data));
});

router.get("/:id", (req, res, next) => {
    const cargoId = req.params.id
    Cargo.findById(cargoId).then((data) => {
        if (data === null) {
            next({
                status: "404",
                message: `Cargo with id: ${cargoId} not found`
            })
        } else {
            res.status(200).send(data)
        }
    });
});

router.post("/", (req, res, next) => {
    if (!req.body.title || !req.body.description) {
        next({ status: 400, message: "Request body or title is undefined" })
    } else {
        Cargo.findOne({ "title": req.body.title }).then(data => {
            if (data) {
                next({ status: 400, message: "Title should be unique" })
            } else {
                return Cargo.create(req.body)
            }
        }).then(data => {
            res.status(200).send(data)
        })
    }
});

router.put("/:id", (req, res, next) => {
    const cargoId = req.params.id;

    if (!req.body.title || !req.body.description) {
        next({ status: 400, message: "Request body or title is undefined" })
    } else {
        Cargo.findById(cargoId).then((data) => {
            if (data) {
                data.updateOne(req.body).then((updated) => {
                    if (updated.ok) {
                        console.log(updated)
                        Cargo.findById(cargoId).then((data) => {
                            res.status(200).json(data)
                        })
                    }
                })
            } else {
                next({ status: 500, message: "Cant make update" })
            }
        })
    }
});

router.delete("/:id", (req, res, next) => {
    const cargoId = req.params.id
    Cargo.findOne({ _id: cargoId }).then((data) => {
        if (data) {
            data.deleteOne({ _id: cargoId })
            res.status(200).send({ message: `${cargoId} has been deleted` })
        } else {
            next({
                status: 404,
                message: `Cargo with id: ${cargoId} not found`
            })
        }
    });
});

module.exports = router