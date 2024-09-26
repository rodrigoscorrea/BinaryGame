-- CreateTable
CREATE TABLE `tam` (
    `id` VARCHAR(191) NOT NULL,
    `nomeParticipante` VARCHAR(100) NOT NULL,
    `easeOfUse1` VARCHAR(30) NOT NULL,
    `easeOfUse2` VARCHAR(30) NOT NULL,
    `easeOfUse3` VARCHAR(30) NOT NULL,
    `enjoyment1` VARCHAR(30) NOT NULL,
    `enjoyment2` VARCHAR(30) NOT NULL,
    `enjoyment3` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
