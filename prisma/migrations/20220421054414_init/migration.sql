-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "logoBackground" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "postedAt" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "apply" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Requirements" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    CONSTRAINT "Requirements_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReqItems" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "req_id" TEXT NOT NULL,
    CONSTRAINT "ReqItems_req_id_fkey" FOREIGN KEY ("req_id") REFERENCES "Requirements" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    CONSTRAINT "Role_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RoleItems" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    CONSTRAINT "RoleItems_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Requirements_job_id_key" ON "Requirements"("job_id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_job_id_key" ON "Role"("job_id");
