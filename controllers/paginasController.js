import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js"

const paginaInicio = async (req, res) => {

    const promiseDB = [];

    try {
        promiseDB.push(Viaje.findAll({ limit: 3 }))
        promiseDB.push(Testimonial.findAll({ limit: 3 }))

        const ressultado = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: ressultado[0],
            testimoniales: ressultado[1]
        });

    } catch (error) {
        console.log(error);
    }

}
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}
const paginaViajes = async (req, res) => {
    //consultar base de datos

    const viajes = await Viaje.findAll();

    // console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    })
}
const paginaInformacionViajes = async (req, res) => {

    const { slug } = req.params
    try {
        const viaje = await Viaje.findOne({ where: { slug: slug } })

        res.render('descripcionViaje', {
            pagina: 'Descricion del Viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }
}
const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll()

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,
        })

    } catch (error) {
        console.log(error);
    }

}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaInformacionViajes,

}