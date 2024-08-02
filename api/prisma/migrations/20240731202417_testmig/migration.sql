-- CreateTable
CREATE TABLE "Pants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "sex" TEXT,
    "material" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,

    CONSTRAINT "Pants_pkey" PRIMARY KEY ("id")
);
