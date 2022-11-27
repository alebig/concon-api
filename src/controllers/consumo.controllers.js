import { pool } from '../database/database.js';  // conectarDB

const getConsumo = async (req, res) => {
    try {
//        const conexion = await pool();
        const [leido] = await pool.query('SELECT * FROM registracion');
        res.json(leido);        
    } catch (error) {
        console.log("Error en la lectura de la BD")
        return res.status(500).json({message: "Error en la lectura de la BD"});
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
//        const conexion = await pool();
        const graba = await pool.query('INSERT INTO registracion SET ?', registro);
        const nuevoId = graba[0].insertId
        console.log(nuevoId)
        res.json(nuevoId);
    } catch (error) {
        console.log("Error al intentar grabar un nuevo registro")
        return res.status(500).json({message: "Error al intentar grabar un nuevo registro"});
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
//        const conexion = await pool();
        await pool.query('UPDATE registracion SET ? WHERE record_id = ?', [registro, id]);
        console.log(`Registro ${ id } actualizado ok`);
        res.json(`Registro ${ id } actualizado ok`)   
    } catch (error) {
        console.log("Error al intentar grabar una modificación")
        return res.status(500).json({message: "Error al intentar grabar una modificación"});
    }
};

const delConsumo = async (req, res) => {
    try {
        const { id } = req.params;
//        const conexion = await pool();
        await pool.query('DELETE FROM registracion WHERE record_id = ?', id);
        console.log(`Registro ${ id } eliminado`);                
        res.json(`Registro ${ id } eliminado`);
    } catch (error) {
        console.log("Error al eliminar un registro")
        return res.status(500).json({message: "Error al eliminar un registro"});
    }
};

export const methods = {
    getConsumo,
    addConsumo,
    chgConsumo,
    delConsumo
};