exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você deve estar em um canal de voz para utlizar esse comando!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'Nada está tocando no momento para eu poder pular!',
            color: 'BLACK'
        }
    })
}

    if(queue.songs.length !== 0) {
        message.react('⏩')
        queue.connection.dispatcher.end('a música foi pulada!')
    }
}