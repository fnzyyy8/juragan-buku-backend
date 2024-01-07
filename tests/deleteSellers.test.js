import { prismaClient } from "../src/prisma-client";

describe("Delete Sellers", () => {
  test("should delete sellers", async () => {
    const deleteSellers = await prismaClient.penjual.deleteMany({
      where: {
        id: {
          gt: 2,
        },
      },
    });
  });
});
