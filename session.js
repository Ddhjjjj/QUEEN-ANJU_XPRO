//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗠𝗗  𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：3.0                                                       //

// ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
//██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
//██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
//██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
//╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║
// ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝
                                            
// █████╗ ███╗   ██╗     ██╗██╗   ██╗         
//██╔══██╗████╗  ██║     ██║██║   ██║         
//███████║██╔██╗ ██║     ██║██║   ██║         
//██╔══██║██║╚██╗██║██   ██║██║   ██║         
//██║  ██║██║ ╚████║╚█████╔╝╚██████╔╝         
//╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝          
//                                            
//███╗   ███╗██████╗                          
//████╗ ████║██╔══██╗                         
//██╔████╔██║██║  ██║                         
//██║╚██╔╝██║██║  ██║                         
//██║ ╚═╝ ██║██████╔╝                         
//╚═╝     ╚═╝╚═════╝                          
//                                            
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @author : Janith Rashmika
//  * @youtube : https://www.youtube.com/@gamingrash2006
//  * @description : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@gamingrash2006
//   * Created By Github: Mrrashmika.
//   * Credit To Janith Rashmika
//   * © 2024 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V7.
// ⛥┌┤
// */
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your session id here",
PORT: process.env.PORT || "8000"
};
