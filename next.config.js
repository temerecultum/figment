module.exports = {

    webpack5: true,
    images: {
        domains: ['i.scdn.co'],
    },
    async rewrites() {
        return [
            {
                source: '/yiff',
                destination: 'https://github.com/himbolion/yiff',
            },
            {
                source: '/elixire',
                destination: 'https://github.com/himbolion/elixire',
            }
            ,
            {
                source: '/nsw',
                destination: 'https://nsw2.werewolf.design',
            }
        ]
    }
}