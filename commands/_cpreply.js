/*CMD
  command: /cpreply
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Hello Please Send The BlockChain / Txid. 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("txid" , data.message , "text");
Bot.runCommand("/myactiveplan");
