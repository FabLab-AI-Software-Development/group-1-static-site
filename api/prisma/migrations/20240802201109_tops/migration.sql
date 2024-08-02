-- CreateTable
CREATE TABLE "Top" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT,
    "size" TEXT NOT NULL,
    "sex" TEXT,
    "material" TEXT NOT NULL,

    CONSTRAINT "Top_pkey" PRIMARY KEY ("id")
);
