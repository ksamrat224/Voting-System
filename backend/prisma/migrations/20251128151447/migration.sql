-- AlterTable
ALTER TABLE "polls" ADD COLUMN     "startsAt" TIMESTAMP(3),
ALTER COLUMN "endsAt" DROP NOT NULL;
