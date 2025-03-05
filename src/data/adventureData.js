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
                images: Object.values(import.meta.glob('/src/data/adventure_images/multnomah_falls/09-11-22/*.webp', { eager: true })).map(module => module.default)
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
                note: "Two incredibly unique waterfalls with enjoyable hikes.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/gold_and_silver_falls/09-17-22/*.webp', { eager: true })).map(module=> module.default)
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
                images: Object.values(import.meta.glob('/src/data/adventure_images/proxy_falls/09-02-22/*.webp', { eager: true })).map(module => module.default)
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
                note: "I cannot believe I hadn't visited this waterfall sooner. Might be my favorite in Oregon.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/salt_creek_falls/08-19-22/*.webp', { eager: true })).map(module => module.default)
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
                note: "Three step waterfall in Cascadia State Park. Much taller than we expected it to be. Beautiful campground, need to come back and stay at campsite A12.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/lower_soda_falls/01-14-22/*.webp', { eager: true })).map(module => module.default)
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
                images: Object.values(import.meta.glob('/src/data/adventure_images/smith_rock/04-12-22/*.webp', { eager: true })).map(module => module.default)
            },
            {
                date: "Jul 15, 2023",
                note: "Decided to pack rope for the entire hike in 90+ degree weather. Forgot ATC anyways...",
                images: Object.values(import.meta.glob('/src/data/adventure_images/smith_rock/07-15-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Blue Pool",
        location: {
            lat: 44.311949, 
            lng: -122.027170 
        },
        visits: [
            {
                date: "Jan 6, 2024",
                note: "First hike of the new year!",
                images: Object.values(import.meta.glob('/src/data/adventure_images/blue_pool/01-06-24/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Lake Apopka Loop Trail",
        location: {
            lat: 28.641725, 
            lng: -81.560460
        },
        visits: [
            {
                date: "Dec 26, 2023",
                note: "We were able to make it down to the lake just in time to catch the sunset before turning back.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/lake_apopka_loop_trail/12-26-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Patjens Lake Trail",
        location: {
            lat: 44.374111, 
            lng: -121.882970
        },
        visits: [
            {
                date: "Oct 7, 2023",
                note: "The Mt. Washington wilderness is gorgeous, however, the bees made for a perilous 7 miles.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/patjens_lake_trail/10-07-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Oakland Nature Preserve",
        location: {
            lat: 28.561243, 
            lng: -81.640470
        },
        visits: [
            {
                date: "Aug 14, 2023",
                note: "Gator spotted.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/oakland_nature_preserve/08-14-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Clear Lake",
        location: {
            lat: 44.363812, 
            lng: -121.989123
        },
        visits: [
            {
                date: "June 11, 2023",
                note: "Snagged the last campsite at Coldwater Cove. We kayaked, hiked and enjoyed a couple days of relaxation. Also, peanut butter hot dog.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/clear_lake/06-11-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Silver Falls State Park",
        location: {
            lat: 44.888106, 
            lng: -122.650740
        },
        visits: [
            {
                date: "Apr 29, 2023",
                note: "Ten waterfalls on a single hike. Including four that you walk behind.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/silver_falls_state_park/04-29-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
    {
        title: "Natural Bridges",
        location: {
            lat: 42.189806, 
            lng: -124.365915
        },
        visits: [
            {
                date: "Mar 25, 2023",
                note: "The first stop on our trip to the Redwoods.",
                images: Object.values(import.meta.glob('/src/data/adventure_images/natural_bridges/03-25-23/*.webp', { eager: true })).map(module => module.default)
            },
        ]
    },
];

export default adventureData;