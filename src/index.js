import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const cars = [];

app.post("/cars", (request, response) => {
  const { model, brand, year, color, plate } = request.body;

  const newCar = {
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  };

  cars.push(newCar);

  return response.status(201).json(newCar);
});

app.get("/cars", (request, response) => {
  return response.send(cars);
});

app.listen("3000");
