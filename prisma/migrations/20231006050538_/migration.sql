-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role_id" VARCHAR(255);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
