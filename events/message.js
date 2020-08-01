module.exports = (client, message) => {
  // Ignorer les messages du bot
  if (message.author.bot) return;

  // Ignorer les messages n'ayant pas le préfixe
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Définir args et les commandes
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // chercher la commande
  const cmd = client.commands.get(command);

  // Si la commande n'existe pas, abandonner 
  if (!cmd) return;

  // Si elle existe, lancer la commande
  cmd.run(client, message, args);
};