DROP TABLE "quotes";

CREATE TABLE "quotes" (
	"id" serial primary key,
	"name" varchar(130) not null,
	"quote" varchar(255) not null
);

INSERT INTO "quotes"("name", "quote") VALUES('HP Lovecraft', '“The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.”');
INSERT INTO "quotes"("name", "quote") VALUES('Egdar Allan Poe', '“All religion, my friend, is simply evolved out of fraud, fear, greed, imagination, and poetry.”');
INSERT INTO "quotes"("name", "quote") VALUES('Fyodor Dostoyevsk', '“Lack of originality, everywhere, all over the world, from time immemorial, has always been considered the foremost quality and the recommendation of the active, efficient and practical man.”');
INSERT INTO "quotes"("name", "quote") VALUES('Alan Moore', '“Why do we argue? Life''s so fragile, a successful virus clinging to a speck of mud, suspended in endless nothing.”');
INSERT INTO "quotes"("name", "quote") VALUES('Mary Shelley', '"I beheld the wretch—the miserable monster whom I had created."');
INSERT INTO "quotes"("name", "quote") VALUES('Cormac McCarthy', '“The point is there ain''t no point.”');
INSERT INTO "quotes"("name", "quote") VALUES('Eugène Ionesco', '“That''s how we stay young these days: murder and suicide.”');
INSERT INTO "quotes"("name", "quote") VALUES('John Fowles', '“I think we are just insects, we live a bit and then die and that’s the lot. There’s no mercy in things. There’s not even a Great Beyond. There’s nothing.”');
INSERT INTO "quotes"("name", "quote") VALUES('Unknown', '“It''s always worse than it seems.”');
INSERT INTO "quotes"("name", "quote") VALUES('Jeanne DuPrau', '“Why, if its going to be allright, do we see it getting worse every day?” ');
INSERT INTO "quotes"("name", "quote") VALUES('Sunday Adelaja', '“The worse scenario is when you do not know the purpose of your day to day existence”');
 