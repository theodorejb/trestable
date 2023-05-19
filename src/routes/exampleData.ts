export interface Payment {
    id: number;
    itemName: string;
    purchaser: string;
    bankName: string;
    amount: number;
    invoiceNum: string;
    lastEvent: {
        id: number;
        status: string;
        color: string;
        details: string;
        date: string;
    };
}

export const exampleData: Payment[] = [
    {
        id: 132,
        itemName: "Dark Chocolate",
        purchaser: "Bob Smith",
        bankName: "Smalltown Bank",
        amount: 8.99,
        invoiceNum: "9234853",
        lastEvent: {
            id: 1,
            status: "Emailed",
            color: "chocolate",
            details: "",
            date: "2023-05-16T14:05:00-0500",
        },
    },
    {
        id: 237,
        itemName: "250 Pizzas",
        purchaser: "Jane Doe",
        bankName: "Premier Capital",
        amount: 2284,
        invoiceNum: "9562404",
        lastEvent: {
            id: 3,
            status: "Submitted",
            color: "dodgerblue",
            details: "Estimated Settle Date: 5/22/2023",
            date: "2023-05-16T12:40:00-0500",
        },
    },
    {
        id: 354,
        itemName: "Ford Mustang",
        purchaser: "Brian Bandy",
        bankName: "Building and Loan",
        amount: 33270,
        invoiceNum: "9317325",
        lastEvent: {
            id: 2,
            status: "Form Opened",
            color: "chocolate",
            details: "",
            date: "2023-05-15T19:16:00-0500",
        },
    },
    {
        id: 446,
        itemName: "Porch Swing",
        purchaser: "Daniel Mario",
        bankName: "Midwest Trust",
        amount: 825,
        invoiceNum: "9354186",
        lastEvent: {
            id: 11,
            status: "Canceled",
            color: "var(--bs-danger)",
            details: "Reason: Wrong color",
            date: "2023-05-14T19:26:00-0500",
        },
    },
    {
        id: 502,
        itemName: "Tennis Racket",
        purchaser: "Matt Muffalo",
        bankName: "Cyberbank LLC",
        amount: 110,
        invoiceNum: "9358861",
        lastEvent: {
            id: 12,
            status: "Expired",
            color: "blueviolet",
            details: "",
            date: "2023-05-15T23:31:00-0500",
        },
    },
    {
        id: 658,
        itemName: "French Fries",
        purchaser: "Andy Samson",
        bankName: "Whoville Securities",
        amount: 4.49,
        invoiceNum: "904129",
        lastEvent: {
            id: 4,
            status: "Complete",
            color: "var(--bs-primary)",
            details: "",
            date: "2023-05-16T06:00:00-0500",
        },
    },
    {
        id: 795,
        itemName: "Park Place",
        purchaser: "Lori Greene",
        bankName: "California Bank",
        amount: 7500,
        invoiceNum: "903784",
        lastEvent: {
            date: "2023-05-12T06:54:00-0500",
            id: 6,
            status: "Returned",
            color: "var(--bs-danger)",
            details: "Reason: Unable to Locate Account",
        },
    },
];
