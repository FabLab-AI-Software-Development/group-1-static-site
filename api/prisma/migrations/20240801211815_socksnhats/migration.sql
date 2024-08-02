-- CreateTable
CREATE TABLE "Socks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "sex" TEXT,
    "material" TEXT NOT NULL,

    CONSTRAINT "Socks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "sex" TEXT,
    "material" TEXT NOT NULL,

    CONSTRAINT "Hat_pkey" PRIMARY KEY ("id")
);
