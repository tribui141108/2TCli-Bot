import { QueryType } from "discord-player";
import { Guild, GuildChannelResolvable } from "discord.js";
import { ICommand } from "wokcommands";
import player from "../../music/player";

export default {
    category: "Music",
    description: "Pauses the currently playing song",
    guildOnly: true,
    slash: true,
    callback: async ({ interaction, member, channel, guild }) => {

        if (!member.voice.channelId) {
            return {
                custom: true,
                content: "❌ You need to be in a voice channel first",
                ephemeral: true,
            }
        }

        const queue = player.getQueue(interaction.guildId!);

        await queue.setPaused(true);

        return {
            custom: true,
            content: "⏸️ Paused",
            ephemeral: true,
        }
    }
} as ICommand;