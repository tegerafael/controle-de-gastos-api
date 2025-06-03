-- CreateTable
CREATE TABLE `usuarios` (
    `id` VARCHAR(36) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `criadoEm` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `atualizadoEm` TIMESTAMP(0) NOT NULL,
    `deletadoEm` TIMESTAMP(3) NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gastos` (
    `id` VARCHAR(36) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `data` TIMESTAMP(3) NOT NULL,
    `categoria` ENUM('ALIMENTACAO', 'TRANSPORTE', 'MORADIA', 'LAZER', 'EDUCACAO', 'SAUDE', 'OUTROS') NOT NULL,
    `id_usu_fk` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `gastos` ADD CONSTRAINT `gastos_id_usu_fk_fkey` FOREIGN KEY (`id_usu_fk`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
