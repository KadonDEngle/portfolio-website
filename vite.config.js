import vsharp from 'vite-plugin-vsharp';

export default {
    // Adding relative path for gh-pages
    base: './',
    plugins: [
        // VSharp compresses and optimizes static images during build
        vsharp({
            '.jpg': {
                'quality': 60
            },
        }),
    ],
}