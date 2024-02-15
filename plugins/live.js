/**
CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : gifted-md
   * @author : Gifted Tech <https://github.com/Giftedmaurice>
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @infoription : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Gifted Tech.
   * © 2024 Gifted-Md ✭ ⛥.
   * plugin date : 14/2/2024
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/



const { smd, Config,  prefix } = require('../lib')




//---------------------------------------------------------------------------
smd({
            pattern: "live",
            desc: "Show Live Time Of Nairobi",
            category: "fun",
            filename: __filename,
            use: '<group link.>',
        },
        async(message) => {
            try{
var time = `${message.time}`.replace("am",'ᴀᴍ').replace("pm",'ᴘᴍ')
var date = message.date
const [hours, minutes, seconds, ampm] = `${message.time}`.split(/:| /);
const hrs = parseInt(hours, 10);

          var wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙';
          if(ampm == "am"){
          if ( hrs >= 0 && hrs < 5)  wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ, ᴇᴀʀʟʏ ʙɪʀᴅ! 🌄'; 
          else if (hrs >= 5 && hrs < 12) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅';
          }else {
            if (hrs >= 0 && hrs < 5) wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞';
            else if (hrs >= 5 && hrs < 8) wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥';
            else wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙';
          }
const q =await message.bot.fakeMessage("order") 
let contextInfo = {...(await message.bot.contextInfo() )}
let timenow =`
╭────────────────╮
│    *${wish}* 
│     *ᴛɪᴍᴇ* ⌚ ${time} 
│     *Date* 🎲   ${date} 
│   ${Config.caption}
╰────────────────╯
`
await message.send(timenow, {contextInfo : contextInfo },"gifted",  q )
        }catch(e){ await message.error(`${e}\n\ncommand: live`,e,false)}

})
