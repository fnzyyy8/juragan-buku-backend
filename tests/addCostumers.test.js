import { prismaClient } from "../src/prisma-client";

describe("Add Costumers", () => {
  test("should create costumers", async () => {
    const costumers = await prismaClient.pembeli.createMany({
      data: [
        {
          name: "Siska Anita",
          username: "Siska888",
          password: "Siska123",
        },
        {
          name: "Firli Rinjani",
          username: "Firli888",
          password: "Firli123",
        },
      ],
    });
  });
});
