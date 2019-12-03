DROP TABLE "quotes";

CREATE TABLE "quotes" (
	"id" serial primary key,
	"name" varchar(130) not null,
	"quote" varchar(255) not null
);

INSERT INTO "quotes"("name", "quote") VALUES('HP Lovecraft', '“The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.”');
INSERT INTO "quotes"("name", "quote") VALUES('Egdar Allan Poe', '“All religion, my friend, is simply evolved out of fraud, fear, greed, imagination, and poetry.”');
