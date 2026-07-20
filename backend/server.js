const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const db = require("./config/db");

app.use(cors());
app.use(express.json());

/*GET API */
app.get("/test-db", (req, res) => {
    db.query("SELECT 1", (err, result) => {
        if (err) {
            return res.status(500).json({ message: "DB Error", err });
        }
        res.json({ message: "DB Working Fine", result });
    });
});

app.get("/products", (req, res) => {

    const sql = `
        SELECT 
            p.*,
            c.category_name
        FROM products p
        LEFT JOIN categories c
        ON p.category_id = c.category_id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error fetching products",
                err
            });
        }

        res.json(result);

    });

});

/* POST API */
app.post("/products", (req, res) => {
    const {
        product_name,
        description,
        category_id,
        size,
        color,
        material,
        care_instruction,
        image1,
        featured,
        trending,
        new_arrival
    } = req.body;

    const sql = `
        INSERT INTO products 
        (product_name, description, category_id, size, color, material, care_instruction, image1, featured, trending, new_arrival)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        product_name,
        description,
        category_id,
        size,
        color,
        material,
        care_instruction,
        image1,
        featured,
        trending,
        new_arrival
    ], (err, result) => {
        if (err) return res.status(500).json({ error: err });

        res.json({
            message: "Product added successfully",
            id: result.insertId
        });
    });
});


/*UPDATE API */
app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const {
        product_name,
        description,
        price
    } = req.body;

    const sql = `
        UPDATE products 
        SET product_name=?, description=? 
        WHERE product_id=?
    `;

    db.query(sql, [product_name, description, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Product updated" });
    });
});


/* DELETE API */
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM products WHERE product_id=?", [id], (err) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Product deleted" });
    });
});


/* POST ORDER API */
app.post("/orders", (req, res) => {

    console.log(req.body);

    const {
        product_id,
        customer_name,
        quantity,
        address,
        phone
    } = req.body;


    const sql = `
        INSERT INTO orders
        (product_id, customer_name, quantity, address, phone)
        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [
            product_id,
            customer_name,
            quantity,
            address,
            phone
        ],
        (err, result) => {

            if (err) {
                console.log("ORDER ERROR:", err);
                return res.status(500).json({
                    message: "Order insert failed",
                    error: err
                });
            }


            res.status(200).json({
                message: "Order placed successfully",
                order_id: result.insertId
            });

        }
    );

});


/* GET ORDER API */
app.get("/orders", (req, res) => {
    const sql = `
        SELECT o.*, p.product_name 
        FROM orders o
        JOIN products p ON o.product_id = p.product_id
    `;

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err });

        res.json(result);
    });
});




app.get("/", (req, res) => {
    res.send("Clothing Store Backend Running...");
});

const PORT = process.env.PORT || 5000;

/* CATEGORY APIs */

// GET ALL CATEGORIES
app.get("/categories", (req, res) => {
    db.query("SELECT * FROM categories", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });
});


// ADD CATEGORY
app.post("/categories", (req, res) => {
    const { category_name, category_image } = req.body;

    const sql = `
        INSERT INTO categories (category_name, category_image)
        VALUES (?, ?)
    `;

    db.query(sql, [category_name, category_image], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json({
            message: "Category added successfully",
            id: result.insertId
        });
    });
});


// DELETE CATEGORY
app.delete("/categories/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM categories WHERE category_id=?",
        [id],
        (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }

            res.json({
                message: "Category deleted"
            });
        }
    );
});

/* BANNER GET API */
app.get("/banners", (req, res) => {
  db.query("SELECT * FROM banners", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json(result);
  });
});


/* BANNER POST API */
app.post("/banners", (req, res) => {
  const { title, subtitle, image } = req.body;

  const sql =
    "INSERT INTO banners(title, subtitle, image) VALUES(?,?,?)";

  db.query(sql, [title, subtitle, image], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({
      message: "Banner Added Successfully",
    });
  });
});

/* BANNER DELETE API */
app.delete("/banners/:id", (req, res) => {
  db.query(
    "DELETE FROM banners WHERE banner_id=?",
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.json({
        message: "Banner Deleted",
      });
    }
  );
});

/* GALLERY GET API */
app.get("/gallery", (req, res) => {
    db.query("SELECT * FROM gallery", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });
});

/*GALLERY POST API */
app.post("/gallery", (req, res) => {
    const { title, image } = req.body;

    const sql =
        "INSERT INTO gallery(title, image) VALUES(?, ?)";

    db.query(sql, [title, image], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json({
            message: "Gallery Image Added"
        });
    });
});

/* GALLERY DELETE API */
app.delete("/gallery/:id", (req, res) => {

    db.query(
        "DELETE FROM gallery WHERE gallery_id=?",
        [req.params.id],
        (err) => {

            if (err) {
                return res.status(500).json({ error: err });
            }

            res.json({
                message: "Gallery Image Deleted"
            });

        }
    );

});

/* POST CART API */
app.post("/cart", (req, res) => {
  const { product_id, quantity } = req.body;

  const sql = `
    INSERT INTO cart (product_id, quantity)
    VALUES (?, ?)
  `;

  db.query(sql, [product_id, quantity], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({
      message: "Product added to cart"
    });
  });
});

/* GET CART API */
app.get("/cart", (req, res) => {
  const sql = `
    SELECT
      c.cart_id,
      c.quantity,
      p.product_id,
      p.product_name,
      p.description,
      p.image1,
      p.color,
      p.price
      p.category_id
    FROM cart c
    JOIN products p
    ON c.product_id = p.product_id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json(result);
  });
});

/* DELETE CART ITEM */
app.delete("/cart/:id", (req, res) => {
  db.query(
    "DELETE FROM cart WHERE cart_id=?",
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.json({
        message: "Item removed from cart"
      });
    }
  );
});

/* CLEAR CART */
app.delete("/cart", (req, res) => {

  db.query(
    "DELETE FROM cart",
    (err) => {

      if (err) {
        return res.status(500).json({
          error: err
        });
      }

      res.json({
        message: "Cart cleared"
      });

    }
  );

});

app.put("/orders/:id", (req, res) => {
  const { status } = req.body;

  const sql =
    "UPDATE orders SET status = ? WHERE order_id = ?";

  db.query(sql, [status, req.params.id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Order status updated successfully",
    });
  });
});


const updateOrderStatus = async (id, status) => {
  try {
    await axios.put(`http://localhost:5000/orders/${id}`, {
      status,
    });

    const orderRes = await axios.get(
      "http://localhost:5000/orders"
    );

    setOrders(orderRes.data);

  } catch (err) {
    console.log(err);
  }
};


/* SERVER START */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});