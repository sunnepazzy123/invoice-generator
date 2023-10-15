export const invoice = {
    documentTitle: 'Salary Invoice',
    currency: 'USD',
    taxNotation: 'vat', // or 'vat', 'gst', etc.
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    logo: 'https://www.example.com/logo.png', // URL of your company's logo
    sender: {
        company: 'WireDevTeam',
        address: 'Krzemieniecka 8',
        zip: '00-651',
        city: 'Warsaw',
        country: 'Poland',
        custom1: 'NIP: 5252678170',
        custom2: 'Sunday Odibo',
    },
    client: {
        company: 'Collabera Poland Sp. Z.o.o',
        address: 'ul. Postępu 15, 02-676, Warszawa, Polska',
        zip: '00-651',
        city: 'Warsaw',
        country: 'Poland',
        custom1: 'NIP: 5252678170'
    },
    invoiceNumber: 'INV-12345',
    invoiceDate: '2023-10-15',
    translate: {
        products: 'Employee Payments',
    
    },
    products: [
        {
            quantity: 1,
            description: 'Employee Name - October 2023 Salary',
            tax: 0, // Tax rate (0% in this example)
            price: 5000, // Salary amount
            order: 'Value 1',
        },
    ],
    bottomNotice: 'Thank you for your payment!',
};



// Invoice Date: 29/09/2023
// Invoice Number: SEPTEMBER092023
// NIP: 5273019432