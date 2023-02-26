const { SlashCommandBuilder } = require('discord.js');
const api = require('./../../api_calls');
const  service = require('./../../match_service');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('partidas')
		.setDescription('Lista las próximas partidas de LoL según agenda oficial.'),
	async execute(interaction) {
		const res = await api.apicall();
		let msg = '';
		const data = res.data.data.schedule;
		data["events"].forEach(e => { 			
		if (service.matchFilter(e)){
			service.hourTransform(e);
			msg = msg + service.getFullData(e);
		}  
		});
		await interaction.reply(msg);
	},
    
};