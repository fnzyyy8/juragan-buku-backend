import { prismaClient } from "../src/prisma-client";
import Joi from "joi";

describe("Add Costumers", () => {
  test("should create costumers", async () => {
    const costumers = [
      {
        name: "Den",
        username: "Deni888",
        password: "",
      },
      {},
    ];

    const schemaObject = Joi.object({
      name: Joi.string().min(10).required(),
      username: Joi.string().max(10).required(),
      password: Joi.string().min(8).required(),
    });

    for (const customer of costumers) {
      const result = schemaObject.validate(customer, { abortEarly: false });

      if (result.error) {
        throw new Error(
          result.error.details
            .map((value) => `${value.path} : ${value.message}`)
            .join("\n")
        );
      } else {
        const uploded = await Promise.all(
          costumers.map((costumer) =>
            prismaClient.pembeli.create({ data: costumer })
          )
        );
      }
    }
  });
});
