/*CMD
  command: /newwallet
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please Send You're BTC Address. 
  keyboard: 
  aliases: setwallet 💼
CMD*/

User.setProperty("address" , data.message , "text");
Bot.sendMessage("You're Wallet is Set To <address>");
