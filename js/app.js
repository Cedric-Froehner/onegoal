const TMS=[{n:'one.O',l:'https://www.og1o.com/_assets/625e2d6cb54141905b51c20d13baa45b/Images/oneo-logo.svg',b:'#434098'},{n:'Hermes',l:'https://www.myhermes.at/typo3conf/ext/generalfunctions/Resources/Public/img/logo.svg',b:'#ffffff'},{n:'Risk.Ident',l:'https://riskident.com/wp-content/uploads/2020/03/RiskIdent_Logo_2020-2.svg',b:'#fafafa'},{n:'OTTO',l:'https://upload.wikimedia.org/wikipedia/commons/a/ad/Otto_GmbH_logo.svg',b:'#ffffff'},{n:'mindline',l:'https://mindline.de/wp-content/uploads/2018/10/Logo-mindline-1.png',b:'#ffffff'},{n:'Eigenes',l:'',b:'#333333'}];
const CL=['#434098','#e74c3c','#e67e22','#f1c40f','#2ecc71','#1abc9c','#3498db','#9b59b6','#e91e63','#009900','#e2001a','#ffffff','#fafafa','#607d8b','#333333'];
let sc=[0,0],round=1,nm=7,log=[],secs=0,running=false,iv=null,over=false,wakeLock=null;
async function acquireWakeLock(){if('wakeLock'in navigator){try{wakeLock=await navigator.wakeLock.request('screen');wakeLock.addEventListener('release',()=>{wakeLock=null;});}catch(e){}}}
function releaseWakeLock(){if(wakeLock){wakeLock.release();wakeLock=null;}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&running)acquireWakeLock();});
let t1i=0,t1bg=TMS[0].b,t1lo=TMS[0].l,t1n=TMS[0].n,t2n='Team 2',t2c='#e74c3c';
let _i=0,_c1=TMS[0].b,_c2='#e74c3c';
const $=id=>document.getElementById(id);
const ovs=['ro','wo','so'];
const gn=t=>t===1?t1n:t2n;
const fmt=n=>String(n).padStart(2,'0');
const getTime=()=>fmt(Math.floor(secs/60))+':'+fmt(secs%60);
function textColor(hex){const h=hex.replace('#','');const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);return(r*299+g*587+b*114)/1000>128?'#1a1a2e':'#ffffff';}
function dotColor(hex){return(()=>{const h=hex.replace('#','');const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);return(r*299+g*587+b*114)/1000>128;})();}
function applyTeamColors(){const tc1=textColor(t1bg),tc2=textColor(t2c);$('t1').style.background=t1bg;$('t1').style.color=tc1;$('t2').style.background=t2c;$('t2').style.color=tc2;}
function mkPicker(id,cur,cb){const r=$(id);r.innerHTML='';CL.forEach(c=>{const b=document.createElement('div');b.className='cbtn'+(c===cur?' sel':'');b.style.background=c;b.style.border='3px solid '+(c===cur?'white':'transparent');b.onclick=()=>{cb(c);mkPicker(id,c,cb);};r.appendChild(b);});const cp=document.createElement('input');cp.type='color';cp.value=cur;cp.style.cssText='width:28px;height:28px;border-radius:50%;border:3px solid transparent;cursor:pointer;padding:0';cp.oninput=e=>{cb(e.target.value);r.querySelectorAll('.cbtn').forEach(b=>b.classList.remove('sel'));};r.appendChild(cp);}
function mkT1Pick(){const r=$('t1p');r.innerHTML='';TMS.forEach((t,i)=>{const b=document.createElement('button');b.className='tbtn'+(_i===i?' sel':'');b.textContent=t.n;b.onclick=()=>{_i=i;_c1=TMS[i].b;mkT1Pick();mkPicker('c1',_c1,c=>_c1=c);$('cw').style.display=i===4?'block':'none';};r.appendChild(b);});}
function openSettings(){_i=t1i;_c1=t1bg;_c2=t2c;$('ni').value=t2n;$('curl').value='';mkT1Pick();mkPicker('c1',_c1,c=>_c1=c);mkPicker('c2',_c2,c=>_c2=c);$('cw').style.display=_i===4?'block':'none';$('so').classList.add('show');}
function saveSettings(){const apply=lo=>{t1i=_i;t1bg=_c1;t1lo=lo;t1n=TMS[_i].n;t2n=$('ni').value.trim()||'Team 2';t2c=_c2;applyTeamColors();$('t2n').textContent=t2n;const l=$('l1');l.src=t1lo;l.alt=t1n;l.style.display=t1lo?'block':'none';updDots();$('so').classList.remove('show');};if(_i===4){const f=$('cfile').files[0];if(f){const fr=new FileReader();fr.onload=e=>apply(e.target.result);fr.readAsDataURL(f);}else apply($('curl').value.trim()||t1lo);}else apply(TMS[_i].l);}
function startTimer(){if(!running){iv=setInterval(()=>{secs++;$('timer').textContent=getTime();},1000);running=true;$('tt').textContent='⏸ Pause';acquireWakeLock();}}
function toggleTimer(){if(running){clearInterval(iv);running=false;$('tt').textContent='▶ Start';releaseWakeLock();}else startTimer();}
function updDots(){[1,2].forEach(t=>{const el=$('d'+t);const bg=t===1?t1bg:t2c;const dark=dotColor(bg);el.innerHTML='';[[1,7],[8,14],[15,21]].forEach(([a,b])=>{const row=document.createElement('div');row.className='pr';for(let i=a;i<=b;i++){const d=document.createElement('div');d.className='dot';d.style.background=i<=sc[t-1]?(dark?'rgba(0,0,0,.75)':'rgba(255,255,255,.95)'):(dark?'rgba(0,0,0,.2)':'rgba(255,255,255,.3)');row.appendChild(d);}el.appendChild(row);});});}
function updLog(){const c=$('lge');c.innerHTML='';log.slice().reverse().forEach(e=>{const d=document.createElement('div');d.className='le '+(e.t===1?'t1g':'t2g');d.innerHTML='<span>⚽ '+gn(e.t)+'</span><span>'+e.s1+':'+e.s2+'</span><span>'+e.time+'</span>';c.appendChild(d);});}
function updUndo(){$('undo').style.display=log.length?'block':'none';}
function addGoal(t){if(over||ovs.some(id=>$(id).classList.contains('show')))return;startTimer();sc[t-1]++;log.push({t,s1:sc[0],s2:sc[1],time:getTime(),round,nm});$('s'+t).textContent=sc[t-1];updDots();updLog();updUndo();if(sc[t-1]>=21){showWinner(t);return;}if(sc[t-1]===nm&&round<3){round++;nm=nm===7?14:21;showRound(t,sc[t-1]);}}
function undoGoal(){if(!log.length)return;over=false;const l=log.pop();sc[l.t-1]--;round=l.round;nm=l.nm;$('s'+l.t).textContent=sc[l.t-1];$('ri').textContent='Paarung '+round+' von 3';ovs.forEach(id=>$(id).classList.remove('show'));updDots();updLog();updUndo();startTimer();}
function showRound(t,ms){if(running)toggleTimer();$('rt').textContent='🔄 Paarungswechsel!';$('rs').textContent=gn(t)+' hat '+ms+' Tore – Paarung '+round+' beginnt!';$('rsc').textContent='Stand: '+sc[0]+':'+sc[1];$('ri').textContent='Paarung '+round+' von 3';$('ro').classList.add('show');}
function dismissRound(){$('ro').classList.remove('show');startTimer();}
function showWinner(t){if(running)toggleTimer();over=true;$('wt').textContent='🏆 '+gn(t)+' gewinnt!';$('ws').textContent='Endstand: '+sc[0]+':'+sc[1];$('wti').textContent='⏱ '+getTime();$('wo').classList.add('show');}
function dismissWinner(){$('wo').classList.remove('show');$('lgp').style.display='block';updLog();}
function toggleLog(){const p=$('lgp');p.style.display=p.style.display==='block'?'none':'block';}
function resetScores(){if(confirm('Neu starten?')){sc=[0,0];round=1;nm=7;log=[];secs=0;running=false;over=false;clearInterval(iv);releaseWakeLock();$('s1').textContent='0';$('s2').textContent='0';$('tt').textContent='▶ Start';$('ri').textContent='Paarung 1 von 3';$('timer').textContent='00:00';ovs.forEach(id=>$(id).classList.remove('show'));$('lgp').style.display='none';updDots();updLog();updUndo();}}
applyTeamColors();updDots();
