import type {
  ChatInputCommandInteraction,
  CacheType,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';

export type DiscordInteraction =
  | ChatInputCommandInteraction<CacheType>
  | MessageContextMenuCommandInteraction<CacheType>
  | UserContextMenuCommandInteraction<CacheType>;

export type SlashCommand = {
  data: SlashCommandBuilder;
  execute: (interaction: DiscordInteraction) => Promise<void>;
};
