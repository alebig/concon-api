import { conectarBD } from '../database/database';

const getConsumo = async (req, res) => {
    try {
        const conexion = await conectarBD();
        const leido = await conexion.query('SELECT * FROM registracion');
        res.json(leido);        
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

const addConsumo = async (req, res) => {
    try {
        const { producto,
                uni_med,
                fecha_registro,
                cantidad } = req.body;
        const registro = {  producto,
                            uni_med,
                            fecha_registro,
                            cantidad }
        const conexion = await conectarBD();
        const graba = await conexion.query('INSERT INTO registracion SET ?', registro);
        console.log(`Id ${graba.insertId} Agregado OK`); 
        const nuevoId = graba.insertId
        res.json(nuevoId);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

const chgConsumo = async (req, res) => {
    try {
        const { id } = req.params;
        const { producto,
                uni_med,
                fecha_registro,
                cantidad } = req.body;
        const registro = {  producto,
                            uni_med,
                            fecha_registro,
                            cantidad }
        const conexion = await conectarBD();
        await conexion.query('UPDATE registracion SET ? WHERE record_id = ?', [registro, id]);
        console.log(`Registro ${ id } actualizado ok`);
        res.json(`Registro ${ id } actualizado ok`)   
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

const delConsumo = async (req, res) => {
    try {
        const { id } = req.params;
        const conexion = await conectarBD();
        await conexion.query('DELETE FROM registracion WHERE record_id = ?', id);
        console.log(`Registro ${ id } eliminado`);                
        res.json(`Registro ${ id } eliminado`);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const methods = {
    getConsumo,
    addConsumo,
    chgConsumo,
    delConsumo
};