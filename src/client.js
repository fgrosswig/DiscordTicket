const { Client: FrameworkClient }= require('@eartharoid/dbf');
const { Intents } = require('discord.js');
const { PrismaClient } = require('@prisma/client');

module.exports = class Client extends FrameworkClient {
	constructor() {
		super({
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MEMBERS,
				Intents.FLAGS.GUILD_MESSAGES,
			],
		});
	}

	async login(token) {
		this.prisma = new PrismaClient();
		// this.prisma.$use((params, next) => {})
		return super.login(token);
	}

	async destroy() {
		await this.prisma.$disconnect();
		return super.destroy();
	}
};