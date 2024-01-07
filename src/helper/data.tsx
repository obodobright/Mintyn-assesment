interface navProp {
    navTitle: string;
    children: {
        navTitle: string;
        link: string;
        icon: string;
        isActive: boolean;
    }[];
}

export const navItems: navProp[] = [

    {
        navTitle: "Main",

        children: [
            {
                navTitle: "Overview",
                link: "/Overview",
                icon: "asset/svgs/np_overview.svg",
                isActive: true
            },
        ]
    },

    {
        navTitle: "Payments",

        children: [
            {
                navTitle: "All Payments",
                link: "/payment",
                icon: "/asset/svgs/payment_wallet.svg",
                isActive: false
            },

            {
                navTitle: "Reconcilled Payments",
                link: "/reconcile-payment",
                icon: "/asset/svgs/recon_wallet.svg"
                , isActive: false
            },
            {
                navTitle: "Un - Reconcilled Payments",
                link: "/unreconciled-payments",
                icon: "asset/svgs/unrec_orders.svg"
                , isActive: false
            },
            {
                navTitle: "Manual Settlement",
                link: "/manual-settlements",
                icon: "asset/svgs/np_manual.svg"
                , isActive: false
            },
        ]

    },
    {
        navTitle: "Orders",

        children: [
            {
                navTitle: "All Orders",
                isActive: false,
                link: "/orders",
                icon: "asset/svgs/orders_reconcile.svg"
            },
            {
                navTitle: "Pending Orders",
                isActive: false,
                link: "/pending-orders",
                icon: "asset/svgs/pend_orders.svg"
            },
            {
                navTitle: "Reconcilled Orders",
                isActive: false,
                link: "/reconcilled-orders",
                icon: "asset/svgs/unrec_orders.svg"
            },
        ]

    },
    {
        navTitle: "",

        children: [
            {
                navTitle: "Merchant Profile",
                link: "/merchant-profile",
                isActive: false,
                icon: "asset/svgs/np_user.svg"
            },

        ]

    },
]

export const AnalyticsData = [
    {
        title: "Daily Transaction Volume",
        stats: "2,342",
    },
    {
        title: "Daily Transaction Value",
        stats: "₦4,000,000",
    },
    {
        title: "Total Transaction Volume",
        stats: "452,000",
    },
    {
        title: "Total Transaction Value",
        stats: "₦4,000,000",
    }
]

export const userData = [
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "inactive",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Debby Ogana",
        email: "debby2@irorun.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "pending",
        phone: "08078903721"
    },

    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "blacklisted",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "active",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "active",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "blacklisted",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "inactive",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "inactive",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "active",
        phone: "08078903721"
    },
    {
        organization: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        "createdAt": "May 15, 2020 10:00 AM",
        status: "pending",
        phone: "08078903721"
    },
] 