import { prismaClient } from "../src/prisma-client";

describe("Update Customer likes", () => {
  test("should like books", async () => {
    const likeBy = await prismaClient.pembeli.update({
      where: {
        id: 1,
      },
      data: {
        likes: {
          connect: [
            {
              id: 1,
            },
            {
              id: 3,
            },
          ],
        },
      },
    });
  });
});
