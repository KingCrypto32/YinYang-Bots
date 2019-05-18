/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
Hello Welcome To ☯BTC YinYang☯, 

We Are A Group Of Gamblers and Traders That Gambles and Trade You're Bitcoin for You're Profit and Also for Us. 

Our System Used This Plan :

You Will Get 200% Of You're Investment After Contract Ends, 

Example: 
Invested 1 BTC, After The Contract Ends You Will Get 200% Back And 25% is Divided By Us, So After You're Bitcoin Becomes 2.25 You Will Get 2 BTC while We Get The 0.25 BTC.

Now How We Double You're Bitcoin? 

We Will Divide you're Bitcoin To 2 Parts

50 % for the Gamblers 
50 % for the Traders  

Now This Is Only for Faster Contract, But If You Don't Wan't us To Gamble You're Bitcoin You Can Choose Trade Contract. 

100 % will go to Trading But This Will Take Time. 

You can See Our Contracts In Contract Section. 
  ANSWER
  keyboard: CONTRACTS 💵 , INVEST 💸 , INFO 📰 , \n WITHDRAW 💳 , SETWALLET 💼, \n MY ACTIVE INVESTMENT , \n Referral 📡
  aliases: 
CMD*/

function doAttracted(refUser){
  // access to Bonus Res of refUser
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("satoshi", refUser.telegramid);
  refUserBonus.add(25);  // add 100 bonus for friend
}

Libs.ReferralLib.currentUser.track({
   doAtractedByUser: doAttracted
});

let res = Libs.ResourcesLib.userRes("satoshi");
Bot.sendMessage("Balance, Satoshi: " + res.value());
