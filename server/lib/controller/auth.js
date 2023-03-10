const message = "Hello World"

const authController = {
    getLogin: (req, res, next) => {
        res.send(message);
    }
};

//export
module.exports = authController;