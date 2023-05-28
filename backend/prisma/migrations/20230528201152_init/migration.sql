-- CreateTable
CREATE TABLE "Label" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "isIncome" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "ExpenseGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Period" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Entry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" DECIMAL NOT NULL,
    "isIncome" BOOLEAN NOT NULL DEFAULT false,
    "periodId" INTEGER NOT NULL,
    "labelId" INTEGER NOT NULL,
    "expenseGroupId" INTEGER NOT NULL,
    CONSTRAINT "Entry_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Entry_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "Label" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Entry_expenseGroupId_fkey" FOREIGN KEY ("expenseGroupId") REFERENCES "ExpenseGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
