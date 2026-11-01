# GET/Read all

Her er mønstret det samme for alle bortset for courses da der bliver converted students til et json object som bliver joinet på courses.

Repository kræver ingen params og selve queryen er en SELECT \* FROM table; som så returner det data og sender videre op til controllers.

Controller står for at omsætte dataen til json og returnere fejl kode. Samtidig står controller også for response og request opjekterne hvori det er request som bruger til at sende daten videre til repository som enten kommer fra paramter i routen eller i body'en.

Routes er det øverste lag som bestemmer routen og caller den rigtige controller

# GET/Read single

Mønstret er det samme som for get read all bortset fra man skal tilføje en param som er id. Dette id skal så tilføjes i repositoriet query som WHERE id = id. Det gør så også man i normalt services skal håndtere specifikke checks og returnere de korrekte fejl koder. I denne opgave har jeg valgt også at lave services laget men kun for courses. De specifikke checks er om id er et tal og om der returneres noget altså om det findes altså 400 og 404. Disse fejl koder bliver sendt op til controller. Controller står som sagt for at levere de her fejl koder samt at Id'et bliver sendt til services fordi controller tager sig af req og res.

# INSERT/Create

Dette er en POST og i repository er queryen "INSERT INTO table (...) VALUES (params)". Som i de andre tilfælde kommer params fra services som får dem fra controllers. Her kommer de fra response body. I services bliver der taget højde for mulige fejl så som ved post af course hvis teacher_id'et er et invalid altså teacher'en ikke findes. Dette kan gøres ved at postgresql returner en fejl kode som vi kan omsætte. Denne fejl kode får vi kun fordi vi har sat databasen op så vi har foreign keys som gør nogle columns values refere til andre tables. Services får som nævnt tidligere params fra controllers som tager sig af response og request og routes tager sig af endpointet samt den rigtige controller bliver kaldt.

# UPDATE (Change teacher/student/course)

PUT .../:id er forholdsvis meget det samme for teacher/student/course. Derfor beskrives det kun med teacher herunder.
Repository udfører et UPDATE teacher SET name = $1, house = $2 WHERE id = $3. Disse Denne bruges ved controllers i teachers tilfælde. Dernæst håndtere controllers errors som kan være manglende eller invalid house name og der bliver også håndteret tilfælde hvor teacher med det id ikke findes.

# UPDATE (Post) Course student

POST .../course/:id/students er routen. Repository udføres INSERT query i det sammensatte table course_students. Services tager sig af errors som Invalid eller manglende course eller student id samt om de findes eller ej. Controller tager sig af response og request objekterne.

# UPDATE (DELETE) Course student

DELETE query udføres i repository med id fra params. Services tjekker for error og oversætter dem. Errorsne er ved manglende eller invalid student og/eller course id samt tjekker om de findes. Controller tager sig af response og request. routes bestemmer routen.

# Update (Change) Courses teacher

For at change teacher skal vi bruge et ID i vores req.params for at "target" en specifik course. Så routen ville hedde courses/:id. Derudover for at differenciere routen så vi targeter kun teacher_id'et så skal vi også tilføje /teacher til routen så den bliver courses/:id/teacher. Derudover skal vi have det nye teacher id med i vores req.body. Vi skal først tjekke at courset eksistere ved at SELECT og kigge på resultatet derefter skal vi ved hjælp af UPDATE opdatere teacher_id i courset.
