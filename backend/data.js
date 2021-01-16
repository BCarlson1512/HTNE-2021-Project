import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isSeller: true,
            isAdmin: true,
        },
        {
            name: 'Customer',
            email: 'customer@example.com',
            password: bcrypt.hashSync('1234',8),
        },
        {
            name: 'Seller',
            email: 'seller@example.com',
            password: bcrypt.hashSync('1234',8),
            isSeller: true,
        },
    ],
    tickets : [
        {
            email: 'email1@example.com',
            userDescription: 'Testing seeding request',
        },
        {
            email: 'email2@example.com',
            userDescription: "Seed test",
        }
    ]
}

export default data;