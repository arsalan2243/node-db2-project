// STRETCH
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(() => {
      return knex("cars").insert([
        {
          vin: "11111111",
          make: "car1 product",
          model: "car1 item",
          mileage: 100,
          title: "top car",
          transmission: " AUTO ",
        },

        {
          vin: "22222222",
          make: "car2 product",
          model: "car2 item",
          mileage: 200,
          title: "average car",
          transmission: " auto gear ",
        },
        {
          vin: "333333333",
          make: "car3 product",
          model: "car3 item",
          mileage: 300,
          title: "below average car",
          transmission: " auto-ish ",
        },
        {
          vin: "444444444",
          make: "car4 product",
          model: "car4 item",
          mileage: 400,
          title: "not even below average car",
          transmission: " doesnt move ",
        },
      ])
    })
}
