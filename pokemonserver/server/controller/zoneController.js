var Pokemon = require('../model/Pokemon');
var Zone = require('../model/Zone');

var controller = {

    createZone: function (req, res) {
        const newZone = new Zone(req.body);
        newZone.save()
            .then(zone => res.status(201).json(zone))
            .catch(err => res.status(400).json({ error: err.message }));
    },

    getAllZones: function (req, res) {
        Zone.find()
            .then(zones => res.status(200).json(zones))
            .catch(err => res.status(400).json({ error: err.message }));
    },

    getZoneById: async function (req, res) {
        const { id } = req.params;
        const pokemons = await Pokemon.find({ zone: id }).select('number name types imageUrl');
        const zone = await Zone.findById(id);
        if (!zone) {
            return res.status(404).json({ error: 'Zone not found' });
        }
        res.status(200).json({ zone, pokemons });
    },

    updateZone: function (req, res) {
        const { id } = req.params;
        Zone.findByIdAndUpdate(id, req.body, { new: true })
            .then(zone => {
                if (!zone) {
                    return res.status(404).json({ error: 'Zone not found' });
                }
                res.status(200).json({ zone, message: 'Zone updated successfully' });
            })
            .catch(err => res.status(400).json({ error: err.message }));
    },

    deleteZone: function (req, res) {
        const { id } = req.params;
        Zone.findByIdAndDelete(id)
            .then(zone => {
                if (!zone) {
                    return res.status(404).json({ error: 'Zone not found' });
                }
                res.status(200).json({ message: 'Zone deleted successfully' });
            })
            .catch(err => res.status(400).json({ error: err.message }));
    },

};

module.exports = controller;
