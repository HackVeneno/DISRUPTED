const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();



/*** OBTENER TODOS LOS PRODUCTOS **/




/*** OBTENER TODOS LOS PRODUCTOS **/


 // ************ MULTER ************
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const fileUpload = multer({storage});
 



router.get('/', productosController.list);

router.get("/details/:id", productosController.details);

router.get('/create', productosController.crearProducto);
router.post('/create', fileUpload.single("fotoProducto"), productosController.crearProducto);



router.get('/edit/:id', productosController.modificarProducto);
router.put('/edit/:id',
    fileUpload.single ('fotoProducto'),
    productosController.actualizarProducto);

router.delete('/delete/:id', productosController.borrarProducto);

module.exports = router;