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
        images: import.meta.glob('./adventure_images/proxy_falls/*.jpg'),
    },
    {
        title: "Salt Creek Falls",
        date: "Aug 19, 2022",
        location: {
            lat: 43.612255, 
            lng: -122.128701
        },
        images: import.meta.glob('./adventure_images/salt_creek_falls/*.jpg'),
    },
    {
        title: "Lower Soda Falls",
        date: "Jan 14, 2022",
        location: {
            lat: 44.408066,
            lng: -122.475360
        },
        images: import.meta.glob('./adventure_images/lower_soda_falls/*.jpg'),
    },
    {
        title: "Smith Rock",
        date: "Apr 12, 2022",
        location: {
            lat: 44.368366, 
            lng: -121.143275
        },
        images: import.meta.glob('./adventure_images/smith_rock/*.jpg'),
    },
];

export default adventureData;