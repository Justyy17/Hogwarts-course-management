-- Houses tabel (Read Only)
CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    colors VARCHAR(100),
    founder VARCHAR(100)
);

INSERT INTO houses (name, colors, founder) VALUES
    ('Gryffindor', 'Scarlet and gold', 'Godric Gryffindor'),
    ('Slytherin', 'Green and silver', 'Salazar Slytherin'),
    ('Ravenclaw', 'Blue and bronze', 'Rowena Ravenclaw'),
    ('Hufflepuff', 'Yellow and black', 'Helga Hufflepuff');


SELECT * FROM houses;


-- Teachers tabel (Fuld CRUD (Create, Update, Delete))
CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house_id INT REFERENCES houses(id)
);

INSERT INTO teachers (name, house_id) VALUES
    ('Severus Snape', 2),
    ('Minerva McGonagall', 1),
    ('Filius Flitwick', 3);

SELECT * FROM teachers

-- Students tabel (Fuld CRUD (Create, Update, Delete))

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    year INT,
    house_id INT REFERENCES house(id)
);

INSERT INTO students (name, year, house_id) VALUES
    ('Harry Potter', 3, 1),
    ('Draco Malfoy', 3, 2),
    ('Luna Lovegood', 2, 3),
    ('Cedric Diggory', 5, 4);


-- Courses Tabel

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    teacher_id INT REFERENCES teachers(id) ON DELETE SET NULL
);

INSERT INTO courses (name, teacher_id) VALUES
    ('Potions', 1),
    ('Transfiguration', 2),
    ('Charms', 3);


-- Students to Courses

CREATE TABLE course_students (
    course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    student_id INT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    PRIMARY KEY (course_id, student_id)
);

INSERT INTO course_students (course_id, student_id) VALUES
    (1, 1),
    (1, 2),
    (2, 1);
