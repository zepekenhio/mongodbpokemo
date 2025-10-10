const Pokemon = require('../model/Pokemon');
var Trainer = require('../model/Trainer');

var controller = {

    createTrainer: function (req, res) {
        const newTrainer = new Trainer(req.body);
        newTrainer.save()
            .then(trainer => res.status(201).json(trainer))
            .catch(err => res.status(400).json({ error: err.message }));
    },

    getAllTrainers: function (req, res) {
        Trainer.find()
            .then(trainers => res.status(200).json(trainers))
            .catch(err => res.status(400).json({ error: err.message }));
    },

    getTrainerById: async function (req, res) {
        const { id } = req.params;
        const pokemons = await Pokemon.find({ trainer: id }).select('number name types imageUrl');
        const trainer = await Trainer.findById(id);
        if (!trainer) {
            return res.status(404).json({ error: 'Trainer not found' });
        }
        res.status(200).json({ trainer, pokemons });
    },

    updateTrainer: function (req, res) {
        const { id } = req.params;
        Trainer.findByIdAndUpdate(id, req.body, { new: true })
            .then(trainer => {
                if (!trainer) {
                    return res.status(404).json({ error: 'Trainer not found' });
                }
                res.status(200).json({ trainer, message: 'Trainer updated successfully' });
            })
            .catch(err => res.status(400).json({ error: err.message }));
    },

    deleteTrainer: function (req, res) {
        const { id } = req.params;
        Trainer.findByIdAndDelete(id)
            .then(trainer => {
                if (!trainer) {
                    return res.status(404).json({ error: 'Trainer not found' });
                }
                res.status(204).end();
            })
            .catch(err => res.status(400).json({ error: err.message }));
    }
};

module.exports = controller;
