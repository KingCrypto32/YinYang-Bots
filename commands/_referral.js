/*CMD
  command: /referral
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: Back 🔙 , \n Referral Satoshi , My Invites 👩‍👩‍👧‍👦
  aliases: referral 📡
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("BTCYinYang_Bot");
Bot.sendMessage("Invite You're Friends For Free Satoshi, \n\n Warning: Unactive Will not be counted \n\n" + parther_link);

