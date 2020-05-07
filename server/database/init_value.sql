BEGIN;

    INSERT INTO link
        (name, img, description,url)
    VALUES
        ('داي الشجاع' , 'https://www.doctorfox.co.uk/imgs-products/zoom/yasmin-contraceptive-pill.jpg', 'داي داي داي', 'https://www.doctorfox.co.uk/imgs-products/zoom/yasmin-contraceptive-pill.jpg'),
        ('بات مان', 'https://khalidpharmacy.com/wp-content/uploads/2018/02/1_1520742162.jpg', 'بات مان مان مان', 'https://khalidpharmacy.com/wp-content/uploads/2018/02/1_1520742162.jpg'  );

    COMMIT;