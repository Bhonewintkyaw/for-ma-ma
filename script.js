/* Storage keys */
const LS = {
  names: 'love_names',
  letters: 'love_letters',
  photos: 'love_photos',
  timeline: 'love_timeline',
  lang: 'love_lang',
  final: 'love_final'
};

/* ---------- i18n dictionary (English + Burmese) ---------- */
const I18N = {
en: {
  "nav.home":"Home","nav.letters":"Letters","nav.photos":"Photos","nav.story":"Our Story","nav.reasons":"Reasons",
  "hero.eyebrow":"For the most beautiful soul","hero.forever":"Forever & Always",
  "hero.desc":"Every photo, every word on this website is a piece of my heart, made just for you.",
  "hero.days":"Days","hero.hours":"Hours","hero.mins":"Minutes",
  "hero.since":"Since we started our story","hero.lettersBtn":"Read My Letters 💌","hero.photosBtn":"See Your Photos 📸",
  "hero.tapPhoto":"Tap to add your photo","hero.favPerson":"my favorite person ♡",
  "hero.customize":"✏️ Customize Names & Date","hero.play":"🎵 Play Our Song","hero.pause":"⏸️ Pause Music",
  "hero.pickDate":"pick a date above",
  "letters.tag":"Love Letters","letters.title":"Words from my heart to yours",
  "letters.sub":"Tap a card to open it. You can edit every text to make it truly yours.","letters.add":"+ Add New Love Note",
  "gallery.tag":"Her Gallery","gallery.title":"Your beautiful moments",
  "gallery.sub":"Upload her photos. They will stay in your browser (private to your phone).",
  "gallery.add":"📸 Add Photos","gallery.clear":"Clear demo photos",
  "gallery.hint":"Tip: Tap any photo to view full screen. Long-press to delete (on phone).",
  "story.tag":"Our Story","story.title":"How our love grew",
  "story.m1t":"The Day We Met","story.m1d":"The moment my world got brighter. I still remember your smile.","story.m1date":"Day 1",
  "story.m2t":"First Long Talk","story.m2d":"Hours felt like minutes. I knew you were special.","story.m2date":"Soon After",
  "story.m3t":"We Fell In Love","story.m3d":"And I never want to fall out of it.","story.m3date":"Forever",
  "story.add":"+ Add Memory",
  "reasons.tag":"100 Reasons","reasons.title":"Why I love you","reasons.sub":"Tap to shuffle a new reason","reasons.next":"Another reason 💚",
  "reasons.w1":"Your smile","reasons.w2":"Your kindness","reasons.w3":"Your eyes","reasons.w4":"Your voice","reasons.w5":"Your care","reasons.w6":"Your soul",
  "final.title":"To my love,",
  "final.body":"I made this little corner of the internet just for you. Every word here is true, every photo is precious to me. No matter where we are, you can open this on your phone and know how deeply you are loved. You are my today and all of my tomorrows. Yours, always.",
  "final.edit":"Edit this letter",
  "footer.made":"Made with 💚 just for","footer.offline":"Share this file with her — works offline on phone.",
  "sync.on":"☁️ Synced across devices","sync.off":"📴 This device only (cloud off)",
  "modal.customize":"Customize your site ✨","modal.her":"Her Name","modal.me":"Your Name","modal.since":"Since Date",
  "modal.herPh":"e.g. Ananya","modal.mePh":"e.g. Rohan",
  "modal.save":"Save","modal.cancel":"Cancel","modal.savedHint":"Saved on this device only — so you can keep it private.",
  "modal.editNote":"Edit Love Note","modal.title":"Title","modal.message":"Message","modal.delete":"Delete",
  "js.confirmDeleteNote":"Delete this love note?","js.removePhoto":"Remove this photo?",
  "js.clearDemo":"Clear demo photos? You can then upload your own.",
  "js.memTitle":"Memory title (e.g. Our first trip)","js.memDesc":"Short description","js.memDate":"Date label (e.g. 14 Feb 2024)",
  "js.editFinal":"Edit your final letter:",  "js.musicBlocked":"Tap again to allow music (browser blocked autoplay)",
  "js.storageFull":"This site's phone storage is full — delete some photos first, then add new ones.",
  "js.myLove":"My Love","js.iLoveYou":"I love you...","js.favPersonCap":"My favorite person ♡"
},
my: {
  "nav.home":"ပင်မ","nav.letters":"စာများ","nav.photos":"ဓာတ်ပုံများ","nav.story":"ကျွန်ုပ်တို့ဇာတ်လမ်း","nav.reasons":"အကြောင်းရင်းများ",
  "hero.eyebrow":"အလှဆုံးသော စိတ်ဝိဉာဉ်လေးအတွက်","hero.forever":"ထာဝရ နှင့် အမြဲတမ်း",
  "hero.desc":"ဒီဝက်ဘ်ဆိုက်ထဲက ဓာတ်ပုံတိုင်း၊ စာတိုင်းဟာ မမတစ်ယောက်တည်းအတွက် ရည်ရွယ်ထားတဲ့ မောင့်နှလုံးသားရဲ့ အစိတ်အပိုင်းလေးတွေပါ။",
  "hero.days":"ရက်","hero.hours":"နာရီ","hero.mins":"မိနစ်",
  "hero.since":"ကျွန်ုပ်တို့ ဇာတ်လမ်းစတင်ခဲ့သည်မှာ","hero.lettersBtn":"မောင့်စာတွေ ဖတ်ကြည့်ပါ 💌","hero.photosBtn":"မမဓာတ်ပုံတွေ ကြည့်ပါ 📸",
  "hero.tapPhoto":"ဓာတ်ပုံထည့်ရန် တို့ပါ","hero.favPerson":"မောင့်အချစ်ဆုံး လူလေး ♡",
  "hero.customize":"✏️ နာမည်နှင့် ရက်စွဲ ပြင်ရန်","hero.play":"🎵 ကျွန်ုပ်တို့ သီချင်းဖွင့်ရန်","hero.pause":"⏸️ ခေတ္တရပ်ရန်",
  "hero.pickDate":"အထက်မှာ ရက်စွဲရွေးပါ",
  "letters.tag":"ချစ်ခြင်းစာများ","letters.title":"နှလုံးသားထဲက စကားလက်ဆောင်များ",
  "letters.sub":"ကတ်တစ်ခုခုကို တို့ပြီး ဖွင့်ကြည့်ပါ။ စာတိုင်းကို ကိုယ်ပိုင်ဖြစ်အောင် ပြင်နိုင်ပါတယ်။","letters.add":"+ ချစ်ခြင်းမှတ်စု အသစ်ထည့်ရန်",
  "gallery.tag":"သူ့ရဲ့ပုံရိပ်များ","gallery.title":"မမရဲ့ လှပသော အခိုက်အတန့်များ",
  "gallery.sub":"သူ့ဓာတ်ပုံတွေ တင်ထားလိုက်ပါ။ သင့်ဘရောက်ဇာထဲမှာပဲ သိမ်းထားမယ် (သင့်ဖုန်းထဲမှာ လျှို့ဝှက်ပါတယ်)။",
  "gallery.add":"📸 ဓာတ်ပုံထည့်ရန်","gallery.clear":"နမူနာပုံများ ရှင်းရန်",
  "gallery.hint":"အကြံပြုချက် - ဓာတ်ပုံကိုတို့ပြီး အပြည့်ကြည့်နိုင်တယ်။ ဖျက်ဖို့ ကြာကြာဖိထားပါ။",
  "story.tag":"ကျွန်ုပ်တို့ ဇာတ်လမ်း","story.title":"ကျွန်ုပ်တို့ အချစ် ကြီးထွားလာပုံ",
  "story.m1t":"ကျွန်ုပ်တို့ စတွေ့ခဲ့တဲ့နေ့","story.m1d":"မောင့်ကမ္ဘာ ပိုတောက်ပသွားတဲ့ အခိုက်အတန့်ပဲ။ မမအပြုံးကို ခုထိ မှတ်မိနေတုန်းပါ။","story.m1date":"နေ့ ၁",
  "story.m2t":"ပထမဆုံး စကားကြာကြာပြောဖြစ်ခြင်း","story.m2d":"နာရီတွေက မိနစ်တွေလို ထင်ခဲ့ရတယ်။ မမ တကယ်ထူးခြားတယ်ဆိုတာ သိလိုက်ပြီ။","story.m2date":"မကြာမီ",
  "story.m3t":"ကျွန်ုပ်တို့ ချစ်မိသွားပြီ","story.m3d":"ဒီအချစ်ထဲက ဘယ်တော့မှ မထွက်ချင်တော့ဘူး။","story.m3date":"ထာဝရ",
  "story.add":"+ အမှတ်တရ ထည့်ရန်",
  "reasons.tag":"အကြောင်းပြချက် ၁၀၀","reasons.title":"မမကို ဘာလို့ ချစ်တာလဲ","reasons.sub":"အကြောင်းပြချက်အသစ်အတွက် တို့လိုက်ပါ","reasons.next":"နောက်အကြောင်းပြချက် 💚",
  "reasons.w1":"မမအပြုံး","reasons.w2":"မမကြင်နာမှု","reasons.w3":"မမမျက်ဝန်း","reasons.w4":"မမအသံ","reasons.w5":"မမဂရုစိုက်မှု","reasons.w6":"မမဝိဉာဉ်",
  "final.title":"ချစ်ရသူသို့၊",
  "final.body":"အင်တာနက်ရဲ့ ထောင့်သေးသေးလေးတစ်ခုကို မမတစ်ယောက်တည်းအတွက် ဖန်တီးထားတာပါ။ ဒီစာတိုင်းဟာ အမှန်တွေချည်းပဲ၊ ဓာတ်ပုံတိုင်းဟာ မောင့်အတွက် တန်ဖိုးအရှိဆုံးတွေပါ။ ဘယ်နေရာရောက်ရောက် ဖုန်းလေးဖွင့်ပြီး မမ ဘယ်လောက်ချစ်ခံနေရလဲဆိုတာ သိနိုင်ပါတယ်။ မမဟာ မောင့်ရဲ့ ဒီနေ့ရော၊ မနက်ဖြန်တိုင်းရောပါပဲ။ အမြဲချစ်နေမယ့်သူ။",
  "final.edit":"ဒီစာကို ပြင်ရန်",
  "footer.made":"💚 ဖြင့် ပြုလုပ်ထားသည်","footer.offline":"ဒီဖိုင်ကို သူနဲ့ မျှဝေလိုက်ပါ — ဖုန်းမှာ အော့ဖ်လိုင်း အလုပ်လုပ်ပါတယ်။",
  "sync.on":"☁️ စက်အားလုံး sync လုပ်ပြီးပါပြီ","sync.off":"📴 ဒီစက်ထဲမှာသာ ရှိသေးတယ် (cloud မချိတ်သေးပါ)",
  "modal.customize":"သင့်ဆိုက်ကို စိတ်ကြိုက်ပြင်ပါ ✨","modal.her":"သူ့နာမည်","modal.me":"သင့်နာမည်","modal.since":"စတင်ခဲ့သည့် ရက်စွဲ",
  "modal.herPh":"ဥပမာ - သဲစု","modal.mePh":"ဥပမာ - အောင်မင်း",
  "modal.save":"သိမ်းရန်","modal.cancel":"မလုပ်တော့ပါ","modal.savedHint":"ဒီစက်ထဲမှာပဲ သိမ်းထားမယ် — လျှို့ဝှက်ထားနိုင်ပါတယ်။",
  "modal.editNote":"ချစ်ခြင်းမှတ်စု ပြင်ရန်","modal.title":"ခေါင်းစဉ်","modal.message":"စာသား","modal.delete":"ဖျက်ရန်",
  "js.confirmDeleteNote":"ဒီချစ်ခြင်းမှတ်စုကို ဖျက်မလား?","js.removePhoto":"ဒီဓာတ်ပုံကို ဖယ်ရှားမလား?",
  "js.clearDemo":"နမူနာဓာတ်ပုံတွေ ရှင်းမလား? ပြီးရင် ကိုယ်ပိုင်ပုံတွေ တင်နိုင်ပါတယ်။",
  "js.memTitle":"အမှတ်တရ ခေါင်းစဉ် (ဥပမာ - ပထမဆုံး ခရီးစဉ်)","js.memDesc":"အကျဉ်းဖော်ပြချက်","js.memDate":"ရက်စွဲအညွှန်း (ဥပမာ - ၁၄ ဖေဖော်ဝါရီ ၂၀၂၄)",
  "js.editFinal":"နောက်ဆုံးစာကို ပြင်ရန်:",  "js.musicBlocked":"ထပ်တို့ပြီး ဂီတခွင့်ပြုပါ (ဘရောက်ဇာက ပိတ်ထားလို့ပါ)",
  "js.storageFull":"ဒီဆိုက်အတွက် ဖုန်းမှတ်ဉာဏ် ပြည့်နေပြီ — ဓာတ်ပုံအချို့ အရင်ဖျက်ပြီးမှ အသစ်ထည့်ပါ။",
  "js.myLove":"ချစ်ရသူ","js.iLoveYou":"ချစ်တယ်...","js.favPersonCap":"မောင့်အချစ်ဆုံး လူလေး ♡"
}
};
let lang = localStorage.getItem(LS.lang) || 'en';
if(!I18N[lang]) lang = 'en';
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }

/* ---------- Cloud sync (Firebase, optional) ---------- */
/* To sync photos + texts across devices:
   1) create a free Firebase project (guide in README),
   2) paste your web config object below, commit + push.
   While this stays null, everything works on this device only. */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBseVQlTJPhMbEgcmbQ6aPJjPt_7hZBa_w",
  authDomain: "for-ma-ma.firebaseapp.com",
  projectId: "for-ma-ma",
  storageBucket: "for-ma-ma.firebasestorage.app",
  messagingSenderId: "24438936205",
  appId: "1:24438936205:web:e7674c40b34264a79cc8c4"
};
const SITE_ID = 'shared';

const Cloud = {
  ready: false, db: null,
  async init(){
    if(!FIREBASE_CONFIG || typeof firebase === 'undefined') return false;
    try{
      if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      await firebase.auth().signInAnonymously();
      this.db = firebase.firestore();
      this.ready = true;
      return true;
    }catch(e){ console.warn('Cloud sync off:', e); return false; }
  },
  doc(name){ return this.db.collection('love').doc(SITE_ID + '_' + name); },
  save(name, data){
    if(!this.ready) return;
    try{ this.doc(name).set({data: data, updatedAt: firebase.firestore.FieldValue.serverTimestamp()}, {merge:true}).catch(e=>console.warn('cloud save failed:', e)); }
    catch(e){ console.warn('cloud save failed:', e); }
  },
  onDoc(name, cb){
    if(!this.ready) return;
    try{ this.doc(name).onSnapshot(s=>{ if(s.exists && s.data()) cb(s.data().data); }, e=>console.warn('cloud listen failed:', e)); }
    catch(e){ console.warn('cloud listen failed:', e); }
  },
  /* Photos live in their own docs (no Storage bucket needed on the free plan).
     Cloud copies are shrunk harder to stay far under the 1MB/doc limit. */
  /* NOTE: no orderBy here — that would need a composite index. We sort client-side. */
  photosQuery(){ return this.db.collection('lovephotos').where('site', '==', SITE_ID); },
  async addPhotoDoc(item){
    const ref = await this.db.collection('lovephotos').add({site: SITE_ID, src: item.src, cap: item.cap || '', ts: Date.now()});
    return ref.id;
  },
  deletePhotoDoc(id){
    if(!this.ready || !id) return;
    try{ this.db.collection('lovephotos').doc(id).delete().catch(()=>{}); }catch(e){}
  },
  async shrinkForCloud(dataUrl){
    try{ return await shrinkDataURL(dataUrl, 640, 0.65); }
    catch(e){ return dataUrl; }
  }
};

function persistNames(){ safeSave(LS.names, JSON.stringify(names)); Cloud.save('names', names); }
function persistLetters(){ safeSave(LS.letters, JSON.stringify(letters)); Cloud.save('letters', letters); }
function persistPhotos(){ safeSave(LS.photos, JSON.stringify(photos)); ensurePhotosSynced(); }

/* Upload any not-yet-synced photos as their own Firestore docs (free plan friendly) */
let syncingPhotos = false, photosSyncQueued = false;
async function ensurePhotosSynced(){
  if(!Cloud.ready) return;
  if(syncingPhotos){ photosSyncQueued = true; return; }
  syncingPhotos = true;
  try{
    let touched = false;
    for(const p of photos){
      if(!p.id && p.src){
        let src = p.src;
        if(src.indexOf('data:') === 0) src = await Cloud.shrinkForCloud(src);
        try{ p.id = await Cloud.addPhotoDoc({src: src, cap: p.cap}); touched = true; }
        catch(e){ console.warn('photo sync failed:', e); }
      }
    }
    if(touched) safeSave(LS.photos, JSON.stringify(photos));
  }finally{
    syncingPhotos = false;
    if(photosSyncQueued){ photosSyncQueued = false; ensurePhotosSynced(); }
  }
}
function cloudPhotoList(docs){
  const list = docs.map(d=>{ const v = d.data() || {}; return {id: d.id, src: v.src || '', cap: v.cap || '', ts: v.ts || 0}; });
  list.sort((a, b)=> b.ts - a.ts);
  return list.map(p=>({id: p.id, src: p.src, cap: p.cap}));
}
function samePhotoList(a, b){
  if(a.length !== b.length) return false;
  return a.every((p, i)=> p.src === b[i].src && (p.cap || '') === (b[i].cap || ''));
}
/* Never drop local uploads that are still waiting for their cloud copy */
function mergePhotosWithPending(list){
  const have = {};
  list.forEach(p=>{ have[p.src] = true; });
  const pending = photos.filter(p=>!p.id && p.src && !have[p.src]);
  return pending.concat(list);
}
async function photoSyncStart(){
  try{
    const snap = await Cloud.photosQuery().get();
    if(snap.empty){
      if(photos.length) ensurePhotosSynced();
    }else{
      const list = mergePhotosWithPending(cloudPhotoList(snap.docs));
      photos = list;
      safeSave(LS.photos, JSON.stringify(photos));
      renderGallery();
    }
  }catch(e){ console.warn('photo sync start failed:', e); }
  try{
    Cloud.photosQuery().onSnapshot(snap=>{
      const list = mergePhotosWithPending(cloudPhotoList(snap.docs));
      if(samePhotoList(photos.map(p=>({src: p.src, cap: p.cap})), list)) return;
      photos = list;
      safeSave(LS.photos, JSON.stringify(photos));
      renderGallery();
    }, e=>console.warn('photo listen failed:', e));
  }catch(e){ console.warn('photo listen failed:', e); }
}
function persistTimeline(){ safeSave(LS.timeline, JSON.stringify(timelineItems)); Cloud.save('timeline', timelineItems); }
function persistFinal(text){ safeSave(LS.final, text); Cloud.save('final', text); }
function setFinalText(v){ const el = document.getElementById('finalLetterText'); el.innerText = v; el.dataset.customized = '1'; }
function refreshSyncStatus(){
  const el = document.getElementById('syncStatus');
  if(el) el.textContent = Cloud.ready ? t('sync.on') : t('sync.off');
}
function renderStoredTimeline(){
  document.querySelectorAll('#timeline .t-item[data-custom="1"]').forEach(el=>el.remove());
  const tl = document.getElementById('timeline');
  timelineItems.forEach(it=>{
    const div = document.createElement('div');
    div.className = 't-item'; div.dataset.custom = '1';
    div.innerHTML = '<span class="t-dot">💚</span><div class="t-card"><h3>' + esc(it.title || '') + '</h3><p>' + esc(it.desc || '') + '</p><span class="t-date">' + esc(it.date || '') + '</span></div>';
    tl.appendChild(div);
  });
}

/* Default Love Texts - EDIT THESE TO YOUR OWN */
const defaultLetters_en = [
  { title: "Good Morning, My Love ☀️", msg: "Every morning I wake up grateful that you exist. You are the first thought in my mind and the reason I smile before my feet even touch the floor. I love you more than yesterday.", date: "Forever yours" },
  { title: "You Are My Safe Place 🤍", msg: "In your arms I have found my home. When the world is too loud, your voice calms every storm inside me. Thank you for being my peace.", date: "Always" },
  { title: "I Still Get Butterflies 🦋", msg: "Even after all this time, my heart still skips a beat when you look at me. You make me feel like the luckiest person alive.", date: "With all my heart" },
  { title: "My Promise To You 💍", msg: "I promise to choose you every single day. In good times and hard times, I will be your biggest supporter, your best friend, and your love.", date: "Forever & Always" },
  { title: "Your Smile Is My Sun 🌸", msg: "Your smile can fix any bad day. It lights up my whole world. Please never stop smiling, my love. I live for it.", date: "Yours only" },
  { title: "Missing You Tonight 🌙", msg: "The night feels incomplete without your goodnight voice. I’m counting the minutes until I can see you again. Come closer in my dreams, jaan.", date: "Tonight" },
];

/* Reasons */
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
  "မမရဲ့ ချစ်စရာ စိတ်ဆိုးမျက်နှာလေး — ကိုယ် ခိုးသဘောကျနေတာ။",
  "မမ မောင့်နာမည်ခေါ်တဲ့ ပုံစံလေး။",
  "လူတိုင်းအပေါ် ထားတဲ့ မမကြင်နာမှု။",
  "မမပါတဲ့ ဓာတ်ပုံတိုင်း လှသွားစေတာ။",
  "မမဖက်ထားတာလေးက အိမ်လိုပဲ နွေးထွေးတယ်။",
  "မမနဲ့အတူဆို ကိုယ် ပိုကောင်းတဲ့လူ ဖြစ်ချင်တယ်။",
  "နာရီပေါင်းများစွာ နားထောင်ချင်တဲ့ မမအသံလေး။",
  "မောင့်အကြောင်း အသေးအဖွဲလေးတွေကအစ မှတ်ထားတတ်တာ။",
  "မမရဲ့ သန်မာမှုနဲ့ နူးညံ့တဲ့ နှလုံးသား။",
  "မမက မမဖြစ်နေလို့ပဲ — အဲ့ဒါ မောင့်အကြိုက်ဆုံးအရာပါ။"
];
const defaultLetters_my = [
  { title: "မင်္ဂလာပါ ချစ်ရသူ ☀️", msg: "မနက်တိုင်း မမရှိနေလို့ ကျေးဇူးတင်ပြီး နိုးထရတယ်။ မမဟာ မောင့်အတွေးထဲက ပထမဆုံးအတွေးပဲ၊ ခြေမချခင် ပြုံးစေတဲ့အကြောင်းပဲ။ မနေ့ကထက် ဒီနေ့ ပိုချစ်တယ်။", date: "ထာဝရ မမအတွက်" },
  { title: "မမက မောင့်ရဲ့လုံခြုံရာ 🤍", msg: "မမရင်ခွင်ထဲမှာ မောင့်အိမ်ကို ရှာတွေ့ခဲ့တယ်။ ကမ္ဘာကြီး ဆူညံလွန်းတဲ့အခါ မမအသံက မောင့်ရင်ထဲက မုန်တိုင်းတွေကို ငြိမ်စေတယ်။ မောင့်ငြိမ်းချမ်းမှုဖြစ်ပေးလို့ ကျေးဇူးပါ။", date: "အမြဲတမ်း" },
  { title: "ရင်ခုန်နေတုန်းပဲ 🦋", msg: "အချိန်တွေ ကြာသွားပေမယ့် မမကြည့်လိုက်တိုင်း နှလုံးခုန်သံ ရပ်သွားတုန်းပဲ။ မောင့်ကို ကမ္ဘာပေါ်မှာ အကံကောင်းဆုံးလူ ဖြစ်စေတယ်။", date: "နှလုံးသားအပြည့်နဲ့" },
  { title: "မမအတွက် မောင့်ကတိ 💍", msg: "နေ့တိုင်း မမကို ရွေးချယ်မယ်လို့ ကတိပေးတယ်။ အဆင်ပြေချိန်ရော ခက်ခဲချိန်ရော ကိုယ်က မမရဲ့ အားအပေးဆုံးသူ၊ အကောင်းဆုံးသူငယ်ချင်း၊ ချစ်သူဖြစ်နေမယ်။", date: "ထာဝရ & အမြဲတမ်း" },
  { title: "မမအပြုံးက မောင့်နေမမ 🌸", msg: "မမအပြုံးက ဆိုးတဲ့နေ့တိုင်းကို ကုစားနိုင်တယ်။ မောင့်ကမ္ဘာတစ်ခုလုံး လင်းသွားစေတယ်။ ချစ်ရသူ မမအပြုံး ဘယ်တော့မှ မပျောက်ပါနဲ့။ ကိုယ် အဲ့ဒါအတွက် ရှင်သန်နေတာ။", date: "မမတစ်ယောက်တည်းအတွက်" },
  { title: "ဒီည မမကို လွမ်းတယ် 🌙", msg: "မမ goodnight အသံလေးမပါပဲ ညဟာ မပြည့်စုံဘူး။ မမကို ပြန်တွေ့ဖို့ မိနစ်တိုင်း ရေတွက်နေတယ်။ မောင့်အိပ်မက်ထဲ ပိုနီးနီးလေး လာခဲ့ပါ။", date: "ဒီည" },
];
const demoCaps_en = ["My favorite smile ♡","Forever us","Your beautiful eyes","My whole world","Cutest laugh","Always you"];
const demoCaps_my = ["အကြိုက်ဆုံး အပြုံးလေး ♡","ထာဝရ ကျွန်ုပ်တို့","မမရဲ့ လှပတဲ့ မျက်ဝန်းတွေ","မောင့်ကမ္ဘာတစ်ခုလုံး","အချစ်ဆုံး ရယ်သံလေး","အမြဲ မမပါပဲ"];
function defaultLettersFor(l){ return l==='my' ? defaultLetters_my : defaultLetters_en; }
function reasonsFor(l){ return l==='my' ? reasons_my : reasons_en; }
function isDefaultLetters(arr){
  if(!Array.isArray(arr)) return false;
  return JSON.stringify(arr)===JSON.stringify(defaultLetters_en) || JSON.stringify(arr)===JSON.stringify(defaultLetters_my);
}

/* ---------- Names & Counter ---------- */
let names = JSON.parse(localStorage.getItem(LS.names) || 'null') || { her: "My Princess", me: "Me", since: "" };

function renderNames(){
  document.getElementById('herNameDisplay').textContent = names.her;
  document.getElementById('myNameDisplay').textContent = names.me;
  document.getElementById('footerName').textContent = names.her;
  document.getElementById('signName').textContent = names.me;
  if(names.since){
    const d = new Date(names.since);
    document.getElementById('sinceDateText').textContent = d.toLocaleDateString(lang==='my'?'my-MM':'en-IN',{day:'numeric',month:'long',year:'numeric'});
    startCounter(d);
  } else {
    document.getElementById('sinceDateText').textContent = t('hero.pickDate');
  }
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
  counterInterval = setInterval(tick,60000);
}
renderNames();
document.getElementById('footerDate').textContent = new Date().getFullYear();

/* Name modal */
const nameModal = document.getElementById('nameModal');
document.getElementById('editNamesBtn').onclick = ()=>{
  document.getElementById('inputHer').value = names.her;
  document.getElementById('inputMe').value = names.me;
  document.getElementById('inputDate').value = names.since;
  nameModal.classList.add('open');
};
document.getElementById('closeModal').onclick = ()=> nameModal.classList.remove('open');
nameModal.onclick = e => { if(e.target===nameModal) nameModal.classList.remove('open') };
document.getElementById('saveNames').onclick = ()=>{
  names.her = document.getElementById('inputHer').value.trim() || names.her;
  names.me = document.getElementById('inputMe').value.trim() || names.me;
  names.since = document.getElementById('inputDate').value;
  persistNames();
  renderNames();
  nameModal.classList.remove('open');
};

/* ---------- Letters ---------- */
let letters = JSON.parse(localStorage.getItem(LS.letters) || 'null') || defaultLettersFor(lang);
let editIndex = null;
const grid = document.getElementById('lettersGrid');
const editModal = document.getElementById('editModal');

function renderLetters(){
  grid.innerHTML = letters.map((l,i)=>`
    <article class="letter-card" data-i="${i}">
      <h3>${esc(l.title)}</h3>
      <p>${esc(l.msg)}</p>
      <div class="meta"><span>${esc(l.date)}</span><span>💌</span></div>
    </article>
  `).join('');
  grid.querySelectorAll('.letter-card').forEach(c=>{
    c.onclick = ()=> openEdit(parseInt(c.dataset.i));
  });
  persistLetters();
}
function esc(s){ return s.replace(/[&<>"']/g, m=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])) }

function openEdit(i){
  editIndex = i;
  document.getElementById('editTitle').value = letters[i].title;
  document.getElementById('editMsg').value = letters[i].msg;
  document.getElementById('deleteEdit').style.display = '';
  editModal.classList.add('open');
}
document.getElementById('addLetterBtn').onclick = ()=>{
  editIndex = null;
  document.getElementById('editTitle').value = '';
  document.getElementById('editMsg').value = '';
  document.getElementById('deleteEdit').style.display = 'none';
  editModal.classList.add('open');
};
document.getElementById('cancelEdit').onclick = ()=> editModal.classList.remove('open');
editModal.onclick = e=> { if(e.target===editModal) editModal.classList.remove('open') };
document.getElementById('saveEdit').onclick = ()=>{
  const tt = document.getElementById('editTitle').value.trim() || t('js.myLove');
  const m = document.getElementById('editMsg').value.trim() || t('js.iLoveYou');
  if(editIndex===null){
    letters.unshift({title:tt, msg:m, date: new Date().toLocaleDateString()});
  } else {
    letters[editIndex].title = tt;
    letters[editIndex].msg = m;
  }
  editModal.classList.remove('open');
  renderLetters();
};
document.getElementById('deleteEdit').onclick = ()=>{
  if(editIndex!==null && confirm(t('js.confirmDeleteNote'))){
    letters.splice(editIndex,1);
    editModal.classList.remove('open');
    renderLetters();
  }
};
renderLetters();

/* ---------- Gallery ---------- */
const galleryGrid = document.getElementById('galleryGrid');
const photoUpload = document.getElementById('photoUpload');
const heroUpload = document.getElementById('heroUpload');
const heroImg = document.getElementById('heroImg');

// demo photos (unsplash)
const demo = [
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80",
  "https://images.unsplash.com/photo-1520854221256-589c3578d07c?w=600&q=80",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&q=80",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80"
];
let photos = JSON.parse(localStorage.getItem(LS.photos) || 'null');
if(!photos){
  const caps = lang==='my' ? demoCaps_my : demoCaps_en;
  photos = demo.map((src,i)=>({src, cap: caps[i%caps.length]}));
}

function renderGallery(){
  galleryGrid.innerHTML = photos.map((p,i)=>`
    <div class="g-photo" data-i="${i}">
      <img src="${p.src}" alt="${esc(p.cap)}" loading="lazy">
      <div class="cap">${esc(p.cap)}</div>
    </div>
  `).join('');
  galleryGrid.querySelectorAll('.g-photo').forEach(el=>{
    el.onclick = ()=> openLightbox(parseInt(el.dataset.i));
    // long press to delete on mobile
    let timer;
    el.addEventListener('touchstart', ()=> timer=setTimeout(()=>deletePhoto(parseInt(el.dataset.i)),700));
    el.addEventListener('touchend', ()=> clearTimeout(timer));
    el.addEventListener('contextmenu', e=>{ e.preventDefault(); deletePhoto(parseInt(el.dataset.i)); });
  });
  persistPhotos();
  // hero
  if(photos[0]){
    heroImg.innerHTML = `<img src="${photos[0].src}">`;
    heroImg.classList.add('has-img');
  }
}
function deletePhoto(i){
  if(confirm(t('js.removePhoto'))){
    const gone = photos[i];
    photos.splice(i,1);
    renderGallery();
    if(gone) Cloud.deletePhotoDoc(gone.id);
  }
}
renderGallery();
setTimeout(migrateStoredPhotos, 800);

photoUpload.onchange = async e=>{
  const files = [...e.target.files];
  for(const f of files){
    if(f.type && f.type.indexOf('image/') !== 0) continue;
    const src = await toDataURL(f);
    if(!src) continue;
    photos.unshift({src, cap: f.name.replace(/\.[^/.]+$/,"") || t('js.favPersonCap')});
  }
  renderGallery();
  e.target.value='';
};
heroImg.onclick = ()=> heroUpload.click();
heroUpload.onchange = async e=>{
  const f = e.target.files[0];
  if(!f) return;
  const src = await toDataURL(f);
  if(!src) return;
  photos.unshift({src, cap:t('js.favPersonCap')});
  renderGallery();
};
/* Save without crashing when storage is full (big photos can exceed the ~5MB limit) */
function safeSave(key, value){
  try{ localStorage.setItem(key, value); return true; }
  catch(e){ alert(t('js.storageFull')); return false; }
}

/* Compress uploads (phone camera photos are huge) so they fit storage and survive refresh */
function toDataURL(file){
  return new Promise(res=>{
    const r = new FileReader();
    r.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        try{
          let w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
          const s = Math.min(1, 1280 / Math.max(w, h));
          if(s < 1){
            w = Math.max(1, Math.round(w*s)); h = Math.max(1, Math.round(h*s));
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            c.getContext('2d').drawImage(img, 0, 0, w, h);
            res(c.toDataURL('image/jpeg', 0.82));
            return;
          }
        }catch(e){ /* fall through to original */ }
        res(r.result);
      };
      img.onerror = ()=> res(r.result);
      img.src = r.result;
    };
    r.onerror = ()=> res(null);
    r.readAsDataURL(file);
  });
}

/* Shrink previously stored oversized uploads so they fit storage again */
function shrinkDataURL(src, maxDim, quality){
  return new Promise(res=>{
    const img = new Image();
    img.onload = ()=>{
      try{
        let w = img.naturalWidth, h = img.naturalHeight;
        const s = Math.min(1, (maxDim||1280) / Math.max(w, h));
        if(s >= 1) return res(src);
        w = Math.max(1, Math.round(w*s)); h = Math.max(1, Math.round(h*s));
        const c = document.createElement('canvas'); c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        res(c.toDataURL('image/jpeg', quality || 0.82));
      }catch(e){ res(src); }
    };
    img.onerror = ()=> res(src);
    img.src = src;
  });
}
async function migrateStoredPhotos(){
  let changed = false;
  for(const p of photos){
    if(p.src && p.src.indexOf('data:') === 0 && p.src.length > 600000){
      p.src = await shrinkDataURL(p.src, 1280);
      changed = true;
    }
  }
  if(changed) renderGallery();
}
document.getElementById('clearPhotosBtn').onclick = ()=>{
  if(confirm(t('js.clearDemo'))){
    photos = [];
    renderGallery();
  }
};

/* Lightbox */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
function openLightbox(i){
  lbImg.src = photos[i].src;
  lbCap.textContent = photos[i].cap;
  lb.classList.add('open');
}
document.getElementById('lbClose').onclick = ()=> lb.classList.remove('open');
lb.onclick = e=> { if(e.target===lb) lb.classList.remove('open') }

/* Timeline (user-added memories persist per device + cloud) */
let timelineItems = JSON.parse(localStorage.getItem(LS.timeline) || 'null') || [];
renderStoredTimeline();
const storedFinal = localStorage.getItem(LS.final);
if(storedFinal){ setFinalText(storedFinal); }

/* Timeline add */
document.getElementById('addMemoryBtn').onclick = ()=>{
  const title = prompt(t('js.memTitle'));
  if(!title) return;
  const desc = prompt(t('js.memDesc')) || "";
  const date = prompt(t('js.memDate')) || "";
  timelineItems.push({title: title, desc: desc, date: date});
  persistTimeline();
  renderStoredTimeline();
};

/* Reasons shuffle */
const reasonText = document.getElementById('reasonText');
document.getElementById('nextReasonBtn').onclick = ()=>{
  const list = reasonsFor(lang);
  let r;
  do{ r = list[Math.floor(Math.random()*list.length)] } while(r===reasonText.textContent);
  reasonText.textContent = r;
};

/* Final letter edit */
document.getElementById('editFinalBtn').onclick = ()=>{
  const cur = document.getElementById('finalLetterText').innerText;
  const next = prompt(t('js.editFinal'), cur);
  if(next!==null){ setFinalText(next); persistFinal(next); }
};

/* Nav hamburger */
document.getElementById('hamburger').onclick = ()=>{
  document.getElementById('navLinks').classList.toggle('open');
};

/* Floating hearts */
const heartsBg = document.getElementById('heartsBg');
setInterval(()=>{
  const h=document.createElement('div');
  h.className='heart';
  h.textContent=['💚','🌿','🍃','💚','✨'][Math.floor(Math.random()*5)];
  h.style.left = Math.random()*100+'vw';
  h.style.fontSize = (12+Math.random()*18)+'px';
  h.style.animationDuration = (6+Math.random()*6)+'s';
  heartsBg.appendChild(h);
  setTimeout(()=>h.remove(),10000);
},700);

/* Music - uses a free romantic lofi */
const audio = document.getElementById('audio');
let playing=false;
function refreshMusicBtn(){
  document.getElementById('playMusicBtn').textContent = playing ? t('hero.pause') : t('hero.play');
}
document.getElementById('playMusicBtn').onclick = async ()=>{
  if(!playing){
    audio.src = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_1c8c07e5d8.mp3?filename=romantic-love-piano-112199.mp3";
    try{ await audio.play(); playing=true; refreshMusicBtn(); } catch(e){ alert(t('js.musicBlocked')) }
  } else { audio.pause(); playing=false; refreshMusicBtn(); }
};

/* ---------- Language switcher ---------- */
function applyLang(l){
  lang = I18N[l] ? l : 'en';
  safeSave(LS.lang, lang);
  document.documentElement.lang = lang==='my' ? 'my' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if(el.id==='finalLetterText' && el.dataset.customized==='1') return;
    const v = t(el.dataset.i18n);
    if(typeof v==='string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const v = t(el.dataset.i18nPh);
    if(typeof v==='string') el.placeholder = v;
  });
  document.getElementById('langBtn').textContent = lang==='en' ? 'မြန်မာ' : 'English';
  // refresh dynamic defaults only if user hasn't customized them
  if(isDefaultLetters(letters)){
    letters = defaultLettersFor(lang);
    renderLetters();
  }
  const list = reasonsFor(lang);
  if(reasons_en.includes(reasonText.textContent) || reasons_my.includes(reasonText.textContent)){
    reasonText.textContent = list[0];
  }
  renderNames();
  refreshMusicBtn();
  refreshSyncStatus();
}
document.getElementById('langBtn').onclick = ()=>{
  applyLang(lang==='en' ? 'my' : 'en');
};
applyLang(lang);

/* ---------- Cloud bootstrap: seed-or-pull + live subscribe ---------- */
async function seedOrPull(section, getLocal, applyCloud, localWins){
  try{
    const snap = await Cloud.doc(section).get();
    const hasCloud = snap.exists && snap.data() && snap.data().data !== undefined;
    if(hasCloud){
      const cv = snap.data().data;
      if(localWins && localWins(getLocal(), cv)) Cloud.save(section, getLocal());
      else applyCloud(cv);
    }else{
      Cloud.save(section, getLocal());
    }
  }catch(e){ console.warn('cloud seed/pull failed:', section, e); }
}
function subscribe(section, getLocal, applyCloud){
  Cloud.onDoc(section, v=>{
    try{ if(JSON.stringify(v) === JSON.stringify(getLocal())) return; }catch(e){}
    applyCloud(v);
  });
}
const DEFAULT_NAMES_LIT = {her: 'My Princess', me: 'Me', since: ''};
const applyNames = v=>{ if(v && typeof v === 'object'){ names = Object.assign({her:'My Princess', me:'Me', since:''}, v); renderNames(); } };
const applyLetters = v=>{ if(Array.isArray(v)){ letters = v; renderLetters(); } };
const applyTimeline = v=>{ if(Array.isArray(v)){ timelineItems = v; renderStoredTimeline(); } };
const applyFinal = v=>{ if(typeof v === 'string' && v) setFinalText(v); };
async function startCloudSync(){
  await seedOrPull('names', ()=>names, applyNames, (l,c)=> JSON.stringify(l)!==JSON.stringify(DEFAULT_NAMES_LIT) && JSON.stringify(c)===JSON.stringify(DEFAULT_NAMES_LIT));
  await seedOrPull('letters', ()=>letters, applyLetters, (l,c)=> !isDefaultLetters(l) && isDefaultLetters(c));
  await photoSyncStart();
  await seedOrPull('timeline', ()=>timelineItems, applyTimeline, (l,c)=> l.length>0 && (!Array.isArray(c) || c.length===0));
  await seedOrPull('final', ()=>document.getElementById('finalLetterText').innerText, applyFinal, (l,c)=> !!l && !c);
  subscribe('names', ()=>names, applyNames);
  subscribe('letters', ()=>letters, applyLetters);
  subscribe('timeline', ()=>timelineItems, applyTimeline);
  subscribe('final', ()=>document.getElementById('finalLetterText').innerText, applyFinal);
  migrateStoredPhotos();
}
Cloud.init().then(ok=>{ if(ok) startCloudSync(); refreshSyncStatus(); });
