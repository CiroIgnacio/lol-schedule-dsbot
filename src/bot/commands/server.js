const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {

		await interaction.reply(`Este es el server  ${interaction.guild.name} con ${interaction.guild.memberCount} miembros.`);
	},
};

