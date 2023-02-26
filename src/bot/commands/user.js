const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {

		await interaction.reply(`Solicitud enviada por ${interaction.user.username}, unido al server en ${interaction.member.joinedAt}.`);
	},
};