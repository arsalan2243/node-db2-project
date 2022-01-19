const mb = require("./cars-model")
const express = require("express")
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware")

const router = express.Router()

router.get("/", async (req, res) => {
  const allCars = await mb.getAll()
  res.status(200).json(allCars)
})

router.get("/:id", checkCarId, async (req, res) => {
  const car = await mb.getById(req.params.id)
  res.status(200).json(car)
})
router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res) => {
    const newcar = await mb.create(req.body)
    res.status(201).json(newcar)
  }
)
router.put(
  "/:id",
  checkCarId,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res) => {
    const updatedcar = await mb.update(req.params.id, req.body)
    res.status(200).json(updatedcar)
  }
)
router.delete("/:id", checkCarId, async (req, res) => {
  const deletedCar = await mb.remove(req.params.id)
  res.status(200).json(deletedCar)
})

//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
  res.status(err.status || 500).json({
    Error: "somethig went wrong",
    message: err.message,
  })
})

module.exports = router
