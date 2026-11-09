// Modelo de la colección de tareas con Mongoose y MongoDB
const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, 'El título es requerido'],
            trim: true,
            minlength: [3, 'El título debe tener al menos 3 caracteres']
        },
        completada: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = ret._id.toString();
                return ret;
            }
        }
    }
);

const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;
