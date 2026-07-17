-- CreateTable
CREATE TABLE "university" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "alias" VARCHAR(10),

    CONSTRAINT "university_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "university_id" INTEGER NOT NULL,

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "period_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "period_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "subject_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "subject_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "year" SMALLINT,
    "period" SMALLINT,
    "weekly_hours" SMALLINT,
    "career_id" INTEGER NOT NULL,
    "subject_type_id" INTEGER NOT NULL,
    "subject_category_id" INTEGER NOT NULL,
    "period_type_id" SMALLINT,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_prerequisite" (
    "subject_id" INTEGER NOT NULL,
    "required_subject_id" INTEGER NOT NULL,

    CONSTRAINT "subject_prerequisite_pkey" PRIMARY KEY ("subject_id","required_subject_id")
);

-- CreateTable
CREATE TABLE "app_user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "name" VARCHAR(30),
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "app_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_status" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "subject_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_subject" (
    "user_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "approved_date" DATE,
    "regularized_date" DATE,
    "attempts" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "user_subject_pkey" PRIMARY KEY ("user_id","subject_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "university_alias_key" ON "university"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "career_university_id_name_key" ON "career"("university_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "period_type_name_key" ON "period_type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subject_type_name_key" ON "subject_type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subject_category_name_key" ON "subject_category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subject_career_id_code_key" ON "subject"("career_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "subject_career_id_name_key" ON "subject"("career_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "app_user_username_key" ON "app_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "subject_status_name_key" ON "subject_status"("name");

-- AddForeignKey
ALTER TABLE "career" ADD CONSTRAINT "career_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_subject_type_id_fkey" FOREIGN KEY ("subject_type_id") REFERENCES "subject_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_subject_category_id_fkey" FOREIGN KEY ("subject_category_id") REFERENCES "subject_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_period_type_id_fkey" FOREIGN KEY ("period_type_id") REFERENCES "period_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_prerequisite" ADD CONSTRAINT "subject_prerequisite_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_prerequisite" ADD CONSTRAINT "subject_prerequisite_required_subject_id_fkey" FOREIGN KEY ("required_subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subject" ADD CONSTRAINT "user_subject_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subject" ADD CONSTRAINT "user_subject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subject" ADD CONSTRAINT "user_subject_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "subject_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
