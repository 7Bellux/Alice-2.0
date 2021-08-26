module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, por favor entre em um canal de voz para executar este comando!`, `${config.prefix}stop`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Não tem nenhuma música tocando atualmente!', 5000)];

    queue.musics = [];
    queue.connection.dispatcher.end();

};
