import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOnDelete1690999006615 implements MigrationInterface {
    name = 'AddOnDelete1690999006615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '"2023-08-02T17:56:50.258Z"'`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT '"2023-08-02T17:56:50.259Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT '2023-07-26 17:33:39.559'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2023-07-26 17:33:39.559'`);
    }

}
