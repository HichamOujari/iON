module.exports = {
    async headers() {
        return [
            {
                source: '/.well-known/stellar.toml',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'content-type',
                        value: 'text/plain',
                    },

                ],
            },
        ]
    },
}