export const sampleGeneralInfo = {
    firstName: "John",
    lastName: "Doe",

    email: "john.doe@email.com",
    phone: "+91 9876543210",

    bio:
        "Passionate Software Engineer with experience in React, JavaScript and Node.js. Interested in building scalable web applications and solving real-world problems.",

    links: [
        {
            id: crypto.randomUUID(),
            title: "GitHub",
            customTitle: "",
            url: "https://github.com/johndoe",
        },
        {
            id: crypto.randomUUID(),
            title: "LinkedIn",
            customTitle: "",
            url: "https://linkedin.com/in/johndoe",
        },
        {
            id: crypto.randomUUID(),
            title: "Portfolio",
            customTitle: "",
            url: "https://johndoe.dev",
        },
    ],
};

export const sampleEducation = [
    {
        id: crypto.randomUUID(),

        schoolName: "XYZ University",

        study: "B.Tech in Computer Science",

        place: "Kolkata",

        grade: "8.91 CGPA",

        durationType: "date",

        startDate: "2022-08",

        endDate: "2026-06",

        customDuration: "",

        isCurrent: false,
    },
];

export const sampleWork = [
    {
        id: crypto.randomUUID(),

        companyName: "Google",

        position: "Software Engineering Intern",

        responsibilities:
            "Developed React components.\nImproved website performance by 25%.\nCollaborated with cross-functional teams.",

        durationType: "custom",

        customDuration: "Summer 2025",

        startDate: "",

        endDate: "",

        isCurrent: false,
    },
];

export const sampleSkills = [
    {
        id: crypto.randomUUID(),

        category: "Languages",

        skills: [
            {
                id: crypto.randomUUID(),
                name: "JavaScript",
            },
            {
                id: crypto.randomUUID(),
                name: "C++",
            },
            {
                id: crypto.randomUUID(),
                name: "Python",
            },
        ],
    },

    {
        id: crypto.randomUUID(),

        category: "Frontend",

        skills: [
            {
                id: crypto.randomUUID(),
                name: "React",
            },
            {
                id: crypto.randomUUID(),
                name: "HTML",
            },
            {
                id: crypto.randomUUID(),
                name: "CSS",
            },
        ],
    },
];

export const sampleProjects = [
    {
        id: crypto.randomUUID(),

        title: "Smart Bus Tracker",

        description:
            "Built using React.\nIntegrated Google Maps.\nResponsive UI for all devices.",

        durationType: "custom",

        customDuration: "2025",

        startDate: "",

        endDate: "",

        isCurrent: false,

        links: [
            {
                id: crypto.randomUUID(),
                title: "GitHub Repo",
                url: "https://github.com/johndoe/bus-tracker",
            },

            {
                id: crypto.randomUUID(),
                title: "Live Demo",
                url: "https://bus-demo.vercel.app",
            },
        ],
    },
];

export const sampleAchievements = [
    {
        id: crypto.randomUUID(),
        achievement: "Solved 500+ LeetCode problems.",
    },

    {
        id: crypto.randomUUID(),
        achievement: "Winner of College Hackathon 2025.",
    },
];

export const sampleCertificates = [
    {
        id: crypto.randomUUID(),

        title: "Meta Front-End Developer",

        description:
            "Completed Meta Front-End Professional Certificate.",

        durationType: "custom",

        customDuration: "2025",

        startDate: "",

        endDate: "",

        isCurrent: false,

        links: [
            {
                id: crypto.randomUUID(),

                title: "Certificate",

                url: "https://coursera.org",
            },
        ],
    },
];

export const sampleLanguages = [
    {
        id: crypto.randomUUID(),
        language: "English",
    },
    {
        id: crypto.randomUUID(),
        language: "Hindi",
    },
];