/* For Ma Ma 💚 — static site, no backend.
   ALL content lives in this file + the photos/ folder, so every device
   shows exactly the same thing. To change anything, edit here, commit, push.
   (Only the language choice is stored per device.) */

/* Storage keys (language preference only) */
const LS = { lang: 'love_lang' };

/* ---------- Couple ---------- */
const HER_NAME = 'မမ';
const MY_NAME = 'မောင်';
const ANNIVERSARY = new Date(2026, 9, 2, 9, 1, 0);

/* ---------- Photos: put files in photos/ as photo1.jpg … photo8.jpg ---------- */
const PHOTOS = [
  {src: 'photos/photo1.jpg', cap: 'မမရဲ့ အပြုံးလေး ♡'},
  {src: 'photos/photo2.jpg', cap: 'အလှဆုံးအခိုက်အတန့်'},
  {src: 'photos/photo3.jpg', cap: 'အမှတ်တရနေ့လေး'},
  {src: 'photos/photo4.jpg', cap: 'ထာဝရသိမ်းထားမယ့်ပုံ'},
  {src: 'photos/photo5.jpg', cap: 'ဘုရားဖူးအမှတ်တရ'},
  {src: 'photos/photo6.jpg', cap: 'ခေါင်းလောင်းကြီးနဲ့ မမ'},
  {src: 'photos/photo7.jpg', cap: 'နှစ်ယောက်အတူတူ 💚'},
  {src: 'photos/photo8.jpg', cap: 'မောင့်အချစ်ဆုံး လူသား'}
];

/* ---------- i18n dictionary (English + Burmese UI) ---------- */
const I18N = {
en: {
  "nav.home":"Home","nav.letters":"Letters","nav.photos":"Photos","nav.story":"Our Story","nav.reasons":"Reasons","nav.settings":"Settings",
  "hero.eyebrow":"For the most beautiful soul","hero.forever":"Forever & Always",
  "hero.desc":"Every photo, every word on this website is a piece of my heart, made just for you.",
  "hero.days":"Days","hero.hours":"Hours","hero.mins":"Minutes",
  "hero.since":"Since we started our story","hero.lettersBtn":"Read My Letters 💌","hero.photosBtn":"See Your Photos 📸",
  "hero.tapPhoto":"Tap to add your photo","hero.favPerson":"my favorite person ♡",
  "hero.customize":"✏️ Customize Names & Date","hero.play":"🎵 Play Our Song","hero.pause":"⏸️ Pause Music",
  "hero.pickDate":"pick a date above",
  "letters.tag":"Love Letters","letters.title":"Words from my heart to yours",
  "letters.sub":"Tap a card to read it.",
  "gallery.tag":"Her Gallery","gallery.title":"Your beautiful moments",
  "gallery.sub":"Moments we want to keep forever.",
  "gallery.add":"📸 Add Photos",
  "gallery.hint":"Tip: Tap any photo to view full screen.",
  "story.tag":"Our Story","story.title":"How our love grew","story.sub":"Our precious memories",
  "story.m1t":"The Day We Met","story.m1d":"The moment my world got brighter. I still remember your smile.","story.m1date":"Day 1",
  "story.m2t":"First Long Talk","story.m2d":"Hours felt like minutes. I knew you were special.","story.m2date":"Soon After",
  "story.m3t":"We Fell In Love","story.m3d":"And I never want to fall out of it.","story.m3date":"Forever",
  "story.add":"+ Add Memory","story.dateLabel":"Date label",
  "reasons.tag":"100 Reasons","reasons.title":"Why I love you","reasons.sub":"Tap to shuffle a new reason","reasons.next":"Another reason 💚",
  "reasons.w1":"Your smile","reasons.w2":"Your kindness","reasons.w3":"Your eyes","reasons.w4":"Your voice","reasons.w5":"Your care","reasons.w6":"Your soul",
  "final.title":"To my love,",
  "final.body":"I made this little corner of the internet just for you. Every word here is true, every photo is precious to me. No matter where we are, you can open this on your phone and know how deeply you are loved. You are my today and all of my tomorrows. Yours, always.",
  "final.edit":"Edit this letter",
  "footer.made":"Made with 💚 just for","footer.offline":"Made with love, for us.",
  "settings.tag":"Settings","settings.title":"Site settings","settings.anniv":"Anniversary",
  "modal.customize":"Customize your site ✨","modal.her":"Her Name","modal.me":"Your Name","modal.since":"Since Date",
  "modal.herPh":"e.g. Ananya","modal.mePh":"e.g. Rohan",
  "modal.save":"Save","modal.cancel":"Cancel","modal.savedHint":"Saved on this device only — so you can keep it private.",
  "modal.editNote":"Edit Love Note","modal.editMemory":"Edit Memory","modal.icon":"Icon",
  "modal.title":"Title","modal.message":"Message","modal.delete":"Delete",
  "js.confirmDeleteNote":"Delete this love note?",  "js.confirmDeleteMemory":"Delete this memory?",  "js.removePhoto":"Remove this photo?",
  "js.memTitle":"Memory title (e.g. Our first trip)","js.memDesc":"Short description","js.memDate":"Date label (e.g. 14 Feb 2024)",
  "js.editFinal":"Edit your final letter:",  "js.musicBlocked":"Tap again to allow music (browser blocked autoplay)",
  "js.storageFull":"This site's phone storage is full — delete some photos first, then add new ones.",
  "js.myLove":"My Love","js.iLoveYou":"I love you...","js.favPersonCap":"My favorite person ♡"
},
my: {
  "nav.home":"ပင်မ","nav.letters":"စာများ","nav.photos":"ဓာတ်ပုံများ","nav.story":"ကျွန်ုပ်တို့ဇာတ်လမ်း","nav.reasons":"အကြောင်းရင်းများ","nav.settings":"ဆက်တင်",
  "hero.eyebrow":"အလှဆုံးသော စိတ်ဝိဉာဉ်လေးအတွက်","hero.forever":"ထာဝရ နှင့် အမြဲတမ်း",
  "hero.desc":"ဒီဝက်ဘ်ဆိုက်ထဲက ဓာတ်ပုံတိုင်း၊ စာတိုင်းဟာ မမတစ်ယောက်တည်းအတွက် ရည်ရွယ်ထားတဲ့ မောင့်နှလုံးသားရဲ့ အစိတ်အပိုင်းလေးတွေပါ။",
  "hero.days":"ရက်","hero.hours":"နာရီ","hero.mins":"မိနစ်",
  "hero.since":"ကျွန်ုပ်တို့ ဇာတ်လမ်းစတင်ခဲ့သည်မှာ","hero.lettersBtn":"မောင့်စာတွေ ဖတ်ကြည့်ပါ 💌","hero.photosBtn":"မမဓာတ်ပုံတွေ ကြည့်ပါ 📸",
  "hero.tapPhoto":"ဓာတ်ပုံထည့်ရန် တို့ပါ","hero.favPerson":"မောင့်အချစ်ဆုံး လူလေး ♡",
  "hero.customize":"✏️ နာမည်နှင့် ရက်စွဲ ပြင်ရန်","hero.play":"🎵 ကျွန်ုပ်တို့ သီချင်းဖွင့်ရန်","hero.pause":"⏸️ ခေတ္တရပ်ရန်",
  "hero.pickDate":"အထက်မှာ ရက်စွဲရွေးပါ",
  "letters.tag":"ချစ်ခြင်းစာများ","letters.title":"နှလုံးသားထဲက စာလက်ဆောင်များ",
  "letters.sub":"ကတ်တစ်ခုခုကို တို့ပြီး ဖတ်ကြည့်ပါ။",
  "gallery.tag":"သူ့ရဲ့ပုံရိပ်များ","gallery.title":"မမရဲ့ လှပသော အခိုက်အတန့်များ",
  "gallery.sub":"ထာဝရသိမ်းထားချင်တဲ့ အခိုက်အတန့်များ။",
  "gallery.add":"📸 ဓာတ်ပုံထည့်ရန်",
  "gallery.hint":"အကြံပြုချက် - ဓာတ်ပုံကိုတို့ပြီး အပြည့်ကြည့်နိုင်တယ်။",
  "story.tag":"ကျွန်ုပ်တို့ ဇာတ်လမ်း","story.title":"ကျွန်ုပ်တို့ အချစ် ကြီးထွားလာပုံ","story.sub":"ကျွန်ုပ်တို့ရဲ့ တန်ဖိုးရှိတဲ့ အမှတ်တရများ",
  "story.m1t":"ကျွန်ုပ်တို့ စတွေ့ခဲ့တဲ့နေ့","story.m1d":"မောင့်ကမ္ဘာ ပိုတောက်ပသွားတဲ့ အခိုက်အတန့်ပဲ။ မမအပြုံးကို ခုထိ မှတ်မိနေတုန်းပါ။","story.m1date":"နေ့ ၁",
  "story.m2t":"ပထမဆုံး စကားကြာကြာပြောဖြစ်ခြင်း","story.m2d":"နာရီတွေက မိနစ်တွေလို ထင်ခဲ့ရတယ်။ မမ တကယ်ထူးခြားတယ်ဆိုတာ သိလိုက်ပြီ။","story.m2date":"မကြာမီ",
  "story.m3t":"ကျွန်ုပ်တို့ ချစ်မိသွားပြီ","story.m3d":"ဒီအချစ်ထဲက ဘယ်တော့မှ မထွက်ချင်တော့ဘူး။","story.m3date":"ထာဝရ",
  "story.add":"+ အမှတ်တရ ထည့်ရန်","story.dateLabel":"ရက်စွဲအညွှန်း",
  "reasons.tag":"အကြောင်းပြချက် ၁၀၀","reasons.title":"မမကို ဘာလို့ ချစ်တာလဲ","reasons.sub":"အကြောင်းပြချက်အသစ်အတွက် တို့လိုက်ပါ","reasons.next":"နောက်အကြောင်းပြချက် 💚",
  "reasons.w1":"မမအပြုံး","reasons.w2":"မမကြင်နာမှု","reasons.w3":"မမမျက်ဝန်း","reasons.w4":"မမအသံ","reasons.w5":"မမဂရုစိုက်မှု","reasons.w6":"မမဝိဉာဉ်",
  "final.title":"ချစ်ရသူသို့၊",
  "final.body":"အင်တာနက်ရဲ့ ထောင့်သေးသေးလေးတစ်ခုကို မမတစ်ယောက်တည်းအတွက် ဖန်တီးထားတာပါ။ ဒီစာတိုင်းဟာ အမှန်တွေချည်းပဲ၊ ဓာတ်ပုံတိုင်းဟာ မောင့်အတွက် တန်ဖိုးအရှိဆုံးတွေပါ။ ဘယ်နေရာရောက်ရောက် ဖုန်းလေးဖွင့်ပြီး မမ ဘယ်လောက်ချစ်ခံနေရလဲဆိုတာ သိနိုင်ပါတယ်။ မမဟာ မောင့်ရဲ့ ဒီနေ့ရော၊ မနက်ဖြန်တိုင်းရောပါပဲ။ အမြဲချစ်နေမယ့်သူ။",
  "final.edit":"ဒီစာကို ပြင်ရန်",
  "footer.made":"💚 ဖြင့် ပြုလုပ်ထားသည်","footer.offline":"မေတ္တာနဲ့ ဖန်တီးထားပါတယ်။",
  "settings.tag":"ဆက်တင်","settings.title":"ဆိုက်ဆက်တင်","settings.anniv":"နှစ်ပတ်လည်နေ့",
  "modal.customize":"သင့်ဆိုက်ကို စိတ်ကြိုက်ပြင်ပါ ✨","modal.her":"သူ့နာမည်","modal.me":"သင့်နာမည်","modal.since":"စတင်ခဲ့သည့် ရက်စွဲ",
  "modal.herPh":"ဥပမာ - သဲစု","modal.mePh":"ဥပမာ - အောင်မင်း",
  "modal.save":"သိမ်းရန်","modal.cancel":"မလုပ်တော့ပါ","modal.savedHint":"ဒီစက်ထဲမှာပဲ သိမ်းထားမယ် — လျှို့ဝှက်ထားနိုင်ပါတယ်။",
  "modal.editNote":"ချစ်ခြင်းမှတ်စု ပြင်ရန်","modal.editMemory":"အမှတ်တရ ပြင်ရန်","modal.icon":"အိုင်ကွန်",
  "modal.title":"ခေါင်းစဉ်","modal.message":"စာသား","modal.delete":"ဖျက်ရန်",
  "js.confirmDeleteNote":"ဒီချစ်ခြင်းမှတ်စုကို ဖျက်မလား?",  "js.confirmDeleteMemory":"ဒီအမှတ်တရကို ဖျက်မလား?",  "js.removePhoto":"ဒီဓာတ်ပုံကို ဖယ်ရှားမလား?",
  "js.memTitle":"အမှတ်တရ ခေါင်းစဉ် (ဥပမာ - ပထမဆုံး ခရီးစဉ်)","js.memDesc":"အကျဉ်းဖော်ပြချက်","js.memDate":"ရက်စွဲအညွှန်း (ဥပမာ - ၁၄ ဖေဖော်ဝါရီ ၂၀၂၄)",
  "js.editFinal":"နောက်ဆုံးစာကို ပြင်ရန်:",  "js.musicBlocked":"ထပ်တို့ပြီး ဂီတခွင့်ပြုပါ (ဘရောက်ဇာက ပိတ်ထားလို့ပါ)",
  "js.storageFull":"ဒီဆိုက်အတွက် ဖုန်းမှတ်ဉာဏ် ပြည့်နေပြီ — ဓာတ်ပုံအချို့ အရင်ဖျက်ပြီးမှ အသစ်ထည့်ပါ။",
  "js.myLove":"ချစ်ရသူ","js.iLoveYou":"ချစ်တယ်...","js.favPersonCap":"မောင့်အချစ်ဆုံး လူလေး ♡"
}
};
let lang = 'en';
try{ lang = localStorage.getItem(LS.lang) || 'en'; }catch(e){ lang = 'en'; }
if(!I18N[lang]) lang = 'en';
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
function setLang(l){
  lang = I18N[l] ? l : 'en';
  try{ localStorage.setItem(LS.lang, lang); }catch(e){}
  applyLang();
}

/* ---------- Love letters (fixed) ---------- */
const defaultLetters_en = [
  { title: "Good Morning, My Love ☀️", msg: "Every morning I wake up grateful that you exist. You are the first thought in my mind and the reason I smile before my feet even touch the floor. I love you more than yesterday.", date: "Forever yours" },
  { title: "You Are My Safe Place 🤍", msg: "In your arms I have found my home. When the world is too loud, your voice calms every storm inside me. Thank you for being my peace.", date: "Always" },
  { title: "I Still Get Butterflies 🦋", msg: "Even after all this time, my heart still skips a beat when you look at me. You make me feel like the luckiest person alive.", date: "With all my heart" },
  { title: "My Promise To You 💍", msg: "I promise to choose you every single day. In good times and hard times, I will be your biggest supporter, your best friend, and your love.", date: "Forever & Always" },
  { title: "Your Smile Is My Sun 🌸", msg: "Your smile can fix any bad day. It lights up my whole world. Please never stop smiling, my love. I live for it.", date: "Yours only" },
  { title: "Missing You Tonight 🌙", msg: "The night feels incomplete without your goodnight voice. I’m counting the minutes until I can see you again. Come closer in my dreams, jaan.", date: "Tonight" }
];
const defaultLetters_my = [
  { title: "မင်္ဂလာပါ မမ", msg: "မနက်တိုင်း မမရှိနေတယ် ဆိုတဲ့ စိတ်နဲ့နိုးထရတယ်။ မမဟာ မောင့်ရဲ့ တစ်နေ့တာ အတွေးထဲက ပထမဆုံး အတွေးလေးပါ။ မောင် ပြုံးပျော်နေရတဲ့ အကြောင်းပြချက်လေးပါပဲ။ မနေ့ကထက် ဒီနေ့ ပိုချစ်တယ်နော် မမ။", date: "ထာဝရ မမအတွက်" },
  { title: "မမ က မောင့်ရဲ့ လုံခြုံရာ", msg: "မမရင်ခွင်ထဲမှာ မောင့်အိမ်ကို ရှာတွေ့ခဲ့တယ်။ ကမ္ဘာ လောကကြီးက ဝမ်းနည်းစေတဲ့အခါ မမအသံက မောင့်ရင်ထဲက စိုးရိမ်မှုတွေ ကြောက်ရွံ့မှုတွေကို မေတ္တာတရားနဲ့ ငြိမ်းအေးသွားစေတယ်။ မောင့် အေးချမ်းရာလေး ဖြစ်ပေးလို့ ကျေးဇူးပါ မမ။", date: "အမြဲတမ်း" },
  { title: "ရင်ခုန်စေတယ်", msg: "အချိန်တွေ ကြာသွားပေမယ့် မမ မျက်ဝန်းလေးတွေထဲကြည့်လိုက်တိုင်း မောင့် နှလုံးခုန်သံ ရပ်တန့်သွားသလိုပါပဲ။ မောင့်ကို ကမ္ဘာပေါ်မှာ အကံကောင်းဆုံးလူ လို့ ခံစားရစေတယ် မမရယ်။", date: "နှလုံးသားအပြည့်နဲ့" },
  { title: "မမ အတွက် မောင့်ကတိ", msg: "နေ့တိုင်း မမကို ရွေးချယ်မယ်လို့ ကတိပေးတယ်။ အဆင်ပြေချိန်ရော ခက်ခဲချိန်ရော ကိုယ်က မမရဲ့ အားအပေးဆုံးသူ၊ အကောင်းဆုံးသူငယ်ချင်း၊ ချစ်သူဖြစ်နေမယ်။", date: "ထာဝရ & အမြဲတမ်း" },
  { title: "မမ အပြုံးက မောင့်အတွက် အားဆေး", msg: "မမရဲ့ အပြုံးက မောင် အဆင်မပြေတဲ့ နေ့တိုင်းကို ကုစားပေးနိုင်ပါတယ်။ မောင့်ကမ္ဘာကြီးတစ်ခုလုံး လင်းလက်သွားစေတယ်။ ချစ်ရသူ မမ ရဲ့ အပြုံး ဘယ်တော့မှ မပျောက်ကွယ်သွားဖို့ မောင်ဆုတောင်းပါတယ် မမ။ မောင် အဲ့အတွက် ရှင်သန်နေတာပါ။", date: "မမတစ်ယောက်တည်းအတွက်" },
  { title: "ဒီည မမ ကို လွမ်းတယ်", msg: "မမ ရဲ့ ကောင်းသောညပါ ဆိုတဲ့ စကားလေး မပါရင် ညတစ်ညက မပြည့်စုံပါဘူး မမ ရယ်၊ အိပ်မက်ထဲလည်း တွေ့ချင်မိတယ်။ ထွေးပွေ့လို့ထားချင်တယ် မမရယ်။", date: "ဒီည" }
];
function lettersFor(l){ return l === 'my' ? defaultLetters_my : defaultLetters_en; }

/* ---------- Reasons (fixed) ---------- */
const reasons_en = [
  "Your laugh is my favorite sound in the world.",
  "The way you care for me without even asking.",
  "Your eyes — I could get lost in them forever.",
  "How you believe in me when I don't believe in myself.",
  "Your cute angry face that I secretly love.",
  "The way you say my name.",
  "Your kindness towards everyone.",
  "How you make every photo beautiful just by being in it.",
  "Your hugs feel like home.",
  "Because with you, I want to be a better person.",
  "Your voice that I can listen to for hours.",
  "How you remember the smallest details about me.",
  "Your strength and your soft heart.",
  "Because you are you — and that's my favorite thing."
];
const reasons_my = [
  "မမရယ်သံလေးဟာ မောင့်အတွက် ကမ္ဘာပေါ်မှာ အကြိုက်ဆုံး အသံလေးပါ။",
  "မပြောပဲနဲ့ မောင့်ကို ဂရုစိုက်တတ်တဲ့ အကျင့်လေး။",
  "မမမျက်ဝန်းတွေ — ထာဝရ နစ်မျောနေချင်တယ်။",
  "မောင့်ကိုယ်ကို မယုံကြည်တဲ့အခါတောင် မမက မောင့်ကို ယုံကြည်ပေးတယ်။",
  "မမရဲ့ ချစ်စရာ စိတ်ဆိုးမျက်နှာလေး — မောင် ခိုးသဘောကျနေတာ။",
  "မမ မောင့်နာမည်ခေါ်တဲ့ ပုံစံလေး။",
  "လူတိုင်းအပေါ် ထားတဲ့ မမကြင်နာမှု။",
  "မမပါတဲ့ ဓာတ်ပုံတိုင်း လှသွားစေတာ။",
  "မမဖက်ထားတာလေးက အိမ်လိုပဲ နွေးထွေးတယ်။",
  "မမနဲ့အတူဆို မောင် ပိုကောင်းတဲ့လူ ဖြစ်ချင်တယ်။",
  "နာရီပေါင်းများစွာ နားထောင်ချင်တဲ့ မမအသံလေး။",
  "မောင့်အကြောင်း အသေးအဖွဲလေးတွေကအစ မှတ်ထားတတ်တာ။",
  "မမရဲ့ သန်မာမှုနဲ့ နူးညံ့တဲ့ နှလုံးသား။",
  "မမက မမဖြစ်နေလို့ပဲ — အဲ့ဒါ မောင့်အကြိုက်ဆုံးအရာပါ။"
];
function reasonsFor(l){ return l === 'my' ? reasons_my : reasons_en; }

/* ---------- Timeline memories (fixed — our real story) ---------- */
const TIMELINE = [
  {emoji: '💫', title: 'မောင်တို့ စတွေ့ခဲ့တဲ့နေ့', desc: 'လိုင်းကားတူတူစီးပြီး မောင်ကျောင်းကို မမ အတူတူ လိုက်လာခဲ့တဲ့နေ့လေးပါ ။ မမအပြုံးကို ခုထိ မှတ်မိနေတုန်းပါပဲ။', date: '၁၁.၈.၂၀၂၆ (အင်္ဂါနေ့)'},
  {emoji: '✨', title: 'ဘုရားတူတူသွားကြတဲ့နေ့လေး', desc: 'မမ ရဲ့နွေးထွေးတဲ့အပြုံးလေးတွေက သိင်္ဂုတ္တရကုန်းတော်ပေါ်က ဆည်းလည်းသံလေးတွေလိုပါပဲ။ အပြန် မိုးမိ ခဲ့တဲ့ အမှတ်တရ နေ့လည်ခင်းလေးပါ မမ။', date: '၁၂.၉.၂၀၂၆ (စနေနေ့)'},
  {emoji: '💚', title: 'မောင်တို့ ချစ်ခြင်းတွေ ထပ်တူကျခဲ့ပြီ', desc: 'မောင် အမြဲကြားချင်ခဲ့တဲ့ ချစ်တယ်ဆိုတဲ့ စကားလေးကို မမ ဆီက ဒီနေ့ကြားသိခဲ့ရပါပြီ။ အမြဲတမ်းအတွက် မောင် မမဆီကို ဘဝတစ်ခုလုံး ပုံအပ်ချင်ပါတယ်။', date: 'အမြဲတမ်း (သို့မဟုတ်) ထာဝရ'}
];
function renderTimeline(){
  const tl = document.getElementById('timeline');
  tl.innerHTML = TIMELINE.map(it=>
    '<div class="t-item"><span class="t-dot">' + it.emoji + '</span><div class="t-card"><h3>' + esc(it.title) + '</h3><p>' + esc(it.desc) + '</p><span class="t-date">' + esc(it.date) + '</span></div></div>'
  ).join('');
}

/* ---------- Helpers ---------- */
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, m=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function locale(){ return lang === 'my' ? 'my-MM' : 'en-IN'; }

/* ---------- Names, date & counter (fixed) ---------- */
function renderNames(){
  document.getElementById('herNameDisplay').textContent = HER_NAME;
  document.getElementById('myNameDisplay').textContent = MY_NAME;
  document.getElementById('footerName').textContent = HER_NAME;
  document.getElementById('signName').textContent = MY_NAME;
  document.getElementById('sinceDateText').textContent = ANNIVERSARY.toLocaleDateString(locale(), {day:'numeric',month:'long',year:'numeric'});
  startCounter(ANNIVERSARY);
  const a = document.getElementById('annivText');
  if(a) a.textContent = ANNIVERSARY.toLocaleDateString(locale(), {day:'numeric',month:'long',year:'numeric'}) + ', ' + ANNIVERSARY.toLocaleTimeString(locale(), {hour:'numeric',minute:'2-digit'});
  const h = document.getElementById('setHerName');
  if(h) h.textContent = HER_NAME;
  const m = document.getElementById('setMeName');
  if(m) m.textContent = MY_NAME;
}
let counterInterval;
function startCounter(since){
  clearInterval(counterInterval);
  function tick(){
    const diff = Math.max(0, Date.now() - since.getTime());
    const days = Math.floor(diff/86400000);
    const hours = Math.floor((diff%86400000)/3600000);
    const mins = Math.floor((diff%3600000)/60000);
    document.getElementById('daysCount').textContent = days;
    document.getElementById('hoursCount').textContent = hours;
    document.getElementById('minsCount').textContent = mins;
  }
  tick();
  counterInterval = setInterval(tick, 60000);
}

/* ---------- Letters ---------- */
function renderLetters(){
  const grid = document.getElementById('lettersGrid');
  grid.innerHTML = lettersFor(lang).map(l=>
    '<article class="letter-card"><h3>' + esc(l.title) + '</h3><p>' + esc(l.msg) + '</p><div class="meta"><span>' + esc(l.date) + '</span><span>💌</span></div></article>'
  ).join('');
}

/* ---------- Gallery ---------- */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = PHOTOS.map((p, i)=>
    '<div class="g-photo" data-i="' + i + '"><img src="' + p.src + '" alt="' + esc(p.cap) + '" loading="lazy" onerror="this.closest(\'.g-photo\').style.display=\'none\'"><div class="cap">' + esc(p.cap) + '</div></div>'
  ).join('');
  grid.querySelectorAll('.g-photo').forEach(el=>{
    el.onclick = ()=> openLightbox(parseInt(el.dataset.i, 10));
  });
  const heroPhoto = document.getElementById('heroPhoto');
  if(heroPhoto && PHOTOS.length) heroPhoto.src = PHOTOS[0].src;
}
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
function openLightbox(i){
  if(!PHOTOS[i]) return;
  lbImg.src = PHOTOS[i].src;
  lbCap.textContent = PHOTOS[i].cap;
  lb.classList.add('open');
}
document.getElementById('lbClose').onclick = ()=> lb.classList.remove('open');
lb.onclick = e=>{ if(e.target === lb) lb.classList.remove('open'); };

/* ---------- Reasons shuffle ---------- */
const reasonText = document.getElementById('reasonText');
document.getElementById('nextReasonBtn').onclick = ()=>{
  const list = reasonsFor(lang);
  let r, guard = 0;
  do{ r = list[Math.floor(Math.random()*list.length)]; guard++; } while(r === reasonText.textContent && guard < 20);
  reasonText.textContent = r;
};

/* ---------- Music - YouTube song on repeat (needs one tap first) ---------- */
const YT_VIDEO_ID = '4j0Vdb0Sj38';
let ytPlayer = null, ytReady = false, userGestured = false;
let playing = false;
function refreshMusicBtn(){
  document.getElementById('playMusicBtn').textContent = playing ? t('hero.pause') : t('hero.play');
}
function tryAutoplay(){
  if(playing || !ytReady || !ytPlayer || !userGestured) return;
  try{ ytPlayer.playVideo(); }catch(e){}
}
function markGesture(){ userGestured = true; tryAutoplay(); }
function onYouTubeIframeAPIReady(){
  try{
    ytPlayer = new YT.Player('ytPlayer', {
      height: '2', width: '2',
      videoId: YT_VIDEO_ID,
      playerVars: {autoplay: 1, loop: 1, playlist: YT_VIDEO_ID, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, playsinline: 1},
      events: {
        onReady: ()=>{ ytReady = true; tryAutoplay(); },
        onStateChange: e=>{
          if(e.data === YT.PlayerState.PLAYING){ playing = true; refreshMusicBtn(); }
          else if(e.data === YT.PlayerState.PAUSED){ playing = false; refreshMusicBtn(); }
        }
      }
    });
  }catch(e){}
}
document.getElementById('playMusicBtn').onclick = ()=>{
  if(!ytReady || !ytPlayer) return;
  try{ if(playing) ytPlayer.pauseVideo(); else ytPlayer.playVideo(); }catch(e){}
};
['pointerdown','keydown','touchend'].forEach(ev=>document.addEventListener(ev, markGesture, {once:true}));

/* ---------- Nav ---------- */
document.getElementById('hamburger').onclick = ()=>{
  document.getElementById('navLinks').classList.toggle('open');
};
document.getElementById('langBtn').onclick = ()=> setLang(lang === 'en' ? 'my' : 'en');

/* ---------- Floating hearts ---------- */
const heartsBg = document.getElementById('heartsBg');
setInterval(()=>{
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = ['💚','🌿','🍃','💚','✨'][Math.floor(Math.random()*5)];
  h.style.left = Math.random()*100 + 'vw';
  h.style.fontSize = (12 + Math.random()*18) + 'px';
  h.style.animationDuration = (6 + Math.random()*6) + 's';
  heartsBg.appendChild(h);
  setTimeout(()=>h.remove(), 10000);
}, 700);

/* ---------- Language ---------- */
function applyLang(){
  document.documentElement.lang = lang === 'my' ? 'my' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = t(el.dataset.i18n);
    if(typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const v = t(el.dataset.i18nPh);
    if(typeof v === 'string') el.placeholder = v;
  });
  document.getElementById('langBtn').textContent = lang === 'en' ? 'မြန်မာ' : 'English';
  document.getElementById('footerDate').textContent = new Date().getFullYear();
  renderNames();
  renderLetters();
  renderTimeline();
  const list = reasonsFor(lang);
  if(reasons_en.indexOf(reasonText.textContent) !== -1 || reasons_my.indexOf(reasonText.textContent) !== -1){
    reasonText.textContent = list[0];
  }
  refreshMusicBtn();
}
applyLang();
