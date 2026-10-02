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
  "nav.home":"Home","nav.letters":"Letters","nav.photos":"Photos","nav.story":"Our Story","nav.reasons":"Reasons","nav.settings":"Settings",
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
  "gallery.add":"📸 Add Photos",
  "gallery.hint":"Tip: Tap any photo to view full screen. Long-press to delete (on phone).",
  "story.tag":"Our Story","story.title":"How our love grew","story.sub":"Tap any memory to edit it","story.dateLabel":"Date label",
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
  "settings.tag":"Settings","settings.title":"Site settings","settings.anniv":"Anniversary",
  "sync.on":"☁️ Synced across devices","sync.off":"📴 This device only (cloud off)",
  "sync.tip":"If OFF, tap shows the error. Usually: URL/key pasted, anonymous sign-in on, setup SQL run (see README).",
  "modal.customize":"Customize your site ✨","modal.her":"Her Name","modal.me":"Your Name","modal.since":"Since Date",
  "modal.herPh":"e.g. Ananya","modal.mePh":"e.g. Rohan",
  "modal.save":"Save","modal.cancel":"Cancel","modal.savedHint":"Saved on this device only — so you can keep it private.",
  "modal.editNote":"Edit Love Note","modal.editMemory":"Edit Memory","modal.icon":"Icon","modal.title":"Title","modal.message":"Message","modal.delete":"Delete",
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
  "letters.tag":"ချစ်ခြင်းစာများ","letters.title":"နှလုံးသားထဲက စကားလက်ဆောင်များ",
  "letters.sub":"ကတ်တစ်ခုခုကို တို့ပြီး ဖွင့်ကြည့်ပါ။ စာတိုင်းကို ကိုယ်ပိုင်ဖြစ်အောင် ပြင်နိုင်ပါတယ်။","letters.add":"+ ချစ်ခြင်းမှတ်စု အသစ်ထည့်ရန်",
  "gallery.tag":"သူ့ရဲ့ပုံရိပ်များ","gallery.title":"မမရဲ့ လှပသော အခိုက်အတန့်များ",
  "gallery.sub":"သူ့ဓာတ်ပုံတွေ တင်ထားလိုက်ပါ။ သင့်ဘရောက်ဇာထဲမှာပဲ သိမ်းထားမယ် (သင့်ဖုန်းထဲမှာ လျှို့ဝှက်ပါတယ်)။",
  "gallery.add":"📸 ဓာတ်ပုံထည့်ရန်",
  "gallery.hint":"အကြံပြုချက် - ဓာတ်ပုံကိုတို့ပြီး အပြည့်ကြည့်နိုင်တယ်။ ဖျက်ဖို့ ကြာကြာဖိထားပါ။",
  "story.tag":"ကျွန်ုပ်တို့ ဇာတ်လမ်း","story.title":"ကျွန်ုပ်တို့ အချစ် ကြီးထွားလာပုံ",
  "story.m1t":"ကျွန်ုပ်တို့ စတွေ့ခဲ့တဲ့နေ့","story.m1d":"မောင့်ကမ္ဘာ ပိုတောက်ပသွားတဲ့ အခိုက်အတန့်ပဲ။ မမအပြုံးကို ခုထိ မှတ်မိနေတုန်းပါ။","story.m1date":"နေ့ ၁",
  "story.m2t":"ပထမဆုံး စကားကြာကြာပြောဖြစ်ခြင်း","story.m2d":"နာရီတွေက မိနစ်တွေလို ထင်ခဲ့ရတယ်။ မမ တကယ်ထူးခြားတယ်ဆိုတာ သိလိုက်ပြီ။","story.m2date":"မကြာမီ",
  "story.m3t":"ကျွန်ုပ်တို့ ချစ်မိသွားပြီ","story.m3d":"ဒီအချစ်ထဲက ဘယ်တော့မှ မထွက်ချင်တော့ဘူး။","story.m3date":"ထာဝရ",
  "story.sub":"အမှတ်တရတစ်ခုခုကို တို့ပြီး ပြင်နိုင်တယ်","story.dateLabel":"ရက်စွဲအညွှန်း",
  "story.add":"+ အမှတ်တရ ထည့်ရန်",
  "reasons.tag":"အကြောင်းပြချက် ၁၀၀","reasons.title":"မမကို ဘာလို့ ချစ်တာလဲ","reasons.sub":"အကြောင်းပြချက်အသစ်အတွက် တို့လိုက်ပါ","reasons.next":"နောက်အကြောင်းပြချက် 💚",
  "reasons.w1":"မမအပြုံး","reasons.w2":"မမကြင်နာမှု","reasons.w3":"မမမျက်ဝန်း","reasons.w4":"မမအသံ","reasons.w5":"မမဂရုစိုက်မှု","reasons.w6":"မမဝိဉာဉ်",
  "final.title":"ချစ်ရသူသို့၊",
  "final.body":"အင်တာနက်ရဲ့ ထောင့်သေးသေးလေးတစ်ခုကို မမတစ်ယောက်တည်းအတွက် ဖန်တီးထားတာပါ။ ဒီစာတိုင်းဟာ အမှန်တွေချည်းပဲ၊ ဓာတ်ပုံတိုင်းဟာ မောင့်အတွက် တန်ဖိုးအရှိဆုံးတွေပါ။ ဘယ်နေရာရောက်ရောက် ဖုန်းလေးဖွင့်ပြီး မမ ဘယ်လောက်ချစ်ခံနေရလဲဆိုတာ သိနိုင်ပါတယ်။ မမဟာ မောင့်ရဲ့ ဒီနေ့ရော၊ မနက်ဖြန်တိုင်းရောပါပဲ။ အမြဲချစ်နေမယ့်သူ။",
  "final.edit":"ဒီစာကို ပြင်ရန်",
  "footer.made":"💚 ဖြင့် ပြုလုပ်ထားသည်","footer.offline":"ဒီဖိုင်ကို သူနဲ့ မျှဝေလိုက်ပါ — ဖုန်းမှာ အော့ဖ်လိုင်း အလုပ်လုပ်ပါတယ်။",
  "settings.tag":"ဆက်တင်","settings.title":"ဆိုက်ဆက်တင်","settings.anniv":"နှစ်ပတ်လည်နေ့",
  "sync.on":"☁️ စက်အားလုံး sync လုပ်ပြီးပါပြီ","sync.off":"📴 ဒီစက်ထဲမှာသာ ရှိသေးတယ် (cloud မချိတ်သေးပါ)",
  "sync.tip":"OFF ပြနေရင် badge ကိုတို့ပြီး error ကြည့်ပါ။ အများစုက: URL/key ထည့်ပြီးလား၊ anonymous sign-in ဖွင့်လား၊ SQL run ပြီးလား (README ကြည့်)။",
  "modal.customize":"သင့်ဆိုက်ကို စိတ်ကြိုက်ပြင်ပါ ✨","modal.her":"သူ့နာမည်","modal.me":"သင့်နာမည်","modal.since":"စတင်ခဲ့သည့် ရက်စွဲ",
  "modal.herPh":"ဥပမာ - သဲစု","modal.mePh":"ဥပမာ - အောင်မင်း",
  "modal.save":"သိမ်းရန်","modal.cancel":"မလုပ်တော့ပါ","modal.savedHint":"ဒီစက်ထဲမှာပဲ သိမ်းထားမယ် — လျှို့ဝှက်ထားနိုင်ပါတယ်။",
  "modal.editNote":"ချစ်ခြင်းမှတ်စု ပြင်ရန်","modal.editMemory":"အမှတ်တရ ပြင်ရန်","modal.icon":"အိုင်ကွန်","modal.title":"ခေါင်းစဉ်","modal.message":"စာသား","modal.delete":"ဖျက်ရန်",
  "js.confirmDeleteNote":"ဒီချစ်ခြင်းမှတ်စုကို ဖျက်မလား?",  "js.confirmDeleteMemory":"ဒီအမှတ်တရကို ဖျက်မလား?",  "js.removePhoto":"ဒီဓာတ်ပုံကို ဖယ်ရှားမလား?",
  "js.memTitle":"အမှတ်တရ ခေါင်းစဉ် (ဥပမာ - ပထမဆုံး ခရီးစဉ်)","js.memDesc":"အကျဉ်းဖော်ပြချက်","js.memDate":"ရက်စွဲအညွှန်း (ဥပမာ - ၁၄ ဖေဖော်ဝါရီ ၂၀၂၄)",
  "js.editFinal":"နောက်ဆုံးစာကို ပြင်ရန်:",  "js.musicBlocked":"ထပ်တို့ပြီး ဂီတခွင့်ပြုပါ (ဘရောက်ဇာက ပိတ်ထားလို့ပါ)",
  "js.storageFull":"ဒီဆိုက်အတွက် ဖုန်းမှတ်ဉာဏ် ပြည့်နေပြီ — ဓာတ်ပုံအချို့ အရင်ဖျက်ပြီးမှ အသစ်ထည့်ပါ။",
  "js.myLove":"ချစ်ရသူ","js.iLoveYou":"ချစ်တယ်...","js.favPersonCap":"မောင့်အချစ်ဆုံး လူလေး ♡"
}
};
let lang = localStorage.getItem(LS.lang) || 'en';
if(!I18N[lang]) lang = 'en';
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }

/* ---------- Cloud sync (Supabase, optional) ---------- */
/* To sync photos + texts across devices:
   1) create a free Supabase project + run the SQL in README,
   2) paste your project URL + anon key below, commit + push.
   While these stay null, everything works on this device only. */
const SUPABASE_URL = "https://qdaqrhfjicmoqbzngqxl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkYXFyaGZqaWNtb3Fiem5ncXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NjMxMTIsImV4cCI6MjEwNjQzOTExMn0.13HXp00fQGwM2NkX8NN-HucO8aE7Y3nDz4RzAWY1b5Q";
const SITE_ID = 'shared';

const SB_LIB = (typeof supabase !== 'undefined' && supabase && supabase.createClient) ? supabase : null;

const Cloud = {
  ready: false, sb: null, lastError: '',
  async init(){
    if(!SUPABASE_URL || !SUPABASE_ANON_KEY || !SB_LIB){ this.lastError = 'init: supabase not configured/loaded'; return false; }
    try{
      if(!this.sb) this.sb = SB_LIB.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      const sess = await this.sb.auth.getSession();
      if(!sess.data.session) await this.sb.auth.signInAnonymously();
      this.ready = true;
      return true;
    }catch(e){ this.lastError = 'init: ' + (e.code || e.message || e); console.warn('Cloud sync off:', e); return false; }
  },
  rowKey(name){ return SITE_ID + '_' + name; },
  async getData(name){
    const res = await this.sb.from('site_data').select('data').eq('key', this.rowKey(name)).maybeSingle();
    if(res.error) throw res.error;
    return res.data ? res.data.data : undefined;
  },
  async setData(name, data){
    const res = await this.sb.from('site_data').upsert({key: this.rowKey(name), data: data}, {onConflict: 'key'});
    if(res.error) throw res.error;
  },
  save(name, data){
    if(!this.ready) return;
    this.setData(name, data).catch(e=>{ this.lastError = 'save: ' + (e.code || e.message || e); console.warn('cloud save failed:', e); });
  },
  /* Photos: full-size file in Storage (1GB free) + one row each in the photos table */
  async fetchPhotos(){
    const res = await this.sb.from('photos').select('id,src,path,cap').eq('site', SITE_ID).order('ts', {ascending: false});
    if(res.error) throw res.error;
    return (res.data || []).map(r=>({sb: r.id, src: r.src || '', cloudPath: r.path || '', cap: r.cap || ''}));
  },
  async addPhotoRow(item){
    const res = await this.sb.from('photos').insert({site: SITE_ID, src: item.src, path: item.path || '', cap: item.cap || ''}).select('id').single();
    if(res.error) throw res.error;
    return res.data.id;
  },
  deletePhotoRow(id, path){
    if(!this.ready || !this.sb) return;
    try{
      if(id) this.sb.from('photos').delete().eq('id', id).then(()=>{}, ()=>{});
      if(path) this.sb.storage.from('photos').remove([path]).then(()=>{}, ()=>{});
    }catch(e){}
  },
  async uploadFile(blob){
    const path = SITE_ID + '/' + Date.now() + '_' + Math.random().toString(36).slice(2) + '.jpg';
    const res = await this.sb.storage.from('photos').upload(path, blob, {contentType: 'image/jpeg'});
    if(res.error) throw res.error;
    return {path: path, url: this.sb.storage.from('photos').getPublicUrl(path).data.publicUrl};
  }
};

function persistNames(){ safeSave(LS.names, JSON.stringify(names)); Cloud.save('names', names); }
function persistLetters(){ safeSave(LS.letters, JSON.stringify(letters)); Cloud.save('letters', letters); }
function persistPhotos(){ safeSave(LS.photos, JSON.stringify(photos)); ensurePhotosSynced(); }
/* Local item keeps its full-res copy in src; cloudSrc is the shared Storage URL */
function effSrc(p){ return p.cloudSrc || p.src; }

/* Upload not-yet-synced photos to Supabase Storage (1GB free) + one row each */
let syncingPhotos = false, photosSyncQueued = false;
async function ensurePhotosSynced(){
  if(!Cloud.ready) return;
  if(syncingPhotos){ photosSyncQueued = true; return; }
  syncingPhotos = true;
  try{
    let touched = false, upCount = 0;
    for(const p of photos){
      if(!p.sb && p.src && !isDemoSrc(p.src)){
        try{
          if(p.src.indexOf('data:') === 0){
            try{
              const blob = await (await fetch(p.src)).blob();
              const up = await Cloud.uploadFile(blob);
              p.cloudSrc = up.url; p.cloudPath = up.path;
            }catch(uerr){
              /* Storage refused (missing bucket/policy) → keep small bytes in the row instead */
              p.cloudSrc = await shrinkDataURL(p.src, 640, 0.65);
              p.cloudPath = '';
              Cloud.lastError = 'photo storage fallback: ' + (uerr.code || uerr.message || uerr);
            }
          }else{
            p.cloudSrc = p.src; p.cloudPath = '';
          }
          p.sb = await Cloud.addPhotoRow({src: p.cloudSrc, path: p.cloudPath, cap: p.cap});
          touched = true; upCount++;
        }catch(e){ Cloud.lastError = 'photo upload: ' + (e.code || e.message || e); console.warn('photo sync failed:', e); }
      }
    }
    if(touched){ safeSave(LS.photos, JSON.stringify(photos)); slog('photos uploaded: ' + upCount); }
  }finally{
    syncingPhotos = false;
    if(photosSyncQueued){ photosSyncQueued = false; ensurePhotosSynced(); }
  }
}
function samePhotoList(a, b){
  if(a.length !== b.length) return false;
  return a.every((p, i)=> p.src === b[i].src && (p.cap || '') === (b[i].cap || ''));
}
/* Never drop local uploads that are still waiting for their cloud copy */
function mergePhotosWithPending(list){
  const have = {};
  list.forEach(p=>{ have[p.src] = true; });
  const pending = photos.filter(p=>!p.sb && p.src && !have[effSrc(p)]);
  return pending.concat(list);
}
/* Delete leftover sample-photo rows from the cloud (runs on every device) */
async function purgeDemoRows(rows){
  if(!Cloud.sb) return rows.filter(r=>!isDemoSrc(r.src));
  const keep = [];
  for(const r of rows){
    if(isDemoSrc(r.src)){
      try{ await Cloud.sb.from('photos').delete().eq('id', r.sb); }catch(e){}
    }else keep.push(r);
  }
  return keep;
}
async function reloadPhotosFromCloud(){
  try{
    let rows = await Cloud.fetchPhotos();
    rows = await purgeDemoRows(rows);
    const list = mergePhotosWithPending(rows.map(r=>({sb: r.sb, src: r.src, cloudPath: r.cloudPath, cap: r.cap})));
    if(samePhotoList(photos.map(p=>({src: effSrc(p), cap: p.cap || ''})), list)) return;
    photos = list;
    safeSave(LS.photos, JSON.stringify(photos));
    renderGallery();
    slog('photos pulled: ' + list.length);
  }catch(e){ Cloud.lastError = 'photo pull: ' + (e.code || e.message || e); console.warn('photo pull failed:', e); }
}
async function photoSyncStart(){
  try{
    let rows = await Cloud.fetchPhotos();
    rows = await purgeDemoRows(rows);
    if(!rows.length){
      if(photos.length) ensurePhotosSynced();
    }else{
      const list = mergePhotosWithPending(rows.map(r=>({sb: r.sb, src: r.src, cloudPath: r.cloudPath, cap: r.cap})));
      photos = list;
      safeSave(LS.photos, JSON.stringify(photos));
      renderGallery();
      slog('photos pulled: ' + list.length);
    }
  }catch(e){ Cloud.lastError = 'photo start: ' + (e.code || e.message || e); console.warn('photo sync start failed:', e); }
}
function startPhotoRealtime(){
  if(!Cloud.ready || !Cloud.sb) return;
  try{
    Cloud.sb.channel('love-photos')
      .on('postgres_changes', {event: '*', schema: 'public', table: 'photos'}, ()=>{ slog('photos live event'); reloadPhotosFromCloud(); })
      .subscribe((status, err)=>{ if(err) Cloud.lastError = 'photo listen: ' + (err.message || err); });
  }catch(e){ Cloud.lastError = 'photo listen: ' + (e.code || e.message || e); }
}
function persistTimeline(){ safeSave(LS.timeline, JSON.stringify(timelineItems)); Cloud.save('timeline', timelineItems); }
function persistFinal(text){ safeSave(LS.final, text); Cloud.save('final', text); }
function setFinalText(v){ const el = document.getElementById('finalLetterText'); el.innerText = v; el.dataset.customized = '1'; }
function refreshSyncStatus(){
  const el = document.getElementById('syncStatus');
  if(el) el.textContent = Cloud.ready ? t('sync.on') : t('sync.off');
}
function showSyncDiag(){
  alert((Cloud.ready ? t('sync.on') : t('sync.off')) + '\nError: ' + (Cloud.lastError || 'none') + '\n---\n' + (syncLog.length ? syncLog.join('\n') : '(no sync activity yet)') + '\n---\n' + t('sync.tip'));
}
const syncLog = [];
function slog(m){
  try{
    const line = new Date().toLocaleTimeString() + ' ' + m;
    syncLog.push(line);
    if(syncLog.length > 12) syncLog.shift();
    console.log('[sync]', line);
  }catch(e){}
}
const DEF_TIMELINE = [
  {id: 'm1', emoji: '💫', def: true},
  {id: 'm2', emoji: '💬', def: true},
  {id: 'm3', emoji: '💚', def: true}
];
/* Old stored shape was a plain customs array — upgrade it, keeping user memories */
function normalizeTimeline(v){
  if(!Array.isArray(v)) return null;
  if(!v.length) return DEF_TIMELINE.map(d=>({id: d.id, emoji: d.emoji, def: true}));
  if(v[0].def !== undefined || v[0].id) return v;
  const customs = v.map((it, i)=>({id: 'c' + Date.now() + '_' + i, emoji: '💚', title: it.title || '', desc: it.desc || '', date: it.date || ''}));
  return DEF_TIMELINE.map(d=>({id: d.id, emoji: d.emoji, def: true})).concat(customs);
}
function timelineText(it){
  if(it.def) return {title: t('story.' + it.id + 't'), desc: t('story.' + it.id + 'd'), date: t('story.' + it.id + 'date'), emoji: it.emoji || '💚'};
  return {title: it.title || '', desc: it.desc || '', date: it.date || '', emoji: it.emoji || '💚'};
}
function renderTimeline(){
  const tl = document.getElementById('timeline');
  tl.innerHTML = timelineItems.map(it=>{
    const v = timelineText(it);
    return '<div class="t-item" data-tid="' + it.id + '"><span class="t-dot">' + v.emoji + '</span><div class="t-card"><h3>' + esc(v.title) + '</h3><p>' + esc(v.desc) + '</p><span class="t-date">' + esc(v.date) + '</span></div></div>';
  }).join('');
  tl.querySelectorAll('.t-item').forEach(el=>{ el.onclick = ()=> openTimelineEditor(el.dataset.tid); });
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

/* ---------- Names & Counter (anniversary is fixed: 2 Oct 2026, 9:01 AM) ---------- */
const ANNIVERSARY = new Date(2026, 9, 2, 9, 1, 0);
let names = JSON.parse(localStorage.getItem(LS.names) || 'null') || null;
names = {her: (names && names.her) || 'My Princess', me: (names && names.me) || 'Me'};

function renderNames(){
  document.getElementById('herNameDisplay').textContent = names.her;
  document.getElementById('myNameDisplay').textContent = names.me;
  document.getElementById('footerName').textContent = names.her;
  document.getElementById('signName').textContent = names.me;
  document.getElementById('sinceDateText').textContent = ANNIVERSARY.toLocaleDateString(lang==='my'?'my-MM':'en-IN',{day:'numeric',month:'long',year:'numeric'});
  startCounter(ANNIVERSARY);
  fillSettings();
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

/* Settings tab: names editable here, anniversary fixed */
function fillSettings(){
  const h = document.getElementById('setHer'), m = document.getElementById('setMe');
  if(h && document.activeElement !== h) h.value = names.her;
  if(m && document.activeElement !== m) m.value = names.me;
  const a = document.getElementById('annivText');
  if(a) a.textContent = ANNIVERSARY.toLocaleDateString(lang==='my'?'my-MM':'en-IN',{day:'numeric',month:'long',year:'numeric'}) + ', ' + ANNIVERSARY.toLocaleTimeString(lang==='my'?'my-MM':'en-IN',{hour:'numeric',minute:'2-digit'});
}
document.getElementById('saveSettings').onclick = ()=>{
  const h = document.getElementById('setHer').value.trim();
  const m = document.getElementById('setMe').value.trim();
  if(h) names.her = h;
  if(m) names.me = m;
  persistNames();
  renderNames();
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
function isDemoSrc(s){ return !!s && s.indexOf('unsplash.com') !== -1; }
let photos = JSON.parse(localStorage.getItem(LS.photos) || 'null') || [];
photos.forEach(p=>{ if(p.id) delete p.id; }); /* legacy Firestore ids are unused now */
photos = photos.filter(p=>p && p.src && !isDemoSrc(p.src)); /* samples out, lover's photos only */

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
    if(gone) Cloud.deletePhotoRow(gone.sb, gone.cloudPath);
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

/* Timeline (every memory editable, persists per device + cloud) */
let timelineItems = normalizeTimeline(JSON.parse(localStorage.getItem(LS.timeline) || 'null')) || DEF_TIMELINE.map(d=>({id: d.id, emoji: d.emoji, def: true}));
renderTimeline();
const storedFinal = localStorage.getItem(LS.final);
if(storedFinal){ setFinalText(storedFinal); }

/* Timeline add + edit (tap any card) */
const tmModal = document.getElementById('tmModal');
let tmId = null;
function openTimelineEditor(tid){
  const it = timelineItems.find(x=>x.id === tid);
  if(!it) return;
  const v = timelineText(it);
  tmId = tid;
  document.getElementById('tmTitle').value = v.title;
  document.getElementById('tmDesc').value = v.desc;
  document.getElementById('tmDate').value = v.date;
  document.getElementById('tmEmoji').value = v.emoji;
  document.getElementById('tmDelete').style.display = '';
  tmModal.classList.add('open');
}
document.getElementById('addMemoryBtn').onclick = ()=>{
  tmId = null;
  document.getElementById('tmTitle').value = '';
  document.getElementById('tmDesc').value = '';
  document.getElementById('tmDate').value = '';
  document.getElementById('tmEmoji').value = '💚';
  document.getElementById('tmDelete').style.display = 'none';
  tmModal.classList.add('open');
};
document.getElementById('tmCancel').onclick = ()=> tmModal.classList.remove('open');
tmModal.onclick = e=>{ if(e.target === tmModal) tmModal.classList.remove('open'); };
document.getElementById('tmSave').onclick = ()=>{
  const title = document.getElementById('tmTitle').value.trim();
  const desc = document.getElementById('tmDesc').value.trim();
  const date = document.getElementById('tmDate').value.trim();
  const emoji = document.getElementById('tmEmoji').value || '💚';
  if(tmId === null){
    if(!title) return;
    timelineItems.push({id: 'c' + Date.now(), emoji: emoji, title: title, desc: desc, date: date});
  }else{
    const it = timelineItems.find(x=>x.id === tmId);
    if(!it) return;
    it.def = false; it.title = title; it.desc = desc; it.date = date; it.emoji = emoji;
  }
  tmModal.classList.remove('open');
  persistTimeline();
  renderTimeline();
};
document.getElementById('tmDelete').onclick = ()=>{
  if(tmId === null) return;
  const it = timelineItems.find(x=>x.id === tmId);
  if(it && confirm(t('js.confirmDeleteMemory'))){
    timelineItems = timelineItems.filter(x=>x.id !== tmId);
    tmModal.classList.remove('open');
    persistTimeline();
    renderTimeline();
  }
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

/* Music - YouTube song on repeat (browser needs one tap first, then it plays + loops) */
const YT_VIDEO_ID = '4j0Vdb0Sj38';
let ytPlayer = null, ytReady = false, userGestured = false;
let playing=false;
function refreshMusicBtn(){
  document.getElementById('playMusicBtn').textContent = playing ? t('hero.pause') : t('hero.play');
}
function tryAutoplay(){
  if(playing || !ytReady || !ytPlayer) return;
  try{ ytPlayer.playVideo(); }catch(e){}
}
function markGesture(){ userGestured = true; tryAutoplay(); }
function onYouTubeIframeAPIReady(){
  try{
    ytPlayer = new YT.Player('ytPlayer', {
      height: '2', width: '2',
      videoId: YT_VIDEO_ID,
      playerVars: { autoplay: 1, loop: 1, playlist: YT_VIDEO_ID, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, playsinline: 1 },
      events: {
        onReady: ()=>{ ytReady = true; if(userGestured) tryAutoplay(); },
        onStateChange: e=>{
          if(e.data === YT.PlayerState.PLAYING){ playing = true; refreshMusicBtn(); }
          else if(e.data === YT.PlayerState.PAUSED){ playing = false; refreshMusicBtn(); }
        }
      }
    });
  }catch(e){ console.warn('music player failed:', e); }
}
document.getElementById('playMusicBtn').onclick = ()=>{
  if(!ytReady || !ytPlayer) return;
  try{ if(playing) ytPlayer.pauseVideo(); else ytPlayer.playVideo(); }catch(e){}
};
['pointerdown','keydown','touchend'].forEach(ev=>document.addEventListener(ev, markGesture, {once:true}));

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
  renderTimeline();
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
    const cv = await Cloud.getData(section);
    if(cv !== undefined){
      if(localWins && localWins(getLocal(), cv)){ Cloud.save(section, getLocal()); slog(section + ': kept local, pushing up'); }
      else{ applyCloud(cv); slog(section + ': pulled from cloud'); }
    }else{
      Cloud.save(section, getLocal()); slog(section + ': seeded to cloud');
    }
  }catch(e){ Cloud.lastError = 'seed/pull ' + section + ': ' + (e.code||e.message||e); console.warn('cloud seed/pull failed:', section, e); }
}
const sectionHandlers = {};
function subscribe(section, getLocal, applyCloud){
  sectionHandlers[section] = {getLocal: getLocal, applyCloud: applyCloud};
}
function startSiteRealtime(){
  if(!Cloud.ready || !Cloud.sb) return;
  try{
    Cloud.sb.channel('love-site')
      .on('postgres_changes', {event: '*', schema: 'public', table: 'site_data'}, payload=>{
        const row = payload.new || {};
        const key = row.key || '';
        const section = key.indexOf(SITE_ID + '_') === 0 ? key.slice((SITE_ID + '_').length) : null;
        const h = section && sectionHandlers[section];
        if(!h || row.data === undefined) return;
        try{ if(JSON.stringify(row.data) === JSON.stringify(h.getLocal())) return; }catch(e){}
        slog(section + ' live update');
        h.applyCloud(row.data);
      })
      .subscribe((status, err)=>{ if(err) Cloud.lastError = 'site listen: ' + (err.message || err); });
  }catch(e){ Cloud.lastError = 'site listen: ' + (e.code||e.message||e); }
}
const DEFAULT_NAMES_LIT = {her: 'My Princess', me: 'Me'};
const applyNames = v=>{ if(v && typeof v === 'object'){ names = {her: v.her || 'My Princess', me: v.me || 'Me'}; renderNames(); } };
const applyLetters = v=>{ if(Array.isArray(v)){ letters = v; renderLetters(); } };
const applyTimeline = v=>{ const n = normalizeTimeline(v); if(n){ timelineItems = n; renderTimeline(); } };
const applyFinal = v=>{ if(typeof v === 'string' && v) setFinalText(v); };
function withTimeout(p, ms, label){
  return Promise.race([p, new Promise((resolve)=>setTimeout(()=>resolve('timeout'), ms || 25000))]).then(r=>{
    if(r === 'timeout'){ Cloud.lastError = 'timeout: ' + label; console.warn('cloud timeout:', label); }
    return r;
  });
}
let cloudStarted = false;
async function syncAllSections(){
  await Promise.all([
    withTimeout(seedOrPull('names', ()=>names, applyNames, (l,c)=> JSON.stringify(l)!==JSON.stringify(DEFAULT_NAMES_LIT) && JSON.stringify(c)===JSON.stringify(DEFAULT_NAMES_LIT)), 25000, 'names'),
    withTimeout(seedOrPull('letters', ()=>letters, applyLetters, (l,c)=> !isDefaultLetters(l) && isDefaultLetters(c)), 25000, 'letters'),
    withTimeout(photoSyncStart(), 30000, 'photos'),
    withTimeout(seedOrPull('timeline', ()=>timelineItems, applyTimeline, (l,c)=> l.length>0 && (!Array.isArray(c) || c.length===0)), 25000, 'timeline'),
    withTimeout(seedOrPull('final', ()=>document.getElementById('finalLetterText').innerText, applyFinal, (l,c)=> !!l && !c), 25000, 'final')
  ]);
}
async function startCloudSync(){
  await syncAllSections();
  subscribe('names', ()=>names, applyNames);
  subscribe('letters', ()=>letters, applyLetters);
  subscribe('timeline', ()=>timelineItems, applyTimeline);
  subscribe('final', ()=>document.getElementById('finalLetterText').innerText, applyFinal);
  startSiteRealtime();
  startPhotoRealtime();
  if(Cloud.lastError.indexOf('timeout:') === 0) Cloud.lastError = '';
  slog('sync ready');
  migrateStoredPhotos();
}
/* Heal edits made while offline: re-sync periodically and whenever the tab returns/network returns */
async function softResync(){
  if(!Cloud.ready) return;
  await syncAllSections();
  slog('resync done');
}
async function maintainSync(){
  if(Cloud.ready){ softResync(); }
  else { bootCloud(1); }
}
setInterval(maintainSync, 45000);
document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) maintainSync(); });
window.addEventListener('online', ()=>maintainSync());
async function bootCloud(attempt){
  const ok = await Cloud.init();
  refreshSyncStatus();
  if(ok && !cloudStarted){ cloudStarted = true; slog('connected'); startCloudSync(); }
  else if(!ok){ slog('connect failed: ' + Cloud.lastError); if(attempt < 3) setTimeout(()=>bootCloud(attempt + 1), attempt === 1 ? 4000 : 10000); }
}
document.getElementById('syncStatus').onclick = showSyncDiag;
bootCloud(1);
