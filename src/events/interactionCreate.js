import { Events, MessageFlags } from 'discord.js';
import logger from '../utils/logger.js';

export default {
    name: Events.InteractionCreate,
    async execute(interaction) {

        logger.debug(`🔧 interaction received: ${interaction.type}`);

        if (!interaction.isChatInputCommand()) return;

        const { commandName, user, guild } = interaction;
        const startTime = Date.now();

        try {
            logger.debug(`🔧 ${user.tag} Used /${commandName} in ${guild?.name || 'DM'}`);

            // Search commands
            const command = interaction.client.commands.get(commandName);
            if (!command) {
                logger.error(`❌ Command not found: ${commandName}`);
                return interaction.reply({ 
                    content: '❌ Command not found!', 
                    flags: [MessageFlags.Ephemeral],
                });
            }

            // Execute command
            await command.execute(interaction);
            
            const executionTime = Date.now() - startTime;
            logger.debug(`✅ /${commandName} Executed in ${executionTime}ms`);

        } catch (error) {
            const executionTime = Date.now() - startTime;
            logger.error(`💥 Error in /${commandName}:`, error.stack);
            logger.error(`⏱️  Time until error: ${executionTime}ms`);

            // Respond the user
            try {
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ 
                        content: '❌ Error executing command!', 
                        flags: [MessageFlags.Ephemeral],
                    });
                } else {
                    await interaction.reply({ 
                        content: '❌ Error executing command!', 
                        flags: [MessageFlags.Ephemeral], 
                    });
                }
            } catch (replyError) {
                logger.error('❌ Failed to send error message:', replyError);
            }
        }
    }
};
