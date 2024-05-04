import { Plant, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Plant).values([
    {
      name: "Plant 1",
      location: "Living Room",
      image_src: "https://source.unsplash.com/random/?Plant?1",
      water_freq: 124125,
    },
    // {
    //   name: "Plant 2",
    //   location: "Kitchen",
    //   image_src: "https://source.unsplash.com/random/?Plant?2",
    //   water_freq: 50000,
    // },
    // {
    //   name: "Plant 3",
    //   location: "Bedroom",
    //   image_src: "https://source.unsplash.com/random/?Plant?3",
    //   water_freq: 80000,
    // },
    // {
    //   name: "Plant 4",
    //   location: "Office",
    //   image_src: "https://source.unsplash.com/random/?Plant?4",
    //   water_freq: 60000,
    // },
    // {
    //   name: "Plant 5",
    //   location: "Balcony",
    //   image_src: "https://source.unsplash.com/random/?Plant?5",
    //   water_freq: 35000,
    // },
    // {
    //   name: "Plant 6",
    //   location: "Study Room",
    //   image_src: "https://source.unsplash.com/random/?Plant?6",
    //   water_freq: 70000,
    // },
    // {
    //   name: "Plant 7",
    //   location: "Patio",
    //   image_src: "https://source.unsplash.com/random/?Plant?7",
    //   water_freq: 45000,
    // },
    // {
    //   name: "Plant 8",
    //   location: "Sunroom",
    //   image_src: "https://source.unsplash.com/random/?Plant?8",
    //   water_freq: 55000,
    // },
    // {
    //   name: "Plant 9",
    //   location: "Terrace",
    //   image_src: "https://source.unsplash.com/random/?Plant?9",
    //   water_freq: 90000,
    // },
    // {
    //   name: "Plant 10",
    //   location: "Garden",
    //   image_src: "https://source.unsplash.com/random/?Plant?10",
    //   water_freq: 75000,
    // },
  ]);
}
