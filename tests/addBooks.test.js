import { prismaClient } from "../src/prisma-client";

describe("add books", () => {
  test("should add books", async () => {
    const addBook = await prismaClient.products.createMany({
      data: [
        {
          name: "Aku dan Mereka",
          id_Penjual: 2,
          price: 130000,
          quantity: 30,
          book_author: "Denis Adi Sumarno",
          book_type: "Karya tulis",
        },
        {
          name: "Asmara dan Asmari",
          id_Penjual: 2,
          price: 80000,
          quantity: 10,
          book_author: "Dewi Asmara",
          book_type: "Fiksi",
        },
      ],
    });
  });
});
