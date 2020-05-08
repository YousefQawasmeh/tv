BEGIN;

    INSERT INTO link
        (name, img, description,url)
    VALUES
        ('داي الشجاع' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnR-ITcAC27NsWbXdz8eELUHHqt9PAB9aKJ2nGPI2ToEqQGhJ6&usqp=CAU', 'داي داي داي', 'https://www.youtube.com/watch?v=6y3P7hw5aM8'),
        ('بات مان', 'https://4.bp.blogspot.com/-wbKOBLXf6do/T-lbvINoZ1I/AAAAAAAAAww/SrmrvAY7l5M/s1600/11232341.jpg', 'بات مان مان مان', 'https://www.youtube.com/watch?v=bu6EBd3rPmI'  );

    COMMIT;