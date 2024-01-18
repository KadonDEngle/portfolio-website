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
                images: Object.values(import.meta.glob('/src/data/adventure_images/multnomah_falls/*.jpg', {eager: true}))
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
                images: import.meta.glob('/src/data/adventure_images/gold_and_silver_falls/*.jpg')
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
                images: import.meta.glob('/src/data/adventure_images/proxy_falls/*.jpg')
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
                images: import.meta.glob('/src/data/adventure_images/salt_creek_falls/*.jpg')
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
                images:import.meta.glob('/src/data/adventure_images/lower_soda_falls/*.jpg')
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
                images: import.meta.glob('/src/data/adventure_images/smith_rock/*.jpg')
            },
        ]
    },
];

export default adventureData;