const db = require("../../data/db-config")

const getAll = async () => {
  return db("cars")
}

const getById = async (id) => {
  const car = await db("cars").where("id", id).first()
  return car
}

const create = async (car) => {
  const [id] = await db("cars").insert(car)
  return getById(id)
}

const update = async (id, car) => {
  await db("cars").where("id", id).update(car)
  return getById(id)
}

const remove = async (id) => {
  const deletedCar = await getById(id)
  await db("cars").where("id", id).del()
  return deletedCar
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
