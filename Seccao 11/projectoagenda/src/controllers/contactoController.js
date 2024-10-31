const Contacto = require("../models/Contacto");

exports.index = (req, res) => {
    res.render('contacto', {
        contacto: {}
    });
}

exports.register = async (req, res) => {
    try {

        const contacto = new Contacto(req.body);
        await contacto.register();
        if (contacto.errors.length > 0) {
            req.flash('errors', contacto.errors);
            req.session.save(() => res.redirect("back"));
            return;
        }

        req.flash('success', "Contacto registrado com sucesso");
        req.session.save(() => res.redirect(`/contacto/index/${contacto.contacto._id}`));
        return;
    } catch (error) {
        console.log(error);
        return res.render("404");
    }
}

exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render("404");

    const contacto = await Contacto.buscaPorId(req.params.id);
    if (!contacto) return res.render("404");

    res.render('contacto', { contacto });
}

exports.edit = async (req, res) => {
    if (!req.params.id) return res.render("404");
    const contacto = new Contacto(req.body);
    await contacto.edit(req.params.id);

    try {

        if (contacto.errors.length > 0) {
            req.flash('errors', contacto.errors);
            req.session.save(() => res.redirect("back"));
            return;
        }

        req.flash('success', "Contacto editado com sucesso");
        req.session.save(() => res.redirect(`/contacto/index/${contacto.contacto._id}`));
        return;

    } catch (error) {
        console.log(error);
        return res.render("404");
    }


}

exports.delete = async (req, res) =>{
    if (!req.params.id) return res.render("404");

    const contacto = await Contacto.delete(req.params.id);
    if (!contacto) return res.render("404");

    req.flash('success', "Contacto apagado com sucesso");
    req.session.save(() => res.redirect(`back`));
    return;
}