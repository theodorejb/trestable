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

function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function generateExampleData() {
    const items: string[] = [
        "Dark Chocolate",
        "Soft Pillows",
        "250 Pizzas",
        "New Car",
        "Tennis Racket",
        "Porch Swing",
        "Off Brand Shoes",
        "Bad Checks",
        "Pet Rock",
        "4K Television",
        "Park Place",
    ];
    const purchasers: string[] = [
        "Bob Smith",
        "Maria Johnson",
        "Jane Doe",
        "Brian Bandy",
        "Matt Muffalo",
        "Daniel Mario",
        "Susan Savvy",
        "Frank Abagnale",
        "Andy Samson",
        "Jim Peterson",
        "Lori Greene",
    ];
    const banks: string[] = [
        "Smalltown Bank",
        "Alliance Credit Union",
        "Premier Capital",
        "Building and Loan",
        "Cyberbank LLC",
        "Midwest Trust",
        "Flagstaff Bank",
        "Federal Reserve",
        "Whoville Securities",
        "Johnson Financial",
        "California Bank",
    ];
    const offices: string[] = [
        "Main Office - 123 Test Ave",
        "St. Cloud - 28 Test Blvd",
        "Palm Springs - 400 Tusk Blvd",
        "Branch Office - 169 3rd St",
        "Transylvania - 999 Yorktown Road",
        "Edina - 48 West Circle Dr",
        "Pine Park - 20 Wide Drive",
        "Bronx - 25 Fraud Lane",
        "Whoville - 1 Little Circle",
        "New Office - 234 5th Ave",
        "Only Office - 677 Boardwalk Ave",
    ];
    const events = [
        {
            id: 1,
            status: "Emailed",
            color: "chocolate",
            details: "",
            date: "2024-04-26T14:05:00-0500",
        },
        {
            id: 5,
            status: "Error",
            color: "var(--bs-danger)",
            details: "Invalid account number",
            date: "2024-05-10T12:12:12-0500",
        },
        {
            id: 3,
            status: "Submitted",
            color: "dodgerblue",
            details: "Estimated Settle Date: 2024-05-13",
            date: "2024-05-10T08:40:00-0500",
        },
        {
            id: 4,
            status: "Complete",
            color: "var(--bs-primary)",
            details: "",
            date: "2024-05-17T06:00:00-0500",
        },
        {
            id: 12,
            status: "Expired",
            color: "blueviolet",
            details: null,
            date: "2024-05-25T23:31:00-0500",
        },
        {
            id: 11,
            status: "Canceled",
            color: "var(--bs-danger)",
            details: "Reason: Wrong payment method",
            date: "2024-05-16T19:26:00-0500",
        },
        {
            id: 8,
            status: "Refund Submitted",
            color: "dodgerblue",
            details: "Estimated Settle Date: 2024-06-03",
            date: "2024-06-01T09:29:30-0500",
        },
        {
            id: 10,
            status: "Voided",
            color: "var(--bs-danger)",
            details: null,
            date: "2024-06-02T12:27:42-0500",
        },
        {
            id: 2,
            status: "Form Opened",
            color: "chocolate",
            details: "",
            date: "2024-06-25T19:16:00-0500",
        },
        {
            id: 9,
            status: "Refund Complete",
            color: "var(--bs-primary)",
            details: "",
            date: "2024-07-09T12:35:48-0500",
        },
        {
            date: "2024-07-07T06:54:00-0500",
            id: 6,
            status: "Returned",
            color: "var(--bs-danger)",
            details: "Reason: Not worth it",
        },
    ];

    const data: Payment[] = [];

    for (let i = 0; i < 1000; i++) {
        data.push({
            id: i * 3,
            itemName: items[Math.floor(Math.random() * items.length)],
            purchaser: purchasers[Math.floor(Math.random() * purchasers.length)],
            bankName: banks[Math.floor(Math.random() * banks.length)],
            office: offices[Math.floor(Math.random() * offices.length)],
            amount: randomNumber(1, 10000),
            invoiceNum: (i * 9).toString().padStart(8, "0"),
            lastEvent: events[Math.floor(Math.random() * events.length)],
        });
    }

    return data;
}

export const exampleData: Payment[] = generateExampleData();
