import express from "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaInformacionViajes,

} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialControllers.js";


const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaInformacionViajes);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);



export default router;