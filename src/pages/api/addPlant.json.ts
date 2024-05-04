import type { APIRoute } from "astro";
import { Plant, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const {
      plant_name,
      plant_location,
      plant_picture,
      next_watering,
      water_frequency,
    } = body;

    if (
      !plant_name ||
      !plant_location ||
      !plant_picture ||
      !next_watering ||
      !water_frequency
    ) {
      return new Response(null, { status: 400 });
    }
    const res = await db.insert(Plant).values([
      {
        name: plant_name,
        location: plant_location,
        image_src: plant_picture,
        next_watering,
        water_freq: water_frequency,
      },
    ]);
    return new Response(
      JSON.stringify({
        success: true,
        status: 200,
      })
    );
  }
  return new Response(null, { status: 400 });
};
