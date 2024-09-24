-- CreateTable
CREATE TABLE `smeq` (
    `id` VARCHAR(191) NOT NULL,
    `nomeParticipante` VARCHAR(100) NOT NULL,
    `score` INTEGER NOT NULL,
    `comentario` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
