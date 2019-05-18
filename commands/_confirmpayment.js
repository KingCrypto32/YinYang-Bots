/*CMD
  command: /confirmpayment
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Hello Please Send The Amount You Invested, 
  keyboard: 
  aliases: confirm payment ✔
CMD*/

User.setProperty("amount" , data.message , "text");
Bot.runCommand("/cpreply");
