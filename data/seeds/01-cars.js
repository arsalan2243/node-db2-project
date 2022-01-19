// STRETCH
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(() => {
      return knex("cars").insert([
        {
          vin: "11111111",
          make: "car1 Make",
          model: "car1 Model",
          mileage: 100,
          title: "awesome car",
          transmission: " six gear ",
        },

        {
          vin: "22222222",
          make: "car2 Make",
          model: "car2 Model",
          mileage: 200,
          title: "not awesome car",
          transmission: " six gear ",
        },
        {
          vin: "333333333",
          make: "car3 Make",
          model: "car3 Model",
          mileage: 300,
          title: "meh car",
          transmission: " six gear ",
        },
        {
          vin: "444444444",
          make: "car4 Make",
          model: "car4 Model",
          mileage: 400,
          title: "not even meh car",
          transmission: " six gear ",
        },
      ])
    })
}
