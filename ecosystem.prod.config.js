module.exports = {
    apps: [
        {
            name: 'chatgpt-node',
            script: './bin/server.js',
            instances: '2',
            instance_var: 'INSTANCE_ID',
            exec_mode: 'cluster',
            env: {
                OPENAI_API_KEY: '',
            },
        },
    ],
};
