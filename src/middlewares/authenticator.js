/* In this function I'd have to decode user token from HTTP Header.
But since I'm not handling user information, I'll mock user data. */

exports.auth = (req, res, next) => {
    req.decoded = {
        idUser: 1,
        email: 'fakeuser@gmail.com',
        phone: '123456789'
    };
    next();
};  
