-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "senha" TEXT NOT NULL DEFAULT 'Marechal123@',
    "nome" TEXT NOT NULL,
    "sala" TEXT,
    "dtativacao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "advertencias" INTEGER NOT NULL DEFAULT 0,
    "tipo" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "Noticia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "nomeautor" TEXT NOT NULL,
    "img" TEXT,
    "dtcriado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_modificado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "autorId" TEXT NOT NULL,
    CONSTRAINT "Noticia_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Videos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PedidoImpressora" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeproj" TEXT NOT NULL,
    "objcriado" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    CONSTRAINT "PedidoImpressora_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Msgaluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "resumo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,
    "autorId" TEXT NOT NULL,
    CONSTRAINT "Msgaluno_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nome_key" ON "User"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Noticia_slug_key" ON "Noticia"("slug");

-- CreateIndex
CREATE INDEX "Noticia_slug_idx" ON "Noticia"("slug");
