export interface Payment {
    id: number;
    itemName: string;
    purchaser: string;
    bankName: string;
    office: string;
    amount: number;
    invoiceNum: string;
    lastEvent: {
        id: number;
        status: string;
        color: string;
        details: string | null;
        date: string;
    };
}

export const exampleData: Payment[] = [
    {
        id: 132,
        itemName: "Dark Chocolate",
        purchaser: "Bob Smith",
        bankName: "Smalltown Bank",
        office: "Main Office - 123 Test Ave",
        amount: 8.99,
        invoiceNum: "923485",
        lastEvent: {
            id: 1,
            status: "Emailed",
            color: "chocolate",
            details: "",
            date: "2024-04-26T14:05:00-0500",
        },
    },
    {
        id: 149,
        itemName: "Soft Pillows",
        purchaser: "Maria Johnson",
        bankName: "Alliance Credit Union",
        office: "St. Cloud - 28 Test Blvd",
        amount: 19.99,
        invoiceNum: "912348",
        lastEvent: {
            id: 5,
            status: "Error",
            color: "var(--bs-danger)",
            details: "Invalid account number",
            date: "2024-05-10T12:12:12-0500",
        },
    },
    {
        id: 237,
        itemName: "250 Pizzas",
        purchaser: "Jane Doe",
        bankName: "Premier Capital",
        office: "Palm Springs - 400 Tusk Blvd",
        amount: 2284,
        invoiceNum: "956240",
        lastEvent: {
            id: 3,
            status: "Submitted",
            color: "dodgerblue",
            details: "Estimated Settle Date: 2024-05-13",
            date: "2024-05-10T08:40:00-0500",
        },
    },
    {
        id: 354,
        itemName: "New Car",
        purchaser: "Brian Bandy",
        bankName: "Building and Loan",
        office: "Branch Office - 169 3rd St",
        amount: 33270,
        invoiceNum: "931732",
        lastEvent: {
            id: 4,
            status: "Complete",
            color: "var(--bs-primary)",
            details: "",
            date: "2024-05-17T06:00:00-0500",
        },
    },
    {
        id: 446,
        itemName: "Tennis Racket",
        purchaser: "Matt Muffalo",
        bankName: "Cyberbank LLC",
        office: "Transylvania - 999 Yorktown Road",
        amount: 110,
        invoiceNum: "935886",
        lastEvent: {
            id: 12,
            status: "Expired",
            color: "blueviolet",
            details: null,
            date: "2024-05-25T23:31:00-0500",
        },
    },
    {
        id: 502,
        itemName: "Porch Swing",
        purchaser: "Daniel Mario",
        bankName: "Midwest Trust",
        office: "Edina - 48 West Circle Dr",
        amount: 825,
        invoiceNum: "935418",
        lastEvent: {
            id: 11,
            status: "Canceled",
            color: "var(--bs-danger)",
            details: "Reason: Wrong payment method",
            date: "2024-05-16T19:26:00-0500",
        },
    },
    {
        id: 557,
        itemName: "Off Brand Shoes",
        purchaser: "Susan Savvy",
        bankName: "Flagstaff Bank",
        office: "Pine Park - 20 Wide Drive",
        amount: 69.99,
        invoiceNum: "946578",
        lastEvent: {
            id: 8,
            status: "Refund Submitted",
            color: "dodgerblue",
            details: "Estimated Settle Date: 2024-06-03",
            date: "2024-06-01T09:29:30-0500",
        },
    },
    {
        id: 602,
        itemName: "Bad Checks",
        purchaser: "Frank Abagnale",
        bankName: "Federal Reserve",
        office: "Bronx - 25 Fraud Lane",
        amount: 1500,
        invoiceNum: "987654",
        lastEvent: {
            id: 10,
            status: "Voided",
            color: "var(--bs-danger)",
            details: null,
            date: "2024-06-02T12:27:42-0500",
        },
    },

    {
        id: 658,
        itemName: "Pet Rock",
        purchaser: "Andy Samson",
        bankName: "Whoville Securities",
        office: "Whoville - 1 Little Circle",
        amount: 4.49,
        invoiceNum: "904129",
        lastEvent: {
            id: 2,
            status: "Form Opened",
            color: "chocolate",
            details: "",
            date: "2024-06-25T19:16:00-0500",
        },
    },
    {
        id: 719,
        itemName: "4K Television",
        purchaser: "Jim Peterson",
        bankName: "Johnson Financial",
        office: "New Office - 234 5th Ave",
        amount: 2500,
        invoiceNum: "940367",
        lastEvent: {
            id: 9,
            status: "Refund Complete",
            color: "var(--bs-primary)",
            details: "",
            date: "2024-07-09T12:35:48-0500",
        },
    },
    {
        id: 795,
        itemName: "Park Place",
        purchaser: "Lori Greene",
        bankName: "California Bank",
        office: "Only Office - 677 Boardwalk Ave",
        amount: 7500,
        invoiceNum: "903784",
        lastEvent: {
            date: "2024-07-07T06:54:00-0500",
            id: 6,
            status: "Returned",
            color: "var(--bs-danger)",
            details: "Reason: Not worth it",
        },
    },
];
