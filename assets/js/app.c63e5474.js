(function(e){function t(t){for(var n,s,o=t[0],u=t[1],m=t[2],c=0,p=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,m||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var m=0;m<o.length;m++)t(o[m]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"9cdc":function(e,t,a){"use strict";a("c701")},b383:function(e,t,a){},c701:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={id:"app-root"},i=Object(n["e"])("nav",{class:"navbar"},[Object(n["e"])("div",{class:"navbar-brand"},[Object(n["e"])("a",{class:"navbar-item",href:"/"},[Object(n["e"])("p",null,"FGO Taco Tools")])])],-1);function s(e,t,a,s,o,u){var m=Object(n["l"])("ServantPicker");return Object(n["g"])(),Object(n["d"])("div",r,[i,Object(n["e"])(m)])}var o=a("d4ec"),u=a("262e"),m=a("2caf"),l=a("9ab4"),c=a("ce1f"),p=(a("99af"),a("b0c0"),a("d3b7"),a("25f0"),a("4d90"),{class:"tile is-ancestor"}),f={class:"tile box is-child notification"},d={class:"subtitle"},g={class:"image is-128x128"};function A(e,t,a,r,i,s){return Object(n["g"])(),Object(n["d"])("div",p,[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(e.servantList,(function(t){return Object(n["g"])(),Object(n["d"])("div",{key:t.id,class:"tile is-parent"},[Object(n["e"])("article",f,[Object(n["e"])("p",d,Object(n["m"])(t.name),1),Object(n["e"])("figure",g,[Object(n["e"])("img",{src:"".concat(e.publicPath,"images/s-icons/s").concat(t.id.toString().padStart(3,"0"),".webp")},null,8,["src"])])])])})),128))])}var h=a("2909"),b=a("5530"),y={name:"Clear Camelot 15-1",changes:function(e){return Object(b["a"])(Object(b["a"])({},e),{},{rarity:"SuperRare",maxAtk:8730,maxHp:12877,activeSkill1:{name:"Honorable Wall of Snowflakes",initialCooldown:7,effects:[{type:"IncreaseDefense",target:"AllAllies",minAmount:"15%",stepAmount:"0.5%",duration:{times:"None",turns:3}},{type:"IncomingDamageCut",target:"AllAllies",minAmount:2e3,stepAmount:0,duration:{times:1,turns:"None"}}]}})}},S={name:"Clear Camelot 17-1",changes:function(e){return Object(b["a"])(Object(b["a"])({},e),{},{noblePhantasm:Object(b["a"])(Object(b["a"])({},e.noblePhantasm),{},{name:"Lord Camelot",effects:[].concat(Object(h["a"])(e.noblePhantasm.effects),[{type:"AttackUp",target:"AllAlliesExceptSelf",amount1:"30%",amount2:"30%",amount3:"30%",amount4:"30%",amount5:"30%",duration:{times:"None",turns:3}}])})})}},v={name:"Clear Anastasia, Section 21",changes:function(e){return Object(b["a"])(Object(b["a"])({},e),{},{activeSkill1:{name:"Bunker Bolt A",initialCooldown:6,effects:[{type:"BusterEffectivenessUp",target:"Self",minAmount:"30%",stepAmount:"2%",duration:{times:1,turns:3}},{type:"BusterCritDamageUp",target:"Self",minAmount:"30%",stepAmount:"2%",duration:{times:1,turns:3}}]},activeSkill2:{name:"Amalgam Goad D",initialCooldown:7,effects:[{type:"TargetFocus",target:"Self",minAmount:1,stepAmount:0,duration:{times:"None",turns:1}},{type:"NpGaugeUp",target:"TargetAlly",minAmount:10,stepAmount:1,duration:{times:"None",turns:1}}]},activeSkill3:{name:"Tragic Shield of Rousal",initialCooldown:9,effects:[{type:"Invincible",target:"Self",minAmount:1,stepAmount:0,duration:{times:"None",turns:1}},{type:"TargetFocus",target:"Self",minAmount:1,stepAmount:0,duration:{times:"None",turns:1}},{type:"DecreaseHp",target:"Self",minAmount:2500,stepAmount:-200,duration:{times:"None",turns:"None"}}]},noblePhantasm:Object(b["a"])(Object(b["a"])({},e.noblePhantasm),{},{name:"Mold Camelot",effects:[{type:"IncomingDamageCut",target:"AllAllies",amount1:100,amount2:550,amount3:775,amount4:888,amount5:1e3,duration:{times:3,turns:5}}],overchargeEffects:[{type:"IncreaseDefense",target:"AllAllies",amount1:"30%",amount2:"35%",amount3:"40%",amount4:"45%",amount5:"50%",duration:{times:"None",turns:3}}]})})}},k={id:1,name:"Mash Kyrielight",japaneseName:"マシュ・キリエライト",otherNames:["Mashu Kirielite"],referenceData:{voiceActor:"Takahashi Rie",source:"Fate/Grand Order",region:"Chaldea",illustrator:"Takeuchi Takashi",series:"Fate/Grand Order",releaseDateJapan:"Game Launch",releaseDateNA:"Game Launch",growthCurve:"Linear",height:158,weight:46,stats:{agility:"D",endurance:"A",luck:"C",mana:"B",np:"",strength:"C"}},rarity:"Rare",class:"Shielder",baseAtk:1261,baseHp:1854,maxAtk:6791,maxHp:10302,attribute:"Earth",traits:["DemiServant","Female","Humanoid","LivingHuman","Riding","Servant","WeakToEnumaElish"],npPerHit:.84,npWhenAttacked:3,starAbsorption:99,starGenerationPerHit:"9.9%",passiveSkills:[{name:"Magic Resistance A",effect:[{type:"IncreaseDebuffResist",amount:"20%"}]},{name:"Riding C",effect:[{type:"QuickCardEffectiveness",amount:"6%"}]}],activeSkill1:{name:"Transient Wall of Snowflakes",initialCooldown:7,effects:[{type:"IncreaseDefense",target:"AllAllies",minAmount:"10%",stepAmount:"0.5%",duration:{times:"None",turns:3}}]},activeSkill2:{name:"Obscurant Wall of Chalk",initialCooldown:9,effects:[{type:"Invincible",target:"TargetAlly",minAmount:1,stepAmount:0,duration:{times:"None",turns:1}},{type:"NpGaugeUp",target:"TargetAlly",minAmount:10,stepAmount:1,duration:{times:"None",turns:"None"}}]},activeSkill3:{name:"Shield of Rousing Resolution",initialCooldown:8,effects:[{type:"TargetFocus",target:"Self",minAmount:1,stepAmount:0,duration:{times:"None",turns:1}},{type:"NpGain",target:"Self",minAmount:"200%",stepAmount:"20%",duration:{times:"None",turns:1}}]},noblePhantasm:{cardType:"Arts",name:"Lord Chaldeas D",minDamagePlus:"0%",maxDamagePlus:"0%",numOfHits:0,targets:"None",effects:[{type:"IncomingDamageCut",target:"AllAllies",amount1:100,amount2:550,amount3:775,amount4:888,amount5:1e3,duration:{times:1,turns:"None"}}],overchargeEffects:[{type:"IncreaseDefense",target:"AllAllies",amount1:"30%",amount2:"35%",amount3:"40%",amount4:"45%",amount5:"50%",duration:{times:"None",turns:3}}]},cards:{arts:2,artsHits:2,buster:2,busterHits:1,quick:1,quickHits:2,extraHits:3},instantDeathChance:24.5,ascensionMats:[[],[],[],[]],skillMats:[[["ProofOfHero",5]],[["DragonFang",5]],[["SeedOfYggdrasil",5]],[["OctupletCrystals",5]],[["VoidsDust",5]],[["EternalGear",5]],[["PhoenixFeather",5]],[["DragonsReverseScale",5]]],upgrades:[y,S,v]},O={name:"Interlude Quest 1",changes:function(e){return Object(b["a"])(Object(b["a"])({},e),{},{noblePhantasm:Object(b["a"])(Object(b["a"])({},e.noblePhantasm),{},{minDamagePlus:"1200%",maxDamagePlus:"1200%"})})}},D={id:15,name:"Euryale",japaneseName:"エウリュアレ",otherNames:["The Far-Flier"],referenceData:{region:"Europe",source:"Greek Mythology",voiceActor:"Yuu Asakawa",series:"Fate/hollow ataraxia",illustrator:"AKIRA",growthCurve:"Linear",releaseDateJapan:"Game Launch",height:134,weight:30,stats:{agility:"C",endurance:"E",luck:"EX",mana:"EX",np:"C",strength:"E"}},rarity:"Uncommon",class:"Archer",baseAtk:1306,baseHp:1711,maxAtk:7032,maxHp:9506,attribute:"Sky",traits:["Divine","Female","Humanoid","Servant","WeakToEnumaElish","Chaotic","Good"],npPerHit:.9,npWhenAttacked:3,starAbsorption:156,starGenerationPerHit:"7.9%",passiveSkills:[{name:"Magic Resistance A",effect:[{type:"IncreaseDebuffResist",amount:"20%"}]},{name:"Independent Action A+ ",effect:[{type:"IncreaseCritStrength",amount:"11%"}]},{name:"Goddess' Essence EX",effect:[{type:"IncreaseDamage",amount:300},{type:"IncreaseDebuffResist",amount:"30%"}]}],activeSkill1:{name:"Bloodsucker C",initialCooldown:8,effects:[{type:"ReduceNpGaugeChance",target:"Enemy",minAmount:"60%",stepAmount:"2%",duration:{times:1,turns:"None"}},{type:"NpGain",target:"Self",minAmount:"18%",stepAmount:"0.9%",duration:{times:"None",turns:"None"}}]},activeSkill2:{name:"Siren Song A",initialCooldown:9,effects:[{type:"Charm",target:"Enemy",targetTrait:"Male",minAmount:"70%",stepAmount:"3%",duration:{times:"None",turns:1}}]},activeSkill3:{name:"Whim of Goddess A",initialCooldown:7,effects:[{type:"ArtsEffectivenessUp",target:"Self",minAmount:"20%",stepAmount:"1%",duration:{times:"None",turns:3}}]},noblePhantasm:{cardType:"Arts",name:"Eye of the Euryale B-",minDamagePlus:"900%",maxDamagePlus:"900%",numOfHits:1,targets:"SingleTarget",effects:[{type:"SpecialAttack",target:"Enemy",targetTrait:"Male",amount1:"150%",amount2:"200%",amount3:"225%",amount4:"237.5%",amount5:"250%",duration:{times:1,turns:"None"}},{type:"DecreaseAttack",target:"TargetAlly",amount1:"20%",amount2:"20%",amount3:"20%",amount4:"20%",amount5:"20%",duration:{times:"None",turns:3}}],overchargeEffects:[{type:"Charm",target:"EnemyWithTrait",targetTrait:"Male",amount1:"100%",amount2:"125%",amount3:"150%",amount4:"175%",amount5:"200%",duration:{times:"None",turns:1}}]},cards:{arts:2,artsHits:2,buster:1,busterHits:1,quick:2,quickHits:3,extraHits:3},instantDeathChance:22.5,ascensionMats:[[],[["SerpentJewel",4]],[["DragonsReverseScale",3],["VoidsDust",7]],[["VoidsDust",13],["HeartOfTheForeignGod",4]]],skillMats:[[],[],[],[["DragonsReverseScale",2]],[["DragonsReverseScale",3]],[["SerpentJewel",3]],[["SerpentJewel",6],["ClawOfChaos",3]],[["ClawOfChaos",8],["HeartOfTheForeignGod",8]]],upgrades:[O]},C={id:216,name:"Jeanne d'Arc (Archer)",japaneseName:"ジャンヌ・ダルク",otherNames:["Jarcher"],referenceData:{region:"France",source:"History",series:"Fate/Grand Order",voiceActor:"Sakamoto Maaya",illustrator:"Takeuchi Takashi",growthCurve:"Linear",releaseDateJapan:new Date("2018-08-09"),releaseDateNA:new Date("2020-08-03"),height:159,weight:44,stats:{agility:"B+",endurance:"A",luck:"A",mana:"C",np:"A",strength:"C"}},rarity:"SuperSuperRare",class:"Archer",baseAtk:1626,baseHp:2309,maxAtk:10525,maxHp:15743,attribute:"Man",traits:["Female","Humanoid","Saberface","Servant","WeakToEnumaElish"],npPerHit:.68,npWhenAttacked:3,starAbsorption:153,starGenerationPerHit:"8%",passiveSkills:[{name:"Magic Resistance B",effect:[{type:"IncreaseDebuffResist",amount:"17.5%"}]},{name:"Independent Action (Celeb) EX ",effect:[{type:"IncreaseCritStrength",amount:"10%"},{type:"NpGaugeUp",amount:3,battlefield:"Waterside"}]}],activeSkill1:{name:"Endless Enjoy Summer! A",initialCooldown:7,effects:[{type:"ArtsEffectivenessUp",target:"Self",minAmount:"20%",stepAmount:"1%",duration:{times:"None",turns:3}},{type:"Invincible",target:"Self",minAmount:0,stepAmount:0,duration:{times:2,turns:3}}]},activeSkill2:{name:"Waterfront Saintess (Dolphin) A+",initialCooldown:8,effects:[{type:"NpGaugeUp",target:"Self",minAmount:20,stepAmount:2,duration:{times:"None",turns:"None"}},{type:"NpDamageUp",target:"Self",minAmount:"10%",stepAmount:"1%",duration:{times:"None",turns:3}},{type:"IncreaseCritStrength",target:"Self",minAmount:"30%",stepAmount:"2%",duration:{times:"None",turns:3},battlefield:"Waterside"}]},activeSkill3:{name:"Servant Cheer! B",initialCooldown:7,effects:[{type:"AttackUp",target:"AllAllies",minAmount:"10%",stepAmount:"1%",duration:{times:"None",turns:3}},{type:"AttackUp",target:"AllAlliesExceptSelf",minAmount:"10%",stepAmount:"1%",targetTrait:"Good",duration:{times:"None",turns:3}}]},noblePhantasm:{cardType:"Arts",name:"Des Océans d'Allégresse",minDamagePlus:"450%",maxDamagePlus:"750%",numOfHits:4,targets:"AreaOfEffect",effects:[],overchargeEffects:[{type:"GainCritStars",target:"Self",amount1:10,amount2:15,amount3:20,amount4:25,amount5:30,duration:{times:"None",turns:3}}]},cards:{arts:2,artsHits:2,buster:2,busterHits:2,quick:1,quickHits:4,extraHits:5},instantDeathChance:24.5,ascensionMats:[[],[["EternalIce",8]],[["ShellOfReminiscence",10],["AuroraSteel",5]],[["AuroraSteel",10],["ScarabOfWisdom",5]]],skillMats:[[],[],[],[["ShellOfReminiscence",5]],[["ShellOfReminiscence",10]],[["EternalIce",5]],[["EternalIce",10],["PhoenixFeather",5]],[["PhoenixFeather",15],["MysteriousDivineWine",10]]],upgrades:[]},N={id:222,name:"Mysterious Heroine XX",japaneseName:"謎のヒロインＸＸ",otherNames:["MHXX","Mysterious Heroine X (Foreigner)","Summer MHX"],referenceData:{region:"Servant Universe",source:"Cosmo Guardian Trilogy",series:"Fate/Grand Order",voiceActor:"Kawasumi Ayako",illustrator:"BUNBUN",growthCurve:"ReverseS",releaseDateJapan:new Date("2018-08-16"),releaseDateNA:new Date("2020-08-09"),height:154,weight:48,stats:{agility:"B",endurance:"B",luck:"D",mana:"E",np:"EX",strength:"B"}},rarity:"SuperRare",class:"Foreigner",baseAtk:1625,baseHp:1800,maxAtk:9751,maxHp:11250,attribute:"Star",traits:["Arthur","BrynhildrsBeloved","Dragon","Female","Humanoid","King","Riding","Saberface","Servant"],npPerHit:.64,npWhenAttacked:3,starAbsorption:147,starGenerationPerHit:"15%",passiveSkills:[{name:"Entity of the Outer Realm D",effect:[{type:"GainCritStars",amount:2},{type:"IncreaseDebuffResist",amount:"4%"}]},{name:"Cosmo Reactor B",effect:[{type:"IncreaseCritStarDropRate",amount:"8%"}]},{name:"Independent Action A",effect:[{type:"IncreaseCritStrength",amount:"10%"}]},{name:"Riding A",effect:[{type:"QuickCardEffectiveness",amount:"10%"}]}],activeSkill1:{name:"Suit Up EX",initialCooldown:7,effects:[{type:"Invincible",target:"Self",minAmount:0,stepAmount:0,duration:{times:"None",turns:1}},{type:"AttackUp",target:"Self",minAmount:"30%",stepAmount:"2%",duration:{times:"None",turns:1}}]},activeSkill2:{name:"Police Instincts E",initialCooldown:6,effects:[{type:"GainCritStars",target:"Self",minAmount:10,stepAmount:1,duration:{times:"None",turns:"None"}},{type:"DecreaseCritStarGatherRate",target:"Self",minAmount:"50%",stepAmount:"5%",duration:{times:"None",turns:1}}]},activeSkill3:{name:"Justice of World's End A",initialCooldown:7,effects:[{type:"IgnoreInvincible",target:"Self",minAmount:0,stepAmount:0,duration:{times:"None",turns:1}},{type:"NpGain",target:"Self",minAmount:20,stepAmount:1,duration:{times:"None",turns:"None"}},{type:"SpecialAttack",target:"Self",minAmount:"30%",stepAmount:"2%",targetTrait:"ThreatToHumanity",duration:{times:"None",turns:1}}]},noblePhantasm:{cardType:"Arts",name:"Etherspace, Yet Lawful EX",minDamagePlus:"900%",maxDamagePlus:"1500%",numOfHits:4,targets:"SingleTarget",effects:[{type:"SpecialAttack",target:"Self",targetTrait:"Saber",amount1:"150%",amount2:"150%",amount3:"150%",amount4:"150%",amount5:"150%",duration:{times:1,turns:"None"}}],overchargeEffects:[{type:"AttackUp",target:"Self",amount1:"20%",amount2:"30%",amount3:"40%",amount4:"50%",amount5:"60%",duration:{times:"None",turns:1}}]},cards:{arts:2,artsHits:3,buster:2,busterHits:4,quick:1,quickHits:4,extraHits:4},instantDeathChance:10,ascensionMats:[[["DragonFang",8],["EternalGear",8]],[["BlackBeastGrease",8],["GreatKnightMedal",8]],[["TearstoneOfBlood",8],["GiantsRing",8]],[["DragonsReverseScale",8],["PrimordialLanugo",8]]],skillMats:[[["ProofOfHero",8]],[["DragonFang",8]],[["EternalGear",8]],[["GreatKnightMedal",10]],[["AuroraSteel",10]],[["GiantsRing",12]],[["PrimordialLanugo",12]],[["DragonsReverseScale",12]]],upgrades:[]},j=[k,D,C,N],H=function(e){Object(u["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(c["b"]);H=Object(l["a"])([Object(c["a"])({data:function(){return{servantList:j,publicPath:"/"}}})],H);var E=H;E.render=A;var w=E,P=function(e){Object(u["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(c["b"]);P=Object(l["a"])([Object(c["a"])({components:{ServantPicker:w}})],P);var G=P;a("9cdc");G.render=s;var T=G,R=a("5502"),x=Object(R["a"])({state:{},mutations:{},actions:{},modules:{}});a("b383"),Object(n["c"])(T).use(x).mount("#app")}});