(function(e){function t(t){for(var a,i,s=t[0],u=t[1],m=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,m||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app-root"};function o(e,t,n,o,i,s){var u=Object(a["l"])("ServantPicker");return Object(a["g"])(),Object(a["d"])("div",r,[Object(a["e"])(u)])}var i=n("d4ec"),s=n("262e"),u=n("2caf"),m=n("9ab4"),l=n("ce1f");n("b0c0");function c(e,t,n,r,o,i){return Object(a["g"])(),Object(a["d"])("ul",null,[(Object(a["g"])(!0),Object(a["d"])(a["a"],null,Object(a["k"])(e.servantList,(function(e){return Object(a["g"])(),Object(a["d"])("li",{key:e.id},[Object(a["e"])("p",null,Object(a["m"])(e.name),1)])})),128))])}n("99af");var f=n("2909"),p=n("5530"),d=n("bee2"),A=function(){function e(t){Object(i["a"])(this,e),this.Value=t}return Object(d["a"])(e,[{key:"value",get:function(){return this.Value/100},set:function(e){if(e<0)throw new Error("Percent value cannot be negative");this.Value=e}},{key:"rawValue",get:function(){return this.Value}}]),e}(),g={name:"Clear Camelot 15-1",changes:function(e){return Object(p["a"])(Object(p["a"])({},e),{},{rarity:"SuperRare",maxAtk:8730,maxHp:12877,activeSkill1:{name:"Honorable Wall of Snowflakes",initialCooldown:7,effects:[{type:"IncreaseDefense",target:"AllAllies",minAmount:new A(15),stepAmount:new A(.5),maxAmount:new A(20),duration:{times:"None",turns:3}},{type:"IncomingDamageCut",target:"AllAllies",minAmount:2e3,stepAmount:0,maxAmount:2e3,duration:{times:1,turns:"None"}}]}})}},w={name:"Clear Camelot 17-1",changes:function(e){return Object(p["a"])(Object(p["a"])({},e),{},{noblePhantasm:Object(p["a"])(Object(p["a"])({},e.noblePhantasm),{},{name:"Lord Camelot",effects:[].concat(Object(f["a"])(e.noblePhantasm.effects),[{type:"AttackUp",target:"AllAlliesExceptSelf",amount1:new A(30),amount2:new A(30),amount3:new A(30),amount4:new A(30),amount5:new A(30),duration:{times:"None",turns:3}}])})})}},b={name:"Clear Anastasia, Section 21",changes:function(e){return Object(p["a"])(Object(p["a"])({},e),{},{activeSkill1:{name:"Bunker Bolt A",initialCooldown:6,effects:[{type:"BusterEffectivenessUp",target:"Self",minAmount:new A(30),stepAmount:new A(2),maxAmount:new A(50),duration:{times:1,turns:3}},{type:"BusterCritDamageUp",target:"Self",minAmount:new A(30),stepAmount:new A(2),maxAmount:new A(50),duration:{times:1,turns:3}}]},activeSkill2:{name:"Amalgam Goad D",initialCooldown:7,effects:[{type:"TargetFocus",target:"Self",minAmount:1,maxAmount:1,duration:{times:"None",turns:1}},{type:"NpGaugeUp",target:"TargetAlly",minAmount:10,stepAmount:1,maxAmount:20,duration:{times:"None",turns:1}}]},activeSkill3:{name:"Tragic Shield of Rousal",initialCooldown:9,effects:[{type:"Invincible",target:"Self",minAmount:1,maxAmount:1,duration:{times:"None",turns:1}},{type:"TargetFocus",target:"Self",minAmount:1,maxAmount:1,duration:{times:"None",turns:1}},{type:"DecreaseHp",target:"Self",minAmount:2500,stepAmount:-200,maxAmount:500,duration:{times:"None",turns:"None"}}]},noblePhantasm:Object(p["a"])(Object(p["a"])({},e.noblePhantasm),{},{name:"Mold Camelot",effects:[{type:"IncomingDamageCut",target:"AllAllies",amount1:100,amount2:550,amount3:775,amount4:888,amount5:1e3,duration:{times:3,turns:5}}],overchargeEffects:[{type:"IncreaseDefense",target:"AllAllies",amount1:new A(30),amount2:new A(35),amount3:new A(40),amount4:new A(45),amount5:new A(50),duration:{times:"None",turns:3}}]})})}},S={id:1,name:"Mash Kyrielight",rarity:"Rare",class:"Shielder",baseAtk:1261,baseHp:1854,maxAtk:6791,maxHp:10302,attribute:"Earth",traits:["DemiServant","Female","Humanoid","LivingHuman","Riding","Servant","WeakToEnumaElish"],npPerHit:.84,npWhenAttacked:3,starAbsorption:99,starGenerationPerHit:new A(9.9),passiveSkills:[{name:"Magic Resistance A",effect:[{type:"IncreaseDebuffResist",amount:new A(20)}]},{name:"Riding C",effect:[{type:"QuickCardEffectiveness",amount:new A(6)}]}],activeSkill1:{name:"Transient Wall of Snowflakes",initialCooldown:7,effects:[{type:"IncreaseDefense",target:"AllAllies",minAmount:new A(10),stepAmount:new A(.5),maxAmount:new A(15),duration:{times:"None",turns:3}}]},activeSkill2:{name:"Obscurant Wall of Chalk",initialCooldown:9,effects:[{type:"Invincible",target:"TargetAlly",minAmount:1,maxAmount:1,duration:{times:"None",turns:1}},{type:"NpGaugeUp",target:"TargetAlly",minAmount:10,stepAmount:1,maxAmount:20,duration:{times:"None",turns:"None"}}]},activeSkill3:{name:"Shield of Rousing Resolution",initialCooldown:8,effects:[{type:"TargetFocus",target:"Self",minAmount:1,maxAmount:1,duration:{times:"None",turns:1}},{type:"NpGain",target:"Self",minAmount:new A(200),stepAmount:new A(20),maxAmount:new A(400),duration:{times:"None",turns:1}}]},noblePhantasm:{cardType:"Arts",name:"Lord Chaldeas D",minDamagePlus:new A(0),maxDamagePlus:new A(0),numOfHits:0,targets:"None",effects:[{type:"IncomingDamageCut",target:"AllAllies",amount1:100,amount2:550,amount3:775,amount4:888,amount5:1e3,duration:{times:1,turns:"None"}}],overchargeEffects:[{type:"IncreaseDefense",target:"AllAllies",amount1:new A(30),amount2:new A(35),amount3:new A(40),amount4:new A(45),amount5:new A(50),duration:{times:"None",turns:3}}]},cards:{arts:2,artsHits:2,buster:2,busterHits:1,quick:1,quickHits:2,extraHits:3},instantDeathChance:24.5,ascensionMats:[[],[],[],[]],skillMats:[[["ProofOfHero",5]],[["DragonFang",5]],[["SeedOfYggdrasil",5]],[["OctupletCrystals",5]],[["VoidsDust",5]],[["EternalGear",5]],[["PhoenixFeather",5]],[["DragonsReverseScale",5]]],upgrades:[g,w,b]},y={name:"Interlude Quest 1",changes:function(e){return Object(p["a"])(Object(p["a"])({},e),{},{noblePhantasm:Object(p["a"])(Object(p["a"])({},e.noblePhantasm),{},{minDamagePlus:new A(1200),maxDamagePlus:new A(1200)})})}},h={id:15,name:"Euryale",rarity:"Uncommon",class:"Archer",baseAtk:1306,baseHp:1711,maxAtk:7032,maxHp:9506,attribute:"Sky",traits:["Divine","Female","Humanoid","Servant","WeakToEnumaElish","Chaotic","Good"],npPerHit:.9,npWhenAttacked:3,starAbsorption:156,starGenerationPerHit:new A(7.9),passiveSkills:[{name:"Magic Resistance A",effect:[{type:"IncreaseDebuffResist",amount:new A(20)}]},{name:"Independent Action A+ ",effect:[{type:"IncreaseCritStrength",amount:new A(11)}]},{name:"Goddess' Essence EX",effect:[{type:"IncreaseDamage",amount:300},{type:"IncreaseDebuffResist",amount:new A(30)}]}],activeSkill1:{name:"Bloodsucker C",initialCooldown:8,effects:[{type:"ReduceNpGaugeChance",target:"Enemy",minAmount:new A(60),stepAmount:new A(2),maxAmount:new A(80),duration:{times:1,turns:"None"}},{type:"NpGain",target:"Self",minAmount:new A(18),stepAmount:new A(.9),maxAmount:new A(27),duration:{times:"None",turns:"None"}}]},activeSkill2:{name:"Siren Song A",initialCooldown:9,effects:[{type:"Charm",target:"Enemy",targetTrait:"Male",minAmount:new A(70),stepAmount:new A(3),maxAmount:new A(100),duration:{times:"None",turns:1}}]},activeSkill3:{name:"Whim of Goddess A",initialCooldown:7,effects:[{type:"ArtsEffectivenessUp",target:"Self",minAmount:new A(20),stepAmount:new A(1),maxAmount:new A(30),duration:{times:"None",turns:3}}]},noblePhantasm:{cardType:"Arts",name:"Eye of the Euryale B-",minDamagePlus:new A(900),maxDamagePlus:new A(900),numOfHits:1,targets:"SingleTarget",effects:[{type:"SpecialAttack",target:"Enemy",targetTrait:"Male",amount1:new A(150),amount2:new A(200),amount3:new A(225),amount4:new A(237.5),amount5:new A(250),duration:{times:1,turns:"None"}},{type:"DecreaseAttack",target:"TargetAlly",amount1:new A(20),amount2:new A(20),amount3:new A(20),amount4:new A(20),amount5:new A(20),duration:{times:"None",turns:3}}],overchargeEffects:[{type:"Charm",target:"EnemyWithTrait",targetTrait:"Male",amount1:new A(100),amount2:new A(125),amount3:new A(150),amount4:new A(175),amount5:new A(200),duration:{times:"None",turns:1}}]},cards:{arts:2,artsHits:2,buster:1,busterHits:1,quick:2,quickHits:3,extraHits:3},instantDeathChance:22.5,ascensionMats:[[],[["SerpentJewel",4]],[["DragonsReverseScale",3],["VoidsDust",7]],[["VoidsDust",13],["HeartOfTheForeignGod",4]]],skillMats:[[],[],[],[["DragonsReverseScale",2]],[["DragonsReverseScale",3]],[["SerpentJewel",3]],[["SerpentJewel",6],["ClawOfChaos",3]],[["ClawOfChaos",8],["HeartOfTheForeignGod",8]]],upgrades:[y]},v={id:216,name:"Jeanne d'Arc (Archer)",rarity:"SuperSuperRare",class:"Archer",baseAtk:1626,baseHp:2309,maxAtk:10525,maxHp:15743,attribute:"Man",traits:["Female","Humanoid","Saberface","Servant","WeakToEnumaElish"],npPerHit:.68,npWhenAttacked:3,starAbsorption:153,starGenerationPerHit:new A(8),passiveSkills:[{name:"Magic Resistance B",effect:[{type:"IncreaseDebuffResist",amount:new A(17.5)}]},{name:"Independent Action (Celeb) EX ",effect:[{type:"IncreaseCritStrength",amount:new A(10)},{type:"NpGaugeUp",amount:3,battlefield:"Waterside"}]}],activeSkill1:{name:"Endless Enjoy Summer! A",initialCooldown:7,effects:[{type:"ArtsEffectivenessUp",target:"Self",minAmount:new A(20),stepAmount:new A(1),maxAmount:new A(30),duration:{times:"None",turns:3}},{type:"Invincible",target:"Self",minAmount:0,stepAmount:0,maxAmount:0,duration:{times:2,turns:3}}]},activeSkill2:{name:"Waterfront Saintess (Dolphin) A+",initialCooldown:8,effects:[{type:"NpGaugeUp",target:"Self",minAmount:20,stepAmount:2,maxAmount:40,duration:{times:"None",turns:"None"}},{type:"NpDamageUp",target:"Self",minAmount:new A(10),stepAmount:new A(1),maxAmount:new A(20),duration:{times:"None",turns:3}},{type:"IncreaseCritStrength",target:"Self",minAmount:new A(30),stepAmount:new A(2),maxAmount:new A(50),duration:{times:"None",turns:3},battlefield:"Waterside"}]},activeSkill3:{name:"Servant Cheer! B",initialCooldown:7,effects:[{type:"AttackUp",target:"AllAllies",minAmount:new A(10),stepAmount:new A(1),maxAmount:new A(20),duration:{times:"None",turns:3}},{type:"AttackUp",target:"AllAlliesExceptSelf",minAmount:new A(10),stepAmount:new A(1),maxAmount:new A(20),targetTrait:"Good",duration:{times:"None",turns:3}}]},noblePhantasm:{cardType:"Arts",name:"Des Océans d'Allégresse",minDamagePlus:new A(450),maxDamagePlus:new A(750),numOfHits:4,targets:"AreaOfEffect",effects:[],overchargeEffects:[{type:"GainCritStars",target:"Self",amount1:10,amount2:15,amount3:20,amount4:25,amount5:30,duration:{times:"None",turns:3}}]},cards:{arts:2,artsHits:2,buster:2,busterHits:2,quick:1,quickHits:4,extraHits:5},instantDeathChance:24.5,ascensionMats:[[],[["EternalIce",8]],[["ShellOfReminiscence",10],["AuroraSteel",5]],[["AuroraSteel",10],["ScarabOfWisdom",5]]],skillMats:[[],[],[],[["ShellOfReminiscence",5]],[["ShellOfReminiscence",10]],[["EternalIce",5]],[["EternalIce",10],["PhoenixFeather",5]],[["PhoenixFeather",15],["MysteriousDivineWine",10]]],upgrades:[]},k={id:222,name:"Mysterious Heroine XX",rarity:"SuperRare",class:"Foreigner",baseAtk:1625,baseHp:1800,maxAtk:9751,maxHp:11250,attribute:"Star",traits:["Arthur","BrynhildrsBeloved","Dragon","Female","Humanoid","King","Riding","Saberface","Servant"],npPerHit:.64,npWhenAttacked:3,starAbsorption:147,starGenerationPerHit:new A(15),passiveSkills:[{name:"Entity of the Outer Realm D",effect:[{type:"GainCritStars",amount:2},{type:"IncreaseDebuffResist",amount:new A(4)}]},{name:"Cosmo Reactor B",effect:[{type:"IncreaseCritStarDropRate",amount:new A(8)}]},{name:"Independent Action A",effect:[{type:"IncreaseCritStrength",amount:new A(10)}]},{name:"Riding A",effect:[{type:"QuickCardEffectiveness",amount:new A(10)}]}],activeSkill1:{name:"Suit Up EX",initialCooldown:7,effects:[{type:"Invincible",target:"Self",minAmount:0,stepAmount:0,maxAmount:0,duration:{times:"None",turns:1}},{type:"AttackUp",target:"Self",minAmount:new A(30),stepAmount:new A(2),maxAmount:new A(50),duration:{times:"None",turns:1}}]},activeSkill2:{name:"Police Instincts E",initialCooldown:6,effects:[{type:"GainCritStars",target:"Self",minAmount:10,stepAmount:1,maxAmount:20,duration:{times:"None",turns:"None"}},{type:"DecreaseCritStarGatherRate",target:"Self",minAmount:new A(50),stepAmount:new A(5),maxAmount:new A(100),duration:{times:"None",turns:1}}]},activeSkill3:{name:"Justice of World's End A",initialCooldown:7,effects:[{type:"IgnoreInvincible",target:"Self",minAmount:0,stepAmount:0,maxAmount:0,duration:{times:"None",turns:1}},{type:"NpGain",target:"Self",minAmount:20,stepAmount:1,maxAmount:30,duration:{times:"None",turns:"None"}},{type:"SpecialAttack",target:"Self",minAmount:new A(30),stepAmount:new A(2),maxAmount:new A(50),targetTrait:"ThreatToHumanity",duration:{times:"None",turns:1}}]},noblePhantasm:{cardType:"Arts",name:"Etherspace, Yet Lawful EX",minDamagePlus:new A(900),maxDamagePlus:new A(1500),numOfHits:4,targets:"SingleTarget",effects:[{type:"SpecialAttack",target:"Self",targetTrait:"Saber",amount1:new A(150),amount2:new A(150),amount3:new A(150),amount4:new A(150),amount5:new A(150),duration:{times:1,turns:"None"}}],overchargeEffects:[{type:"AttackUp",target:"Self",amount1:new A(20),amount2:new A(30),amount3:new A(40),amount4:new A(50),amount5:new A(60),duration:{times:"None",turns:1}}]},cards:{arts:2,artsHits:3,buster:2,busterHits:4,quick:1,quickHits:4,extraHits:4},instantDeathChance:10,ascensionMats:[[["DragonFang",8],["EternalGear",8]],[["BlackBeastGrease",8],["GreatKnightMedal",8]],[["TearstoneOfBlood",8],["GiantsRing",8]],[["DragonsReverseScale",8],["PrimordialLanugo",8]]],skillMats:[[["ProofOfHero",8]],[["DragonFang",8]],[["EternalGear",8]],[["GreatKnightMedal",10]],[["AuroraSteel",10]],[["GiantsRing",12]],[["PrimordialLanugo",12]],[["DragonsReverseScale",12]]],upgrades:[]},O=[S,h,v,k],x=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);x=Object(m["a"])([Object(l["a"])({data:function(){return{servantList:O}}})],x);var C=x;C.render=c;var N=C,D=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);D=Object(m["a"])([Object(l["a"])({components:{ServantPicker:N}})],D);var j=D;n("9cdc");j.render=o;var H=j,P=n("5502"),E=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(H).use(E).mount("#app")}});