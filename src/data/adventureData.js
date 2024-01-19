const adventureData = [
    {
        title: "Multnomah Falls",
        location: {
            lat: 45.576368,
            lng: -122.116015
        },
        visits: [
            {
                date: "Sept 11, 2022",
                note: "Portland trip isn't complete without Auntie Anne's and Top Golf.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/multnomah_falls/*.jpg', { eager: true })).map(module => module.default)
            }
        ]
    },
    {
        title: "Gold and Silver Falls",
        location: {
            lat: 43.483649, 
            lng: -123.931932
        },
        visits: [
            {
                date: "Sept 17, 2022",
                note: "Two incredibly unique waterfalls. Super fun hike.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/gold_and_silver_falls/*.jpg', { eager: true })).map(module=> module.default)
            },
        ]
    },
    {
        title: "Proxy Falls",
        location: {
            lat: 44.162877,
            lng: -121.928249
        },
        visits: [
            {
                date: "Sept 02, 2022",
                note: "Insanely beautiful waterfall up the McKenzie Highway. Unique approach over a lava rock trail. Timed it poorly and had to hike out in the dark.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/proxy_falls/*.jpg', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Salt Creek Falls",
        location: {
            lat: 43.612255, 
            lng: -122.128701
        },
        visits: [
            {
                date: "Aug 19, 2022",
                note: "I cannot believe a waterfall this massive and beautiful has been right here and I've never visited it.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/salt_creek_falls/*.jpg', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Lower Soda Falls",
        location: {
            lat: 44.408066,
            lng: -122.475360
        },
        visits: [
            {
                date: "Jan 14, 2022",
                note: "Three step waterfall in Cascadia State Park. Much taller than I expected it to be. Beautiful campground, need to come back and stay at campsite A12.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/lower_soda_falls/*.jpg', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Smith Rock",
        location: {
            lat: 44.368366, 
            lng: -121.143275
        },
        visits: [
            {
                date: "Apr 12, 2022",
                note: "First time taking my soulmate to Smith Rock! <3",
                images: Object.values(import.meta.glob('/src/data/adventure_images/smith_rock/04-12-22/*.jpg', { eager: true })).map(module => module.default)
            },
            {
                date: "Jul 15, 2023",
                note: "Decided to pack rope for the entire hike in 90+ degree weather. Forgot ATC anyways...",
                images: Object.values(import.meta.glob('/src/data/adventure_images/smith_rock/07-15-23/*.jpg', { eager: true })).map(module => module.default)
            },
        ]
    },
];

export default adventureData;