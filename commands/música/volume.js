exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você deve estar em um canal de voz para utlizar esse comando!');

    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: 'O volume foi setado para: ' + queue.volume
        }
    })

    if(args[0] > 10) return message.channel.send('O volume só pode ser aumentado entre 1 e 10 para não machucar seus ouvidos!')

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: 'Volume foi setado para ' + args[0]
        }
    })
}