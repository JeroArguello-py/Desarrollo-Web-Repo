const mongoose = require('mongoose');

async function conectarDB() {
    const uri = process.env.MONGO_URI || process.env.MONGO_URL;
    const dbName = process.env.DB_NAME || 'tareas_db';

    if (!uri || uri.trim() === '') {
        console.warn(' [MongoDB] Advertencia: MONGO_URI no está configurada en el archivo .env');
        return;
    }

    if (uri.includes('<db_username>') || uri.includes('<db_password>')) {
        console.warn(' [MongoDB] Recuerda reemplazar <db_password> en el archivo .env con la contraseña de tu usuario en MongoDB Atlas.');
        return;
    }

    try {
        await mongoose.connect(uri, {
            dbName: dbName
        });
        console.log(`Conectado exitosamente a MongoDB Atlas (Base de datos: ${dbName})`);
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error.message);
    }
}

module.exports = conectarDB;
