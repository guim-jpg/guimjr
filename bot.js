const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async  (message) => {

  console.log(`Received message: ${message.content}`);
    
});

client.login('ODgwNTA2NDkwMjI0NTM3NjUw.GwPZm7.MdddQjS9jvvAYg3F85Vzz6HLCMqBSozUu9pOTI');