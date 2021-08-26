const Discord = require("discord.js");
const cooldown = new Set();

module.exports = {
  name: "Convidar",

  run: async(client, message, args) => {

    let tempo_em_milisegundos = 5000; //Esse é um sistema de tempo de espera para executar o comando novamente 

    if(cooldown.has(message.author.id)) {

        message.channel.send(`Ei ${message.author} **Você precisa esperar** \`5 Segundos\` **para utilizar este comando novamente**!`).then(msg=>{msg.delete({timeout:5000})})

    } else {

const disbut = require("discord-buttons");
    let msg_embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({format: "png"}))
    .setTitle("My Invite")
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))//imagem de seu bot no canto superior direito
    .setDescription(`**Você quer me convidar para o seu servidor?**\n\nLegal!\n\nBasta clicar no botão abaixo`);
    
    let button = new disbut.MessageButton()//Botão após a embed
    .setLabel("My Invite")//nome do botão
    .setURL(`https://discord.com/oauth2/authorize?client_id=837804484788355083&scope=bot&permissions=1007231143`)//link de convite de seu BOT
    .setStyle("url")//tipo de botão URL


    message.channel.send(msg_embed, button)
  }


cooldown.add(message.author.id);
setTimeout(() => {
    cooldown.delete(message.author.id)
}, `${tempo_em_milisegundos}`);
}
}