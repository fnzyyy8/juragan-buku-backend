import { prismaClient } from "../src/prisma-client";

describe("FindAllBooks", () => {
  it("should find all book", async () => {
    const book = await prismaClient.products.findMany({});
    console.log(book);
  });
});
