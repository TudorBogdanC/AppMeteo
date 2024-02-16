import{j as e,r as u,a as b}from"./react-CJP9YpS5.js";import{c as L}from"./react-dom-BlcN3ma3.js";import{H as w,L as E}from"./react-router-dom-7KRhcOaN.js";import{r as s}from"./@material-tailwind-SAmpfiN9.js";import{d as P,e as C}from"./react-router-B6mU7oCb.js";import"./@emotion-DbSep2O-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-CSYicBj8.js";import"./classnames-BarBPuyi.js";import"./tailwind-merge-BXtt6hLZ.js";import"./prop-types-BKNjMPK8.js";import"./deepmerge-MrQlWjp6.js";import"./framer-motion-CJQkl-Iy.js";import"./tslib-Bng4S8pS.js";import"./hey-listen-KE_C_eS6.js";import"./style-value-types-Pspc_Zm6.js";import"./popmotion-BpL6IzX4.js";import"./framesync-BCkQ-MAm.js";import"./@motionone-PuJoGCzQ.js";import"./material-ripple-effects-BS6XNNYc.js";import"./@floating-ui-CGvtxffm.js";import"./aria-hidden-TUpxsc0i.js";import"./tabbable-CjV0_wFH.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const T=({weatherData:r,onBackClick:n})=>{const t=d=>{const i=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],o=new Date(d*1e3);return i[o.getUTCDay()]};return e.jsxs(s.Card,{className:"mt-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-gradient-to-tl from-indigo-800 via-blue-500 to-teal-400 text-white",children:[e.jsxs(s.CardBody,{children:[e.jsx(s.Typography,{variant:"h5",color:"white",className:"mb-2",children:"Previsioni a 3 giorni"}),r!==null&&e.jsxs("div",{className:"mb-3",children:[e.jsxs(s.Typography,{variant:"h5",color:"white",children:[t(r.list[8].dt)," "]}),r.list&&r.list[8]&&r.list[8].main&&e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsxs("div",{children:[e.jsxs(s.Typography,{variant:"h6",children:["Max: ",r.list[8].main.temp_max.toFixed(),"°C"]}),e.jsxs(s.Typography,{variant:"h6",children:["Min: ",r.list[12].main.temp_min.toFixed(),"°C"]})]}),e.jsx("img",{src:`https://openweathermap.org/img/wn/${r.list[8].weather[0].icon}@2x.png`,alt:"Weather Icon",height:40})]}),r.list&&r.list[16]&&r.list[16].main&&e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(s.Typography,{variant:"h5",color:"white",children:[t(r.list[16].dt)," "]}),e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsxs("div",{children:[e.jsxs(s.Typography,{variant:"h6",children:["Max: ",r.list[16].main.temp_max.toFixed(),"°C"]}),e.jsxs(s.Typography,{variant:"h6",children:["Min: ",r.list[20].main.temp_min.toFixed(),"°C"]})]}),e.jsx("img",{src:`https://openweathermap.org/img/wn/${r.list[8].weather[0].icon}@2x.png`,alt:"Weather Icon",height:40})]})]}),r.list&&r.list[24]&&r.list[24].main&&e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(s.Typography,{variant:"h5",color:"white",children:[t(r.list[24].dt)," "]}),e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsxs("div",{children:[e.jsxs(s.Typography,{variant:"h6",children:["Max: ",r.list[24].main.temp_max.toFixed(),"°C"]}),e.jsxs(s.Typography,{variant:"h6",children:["Min: ",r.list[28].main.temp_min.toFixed(),"°C"]})]}),e.jsx("img",{src:`https://openweathermap.org/img/wn/${r.list[8].weather[0].icon}@2x.png`,alt:"Weather Icon",height:40})]})]})]})]}),e.jsx(s.CardFooter,{className:"pt-0",children:e.jsxs(s.Button,{size:"sm",variant:"text",color:"white",onClick:n,className:"flex items-center gap-2",children:["Torna",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]})})]})},M=()=>{const[r,n]=u.useState(null),[t,d]=u.useState(null),[i,o]=u.useState(""),[h,p]=u.useState(!1),[g,c]=u.useState(null);u.useEffect(()=>{t&&(async()=>{try{p(!0);let l;if(t&&(l=`https://api.openweathermap.org/data/2.5/forecast?lat=${t.latitude}&lon=${t.longitude}&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it`),l){const a=await(await fetch(l)).json();a.cod&&a.cod!=="200"?(c(`Error: ${a.message}`),n(null)):(c(null),n(a))}}catch(l){console.error("Errore nel recupero del meteo:",l),c("Errore nel recupero del meteo. Per favore riprova."),n(null)}finally{p(!1)}})()},[t]);const f=async x=>{x.preventDefault();try{const m=await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${i}&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it`)).json();m.cod&&m.cod!=="200"?(c(`Error: ${m.message}`),n(null)):(c(null),n(m),d(null))}catch(l){console.error("Errore nel recupero del meteo:",l),c("Errore nel recupero del meteo. Per favore riprova.")}},j=()=>{if(navigator.geolocation){p(!0);const x=async a=>{try{const{latitude:v,longitude:N}=a.coords;await d({latitude:v,longitude:N}),o("")}catch(v){console.error("Errore recupero della posizione:",v),c("Errore recupero della posizione. Per favore riprova.")}finally{p(!1)}},l=a=>{console.error("Errore recupero della posizione:",a),c("Errore recupero della posizione. Per favore riprova."),p(!1)},m={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition(x,l,m)}else console.error("Recupero della posizione geografica non supportato in questo browser."),p(!1)},y=x=>{o(x.target.value)};return e.jsx(w,{children:e.jsxs(P,{children:[e.jsx(C,{path:"/",element:e.jsx(k,{weatherData:r,loading:h,error:g,handleSearchCitySubmit:f,handleGeolocationClick:j,handleSearchCityChange:y})}),e.jsx(C,{path:"/details",element:e.jsx(T,{weatherData:r,onBackClick:()=>window.history.back()})})]})})},k=({weatherData:r,loading:n,error:t,handleSearchCitySubmit:d,handleGeolocationClick:i,handleSearchCityChange:o})=>{var h,p,g,c,f,j,y,x,l,m,a;return e.jsxs(s.Card,{className:"mt-6 w-80 sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-gradient-to-tl from-indigo-800 via-blue-500 to-teal-400",children:[e.jsxs(s.CardBody,{children:[e.jsxs(s.Typography,{variant:"h5",color:"white",className:"mb-2",children:[((h=r==null?void 0:r.city)==null?void 0:h.name)&&e.jsxs("div",{className:"flex justify-between items-center gap-10",children:[e.jsx("span",{children:r.city.name}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("img",{src:`https://openweathermap.org/img/wn/${(g=(p=r.list[0])==null?void 0:p.weather[0])==null?void 0:g.icon}@2x.png`,alt:"Weather Icon",height:120}),e.jsx(s.Typography,{variant:"h6",children:(c=r.list[0])==null?void 0:c.weather[0].description})]})]}),!((f=r==null?void 0:r.city)!=null&&f.name)&&"Scopri il meteo nella tua città"]}),(r==null?void 0:r.list)&&e.jsxs("div",{className:"text-white",children:[e.jsxs("p",{children:[" Temperatura attuale: ",(y=(j=r.list[0])==null?void 0:j.main)==null?void 0:y.temp.toFixed(),"° C"]}),e.jsxs("p",{children:[" Min / Max: ",(l=(x=r.list[0])==null?void 0:x.main)==null?void 0:l.temp_min.toFixed(),"° C / ",(a=(m=r.list[0])==null?void 0:m.main)==null?void 0:a.temp_max.toFixed(),"° C"]})]}),e.jsxs("form",{onSubmit:d,className:"mb-4 mt-4",children:[e.jsx(s.Input,{label:"La tua città",type:"text",color:"white",placeholder:"Cerca...",onChange:o,className:"mb-2"}),e.jsx(s.Button,{size:"sm",variant:"gradient",color:"teal",onClick:i,className:"mr-2 mt-5",children:"Usa la mia posizione"}),e.jsx(s.Button,{size:"sm",type:"submit",variant:"gradient",color:"indigo",className:"mr-2 mt-5",children:"Cerca"})]}),n&&e.jsx("p",{children:"In caricamento..."}),t&&e.jsx("p",{style:{color:"red"},children:t}),r&&e.jsx(E,{to:"#/details",children:e.jsxs(s.Button,{size:"sm",variant:"text",color:"white",className:"flex items-center gap-2",children:["Previsioni a 3 giorni",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]}),e.jsx(s.CardFooter,{className:"pt-0"})]})};function F(){return e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx(M,{})})}L.createRoot(document.getElementById("root")).render(e.jsx(b.StrictMode,{children:e.jsx(s.ThemeProvider,{children:e.jsx(F,{})})}));
