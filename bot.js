require('dotenv').config()
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async  (message) => {

  console.log(`Received message: ${message.content}`);
    
});

console.log(process.env.DISCORD_SECRET)

client.login('');