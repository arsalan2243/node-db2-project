const { getById, getAll } = require("./cars-model")
const vinValidator = require("vin-validator")

const checkCarId = async (req, res, next) => {
  try {
    const exist = await getById(req.params.id)
    if (!exist) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      })
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

const checkCarPayload = async (req, res, next) => {
  const err = { message: "" }
  try {
    const { vin, make, model, mileage } = req.body
    if (!vin) {
      err.message = "vin is missing"
    }
    if (!make) {
      err.message = "make is missing"
    }
    if (!model) {
      err.message = "model is missing"
    }
    if (!mileage) {
      err.message = "mileage is missing"
    }
    if (err.message) {
      next({ status: 400, message: err.message })
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

const checkVinNumberValid = async (req, res, next) => {
  try {
    if (!vinValidator.validate(req.body.vin)) {
      next({ status: 400, message: `vin ${req.body.vin} is invalid` })
    } else next()
  } catch (error) {
    next(error)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const cars = await getAll()
    const valid = cars.some((car) => car.vin === req.body.vin)
    if (valid) {
      next({ status: 400, message: `vin ${req.body.vin} already exists` })
    } else next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
