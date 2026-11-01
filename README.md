# Liste over endpoints

## Houses

### GET /houses/

Returnere alle houses

### GET /houses/:id

Returnere et specifikt house med det angivet id

## Teachers

### GET /teachers

Returnere alle teachers

### GET /teachers:id

Returnere en teacher med det angivet id

### POST /teachers

Create en ny teacher ved hjælp af angivet json (body) samt returner den nye teacher

### PUT /teachers/:id

Kan ændre name og house_id i en row i teachers der har det angivet id samt returner

### DELETE /teachers/:id

Sletter en row med det angivet id

## Students

### GET /students

Returnere alle students

### GET /students:id

Returnere en student med det angivet id

### POST /students

Create en ny student ved hjælp af angivet json (body) samt returner den nye student

### PUT /students/:id

Kan ændre name, year og house_id i en row i students der har det angivet id samt returner

### DELETE /students/:id

Sletter en row med det angivet id

## Courses

### GET /courses

returnere alle courses samt studerende som deltager course

### GET /courses/:id

returnere course med id samt studerende som deltager course

### POST /course

Laver et nyt course ved hjælp af angivet body (json) samt returner

### PUT /course/:id

Kan ændre name og teacher_id samt returner

### PUT /course/:id/teacher

Kan ændre teacher_id samt returner

### POST /course/:id/students

Kan tilføje en ny student til et course

### DELETE /course/:id/students

Kan fjerne en studerende fra et course

### DELETE /course/:id

Kan fjerne et course
