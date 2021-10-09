module.exports = {

    webpack5: true,
    images: {
        domains: ['i.scdn.co'],
    },
    async redirects() {
        return [
            {
                source: '/yiff',
                permanent: true,
                destination: 'https://github.com/himbolion/yiff',
            },
            {
                source: '/elixire',
                permanent: true,
                destination: 'https://github.com/himbolion/elixire',
            }
            ,
            {
                source: '/nsw',
                permanent: true,
                destination: 'https://nsw2.werewolf.design',
            }
        ]
    },

}