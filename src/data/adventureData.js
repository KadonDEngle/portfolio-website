const adventureData = [
    {
        title: "Multnomah Falls",
        date: "Sept 11, 2022",
        location: {
            lat: 45.576368,
            lng: -122.116015
        },
        images: import.meta.glob('./adventure_images/multnomah_falls/*.jpg'),
    },
    {
        title: "Gold and Silver Falls",
        date: "Sept 17, 2022",
        location: {
            lat: 43.483649, 
            lng: -123.931932
        },
        images: import.meta.glob('./adventure_images/gold_and_silver_falls/*.jpg'),
    },
    {
        title: "Proxy Falls",
        date: "Sept 02, 2022",
        location: {
            lat: 44.162877,
            lng: -121.928249
        },
        images: [

        ],
    },
];

export default adventureData; 