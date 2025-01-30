import{B as x,r as v,v as b,y as w,o as i,c as u,a as r,J as l,K as d,L as y,F as _,f as h,t as c,M as S,b as F}from"./bX1scWA0.js";import{u as f}from"./DwwiL3u7.js";import{_ as k}from"./DlAUqK2U.js";const M=x("farmers",{state:()=>({farmers:[],seasons:[]}),actions:{async fetchSeasons(){try{const t=await f().find("seasons",{populate:"*"});this.seasons=t.data.map(e=>({id:e.id,name:e.name,start_date:e.start_date,end_date:e.end_date,description:e.description,season_status:e.season_status}))}catch(a){console.error("Error fetching seasons:",a)}},async registerFarmer(a){try{const e=await f().create("farmers",a);this.farmers.push(e)}catch(t){console.error("Error registering farmer:",t)}}}}),V={class:"flex flex-col md:flex-row gap-4"},B=["value"],E={__name:"RegistrationForm",setup(a){const t=M(),e=v({first_name:"",last_name:"",email:"",season_id:null}),g=b(()=>t.seasons),m=async()=>{try{await t.fetchSeasons()}catch(n){console.error("Error fetching seasons:",n)}},p=async()=>{if(!e.value.season_id){alert("Please select a season before registering.");return}try{await t.registerFarmer(e.value),alert("Farmer registered successfully!"),Object.assign(e.value,{first_name:"",last_name:"",email:"",season_id:null})}catch(n){console.error("Error registering farmer:",n),alert("Failed to register farmer. Please try again.")}};return w(m),(n,s)=>(i(),u("form",{onSubmit:S(p,["prevent"]),class:"space-y-4"},[r("div",V,[l(r("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.first_name=o),type:"text",placeholder:"First Name",class:"w-full md:w-1/2 bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600",required:""},null,512),[[d,e.value.first_name]]),l(r("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.last_name=o),type:"text",placeholder:"Last Name",class:"w-full md:w-1/2 bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600",required:""},null,512),[[d,e.value.last_name]])]),l(r("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.email=o),type:"email",placeholder:"Email",class:"w-full bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600",required:""},null,512),[[d,e.value.email]]),r("div",null,[s[5]||(s[5]=r("label",{class:"text-white"},"Select Season",-1)),l(r("select",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.value.season_id=o),class:"w-full bg-green-100 text-green-950 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600",required:""},[s[4]||(s[4]=r("option",{value:"",disabled:""},"Select a season",-1)),(i(!0),u(_,null,h(g.value,o=>(i(),u("option",{key:o.id,value:o.id},c(o.name)+" ("+c(o.start_date)+" - "+c(o.end_date)+") ",9,B))),128))],512),[[y,e.value.season_id]])]),s[6]||(s[6]=r("button",{type:"submit",class:"w-full border-2 border-green-800 text-green-900 rounded-lg p-3 hover:bg-green-800 hover:text-white transition-colors"}," Register Now ",-1))],32))}},q={},L={class:"bg-white dark:bg-green-950"},N={class:"flex justify-center min-h-screen"},$={class:"flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"},D={class:"w-full"};function H(a,t){const e=E;return i(),u("section",L,[r("div",N,[r("button",{onClick:t[0]||(t[0]=g=>a.$router.push("/")),class:"absolute top-3 right-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"},"Home"),t[3]||(t[3]=r("div",{class:"hidden bg-cover lg:block lg:w-2/5",style:{"background-image":"url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"}},null,-1)),r("div",$,[r("div",D,[t[1]||(t[1]=r("h1",{class:"text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white"}," Get your free account now. ",-1)),t[2]||(t[2]=r("p",{class:"mt-4 text-gray-500 dark:text-gray-400"}," Let’s get you all set up so you can verify your personal account and begin setting up your profile. ",-1)),F(e)])])])])}const R=k(q,[["render",H]]);export{R as default};
