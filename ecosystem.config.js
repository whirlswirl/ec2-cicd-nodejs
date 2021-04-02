module.exports = {
	apps: [
		{
			name: 'cicd-nodejs-ec2',
			exec_mode: 'cluster',
			instances: 'max',
			script: './bin/nodejs-server', // Starts the server
			args: 'start'
		}
	]
}
