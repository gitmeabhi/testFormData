  CREATE TABLE bookings(
    id INTEGER PRIMARY KEY,
    studentName TEXT NOT null,
    mentorName TEXT NOT null,
    area_of_interest TEXT NOT NULL,
    duration INTEGER
   
)

INSERT INTO bookings(studentName, mentorName, area_of_interest, duration) 
VALUES("Prabhas", "Madhu", "React JS", 60)

DROP TABLE bookings