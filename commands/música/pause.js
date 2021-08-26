module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        return message.channel.send(`🎵 A música agora foi pausada`);
    }

    return [message.delete(), utils.timed_msg('⚠ Nenhuma música tocando atualmente.', 5000)];
    
};