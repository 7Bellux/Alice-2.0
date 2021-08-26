module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`🎵A música foi retomada `);
    }

    return [message.delete(), utils.timed_msg('⚠ Não tem nenhuma música sendo tocanda atualmente', 5000)];
    
};