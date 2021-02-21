const router = require('express').Router();

// GET listing of all products
// Address http://server:port/product
// returns JSON
router.get('/', async (req, res) => {

    let result;
    // Get products
    try {
        // Define the result
        result = "This endpoint will return all products";
        // send json result via HTTP
        res.json(result);

      // Catch and send any errors  
      } catch (err) {
        res.status(500);
        res.send(err.message);
      }
});

// GET a single product by id
// id passed as parameter via url
// Address http://server:port/product/:id
// returns JSON
router.get('/:id', async (req, res) => {

    let result;
    // read value of id parameter from the request url
    const productId = req.params.id;

    // If validation passed execute query and return results
    // returns a single product with matching id
    try {
        // Send response with JSON result    
        result = `This endpint will return the product with id: ${productId}`;
        res.json(result);

        } catch (err) {
            res.status(500);
            res.send(err.message);
        }
});

// GET products by category id
// id passed as parameter via url
// Address http://server:port/product/:id
// returns JSON
router.get('/bycat/:id', async (req, res) => {

    let result;

    // read value of id parameter from the request url
    const categoryId = req.params.id;

    // If validation passed execute query and return results
    // returns a single product with matching id
    try {
        // Send response with JSON result    
        result = `This endpoint will return products in the category with id: ${categoryId}`;
        res.json(result);

        } catch (err) {
            res.status(500)
            res.send(err.message)
        }
});

// POST - Insert a new product.
// This async function sends a HTTP post request
router.post('/', async (req, res) => {

    let newProduct = req.body;
    res.json(newProduct)

});

// PUT update product
// Like post but productId is provided and method = put
router.put('/:id', async (req, res) => {

    const productId = req.params.id;

    const result = `This will update product with id = ${productId}`

    res.json(result);
});

// DELETE single task.
router.delete('/:id', async (req, res) => {

    const productId = req.params.id;
    const result = `This will delete product with id = ${productId}`;
    
    res.json(result);
});

// Export as a module
module.exports = router;