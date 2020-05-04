module.exports = [
    {
        path: '/Products/getProducts',
        entity: 'Products',
        method: 'getProducts',
        type: 'get',
        auth: true,
        input: {
            params: {
                idCategory: {
                    type: 'number',
                    required: true,
                }
            },
            body: {}
        }
    },
    {
        path: '/ProductsInCart/add',
        entity: 'ProductsInCart',
        method: 'addProduct',
        type: 'post',
        auth: true,
        input: {
            params: {},
            body: {

                idProduct: {
                    type: 'number',
                    required: true
                },
                quantity: {
                    type: 'number',
                    required: true
                }
            }
        }
    },
    {
        path: '/ProductsInCart/delete',
        entity: 'ProductsInCart',
        method: 'deleteProduct',
        type: 'post',
        auth: true,
        input: {
            params: {},
            body: {

                idProduct: {
                    type: 'number',
                    required: true
                }
            }
        }
    },
    {
        path: '/ProductsInCart/clearCart',
        entity: 'ProductsInCart',
        method: 'clearCart',
        type: 'delete',
        auth: true,
        input: {
            params: {},
            body: {
            }
        }
    },
    {
        path: '/ProductsInCart/getProducts',
        entity: 'ProductsInCart',
        method: 'getProducts',
        type: 'get',
        auth: true,
        input: {
            params: {},
            body: {}
        }
    },
    {
        path: '/Orders/createOorder',
        entity: 'Orders',
        method: 'createOrder',
        type: 'post',
        auth: true,
        input: {
            params: {},
            body: {
                cart: {
                    type: 'array',
                    required: true
                }
            }
        }
    },
    {
        path: '/Orders/getAllOrders',
        entity: 'Orders',
        method: 'getAllOrders',
        type: 'get',
        auth: true,
        input: {
            params: {
            },
            body: {

            }
        }
    },
    {
        path: '/Categories/getAll',
        entity: 'Categories',
        method: 'getAll',
        type: 'get',
        auth: true,
        input: {
            params: {},
            body: {}
        }
    },
    {
        path: '/Addresses/getAllAddresses',
        entity: 'Addresses',
        method: 'getAllAddresses',
        type: 'get',
        auth: true,
        input: {
            params: {},
            body: {}
        }
    },
    {
        path: '/Addresses/addAddress',
        entity: 'Addresses',
        method: 'addAddress',
        type: 'post',
        auth: true,
        input: {
            params: {},
            body: {
                street: {
                    type: 'string',
                    required: true
                },
                apartment: {
                    type: 'string',
                    required: false
                }
            }
        }
    }
];
