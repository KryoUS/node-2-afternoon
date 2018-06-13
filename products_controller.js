module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, description, price, imageurl } = req.body

        dbInstance.create_product([name, description, price, imageurl])
            .then(response => res.status(200).send(response))
            .catch(error => {
                res.status(500).send({errorMessage: 'Something has gone horribly wrong! Hang tight...'})
                console.log(error)
            })
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.read_product([id])
            .then(response => res.status(200).send(response))
            .catch(error => {
                res.status(500).send({errorMessage: 'Something has gone horribly wrong! Hang tight...'})
                console.log(error)
            })
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
            .then(response => res.status(200).send(response))
            .catch(error => {
                res.status(500).send({errorMessage: 'Something has gone horribly wrong! Hang tight...'})
                console.log(error)
            })
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.query)
        const { id } = req.params
        const { desc } = req.query

        dbInstance.update_product([id, desc])
            .then(response => res.status(200).send(response))
            .catch(error => {
                res.status(500).send({errorMessage: 'Something has gone horribly wrong! Hang tight...'})
                console.log(error)
            })
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.delete_product([id])
            .then(response => res.status(200).send(response))
            .catch(error => {
                res.status(500).send({errorMessage: 'Something has gone horribly wrong! Hang tight...'})
                console.log(error)
            })
    }

}