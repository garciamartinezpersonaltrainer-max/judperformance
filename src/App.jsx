import { useState, useEffect, useRef } from "react";

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20, color = "currentColor", className = "" }) => {
  const icons = {
    dumbbell: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 5v14M18 5v14M2 8h4M18 8h4M2 16h4M18 16h4M6 8h12M6 16h12"/></svg>,
    users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    chart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
    apple: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2a3 3 0 0 0-3 3v1H7a5 5 0 0 0-5 5v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a5 5 0 0 0-5-5h-2V5a3 3 0 0 0-3-3z"/><circle cx="12" cy="14" r="2"/></svg>,
    credit: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    chat: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    video: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className={className}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    bell: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    home: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    settings: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    play: <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" className={className}><polygon points="5 3 19 12 5 21 5 3"/></svg>,
    fire: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
    trophy: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><polyline points="8 21 12 21 16 21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 4H17v5a5 5 0 0 1-10 0V4z"/><path d="M5 9H3a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h3"/><path d="M19 9h2a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1h-3"/></svg>,
    calendar: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className={className}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    arrow: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    back: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className={className}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
    edit: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    image: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
    send: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    lock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    user: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    menu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    water: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
    scale: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><line x1="12" y1="3" x2="12" y2="21"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M5 12a7 7 0 0 1 14 0"/></svg>,
  };
  return icons[name] || null;
};

// ─── THEME ───────────────────────────────────────────────────────────────────
const C = {
  bg: "#0A0B0F",
  card: "#12141A",
  card2: "#1A1D26",
  border: "#252836",
  orange: "#FF6B35",
  orangeLight: "#FF8C5A",
  orangeDim: "rgba(255,107,53,0.12)",
  blue: "#4A9EFF",
  green: "#2ECC8E",
  red: "#FF4757",
  yellow: "#FFD32A",
  purple: "#8B5CF6",
  text: "#FFFFFF",
  textMuted: "#8891A4",
  textDim: "#5A6275",
};

// ─── BACK HEADER ──────────────────────────────────────────────────────────────
const BackHeader = ({ title, onBack, right }) => (
  <div style={{ background:C.card, padding:"14px 16px", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", gap:12, position:"sticky", top:0, zIndex:10 }}>
    <button onClick={onBack} style={{ background:C.orange+"22", border:"none", borderRadius:12, padding:"7px 12px", display:"flex", alignItems:"center", gap:6, cursor:"pointer", flexShrink:0 }}>
      <Icon name="home" size={15} color={C.orange}/>
      <span style={{ color:C.orange, fontWeight:700, fontSize:12 }}>Inicio</span>
    </button>
    <span style={{ color:C.text, fontWeight:700, fontSize:15, flex:1 }}>{title}</span>
    {right}
  </div>
);
const EXERCISES = [
  { id:1, name:"Press de Banca", category:"Pecho", muscle:"Pectorales", difficulty:"Intermedio", equipment:"Barra", sets:"3-4", reps:"8-12", video:"https://www.youtube.com/embed/4Y2ZdHCOXok", image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", description:"Ejercicio compuesto para el desarrollo del pecho, hombros anteriores y tríceps.", tags:["fuerza","hipertrofia","empuje"] },
  { id:2, name:"Sentadilla", category:"Piernas", muscle:"Cuádriceps / Glúteos", difficulty:"Avanzado", equipment:"Barra", sets:"4-5", reps:"6-10", video:"https://www.youtube.com/embed/ultWZbUMPL8", image:"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80", description:"El rey de los ejercicios compuestos. Trabaja piernas completas y core.", tags:["fuerza","potencia","funcional"] },
  { id:3, name:"Peso Muerto", category:"Espalda", muscle:"Isquiotibiales / Lumbar", difficulty:"Avanzado", equipment:"Barra", sets:"3-4", reps:"5-8", video:"https://www.youtube.com/embed/op9kVnSso6Q", image:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80", description:"Ejercicio de tracción fundamental que activa cadena posterior completa.", tags:["fuerza","potencia","espalda"] },
  { id:4, name:"Dominadas", category:"Espalda", muscle:"Dorsal / Bíceps", difficulty:"Intermedio", equipment:"Barra fija", sets:"3-4", reps:"6-12", video:"https://www.youtube.com/embed/eGo4IYlbE5g", image:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80", description:"Ejercicio clave para el desarrollo del ancho de espalda.", tags:["tracción","espalda","peso corporal"] },
  { id:5, name:"Press Militar", category:"Hombros", muscle:"Deltoides", difficulty:"Intermedio", equipment:"Barra/Mancuernas", sets:"3-4", reps:"8-12", video:"https://www.youtube.com/embed/qEwKCR5JCog", image:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80", description:"Ejercicio de empuje vertical para el desarrollo de los deltoides.", tags:["hombros","fuerza","empuje"] },
  { id:6, name:"Remo con Barra", category:"Espalda", muscle:"Dorsal / Romboides", difficulty:"Intermedio", equipment:"Barra", sets:"3-4", reps:"8-12", video:"https://www.youtube.com/embed/T3N-TO4reLQ", image:"https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=400&q=80", description:"Ejercicio de tracción horizontal para espalda media y grosor.", tags:["tracción","espalda","fuerza"] },
  { id:7, name:"Curl de Bíceps", category:"Brazos", muscle:"Bíceps braquial", difficulty:"Principiante", equipment:"Mancuernas", sets:"3", reps:"10-15", video:"https://www.youtube.com/embed/ykJmrZ5v0Oo", image:"https://images.unsplash.com/photo-1590239926044-4131a1f4f152?w=400&q=80", description:"Ejercicio de aislamiento para el desarrollo del bíceps.", tags:["brazos","aislamiento","hipertrofia"] },
  { id:8, name:"Extensión de Tríceps", category:"Brazos", muscle:"Tríceps", difficulty:"Principiante", equipment:"Polea", sets:"3", reps:"12-15", video:"https://www.youtube.com/embed/2-LAMcpzODU", image:"https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=400&q=80", description:"Ejercicio de aislamiento para el tríceps en polea alta.", tags:["brazos","aislamiento","hipertrofia"] },
  { id:9, name:"Plancha", category:"Core", muscle:"Abdominales / Core", difficulty:"Principiante", equipment:"Sin equipo", sets:"3", reps:"30-60s", video:"https://www.youtube.com/embed/pSHjTRCQxIw", image:"https://images.unsplash.com/photo-1544216717-3bbf52512659?w=400&q=80", description:"Ejercicio isométrico fundamental para la estabilidad del core.", tags:["core","funcional","peso corporal"] },
  { id:10, name:"Hip Thrust", category:"Glúteos", muscle:"Glúteo mayor", difficulty:"Principiante", equipment:"Barra/Banco", sets:"3-4", reps:"10-15", video:"https://www.youtube.com/embed/SEdqd1n0cvg", image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80", description:"El ejercicio más efectivo para el desarrollo del glúteo mayor.", tags:["glúteos","hipertrofia","cadera"] },
  { id:11, name:"Cardio HIIT", category:"Cardio", muscle:"Sistema cardiovascular", difficulty:"Avanzado", equipment:"Sin equipo", sets:"5-8", reps:"20s ON / 40s OFF", video:"https://www.youtube.com/embed/ml6cT4AZdqI", image:"https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80", description:"Entrenamiento de intervalos de alta intensidad para quema de grasa.", tags:["cardio","HIIT","grasa"] },
  { id:12, name:"Face Pull", category:"Hombros", muscle:"Deltoides posterior / Manguito", difficulty:"Principiante", equipment:"Polea", sets:"3", reps:"15-20", video:"https://www.youtube.com/embed/qvIwWTfHDi4", image:"https://images.unsplash.com/photo-1584863231364-2edc166de576?w=400&q=80", description:"Ejercicio correctivo y de desarrollo para deltoides posterior y manguito rotador.", tags:["hombros","correctivo","postura"] },
];

const CLIENTS = [
  { id:1, name:"Carlos Mendoza", age:28, goal:"Hipertrofia", level:"Intermedio", plan:"Premium", avatar:"CM", color:"#FF6B35", weight:78, height:175, joinDate:"Ene 2024", nextSession:"Mañana 10:00", streak:21, progress:72, paid:true, lastActive:"Hace 2h" },
  { id:2, name:"María González", age:34, goal:"Pérdida de peso", level:"Principiante", plan:"Básico", avatar:"MG", color:"#4A9EFF", weight:65, height:162, joinDate:"Feb 2024", nextSession:"Miérc 09:00", streak:14, progress:58, paid:true, lastActive:"Hace 1h" },
  { id:3, name:"Diego Ramírez", age:22, goal:"Fuerza máxima", level:"Avanzado", plan:"Elite", avatar:"DR", color:"#2ECC8E", weight:88, height:183, joinDate:"Mar 2023", nextSession:"Hoy 18:00", streak:45, progress:89, paid:true, lastActive:"Hace 30m" },
  { id:4, name:"Sofía Herrera", age:31, goal:"Rendimiento deportivo", level:"Intermedio", plan:"Premium", avatar:"SH", color:"#8B5CF6", weight:58, height:168, joinDate:"Dic 2023", nextSession:"Juev 07:00", streak:7, progress:64, paid:false, lastActive:"Hace 3h" },
  { id:5, name:"Andrés Castillo", age:45, goal:"Recondicionar", level:"Principiante", plan:"Básico", avatar:"AC", color:"#FFD32A", weight:95, height:178, joinDate:"Abr 2024", nextSession:"Vier 11:00", streak:3, progress:22, paid:true, lastActive:"Ayer" },
  { id:6, name:"Valentina López", age:26, goal:"Hipertrofia", level:"Intermedio", plan:"Premium", avatar:"VL", color:"#FF4757", weight:55, height:165, joinDate:"Mar 2024", nextSession:"Lun 08:00", streak:18, progress:67, paid:true, lastActive:"Hace 5h" },
];

const PLANS = [
  { id:"basic", name:"Básico", price:19990, period:"mes", color:C.blue, features:["1 rutina activa","Acceso a biblioteca básica","Soporte por chat","Seguimiento de peso"], icon:"dumbbell" },
  { id:"premium", name:"Premium", price:34990, period:"mes", color:C.orange, features:["Rutinas ilimitadas","Biblioteca completa HD","Soporte prioritario","Pautas nutricionales","Análisis de progreso","Videollamadas 2x/mes"], icon:"star", popular:true },
  { id:"elite", name:"Elite", price:59990, period:"mes", color:C.purple, features:["Todo en Premium","Sesiones presenciales","Plan nutricional personalizado","Análisis corporal mensual","Acceso 24/7 al trainer","Comunidad exclusiva"], icon:"trophy" },
];

const MESSAGES = [
  { id:1, sender:"Carlos Mendoza", avatar:"CM", color:"#FF6B35", text:"Profe, ¿puedo sustituir el press de banca por push-ups esta semana?", time:"10:23", unread:true, role:"client" },
  { id:2, sender:"María González", avatar:"MG", color:"#4A9EFF", text:"Completé la sesión de hoy 💪 ¿cómo se vieron las métricas?", time:"09:45", unread:true, role:"client" },
  { id:3, sender:"Diego Ramírez", avatar:"DR", color:"#2ECC8E", text:"¿Cuándo tengo mi próxima evaluación de fuerza?", time:"Ayer", unread:false, role:"client" },
  { id:4, sender:"Sofía Herrera", avatar:"SH", color:"#8B5CF6", text:"Quiero ajustar mi plan nutricional, tengo una competencia en 6 semanas", time:"Ayer", unread:false, role:"client" },
];

const NUTRITION_PLANS = [
  { name:"Definición / Déficit calórico", calories:1800, protein:160, carbs:160, fat:55, color:C.blue },
  { name:"Mantenimiento", calories:2200, protein:165, carbs:220, fat:65, color:C.green },
  { name:"Volumen / Superávit calórico", calories:2800, protein:180, carbs:320, fat:80, color:C.orange },
  { name:"Rendimiento deportivo", calories:3200, protein:200, carbs:400, fat:90, color:C.purple },
];

// ─── MINI COMPONENTS ─────────────────────────────────────────────────────────
const Badge = ({ text, color = C.orange }) => (
  <span style={{ background: color + "22", color, border:`1px solid ${color}44`, borderRadius:20, padding:"2px 10px", fontSize:11, fontWeight:700, letterSpacing:0.5 }}>{text}</span>
);

const Avatar = ({ initials, color, size = 40 }) => (
  <div style={{ width:size, height:size, borderRadius:"50%", background:`linear-gradient(135deg, ${color}, ${color}88)`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:800, fontSize:size * 0.35, flexShrink:0, boxShadow:`0 2px 12px ${color}44` }}>{initials}</div>
);

const ProgressBar = ({ value, color = C.orange, height = 6 }) => (
  <div style={{ width:"100%", background:C.border, borderRadius:10, height, overflow:"hidden" }}>
    <div style={{ width:`${value}%`, height:"100%", background:`linear-gradient(90deg, ${color}, ${color}BB)`, borderRadius:10, transition:"width 1s ease" }} />
  </div>
);

const StatCard = ({ label, value, sub, color, icon }) => (
  <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"16px 18px", flex:1, minWidth:110 }}>
    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
      <div style={{ background:color+"22", borderRadius:10, padding:7, display:"flex" }}>
        <Icon name={icon} size={16} color={color} />
      </div>
      <span style={{ color:C.textMuted, fontSize:12 }}>{label}</span>
    </div>
    <div style={{ color:C.text, fontSize:24, fontWeight:800 }}>{value}</div>
    {sub && <div style={{ color:C.textMuted, fontSize:11, marginTop:2 }}>{sub}</div>}
  </div>
);

const Btn = ({ children, onClick, color = C.orange, outline, small, style = {} }) => (
  <button onClick={onClick} style={{ background: outline ? "transparent" : `linear-gradient(135deg, ${color}, ${color}CC)`, color: outline ? color : "#fff", border: outline ? `1.5px solid ${color}55` : "none", borderRadius: small ? 10 : 14, padding: small ? "7px 14px" : "12px 22px", fontWeight:700, fontSize: small ? 13 : 14, cursor:"pointer", display:"flex", alignItems:"center", gap:6, transition:"all 0.2s", boxShadow: outline ? "none" : `0 4px 20px ${color}44`, ...style }}>
    {children}
  </button>
);

// ─── SCREENS ─────────────────────────────────────────────────────────────────

// LOGIN
const LoginScreen = ({ onLogin }) => {
  const [role, setRole] = useState("trainer");
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ email:"", pass:"", name:"" });
  const [loading, setLoading] = useState(false);

  const handleLogin = (method) => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin({ role, name: method === "email" ? (form.name || "Juan Pérez") : method === "google" ? "Juan Pérez (Google)" : "Juan Pérez (FB)" }); }, 1500);
  };

  return (
    <div style={{ minHeight:"100vh", background:`linear-gradient(160deg, #0A0B0F 0%, #12141A 50%, #0F1117 100%)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24 }}>
      {/* Logo */}
      <div style={{ textAlign:"center", marginBottom:40 }}>
        {/* Logo Minimalista — Opción 6 */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:4 }}>
          <div style={{ width:4, height:52, borderRadius:4, background:C.orange }} />
          <div>
            <div style={{ color:C.text, fontSize:38, fontWeight:900, letterSpacing:-1, lineHeight:1 }}>JUD</div>
            <div style={{ color:C.orange, fontSize:11, fontWeight:400, letterSpacing:7, marginTop:2 }}>PERFORMANCE</div>
          </div>
          <div style={{ width:8, height:8, borderRadius:"50%", background:C.orange, alignSelf:"flex-start", marginTop:6 }} />
        </div>
        <p style={{ color:C.textMuted, margin:"8px 0 0", fontSize:14 }}>Tu plataforma de entrenamiento personalizado</p>
      </div>

      <div style={{ width:"100%", maxWidth:420 }}>
        {/* Role Toggle */}
        <div style={{ display:"flex", background:C.card, borderRadius:14, padding:4, marginBottom:24, border:`1px solid ${C.border}` }}>
          {["trainer","client"].map(r => (
            <button key={r} onClick={() => setRole(r)} style={{ flex:1, padding:"10px", background: role===r ? `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})` : "transparent", color: role===r ? "#fff" : C.textMuted, border:"none", borderRadius:11, cursor:"pointer", fontWeight:700, fontSize:13, transition:"all 0.2s" }}>
              {r === "trainer" ? "🏋️ Entrenador" : "💪 Atleta"}
            </button>
          ))}
        </div>

        {/* Tab */}
        <div style={{ display:"flex", gap:4, marginBottom:24 }}>
          {["login","register"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex:1, padding:"10px", background:"transparent", color: tab===t ? C.orange : C.textMuted, border:"none", borderBottom:`2px solid ${tab===t ? C.orange : "transparent"}`, cursor:"pointer", fontWeight:700, fontSize:13 }}>
              {t === "login" ? "Iniciar sesión" : "Registrarse"}
            </button>
          ))}
        </div>

        {/* Social Login */}
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
          <button onClick={() => handleLogin("google")} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"13px 18px", color:C.text, cursor:"pointer", display:"flex", alignItems:"center", gap:12, fontWeight:600, fontSize:14, transition:"all 0.2s" }}>
            <span style={{ fontSize:20 }}>🔵</span> Continuar con Google
          </button>
          <button onClick={() => handleLogin("facebook")} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"13px 18px", color:C.text, cursor:"pointer", display:"flex", alignItems:"center", gap:12, fontWeight:600, fontSize:14 }}>
            <span style={{ fontSize:20 }}>🟦</span> Continuar con Facebook
          </button>
          <button onClick={() => handleLogin("apple")} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"13px 18px", color:C.text, cursor:"pointer", display:"flex", alignItems:"center", gap:12, fontWeight:600, fontSize:14 }}>
            <span style={{ fontSize:20 }}>⚫</span> Continuar con Apple
          </button>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
          <div style={{ flex:1, height:1, background:C.border }} />
          <span style={{ color:C.textMuted, fontSize:12 }}>o usa tu correo</span>
          <div style={{ flex:1, height:1, background:C.border }} />
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
          {tab === "register" && (
            <input placeholder="Nombre completo" value={form.name} onChange={e => setForm({...form, name:e.target.value})} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontSize:14, outline:"none" }} />
          )}
          <input placeholder="Correo electrónico" value={form.email} onChange={e => setForm({...form, email:e.target.value})} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontSize:14, outline:"none" }} />
          <input type="password" placeholder="Contraseña" value={form.pass} onChange={e => setForm({...form, pass:e.target.value})} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 16px", color:C.text, fontSize:14, outline:"none" }} />
        </div>

        <button onClick={() => handleLogin("email")} disabled={loading} style={{ width:"100%", background:`linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`, color:"#fff", border:"none", borderRadius:14, padding:"14px", fontWeight:800, fontSize:16, cursor:"pointer", boxShadow:`0 6px 24px ${C.orange}55`, opacity: loading ? 0.7 : 1, transition:"all 0.2s" }}>
          {loading ? "⏳ Cargando..." : tab === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
        </button>
      </div>
    </div>
  );
};

// TRAINER DASHBOARD
const TrainerDashboard = ({ onNavigate, user }) => {
  const totalRevenue = CLIENTS.filter(c => c.paid).length * 34990;
  const activeClients = CLIENTS.length;

  return (
    <div style={{ padding:"0 0 20px" }}>
      {/* Header */}
      <div style={{ background:`linear-gradient(135deg, ${C.orange}22, ${C.card})`, padding:"24px 20px 20px", borderBottom:`1px solid ${C.border}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
              <div style={{ width:3, height:28, borderRadius:3, background:C.orange }} />
              <span style={{ color:C.text, fontSize:18, fontWeight:900, letterSpacing:-0.5 }}>JUD</span>
              <span style={{ color:C.orange, fontSize:8, fontWeight:400, letterSpacing:4, marginTop:1 }}>PERFORMANCE</span>
            </div>
            <p style={{ color:C.textMuted, margin:"0 0 4px", fontSize:13 }}>Buenos días,</p>
            <h2 style={{ color:C.text, margin:0, fontSize:22, fontWeight:800 }}>{user?.name || "Entrenador"} 👋</h2>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={() => onNavigate("notifications")} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:10, cursor:"pointer", position:"relative" }}>
              <Icon name="bell" size={18} color={C.textMuted} />
              <span style={{ position:"absolute", top:6, right:6, width:8, height:8, background:C.orange, borderRadius:"50%", border:`2px solid ${C.card}` }} />
            </button>
            <button onClick={onSignOut} style={{ background:"none", border:`1px solid ${C.border}`, borderRadius:12, padding:"8px 12px", cursor:"pointer", display:"flex", alignItems:"center", gap:6 }}>
              <Icon name="lock" size={14} color={C.textMuted} />
              <span style={{ color:C.textMuted, fontSize:12, fontWeight:600 }}>Salir</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:"flex", gap:10, marginTop:20, overflowX:"auto", paddingBottom:4 }}>
          <StatCard label="Clientes" value={activeClients} sub="+2 este mes" color={C.orange} icon="users" />
          <StatCard label="Ingresos" value={`$${(totalRevenue/1000).toFixed(0)}K`} sub="este mes" color={C.green} icon="credit" />
          <StatCard label="Sesiones" value="47" sub="esta semana" color={C.blue} icon="calendar" />
          <StatCard label="Adherencia" value="86%" sub="promedio" color={C.purple} icon="chart" />
        </div>
      </div>

      <div style={{ padding:"20px 20px 0" }}>
        {/* Quick Actions */}
        <h3 style={{ color:C.text, fontWeight:700, marginBottom:14, fontSize:16 }}>Acciones rápidas</h3>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:24 }}>
          {[
            { icon:"plus", label:"Nueva Rutina", sub:"Crear programa", color:C.orange, action:"new-routine" },
            { icon:"users", label:"Mis Clientes", sub:`${activeClients} activos`, color:C.blue, action:"clients" },
            { icon:"video", label:"Ejercicios", sub:"Biblioteca HD", color:C.purple, action:"exercises" },
            { icon:"apple", label:"Nutrición", sub:"Pautas y planes", color:C.green, action:"nutrition" },
          ].map(a => (
            <button key={a.action} onClick={() => onNavigate(a.action)} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"16px", cursor:"pointer", textAlign:"left", transition:"all 0.2s" }}>
              <div style={{ background:`${a.color}22`, borderRadius:12, padding:10, display:"inline-flex", marginBottom:10 }}>
                <Icon name={a.icon} size={20} color={a.color} />
              </div>
              <div style={{ color:C.text, fontWeight:700, fontSize:14 }}>{a.label}</div>
              <div style={{ color:C.textMuted, fontSize:12, marginTop:2 }}>{a.sub}</div>
            </button>
          ))}
        </div>

        {/* Recent Clients */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
          <h3 style={{ color:C.text, fontWeight:700, fontSize:16, margin:0 }}>Actividad reciente</h3>
          <button onClick={() => onNavigate("clients")} style={{ color:C.orange, background:"none", border:"none", cursor:"pointer", fontSize:13, fontWeight:600 }}>Ver todos →</button>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {CLIENTS.slice(0,4).map(c => (
            <div key={c.id} onClick={() => onNavigate("client-detail", c)} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"14px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:12 }}>
              <Avatar initials={c.avatar} color={c.color} size={44} />
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ color:C.text, fontWeight:700, fontSize:14 }}>{c.name}</span>
                  <Badge text={c.plan} color={c.plan==="Elite" ? C.purple : c.plan==="Premium" ? C.orange : C.blue} />
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
                  <span style={{ color:C.textMuted, fontSize:12 }}>{c.goal}</span>
                  <span style={{ color:C.textDim }}>·</span>
                  <span style={{ color:C.textMuted, fontSize:12 }}>{c.lastActive}</span>
                </div>
                <div style={{ marginTop:8 }}>
                  <ProgressBar value={c.progress} color={c.color} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CLIENTS LIST
const ClientsScreen = ({ onNavigate }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todos");
  const filtered = CLIENTS.filter(c => (c.name.toLowerCase().includes(search.toLowerCase()) || c.goal.toLowerCase().includes(search.toLowerCase())) && (filter === "todos" || c.plan.toLowerCase() === filter));

  return (
    <div style={{ padding:"0 0 20px" }}>
      <div style={{ padding:"20px 20px 0", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:0 }}>Mis Clientes</h2>
          <Btn onClick={() => onNavigate("add-client")} small><Icon name="plus" size={14} color="#fff" /> Añadir</Btn>
        </div>
        <div style={{ display:"flex", alignItems:"center", background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:"10px 14px", gap:10, marginBottom:12 }}>
          <Icon name="search" size={16} color={C.textMuted} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar cliente..." style={{ background:"none", border:"none", color:C.text, fontSize:14, outline:"none", flex:1 }} />
        </div>
        <div style={{ display:"flex", gap:8, marginBottom:16, overflowX:"auto" }}>
          {["todos","básico","premium","elite"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ background: filter===f ? C.orange : C.card2, color: filter===f ? "#fff" : C.textMuted, border:`1px solid ${filter===f ? C.orange : C.border}`, borderRadius:20, padding:"6px 14px", cursor:"pointer", fontSize:12, fontWeight:600, whiteSpace:"nowrap" }}>
              {f.charAt(0).toUpperCase()+f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding:"16px 20px", display:"flex", flexDirection:"column", gap:12 }}>
        <div style={{ color:C.textMuted, fontSize:13, marginBottom:4 }}>{filtered.length} clientes encontrados</div>
        {filtered.map(c => (
          <div key={c.id} onClick={() => onNavigate("client-detail", c)} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:18, padding:"16px", cursor:"pointer" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
              <div style={{ position:"relative" }}>
                <Avatar initials={c.avatar} color={c.color} size={50} />
                {c.paid && <div style={{ position:"absolute", bottom:0, right:0, background:C.green, borderRadius:"50%", width:14, height:14, border:`2px solid ${C.card}`, display:"flex", alignItems:"center", justifyContent:"center" }}><Icon name="check" size={8} color="#fff" /></div>}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ color:C.text, fontWeight:800, fontSize:15 }}>{c.name}</span>
                  <Badge text={c.plan} color={c.plan==="Elite" ? C.purple : c.plan==="Premium" ? C.orange : C.blue} />
                </div>
                <span style={{ color:C.textMuted, fontSize:12 }}>{c.age} años · {c.goal} · {c.level}</span>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:12 }}>
              {[["🔥", `${c.streak}d racha`], ["📅", c.nextSession], ["⚖️", `${c.weight}kg`]].map(([icon, val], i) => (
                <div key={i} style={{ background:C.card2, borderRadius:10, padding:"8px", textAlign:"center" }}>
                  <div style={{ fontSize:14 }}>{icon}</div>
                  <div style={{ color:C.textMuted, fontSize:11, marginTop:2 }}>{val}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                <span style={{ color:C.textMuted, fontSize:12 }}>Progreso general</span>
                <span style={{ color:c.color, fontSize:12, fontWeight:700 }}>{c.progress}%</span>
              </div>
              <ProgressBar value={c.progress} color={c.color} height={8} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CLIENT DETAIL
const ClientDetailScreen = ({ client, onNavigate }) => {
  const [tab, setTab] = useState("resumen");
  if (!client) return null;

  const tabs = ["resumen","rutina","nutrición","progreso","pagos"];

  return (
    <div>
      {/* Header */}
      <div style={{ background:`linear-gradient(160deg, ${client.color}33, ${C.card})`, padding:"20px 20px 0", borderBottom:`1px solid ${C.border}` }}>
        <button onClick={() => onNavigate("clients")} style={{ background:"none", border:"none", cursor:"pointer", color:C.textMuted, display:"flex", alignItems:"center", gap:6, fontSize:13, marginBottom:16 }}>
          <Icon name="back" size={16} color={C.textMuted} /> Volver
        </button>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
          <Avatar initials={client.avatar} color={client.color} size={60} />
          <div>
            <h2 style={{ color:C.text, fontWeight:800, fontSize:18, margin:"0 0 4px" }}>{client.name}</h2>
            <span style={{ color:C.textMuted, fontSize:13 }}>{client.goal} · {client.level}</span>
            <div style={{ display:"flex", gap:8, marginTop:8 }}>
              <Badge text={client.plan} color={client.plan==="Elite" ? C.purple : client.plan==="Premium" ? C.orange : C.blue} />
              <Badge text={client.paid ? "Al día" : "Pendiente"} color={client.paid ? C.green : C.red} />
            </div>
          </div>
        </div>
        <div style={{ display:"flex", overflowX:"auto", gap:4, paddingBottom:0 }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background:"none", border:"none", borderBottom:`2px solid ${tab===t ? client.color : "transparent"}`, color: tab===t ? client.color : C.textMuted, cursor:"pointer", padding:"10px 14px", fontWeight:700, fontSize:13, whiteSpace:"nowrap" }}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding:"20px" }}>
        {tab === "resumen" && (
          <div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20 }}>
              {[["⚡", "Racha", `${client.streak} días`, client.color], ["🏋️", "Peso", `${client.weight} kg`, C.blue], ["📏", "Talla", `${client.height} cm`, C.green], ["📅", "Desde", client.joinDate, C.purple]].map(([icon, label, val, col]) => (
                <div key={label} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px" }}>
                  <span style={{ fontSize:20 }}>{icon}</span>
                  <div style={{ color:C.textMuted, fontSize:12, marginTop:6 }}>{label}</div>
                  <div style={{ color:col, fontWeight:800, fontSize:18, marginTop:2 }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"16px", marginBottom:16 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
                <span style={{ color:C.text, fontWeight:700 }}>Progreso del programa</span>
                <span style={{ color:client.color, fontWeight:800 }}>{client.progress}%</span>
              </div>
              <ProgressBar value={client.progress} color={client.color} height={10} />
              <div style={{ color:C.textMuted, fontSize:12, marginTop:8 }}>Próxima sesión: {client.nextSession}</div>
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <Btn onClick={() => onNavigate("new-routine")} style={{ flex:1, justifyContent:"center" }}><Icon name="dumbbell" size={16} color="#fff" /> Nueva Rutina</Btn>
              <Btn onClick={() => onNavigate("chat", client)} outline style={{ flex:1, justifyContent:"center" }}><Icon name="chat" size={16} color={C.orange} /> Mensaje</Btn>
            </div>
          </div>
        )}

        {tab === "rutina" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <h3 style={{ color:C.text, fontWeight:700, margin:0 }}>Rutina activa</h3>
              <Btn onClick={() => onNavigate("new-routine")} small><Icon name="plus" size={14} color="#fff" /> Nueva</Btn>
            </div>
            {["Lunes - Pecho & Tríceps","Miércoles - Espalda & Bíceps","Viernes - Piernas & Hombros"].map((day, i) => (
              <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px", marginBottom:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ color:C.text, fontWeight:700, fontSize:14 }}>{day}</span>
                  <button onClick={() => onNavigate("exercises")} style={{ background:C.orange+"22", color:C.orange, border:"none", borderRadius:8, padding:"4px 10px", cursor:"pointer", fontSize:12, fontWeight:600 }}>Ver ejercicios</button>
                </div>
                <div style={{ color:C.textMuted, fontSize:12, marginTop:6 }}>4 ejercicios · 3-4 series · 60 min estimado</div>
              </div>
            ))}
          </div>
        )}

        {tab === "nutrición" && (
          <div>
            <h3 style={{ color:C.text, fontWeight:700, marginBottom:16 }}>Plan nutricional activo</h3>
            {NUTRITION_PLANS.slice(0,1).map(p => (
              <div key={p.name} style={{ background:C.card, border:`1px solid ${p.color}44`, borderRadius:16, padding:"16px", marginBottom:16 }}>
                <div style={{ color:p.color, fontWeight:700, fontSize:14, marginBottom:12 }}>{p.name}</div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:8 }}>
                  {[["Calorías", p.calories, "kcal", C.orange], ["Proteína", p.protein, "g", C.red], ["Carbos", p.carbs, "g", C.yellow], ["Grasas", p.fat, "g", C.blue]].map(([label, val, unit, col]) => (
                    <div key={label} style={{ textAlign:"center", background:C.card2, borderRadius:10, padding:"10px 6px" }}>
                      <div style={{ color:col, fontWeight:800, fontSize:16 }}>{val}</div>
                      <div style={{ color:C.textMuted, fontSize:10 }}>{unit}</div>
                      <div style={{ color:C.textDim, fontSize:10 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Btn onClick={() => onNavigate("nutrition")} outline style={{ width:"100%", justifyContent:"center" }}>Editar plan nutricional</Btn>
          </div>
        )}

        {tab === "progreso" && (
          <div>
            <h3 style={{ color:C.text, fontWeight:700, marginBottom:16 }}>Registro de progreso</h3>
            {[["Peso corporal", "78 kg → 75 kg", "-3 kg en 8 sem", C.green, "scale"], ["Fuerza (Bench)", "60 kg → 80 kg", "+20 kg en 3 meses", C.blue, "dumbbell"], ["Adherencia", "86%", "5/6 sesiones/semana", C.orange, "fire"]].map(([label, val, sub, col, icon]) => (
              <div key={label} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px", marginBottom:10, display:"flex", gap:12, alignItems:"center" }}>
                <div style={{ background:`${col}22`, borderRadius:12, padding:10 }}><Icon name={icon} size={20} color={col} /></div>
                <div>
                  <div style={{ color:C.text, fontWeight:700 }}>{label}</div>
                  <div style={{ color:col, fontWeight:800, fontSize:16 }}>{val}</div>
                  <div style={{ color:C.textMuted, fontSize:12 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "pagos" && (
          <div>
            <h3 style={{ color:C.text, fontWeight:700, marginBottom:16 }}>Estado de pagos</h3>
            <div style={{ background: client.paid ? C.green+"22" : C.red+"22", border:`1px solid ${client.paid ? C.green : C.red}44`, borderRadius:14, padding:"14px 16px", marginBottom:16, display:"flex", gap:12, alignItems:"center" }}>
              <Icon name={client.paid ? "check" : "x"} size={20} color={client.paid ? C.green : C.red} />
              <div>
                <div style={{ color: client.paid ? C.green : C.red, fontWeight:700 }}>{client.paid ? "Pago al día" : "Pago pendiente"}</div>
                <div style={{ color:C.textMuted, fontSize:12 }}>{client.paid ? "Próximo cobro: 1 Jun 2024" : "Vencido: 15 May 2024"}</div>
              </div>
            </div>
            {[["Mayo 2024","$34.990",client.paid], ["Abril 2024","$34.990",true], ["Marzo 2024","$34.990",true]].map(([mes, monto, pagado], i) => (
              <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px 16px", marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div><div style={{ color:C.text, fontWeight:600 }}>{mes}</div><div style={{ color:C.textMuted, fontSize:12 }}>Plan {client.plan}</div></div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ color:C.text, fontWeight:700 }}>{monto}</div>
                  <Badge text={pagado ? "Pagado" : "Pendiente"} color={pagado ? C.green : C.red} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// EXERCISE LIBRARY
const ExerciseScreen = ({ onNavigate, selectionMode, onSelect, selectedIds = [] }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selected, setSelected] = useState(new Set(selectedIds));
  const cats = ["Todos", ...new Set(EXERCISES.map(e => e.category))];
  const filtered = EXERCISES.filter(e => (category === "Todos" || e.category === category) && (e.name.toLowerCase().includes(search.toLowerCase()) || e.muscle.toLowerCase().includes(search.toLowerCase())));

  const toggle = (id) => {
    const s = new Set(selected);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelected(s);
  };

  return (
    <div>
      <div style={{ padding:"20px 20px 0", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:0 }}>Biblioteca de Ejercicios</h2>
          {selectionMode && selected.size > 0 && (
            <Btn onClick={() => onSelect && onSelect([...selected])} small><Icon name="check" size={14} color="#fff" /> {selected.size} selec.</Btn>
          )}
        </div>
        <div style={{ display:"flex", alignItems:"center", background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:"10px 14px", gap:10, marginBottom:12 }}>
          <Icon name="search" size={16} color={C.textMuted} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar ejercicio, músculo..." style={{ background:"none", border:"none", color:C.text, fontSize:14, outline:"none", flex:1 }} />
        </div>
        <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:12 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setCategory(c)} style={{ background: category===c ? C.orange : C.card2, color: category===c ? "#fff" : C.textMuted, border:`1px solid ${category===c ? C.orange : C.border}`, borderRadius:20, padding:"6px 14px", cursor:"pointer", fontSize:12, fontWeight:600, whiteSpace:"nowrap" }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ padding:"16px 20px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        {filtered.map(ex => (
          <div key={ex.id} onClick={() => selectionMode ? toggle(ex.id) : onNavigate("exercise-detail", ex)} style={{ background:C.card, border:`1px solid ${selected.has(ex.id) ? C.orange : C.border}`, borderRadius:16, cursor:"pointer", overflow:"hidden", position:"relative", transition:"all 0.2s" }}>
            {selected.has(ex.id) && (
              <div style={{ position:"absolute", top:8, right:8, background:C.orange, borderRadius:"50%", width:22, height:22, display:"flex", alignItems:"center", justifyContent:"center", zIndex:2 }}>
                <Icon name="check" size={12} color="#fff" />
              </div>
            )}
            <div style={{ height:110, overflow:"hidden", position:"relative" }}>
              <img src={ex.image} alt={ex.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, #12141Aaa, transparent)" }} />
              <div style={{ position:"absolute", bottom:6, left:8 }}>
                <Badge text={ex.difficulty} color={ex.difficulty==="Avanzado" ? C.red : ex.difficulty==="Intermedio" ? C.orange : C.green} />
              </div>
            </div>
            <div style={{ padding:"10px 12px" }}>
              <div style={{ color:C.text, fontWeight:700, fontSize:13, marginBottom:3 }}>{ex.name}</div>
              <div style={{ color:C.textMuted, fontSize:11 }}>{ex.muscle}</div>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:6 }}>
                <Icon name="video" size={12} color={C.orange} />
                <span style={{ color:C.orange, fontSize:11, fontWeight:600 }}>Video HD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// EXERCISE DETAIL
const ExerciseDetailScreen = ({ exercise, onNavigate }) => {
  if (!exercise) return null;
  return (
    <div>
      <div style={{ position:"relative" }}>
        <img src={exercise.image} alt={exercise.name} style={{ width:"100%", height:240, objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, #0A0B0F, transparent 50%)" }} />
        <button onClick={() => onNavigate("exercises")} style={{ position:"absolute", top:20, left:20, background:"rgba(0,0,0,0.5)", border:"none", borderRadius:12, padding:10, cursor:"pointer", backdropFilter:"blur(10px)" }}>
          <Icon name="back" size={18} color="#fff" />
        </button>
        <div style={{ position:"absolute", bottom:16, left:20, right:20 }}>
          <Badge text={exercise.category} color={C.orange} />
          <h2 style={{ color:"#fff", fontWeight:900, fontSize:24, margin:"6px 0 2px" }}>{exercise.name}</h2>
          <span style={{ color:"rgba(255,255,255,0.7)", fontSize:13 }}>{exercise.muscle}</span>
        </div>
      </div>

      <div style={{ padding:"20px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginBottom:20 }}>
          {[["Series", exercise.sets], ["Reps", exercise.reps], ["Equipo", exercise.equipment]].map(([l, v]) => (
            <div key={l} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px", textAlign:"center" }}>
              <div style={{ color:C.textMuted, fontSize:11, marginBottom:4 }}>{l}</div>
              <div style={{ color:C.orange, fontWeight:800, fontSize:14 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"16px", marginBottom:16 }}>
          <h3 style={{ color:C.text, fontWeight:700, fontSize:15, marginBottom:10 }}>📋 Descripción</h3>
          <p style={{ color:C.textMuted, fontSize:14, lineHeight:1.6, margin:0 }}>{exercise.description}</p>
        </div>

        {/* Video embed */}
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, overflow:"hidden", marginBottom:16 }}>
          <div style={{ padding:"14px 16px", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", gap:8 }}>
            <Icon name="video" size={16} color={C.orange} />
            <span style={{ color:C.text, fontWeight:700 }}>Video de referencia</span>
          </div>
          <div style={{ background:"#000", position:"relative" }}>
            <iframe src={exercise.video} title={exercise.name} width="100%" height="200" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ display:"block" }} />
          </div>
        </div>

        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:20 }}>
          {exercise.tags.map(t => <Badge key={t} text={`#${t}`} color={C.blue} />)}
        </div>

        <Btn style={{ width:"100%", justifyContent:"center" }}><Icon name="plus" size={16} color="#fff" /> Añadir a rutina</Btn>
      </div>
    </div>
  );
};

// ROUTINE BUILDER
const RoutineBuilderScreen = ({ onNavigate }) => {
  const [routineName, setRoutineName] = useState("Nueva Rutina");
  const [client, setClient] = useState("");
  const [days, setDays] = useState([
    { name:"Lunes", exercises:[] },
    { name:"Miércoles", exercises:[] },
    { name:"Viernes", exercises:[] },
  ]);
  const [activeDay, setActiveDay] = useState(0);
  const [showExercises, setShowExercises] = useState(false);

  const addExercise = (ex) => {
    const d = [...days];
    d[activeDay].exercises.push({ ...ex, sets:3, reps:"10-12", rest:60, rir:2 });
    setDays(d);
    setShowExercises(false);
  };

  if (showExercises) return <ExerciseScreen onNavigate={() => setShowExercises(false)} selectionMode onSelect={(ids) => { ids.forEach(id => { const ex = EXERCISES.find(e => e.id === id); if(ex) addExercise(ex); }); }} />;

  return (
    <div style={{ padding:"0 0 30px" }}>
      <div style={{ padding:"20px", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:"0 0 16px" }}>Crear Rutina</h2>
        <input value={routineName} onChange={e => setRoutineName(e.target.value)} style={{ width:"100%", background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px 16px", color:C.text, fontSize:16, fontWeight:700, outline:"none", boxSizing:"border-box", marginBottom:10 }} />
        <select value={client} onChange={e => setClient(e.target.value)} style={{ width:"100%", background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px 16px", color: client ? C.text : C.textMuted, fontSize:14, outline:"none", cursor:"pointer", boxSizing:"border-box" }}>
          <option value="">Asignar a cliente...</option>
          {CLIENTS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      <div style={{ display:"flex", gap:0, overflowX:"auto", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        {days.map((d,i) => (
          <button key={i} onClick={() => setActiveDay(i)} style={{ flex:1, padding:"12px", background:"none", border:"none", borderBottom:`2px solid ${activeDay===i ? C.orange : "transparent"}`, color: activeDay===i ? C.orange : C.textMuted, cursor:"pointer", fontWeight:700, fontSize:13, whiteSpace:"nowrap" }}>
            {d.name} {d.exercises.length > 0 && <span style={{ background:C.orange+"33", color:C.orange, borderRadius:10, padding:"1px 6px", fontSize:11 }}>{d.exercises.length}</span>}
          </button>
        ))}
        <button onClick={() => setDays([...days, { name:`Día ${days.length+1}`, exercises:[] }])} style={{ padding:"12px 16px", background:"none", border:"none", color:C.orange, cursor:"pointer", fontWeight:800, fontSize:18 }}>+</button>
      </div>

      <div style={{ padding:"20px" }}>
        {days[activeDay].exercises.length === 0 ? (
          <div style={{ textAlign:"center", padding:"40px 20px" }}>
            <div style={{ fontSize:48, marginBottom:12 }}>🏋️</div>
            <p style={{ color:C.textMuted, marginBottom:20 }}>No hay ejercicios en este día</p>
            <Btn onClick={() => setShowExercises(true)} style={{ margin:"0 auto" }}><Icon name="plus" size={16} color="#fff" /> Añadir ejercicios</Btn>
          </div>
        ) : (
          <div>
            {days[activeDay].exercises.map((ex, i) => (
              <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"14px", marginBottom:12 }}>
                <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:12 }}>
                  <img src={ex.image} alt={ex.name} style={{ width:50, height:50, borderRadius:10, objectFit:"cover" }} />
                  <div style={{ flex:1 }}>
                    <div style={{ color:C.text, fontWeight:700 }}>{ex.name}</div>
                    <div style={{ color:C.textMuted, fontSize:12 }}>{ex.muscle}</div>
                  </div>
                  <button onClick={() => { const d=[...days]; d[activeDay].exercises.splice(i,1); setDays(d); }} style={{ background:"none", border:"none", cursor:"pointer", color:C.red }}><Icon name="x" size={16} color={C.red} /></button>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:8 }}>
                  {[["Series", "sets", ex.sets], ["Reps", "reps", ex.reps], ["Desc.(s)", "rest", ex.rest], ["RIR", "rir", ex.rir]].map(([label, field, val]) => (
                    <div key={field} style={{ background:C.card2, borderRadius:10, padding:"8px", textAlign:"center" }}>
                      <div style={{ color:C.textMuted, fontSize:10, marginBottom:4 }}>{label}</div>
                      <input value={val} onChange={e => { const d=[...days]; d[activeDay].exercises[i][field]=e.target.value; setDays(d); }} style={{ background:"none", border:"none", color:C.orange, fontWeight:800, fontSize:14, width:"100%", textAlign:"center", outline:"none" }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => setShowExercises(true)} style={{ width:"100%", background:C.card2, border:`2px dashed ${C.border}`, borderRadius:14, padding:"14px", color:C.textMuted, cursor:"pointer", fontSize:14, fontWeight:600, marginTop:4 }}>
              + Añadir ejercicio
            </button>
          </div>
        )}

        {days[activeDay].exercises.length > 0 && (
          <Btn onClick={() => onNavigate("home")} style={{ width:"100%", justifyContent:"center", marginTop:20 }}>
            <Icon name="check" size={16} color="#fff" /> Guardar Rutina
          </Btn>
        )}
      </div>
    </div>
  );
};

// NUTRITION SCREEN
const NutritionScreen = () => {
  const [selected, setSelected] = useState(1);
  const plan = NUTRITION_PLANS[selected];
  const macros = [
    { label:"Proteína", g: plan.protein, color:C.red, pct: Math.round(plan.protein*4/plan.calories*100) },
    { label:"Carbohidratos", g: plan.carbs, color:C.yellow, pct: Math.round(plan.carbs*4/plan.calories*100) },
    { label:"Grasas", g: plan.fat, color:C.blue, pct: Math.round(plan.fat*9/plan.calories*100) },
  ];

  const foods = [
    { meal:"Desayuno", items:["Avena 80g + proteína","2 huevos + 3 claras","Fruta de temporada","Café negro"], cal:520 },
    { meal:"Almuerzo", items:["Pechuga de pollo 200g","Arroz integral 150g","Ensalada verde grande","Aceite de oliva 1 cdta"], cal:680 },
    { meal:"Pre-Entreno", items:["Plátano + 30g proteína","Café o té verde"], cal:280 },
    { meal:"Cena", items:["Salmón 180g o carne magra","Vegetales al vapor","Camote 100g o legumbres"], cal:560 },
  ];

  return (
    <div style={{ padding:"0 0 30px" }}>
      <div style={{ padding:"20px 20px 0", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:"0 0 16px" }}>Pautas Nutricionales</h2>
        <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:12 }}>
          {NUTRITION_PLANS.map((p,i) => (
            <button key={i} onClick={() => setSelected(i)} style={{ background: selected===i ? p.color : C.card2, color: selected===i ? "#fff" : C.textMuted, border:`1px solid ${selected===i ? p.color : C.border}`, borderRadius:20, padding:"6px 14px", cursor:"pointer", fontSize:12, fontWeight:600, whiteSpace:"nowrap" }}>
              {p.name.split("/")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding:"20px" }}>
        {/* Calories */}
        <div style={{ background:`linear-gradient(135deg, ${plan.color}22, ${C.card})`, border:`1px solid ${plan.color}44`, borderRadius:20, padding:"20px", marginBottom:20, textAlign:"center" }}>
          <div style={{ color:plan.color, fontSize:12, fontWeight:700, letterSpacing:1, marginBottom:4 }}>CALORÍAS DIARIAS</div>
          <div style={{ color:C.text, fontSize:48, fontWeight:900 }}>{plan.calories.toLocaleString()}</div>
          <div style={{ color:C.textMuted, fontSize:13 }}>kcal · {plan.name}</div>
        </div>

        {/* Macros */}
        <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:24 }}>
          {macros.map(m => (
            <div key={m.label} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <span style={{ color:C.text, fontWeight:700 }}>{m.label}</span>
                <span style={{ color:m.color, fontWeight:800 }}>{m.g}g · {m.pct}%</span>
              </div>
              <ProgressBar value={m.pct} color={m.color} height={8} />
            </div>
          ))}
        </div>

        {/* Meal plan */}
        <h3 style={{ color:C.text, fontWeight:700, marginBottom:14 }}>Plan de alimentación</h3>
        {foods.map((f, i) => (
          <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"14px 16px", marginBottom:10 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
              <span style={{ color:plan.color, fontWeight:700, fontSize:15 }}>{f.meal}</span>
              <span style={{ color:C.textMuted, fontSize:13 }}>{f.cal} kcal</span>
            </div>
            {f.items.map((item, j) => (
              <div key={j} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:5 }}>
                <div style={{ width:6, height:6, borderRadius:"50%", background:plan.color, flexShrink:0 }} />
                <span style={{ color:C.textMuted, fontSize:13 }}>{item}</span>
              </div>
            ))}
          </div>
        ))}

        {/* Supplements */}
        <h3 style={{ color:C.text, fontWeight:700, marginBottom:14 }}>Suplementación recomendada</h3>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {[["🥚","Proteína Whey","Post-entreno"], ["🐟","Omega-3","Con comidas"], ["☀️","Vitamina D","Mañana"], ["💊","Creatina","5g/día"], ["🌿","Magnesio","Antes de dormir"], ["⚡","Cafeína","Pre-entreno"]].map(([icon, name, timing]) => (
            <div key={name} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px", display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:24 }}>{icon}</span>
              <div><div style={{ color:C.text, fontSize:13, fontWeight:600 }}>{name}</div><div style={{ color:C.textMuted, fontSize:11 }}>{timing}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CHAT / SUPPORT
const ChatScreen = ({ client, onNavigate }) => {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([
    { id:1, from:"client", text:"Hola profe! Tengo una duda sobre mi rutina 💪", time:"10:20" },
    { id:2, from:"trainer", text:"Hola! Dime, ¿en qué te puedo ayudar?", time:"10:21" },
    { id:3, from:"client", text:"¿Puedo reemplazar la sentadilla por prensa esta semana? Tengo la rodilla un poco molesta", time:"10:22" },
    { id:4, from:"trainer", text:"Claro, sí puedes. Usa la prensa con rango de movimiento controlado y reduce el peso un 20%. También agrega trabajo de movilidad al inicio 🙌", time:"10:23" },
  ]);

  const send = () => {
    if (!msg.trim()) return;
    setMsgs([...msgs, { id:Date.now(), from:"trainer", text:msg, time:new Date().toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"}) }]);
    setMsg("");
  };

  const c = client || CLIENTS[0];

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%" }}>
      {/* Header */}
      <div style={{ background:C.card, borderBottom:`1px solid ${C.border}`, padding:"16px 20px", display:"flex", alignItems:"center", gap:12 }}>
        <Avatar initials={c.avatar} color={c.color} size={40} />
        <div style={{ flex:1 }}>
          <div style={{ color:C.text, fontWeight:700 }}>{c.name}</div>
          <div style={{ color:C.green, fontSize:12, display:"flex", alignItems:"center", gap:4 }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:C.green }} /> En línea
          </div>
        </div>
        <button style={{ background:C.orangeDim, border:"none", borderRadius:10, padding:8, cursor:"pointer" }}>
          <Icon name="video" size={18} color={C.orange} />
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex:1, overflowY:"auto", padding:"20px", display:"flex", flexDirection:"column", gap:10 }}>
        {msgs.map(m => (
          <div key={m.id} style={{ display:"flex", justifyContent: m.from==="trainer" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth:"75%", background: m.from==="trainer" ? `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})` : C.card, border: m.from==="trainer" ? "none" : `1px solid ${C.border}`, borderRadius: m.from==="trainer" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", padding:"10px 14px" }}>
              <div style={{ color: m.from==="trainer" ? "#fff" : C.text, fontSize:14, lineHeight:1.5 }}>{m.text}</div>
              <div style={{ color: m.from==="trainer" ? "rgba(255,255,255,0.6)" : C.textDim, fontSize:10, marginTop:4, textAlign:"right" }}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{ background:C.card, borderTop:`1px solid ${C.border}`, padding:"12px 16px", display:"flex", gap:10, alignItems:"center" }}>
        <button style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:10, padding:10, cursor:"pointer" }}>
          <Icon name="image" size={18} color={C.textMuted} />
        </button>
        <input value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key==="Enter" && send()} placeholder="Escribe un mensaje..." style={{ flex:1, background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:"10px 14px", color:C.text, fontSize:14, outline:"none" }} />
        <button onClick={send} style={{ background: msg.trim() ? `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})` : C.card2, border:"none", borderRadius:12, padding:10, cursor:"pointer", transition:"all 0.2s" }}>
          <Icon name="send" size={18} color={msg.trim() ? "#fff" : C.textMuted} />
        </button>
      </div>
    </div>
  );
};

// MESSAGES LIST
const MessagesScreen = ({ onNavigate }) => (
  <div style={{ padding:"0 0 20px" }}>
    <div style={{ padding:"20px", background:C.card, borderBottom:`1px solid ${C.border}` }}>
      <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:0 }}>Mensajes</h2>
    </div>
    <div style={{ padding:"16px 20px", display:"flex", flexDirection:"column", gap:2 }}>
      {MESSAGES.map(m => (
        <div key={m.id} onClick={() => onNavigate("chat", CLIENTS.find(c => c.avatar === m.avatar) || CLIENTS[0])} style={{ background: m.unread ? C.card : "transparent", border:`1px solid ${m.unread ? C.border : "transparent"}`, borderRadius:16, padding:"14px 16px", cursor:"pointer", display:"flex", gap:12, alignItems:"center" }}>
          <div style={{ position:"relative" }}>
            <Avatar initials={m.avatar} color={m.color} size={48} />
            {m.unread && <div style={{ position:"absolute", top:0, right:0, width:12, height:12, background:C.orange, borderRadius:"50%", border:`2px solid ${C.bg}` }} />}
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span style={{ color:C.text, fontWeight:m.unread ? 800 : 600, fontSize:14 }}>{m.sender}</span>
              <span style={{ color:C.textMuted, fontSize:12 }}>{m.time}</span>
            </div>
            <div style={{ color: m.unread ? C.textMuted : C.textDim, fontSize:13, marginTop:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{m.text}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// PAYMENTS SCREEN
const PaymentsScreen = () => {
  const [tab, setTab] = useState("planes");

  return (
    <div style={{ padding:"0 0 30px" }}>
      <div style={{ padding:"20px 20px 0", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:"0 0 16px" }}>Pagos & Suscripciones</h2>
        <div style={{ display:"flex", gap:4, marginBottom:0 }}>
          {["planes","historial","métodos"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex:1, padding:"10px", background:"none", border:"none", borderBottom:`2px solid ${tab===t ? C.orange : "transparent"}`, color: tab===t ? C.orange : C.textMuted, cursor:"pointer", fontWeight:700, fontSize:13 }}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding:"20px" }}>
        {tab === "planes" && (
          <div>
            <div style={{ background:`linear-gradient(135deg, ${C.orange}22, ${C.card})`, border:`1px solid ${C.orange}44`, borderRadius:16, padding:"16px", marginBottom:20, display:"flex", gap:12, alignItems:"center" }}>
              <div style={{ background:C.orange+"22", borderRadius:12, padding:10 }}><Icon name="trophy" size={20} color={C.orange} /></div>
              <div><div style={{ color:C.text, fontWeight:700 }}>Ingresos del mes</div><div style={{ color:C.orange, fontWeight:900, fontSize:22 }}>$174.950</div><div style={{ color:C.textMuted, fontSize:12 }}>5 clientes activos</div></div>
            </div>
            {PLANS.map(p => (
              <div key={p.id} style={{ background:C.card, border:`2px solid ${p.popular ? p.color : C.border}`, borderRadius:20, padding:"20px", marginBottom:14, position:"relative" }}>
                {p.popular && <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:`linear-gradient(135deg, ${p.color}, ${p.color}CC)`, color:"#fff", padding:"4px 16px", borderRadius:20, fontSize:12, fontWeight:800, whiteSpace:"nowrap" }}>⭐ MÁS POPULAR</div>}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                  <div>
                    <Icon name={p.icon} size={24} color={p.color} />
                    <h3 style={{ color:C.text, fontWeight:800, fontSize:20, margin:"8px 0 0" }}>Plan {p.name}</h3>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ color:p.color, fontWeight:900, fontSize:24 }}>${p.price.toLocaleString()}</div>
                    <div style={{ color:C.textMuted, fontSize:12 }}>/ {p.period}</div>
                  </div>
                </div>
                {p.features.map(f => (
                  <div key={f} style={{ display:"flex", gap:10, alignItems:"center", marginBottom:8 }}>
                    <div style={{ background:`${p.color}22`, borderRadius:"50%", width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <Icon name="check" size={11} color={p.color} />
                    </div>
                    <span style={{ color:C.textMuted, fontSize:13 }}>{f}</span>
                  </div>
                ))}
                <button style={{ width:"100%", marginTop:16, background: p.popular ? `linear-gradient(135deg, ${p.color}, ${p.color}CC)` : "transparent", color: p.popular ? "#fff" : p.color, border:`2px solid ${p.color}`, borderRadius:14, padding:"12px", fontWeight:800, fontSize:14, cursor:"pointer", boxShadow: p.popular ? `0 6px 24px ${p.color}44` : "none" }}>
                  Contratar Plan {p.name}
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === "historial" && (
          <div>
            {[
              { client:"Carlos Mendoza", plan:"Premium", amount:"$34.990", date:"1 May 2024", status:"Pagado" },
              { client:"María González", plan:"Básico", amount:"$19.990", date:"3 May 2024", status:"Pagado" },
              { client:"Diego Ramírez", plan:"Elite", amount:"$59.990", date:"5 May 2024", status:"Pagado" },
              { client:"Sofía Herrera", plan:"Premium", amount:"$34.990", date:"15 May 2024", status:"Pendiente" },
              { client:"Andrés Castillo", plan:"Básico", amount:"$19.990", date:"20 May 2024", status:"Pagado" },
            ].map((t, i) => (
              <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div><div style={{ color:C.text, fontWeight:700, fontSize:14 }}>{t.client}</div><div style={{ color:C.textMuted, fontSize:12 }}>{t.plan} · {t.date}</div></div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ color:C.text, fontWeight:800 }}>{t.amount}</div>
                  <Badge text={t.status} color={t.status==="Pagado" ? C.green : C.red} />
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "métodos" && (
          <div>
            <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"16px", marginBottom:16 }}>
              <div style={{ color:C.textMuted, fontSize:12, marginBottom:12 }}>MÉTODOS ACEPTADOS</div>
              {[["💳","Tarjeta de crédito / débito","Visa, Mastercard, Amex"],["🏦","Transferencia bancaria","Pago directo"],["📱","Webpay","Chile"],["🔵","PayPal","Internacional"],["🍎","Apple Pay","iOS"],["🤖","Google Pay","Android"]].map(([icon, name, detail]) => (
                <div key={name} style={{ display:"flex", gap:12, alignItems:"center", marginBottom:12 }}>
                  <span style={{ fontSize:24 }}>{icon}</span>
                  <div><div style={{ color:C.text, fontWeight:600 }}>{name}</div><div style={{ color:C.textMuted, fontSize:12 }}>{detail}</div></div>
                  <div style={{ marginLeft:"auto" }}><Badge text="Activo" color={C.green} /></div>
                </div>
              ))}
            </div>
            <Btn style={{ width:"100%", justifyContent:"center" }}><Icon name="plus" size={16} color="#fff" /> Añadir método de pago</Btn>
          </div>
        )}
      </div>
    </div>
  );
};

// PROGRESS SCREEN
const ProgressScreen = () => {
  const weekData = [62, 68, 72, 70, 75, 78, 76];
  const days = ["L","M","M","J","V","S","D"];
  const max = Math.max(...weekData);

  return (
    <div style={{ padding:"0 0 30px" }}>
      <div style={{ padding:"20px 20px 0", background:C.card, borderBottom:`1px solid ${C.border}` }}>
        <h2 style={{ color:C.text, fontWeight:800, fontSize:20, margin:"0 0 4px" }}>Mi Progreso</h2>
        <p style={{ color:C.textMuted, fontSize:13, margin:"0 0 16px" }}>Registro semanal y métricas</p>
      </div>

      <div style={{ padding:"20px" }}>
        {/* Chart */}
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:"20px", marginBottom:20 }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
            <div><div style={{ color:C.textMuted, fontSize:12 }}>Carga semanal (% 1RM)</div><div style={{ color:C.text, fontWeight:800, fontSize:22 }}>76 kg</div></div>
            <Badge text="+18% vs sem. ant." color={C.green} />
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:8, height:80 }}>
            {weekData.map((v, i) => (
              <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                <div style={{ width:"100%", background:`linear-gradient(to top, ${C.orange}, ${C.orangeLight})`, borderRadius:"6px 6px 0 0", height:`${(v/max)*100}%`, opacity: i===6 ? 1 : 0.5, transition:"height 0.5s ease" }} />
                <span style={{ color:C.textMuted, fontSize:10 }}>{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <h3 style={{ color:C.text, fontWeight:700, marginBottom:14 }}>Logros desbloqueados 🏆</h3>
        <div style={{ display:"flex", gap:10, overflowX:"auto", marginBottom:24 }}>
          {[["🔥","21 días","Racha"],["💪","100 kg","Bench PR"],["⚡","HIIT","Maestro"],["🥗","7 días","Nutrición"],["📈","50%","Progreso"]].map(([icon, val, label]) => (
            <div key={label} style={{ background:C.card, border:`1px solid ${C.orange}44`, borderRadius:16, padding:"16px 14px", textAlign:"center", minWidth:80, flexShrink:0 }}>
              <div style={{ fontSize:28, marginBottom:6 }}>{icon}</div>
              <div style={{ color:C.orange, fontWeight:800, fontSize:13 }}>{val}</div>
              <div style={{ color:C.textMuted, fontSize:11 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <h3 style={{ color:C.text, fontWeight:700, marginBottom:14 }}>Métricas corporales</h3>
        {[["Peso corporal","78 kg","−3 kg",C.green],["Masa muscular","34.5 kg","+1.2 kg",C.blue],["% Grasa corporal","17.8%","−2.1%",C.orange],["IMC","25.5","Saludable",C.green]].map(([label, val, change, col]) => (
          <div key={label} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:"14px 16px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ color:C.textMuted, fontSize:14 }}>{label}</span>
            <div style={{ textAlign:"right" }}>
              <div style={{ color:C.text, fontWeight:800 }}>{val}</div>
              <div style={{ color:col, fontSize:12, fontWeight:600 }}>{change}</div>
            </div>
          </div>
        ))}

        {/* Hydration & Sleep */}
        <h3 style={{ color:C.text, fontWeight:700, marginBottom:14 }}>Hábitos diarios</h3>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          <div style={{ background:C.card, border:`1px solid ${C.blue}44`, borderRadius:16, padding:"16px" }}>
            <Icon name="water" size={24} color={C.blue} />
            <div style={{ color:C.text, fontWeight:800, fontSize:22, marginTop:8 }}>2.1 L</div>
            <div style={{ color:C.textMuted, fontSize:12 }}>Hidratación hoy</div>
            <ProgressBar value={70} color={C.blue} height={6} />
            <div style={{ color:C.textMuted, fontSize:11, marginTop:4 }}>Meta: 3L</div>
          </div>
          <div style={{ background:C.card, border:`1px solid ${C.purple}44`, borderRadius:16, padding:"16px" }}>
            <span style={{ fontSize:24 }}>😴</span>
            <div style={{ color:C.text, fontWeight:800, fontSize:22, marginTop:8 }}>7.5h</div>
            <div style={{ color:C.textMuted, fontSize:12 }}>Sueño anoche</div>
            <ProgressBar value={94} color={C.purple} height={6} />
            <div style={{ color:C.textMuted, fontSize:11, marginTop:4 }}>Meta: 8h</div>
          </div>
        </div>
      </div>
    </div>
  );
};



// ═══════════════════════════════════════════════════════════════════════════
// SHARED STATE (in-memory, simulates a real DB for the demo)
// ═══════════════════════════════════════════════════════════════════════════
const DB = {
  // Workout sessions logged by client
  sessions: [
    { id:1, date:"2024-05-20", day:"Lunes", focus:"Pecho + Tríceps", duration:52, exercises:[
      {name:"Press Banca", sets:[{reps:10,kg:60},{reps:9,kg:60},{reps:8,kg:65},{reps:7,kg:65}]},
      {name:"Aperturas Cable", sets:[{reps:15,kg:20},{reps:14,kg:20},{reps:12,kg:22}]},
      {name:"Fondos", sets:[{reps:12,kg:0},{reps:10,kg:0},{reps:9,kg:0}]},
    ]},
    { id:2, date:"2024-05-22", day:"Miércoles", focus:"Espalda + Bíceps", duration:58, exercises:[
      {name:"Dominadas", sets:[{reps:8,kg:0},{reps:7,kg:0},{reps:6,kg:0}]},
      {name:"Remo Barra", sets:[{reps:10,kg:70},{reps:10,kg:70},{reps:9,kg:75},{reps:8,kg:75}]},
      {name:"Curl Mancuerna", sets:[{reps:12,kg:16},{reps:12,kg:16},{reps:10,kg:18}]},
    ]},
    { id:3, date:"2024-05-24", day:"Viernes", focus:"Pierna + Core", duration:65, exercises:[
      {name:"Sentadilla", sets:[{reps:10,kg:80},{reps:9,kg:85},{reps:8,kg:85},{reps:7,kg:90}]},
      {name:"Prensa", sets:[{reps:15,kg:120},{reps:14,kg:130},{reps:12,kg:140}]},
      {name:"Plancha", sets:[{reps:60,kg:0},{reps:55,kg:0},{reps:50,kg:0}]},
    ]},
    { id:4, date:"2024-05-27", day:"Lunes", focus:"Pecho + Tríceps", duration:55, exercises:[
      {name:"Press Banca", sets:[{reps:10,kg:65},{reps:9,kg:65},{reps:8,kg:70},{reps:7,kg:70}]},
      {name:"Aperturas Cable", sets:[{reps:15,kg:22},{reps:14,kg:22},{reps:12,kg:24}]},
      {name:"Fondos", sets:[{reps:13,kg:0},{reps:11,kg:0},{reps:10,kg:0}]},
    ]},
    { id:5, date:"2024-05-29", day:"Miércoles", focus:"Espalda + Bíceps", duration:60, exercises:[
      {name:"Dominadas", sets:[{reps:9,kg:0},{reps:8,kg:0},{reps:7,kg:0}]},
      {name:"Remo Barra", sets:[{reps:10,kg:75},{reps:10,kg:75},{reps:9,kg:80}]},
      {name:"Curl Mancuerna", sets:[{reps:12,kg:18},{reps:12,kg:18},{reps:10,kg:20}]},
    ]},
  ],
  // Routine templates saved by trainer
  templates: [
    { id:1, name:"Fullbody 3x/semana", days:3, focus:"Fuerza general", exercises:9, clients:3 },
    { id:2, name:"PPL 6 días", days:6, focus:"Hipertrofia", exercises:18, clients:2 },
    { id:3, name:"Pierna Glúteo Femenino", days:2, focus:"Glúteos y pierna", exercises:8, clients:4 },
  ],
  // Saved clients (mutable for new client form)
  clients: [...CLIENTS],
  // Calendar sessions
  calendar: [
    { id:1, clientName:"Carlos M.", time:"10:00", type:"Presencial", day:0 },
    { id:2, clientName:"María G.", time:"09:00", type:"Online", day:2 },
    { id:3, clientName:"Diego R.", time:"18:00", day:3, type:"Presencial" },
    { id:4, clientName:"Sofía H.", time:"07:00", day:4, type:"Online" },
    { id:5, clientName:"Valentina L.", time:"08:00", day:0, type:"Presencial" },
  ],
};

// Logros system
const LOGROS_DEF = [
  { id:"first", icon:"🏅", name:"Primera sesión", desc:"Completaste tu primer entrenamiento", req:1, color:"#FFD32A" },
  { id:"week", icon:"🔥", name:"Una semana", desc:"7 días consecutivos entrenando", req:7, color:"#FF6B35" },
  { id:"ten", icon:"💪", name:"10 sesiones", desc:"Alcanzaste 10 entrenamientos", req:10, color:"#4A9EFF" },
  { id:"month", icon:"📅", name:"Mes completo", desc:"30 entrenamientos completados", req:30, color:"#2ECC8E" },
  { id:"fifty", icon:"⚡", name:"50 sesiones", desc:"Leyenda: 50 entrenamientos", req:50, color:"#8B5CF6" },
  { id:"hundred", icon:"👑", name:"Centenario", desc:"100 entrenamientos — élite absoluto", req:100, color:"#FF4757" },
];

// ═══════════════════════════════════════════════════════════════════════════
// ─── CLIENTE: SESIÓN ACTIVA ───────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════
const SesionActivaScreen = ({ onNavigate, onSaveSession }) => {
  const RUTINA = [
    { name:"Press Banca", sets:4, repsTarget:"8-10", kgPrev:65 },
    { name:"Aperturas Cable", sets:3, repsTarget:"12-15", kgPrev:22 },
    { name:"Fondos", sets:3, repsTarget:"Al fallo", kgPrev:0 },
  ];
  const initSets = RUTINA.map(ex => ({
    ...ex,
    logs: Array.from({length:ex.sets}, (_, i) => ({ reps:"", kg: ex.kgPrev || "", done:false }))
  }));
  const [ejercicios, setEjercicios] = useState(initSets);
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [finished, setFinished] = useState(false);
  const [restTimer, setRestTimer] = useState(null);
  const [restLeft, setRestLeft] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.floor((Date.now()-startTime)/1000)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (restLeft > 0) { const t = setTimeout(() => setRestLeft(r => r-1), 1000); return () => clearTimeout(t); }
  }, [restLeft]);

  const fmt = s => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

  const updateSet = (ei, si, field, val) => {
    setEjercicios(prev => prev.map((ex,i) => i===ei ? {...ex, logs: ex.logs.map((lg,j) => j===si ? {...lg,[field]:val} : lg)} : ex));
  };

  const toggleDone = (ei, si) => {
    updateSet(ei, si, "done", !ejercicios[ei].logs[si].done);
    setRestLeft(90);
  };

  const totalSets = ejercicios.reduce((a,e) => a + e.logs.length, 0);
  const doneSets = ejercicios.reduce((a,e) => a + e.logs.filter(l=>l.done).length, 0);
  const pct = Math.round((doneSets/totalSets)*100);

  const handleFinish = () => {
    const session = {
      id: Date.now(), date: new Date().toISOString().split("T")[0],
      day:"Lunes", focus:"Pecho + Tríceps", duration: Math.floor(elapsed/60),
      exercises: ejercicios.map(ex => ({ name:ex.name, sets: ex.logs.filter(l=>l.done).map(l=>({reps:parseInt(l.reps)||0, kg:parseFloat(l.kg)||0})) }))
    };
    DB.sessions.unshift(session);
    onSaveSession && onSaveSession(session);
    setFinished(true);
  };

  if (finished) return (
    <div style={{padding:"40px 20px", textAlign:"center"}}>
      <div style={{fontSize:64}}>🎉</div>
      <h2 style={{color:C.text, fontSize:28, fontWeight:900, margin:"16px 0 8px"}}>¡Sesión completada!</h2>
      <p style={{color:C.textMuted}}>Duración: {fmt(elapsed)} · {doneSets}/{totalSets} series</p>
      <div style={{background:C.card, borderRadius:20, padding:20, margin:"24px 0", border:`1px solid ${C.border}`}}>
        <div style={{color:C.orange, fontSize:32, fontWeight:900}}>{fmt(elapsed)}</div>
        <div style={{color:C.textMuted, fontSize:13}}>tiempo total</div>
        <div style={{display:"flex", justifyContent:"center", gap:32, marginTop:16}}>
          <div><div style={{color:C.text,fontWeight:800,fontSize:18}}>{doneSets}</div><div style={{color:C.textMuted,fontSize:12}}>series</div></div>
          <div><div style={{color:C.text,fontWeight:800,fontSize:18}}>{DB.sessions.length}</div><div style={{color:C.textMuted,fontSize:12}}>sesiones totales</div></div>
        </div>
      </div>
      <button onClick={() => onNavigate("mi-logros")} style={{background:`linear-gradient(135deg,${C.orange},${C.orangeLight})`,border:"none",borderRadius:16,padding:"14px 32px",color:"#fff",fontWeight:800,fontSize:15,cursor:"pointer",width:"100%",marginBottom:10}}>Ver mis logros 🏅</button>
      <button onClick={() => onNavigate("home")} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"14px 32px",color:C.text,fontWeight:700,fontSize:15,cursor:"pointer",width:"100%"}}>Volver al inicio</button>
    </div>
  );

  return (
    <div style={{paddingBottom:100}}>
      {/* Header */}
      <div style={{background:C.card,padding:"16px 20px",borderBottom:`1px solid ${C.border}`,position:"sticky",top:0,zIndex:10}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <div>
            <div style={{color:C.text,fontWeight:800,fontSize:16}}>Pecho + Tríceps</div>
            <div style={{color:C.orange,fontWeight:700,fontSize:20}}>{fmt(elapsed)}</div>
          </div>
          {restLeft > 0 && (
            <div style={{background:C.orange+"22",borderRadius:14,padding:"8px 14px",textAlign:"center"}}>
              <div style={{color:C.orange,fontWeight:900,fontSize:18}}>{restLeft}s</div>
              <div style={{color:C.textMuted,fontSize:10}}>Descanso</div>
            </div>
          )}
        </div>
        <div style={{background:C.bg,borderRadius:8,height:8,overflow:"hidden"}}>
          <div style={{width:pct+"%",height:"100%",background:`linear-gradient(90deg,${C.orange},${C.orangeLight})`,borderRadius:8,transition:"width 0.4s"}}/>
        </div>
        <div style={{color:C.textMuted,fontSize:11,marginTop:4}}>{doneSets}/{totalSets} series completadas · {pct}%</div>
      </div>

      <div style={{padding:"16px"}}>
        {ejercicios.map((ex, ei) => (
          <div key={ei} style={{background:C.card,borderRadius:20,padding:"16px",marginBottom:14,border:`1px solid ${C.border}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{color:C.text,fontWeight:800,fontSize:15}}>{ex.name}</div>
              <div style={{color:C.textMuted,fontSize:12}}>{ex.repsTarget} reps</div>
            </div>
            {/* Column headers */}
            <div style={{display:"grid",gridTemplateColumns:"30px 1fr 1fr 44px",gap:6,marginBottom:6,padding:"0 4px"}}>
              <div style={{color:C.textDim,fontSize:11}}>Set</div>
              <div style={{color:C.textDim,fontSize:11,textAlign:"center"}}>Kg</div>
              <div style={{color:C.textDim,fontSize:11,textAlign:"center"}}>Reps</div>
              <div style={{color:C.textDim,fontSize:11,textAlign:"center"}}>✓</div>
            </div>
            {ex.logs.map((lg, si) => (
              <div key={si} style={{display:"grid",gridTemplateColumns:"30px 1fr 1fr 44px",gap:6,marginBottom:6,alignItems:"center",opacity:lg.done?0.6:1}}>
                <div style={{color:C.textMuted,fontSize:13,fontWeight:600}}>{si+1}</div>
                <input
                  type="number" inputMode="decimal" placeholder={ex.kgPrev||"0"}
                  value={lg.kg} onChange={e => updateSet(ei,si,"kg",e.target.value)}
                  style={{background:lg.done?C.bg:C.card2,border:`1px solid ${lg.done?C.border:C.orange+"44"}`,borderRadius:10,padding:"8px",color:C.text,fontSize:14,textAlign:"center",outline:"none",width:"100%"}}
                />
                <input
                  type="number" inputMode="numeric" placeholder="0"
                  value={lg.reps} onChange={e => updateSet(ei,si,"reps",e.target.value)}
                  style={{background:lg.done?C.bg:C.card2,border:`1px solid ${lg.done?C.border:C.orange+"44"}`,borderRadius:10,padding:"8px",color:C.text,fontSize:14,textAlign:"center",outline:"none",width:"100%"}}
                />
                <button onClick={() => toggleDone(ei,si)} style={{width:44,height:44,borderRadius:12,background:lg.done?C.green:C.bg,border:`2px solid ${lg.done?C.green:C.border}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}}>
                  <Icon name="check" size={16} color={lg.done?"#fff":C.textDim}/>
                </button>
              </div>
            ))}
          </div>
        ))}

        {doneSets >= totalSets * 0.8 && (
          <button onClick={handleFinish} style={{width:"100%",background:`linear-gradient(135deg,${C.green},#27ae60)`,border:"none",borderRadius:18,padding:"18px",color:"#fff",fontWeight:900,fontSize:16,cursor:"pointer",marginTop:8}}>
            🎉 Finalizar sesión
          </button>
        )}
      </div>
    </div>
  );
};

// ─── CLIENTE: HISTORIAL ───────────────────────────────────────────────────
const HistorialScreen = ({ onNavigate }) => {
  const [selected, setSelected] = useState(null);

  if (selected !== null) {
    const s = DB.sessions[selected];
    const totalVol = s.exercises.reduce((a,ex) => a + ex.sets.reduce((b,st) => b + (st.kg*st.reps||0), 0), 0);
    return (
      <div style={{paddingBottom:20}}>
        <div style={{background:C.card,padding:"16px 20px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:12}}>
          <button onClick={() => setSelected(null)} style={{background:"none",border:"none",cursor:"pointer"}}><Icon name="back" size={20} color={C.textMuted}/></button>
          <div><div style={{color:C.text,fontWeight:800}}>{s.focus}</div><div style={{color:C.textMuted,fontSize:12}}>{s.date} · {s.duration} min</div></div>
        </div>
        <div style={{padding:"16px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
            {[[s.duration+"min","Duración"],[s.exercises.reduce((a,e)=>a+e.sets.length,0),"Series"],[Math.round(totalVol/1000*10)/10+"t","Volumen"]].map(([v,l]) => (
              <div key={l} style={{background:C.card,borderRadius:14,padding:"12px",border:`1px solid ${C.border}`,textAlign:"center"}}>
                <div style={{color:C.orange,fontWeight:900,fontSize:18}}>{v}</div>
                <div style={{color:C.textMuted,fontSize:11}}>{l}</div>
              </div>
            ))}
          </div>
          {s.exercises.map((ex,i) => (
            <div key={i} style={{background:C.card,borderRadius:16,padding:"14px",marginBottom:10,border:`1px solid ${C.border}`}}>
              <div style={{color:C.text,fontWeight:700,marginBottom:8}}>{ex.name}</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {ex.sets.map((st,j) => (
                  <div key={j} style={{background:C.bg,borderRadius:8,padding:"6px 10px",fontSize:12}}>
                    <span style={{color:C.textMuted}}>S{j+1} </span>
                    <span style={{color:C.text,fontWeight:700}}>{st.kg>0?st.kg+"kg":"PC"}</span>
                    <span style={{color:C.textMuted}}> × </span>
                    <span style={{color:C.orange,fontWeight:700}}>{st.reps}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.purple}22,${C.card})`,padding:"24px 20px 16px",borderBottom:`1px solid ${C.border}`}}>
        <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Historial</p>
        <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>Mis entrenamientos 📋</h2>
        <div style={{display:"flex",gap:16,marginTop:12}}>
          {[[DB.sessions.length,"Sesiones"],[DB.sessions.reduce((a,s)=>a+s.duration,0),"Minutos"],[DB.sessions.reduce((a,s)=>a+s.exercises.reduce((b,e)=>b+e.sets.length,0),0),"Series"]].map(([v,l]) => (
            <div key={l}><div style={{color:C.text,fontWeight:900,fontSize:18}}>{v}</div><div style={{color:C.textMuted,fontSize:11}}>{l}</div></div>
          ))}
        </div>
      </div>
      <div style={{padding:"16px"}}>
        {DB.sessions.map((s,i) => (
          <div key={i} onClick={() => setSelected(i)} style={{background:C.card,borderRadius:16,padding:"14px 16px",marginBottom:10,border:`1px solid ${C.border}`,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{width:44,height:44,borderRadius:14,background:C.orange+"22",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Icon name="dumbbell" size={20} color={C.orange}/>
              </div>
              <div>
                <div style={{color:C.text,fontWeight:700}}>{s.focus}</div>
                <div style={{color:C.textMuted,fontSize:12,marginTop:2}}>{s.date} · {s.duration} min · {s.exercises.reduce((a,e)=>a+e.sets.length,0)} series</div>
              </div>
            </div>
            <Icon name="arrow" size={16} color={C.textDim}/>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── CLIENTE: PROGRESIÓN ─────────────────────────────────────────────────
const ProgresionScreen = ({ onNavigate }) => {
  const exercises = ["Press Banca","Sentadilla","Remo Barra","Curl Mancuerna","Dominadas"];
  const [ex, setEx] = useState("Press Banca");

  // Build progression data per exercise
  const data = DB.sessions.flatMap(s =>
    s.exercises.filter(e => e.name === ex).map(e => ({
      date: s.date,
      maxKg: Math.max(...e.sets.map(st=>st.kg||0)),
      vol: e.sets.reduce((a,st)=>a+(st.kg*st.reps||0),0),
    }))
  ).sort((a,b) => a.date.localeCompare(b.date));

  const maxKg = Math.max(...data.map(d=>d.maxKg), 1);
  const W = 320, H = 120;

  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.blue}22,${C.card})`,padding:"24px 20px 16px",borderBottom:`1px solid ${C.border}`}}>
        <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Progresión de cargas</p>
        <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>Evolución por ejercicio 📈</h2>
      </div>
      <div style={{padding:"16px"}}>
        {/* Exercise selector */}
        <div style={{display:"flex",gap:8,overflowX:"auto",marginBottom:16,paddingBottom:4}}>
          {exercises.map(e => (
            <button key={e} onClick={() => setEx(e)} style={{flexShrink:0,background:ex===e?C.orange:C.card,border:"none",borderRadius:12,padding:"8px 14px",color:ex===e?"#fff":C.textMuted,fontWeight:700,fontSize:12,cursor:"pointer"}}>
              {e}
            </button>
          ))}
        </div>

        {data.length === 0 ? (
          <div style={{background:C.card,borderRadius:20,padding:"40px 20px",textAlign:"center",border:`1px solid ${C.border}`}}>
            <div style={{fontSize:40}}>📊</div>
            <div style={{color:C.textMuted,marginTop:12}}>Aún no hay datos de {ex}.<br/>Registra una sesión para ver tu progresión.</div>
          </div>
        ) : (
          <>
            {/* Chart */}
            <div style={{background:C.card,borderRadius:20,padding:"16px",marginBottom:16,border:`1px solid ${C.border}`}}>
              <div style={{color:C.text,fontWeight:700,marginBottom:4}}>Kg máximo por sesión</div>
              <div style={{color:C.textMuted,fontSize:12,marginBottom:12}}>{ex}</div>
              <svg viewBox={`0 0 ${W} ${H+30}`} width="100%" style={{overflow:"visible"}}>
                {/* Grid lines */}
                {[0,0.25,0.5,0.75,1].map(p => (
                  <line key={p} x1={20} y1={H*(1-p)} x2={W} y2={H*(1-p)} stroke={C.border} strokeWidth="1"/>
                ))}
                {/* Area */}
                {data.length > 1 && (
                  <path
                    d={"M "+data.map((d,i)=>`${20+i*(W-20)/(data.length-1)},${H-(d.maxKg/maxKg)*H}`).join(" L ")+" L "+(20+(data.length-1)*(W-20)/(data.length-1))+","+H+" L 20,"+H+" Z"}
                    fill={C.orange+"22"}
                  />
                )}
                {/* Line */}
                {data.length > 1 && (
                  <polyline
                    points={data.map((d,i)=>`${20+i*(W-20)/(data.length-1)},${H-(d.maxKg/maxKg)*H}`).join(" ")}
                    fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                )}
                {/* Points */}
                {data.map((d,i) => (
                  <g key={i}>
                    <circle cx={20+i*(W-20)/Math.max(data.length-1,1)} cy={H-(d.maxKg/maxKg)*H} r="5" fill={C.orange} stroke={C.card} strokeWidth="2"/>
                    <text x={20+i*(W-20)/Math.max(data.length-1,1)} y={H+22} fill={C.textDim} fontSize="9" textAnchor="middle">{d.date.slice(5)}</text>
                  </g>
                ))}
                {/* Y labels */}
                {[0,0.5,1].map(p => (
                  <text key={p} x="14" y={H*(1-p)+4} fill={C.textDim} fontSize="9" textAnchor="end">{Math.round(maxKg*p)}</text>
                ))}
              </svg>
            </div>

            {/* Stats */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
              {[
                ["Máximo",Math.max(...data.map(d=>d.maxKg))+"kg"],
                ["Inicial",data[0]?.maxKg+"kg"],
                ["+Ganado",(Math.max(...data.map(d=>d.maxKg))-data[0]?.maxKg)+"kg"],
              ].map(([l,v]) => (
                <div key={l} style={{background:C.card,borderRadius:14,padding:"12px",border:`1px solid ${C.border}`,textAlign:"center"}}>
                  <div style={{color:C.orange,fontWeight:900,fontSize:16}}>{v}</div>
                  <div style={{color:C.textMuted,fontSize:11}}>{l}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ─── CLIENTE: LOGROS ─────────────────────────────────────────────────────
const LogrosScreen = ({ onNavigate }) => {
  const totalSessions = DB.sessions.length;
  const unlocked = LOGROS_DEF.filter(l => totalSessions >= l.req);
  const locked = LOGROS_DEF.filter(l => totalSessions < l.req);
  const nextLogro = locked[0];

  return (
    <div style={{paddingBottom:20}}>
      <BackHeader title="Mis Logros 🏅" onBack={() => onNavigate("home")} />
      <div style={{padding:"16px"}}>
        {/* Próximo logro */}
        {nextLogro && (
          <div style={{background:`linear-gradient(135deg,${C.orange}22,${C.card})`,borderRadius:20,padding:"16px",marginBottom:20,border:`1px solid ${C.orange}44`}}>
            <div style={{color:C.orange,fontWeight:700,fontSize:12,marginBottom:8,letterSpacing:1}}>PRÓXIMO LOGRO</div>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{fontSize:36,filter:"grayscale(1)",opacity:0.5}}>{nextLogro.icon}</div>
              <div style={{flex:1}}>
                <div style={{color:C.text,fontWeight:800,fontSize:15}}>{nextLogro.name}</div>
                <div style={{color:C.textMuted,fontSize:12,marginTop:2}}>{nextLogro.desc}</div>
                <div style={{background:C.bg,borderRadius:6,height:6,marginTop:8,overflow:"hidden"}}>
                  <div style={{width:Math.min((totalSessions/nextLogro.req)*100,100)+"%",height:"100%",background:C.orange,borderRadius:6}}/>
                </div>
                <div style={{color:C.textMuted,fontSize:11,marginTop:4}}>{totalSessions}/{nextLogro.req} sesiones</div>
              </div>
            </div>
          </div>
        )}

        {/* Unlocked */}
        {unlocked.length > 0 && (
          <>
            <div style={{color:C.text,fontWeight:700,marginBottom:12}}>Desbloqueados ({unlocked.length})</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
              {unlocked.map(l => (
                <div key={l.id} style={{background:C.card,borderRadius:18,padding:"16px",border:`2px solid ${l.color}44`,textAlign:"center",position:"relative"}}>
                  <div style={{position:"absolute",top:8,right:10,background:l.color,borderRadius:6,padding:"2px 6px",fontSize:10,color:"#fff",fontWeight:700}}>✓</div>
                  <div style={{fontSize:36,marginBottom:8}}>{l.icon}</div>
                  <div style={{color:C.text,fontWeight:800,fontSize:13}}>{l.name}</div>
                  <div style={{color:C.textMuted,fontSize:11,marginTop:4}}>{l.desc}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Locked */}
        {locked.length > 0 && (
          <>
            <div style={{color:C.textMuted,fontWeight:700,marginBottom:12}}>Por desbloquear ({locked.length})</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {locked.map(l => (
                <div key={l.id} style={{background:C.card,borderRadius:18,padding:"16px",border:`1px solid ${C.border}`,textAlign:"center",opacity:0.5}}>
                  <div style={{fontSize:36,marginBottom:8,filter:"grayscale(1)"}}>{l.icon}</div>
                  <div style={{color:C.textMuted,fontWeight:700,fontSize:13}}>{l.name}</div>
                  <div style={{color:C.textDim,fontSize:11,marginTop:4}}>{l.req} sesiones</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ─── CLIENTE: MI RUTINA (actualizada con botón iniciar sesión) ────────────
const MiRutinaScreen = ({ onNavigate }) => {
  const routine = [
    { day:"Lunes", focus:"Pecho + Tríceps", exercises:[{name:"Press Banca",sets:4,reps:"8-10",rest:"90s"},{name:"Aperturas Cable",sets:3,reps:"12-15",rest:"60s"},{name:"Fondos",sets:3,reps:"Al fallo",rest:"60s"}] },
    { day:"Miércoles", focus:"Espalda + Bíceps", exercises:[{name:"Dominadas",sets:4,reps:"6-8",rest:"90s"},{name:"Remo Barra",sets:4,reps:"8-10",rest:"90s"},{name:"Curl Mancuerna",sets:3,reps:"12",rest:"60s"}] },
    { day:"Viernes", focus:"Pierna + Core", exercises:[{name:"Sentadilla",sets:4,reps:"8-10",rest:"120s"},{name:"Prensa",sets:3,reps:"12-15",rest:"90s"},{name:"Plancha",sets:3,reps:"60s",rest:"45s"}] },
  ];
  const [day, setDay] = useState(0);
  const d = routine[day];
  return (
    <div style={{paddingBottom:20}}>
      <BackHeader title="Mi Rutina" onBack={() => onNavigate("home")} />
      <div style={{padding:"16px 16px 0",display:"flex",gap:8,overflowX:"auto"}}>
        {routine.map((r,i) => (
          <button key={i} onClick={() => setDay(i)} style={{flexShrink:0,background:day===i?C.orange:C.card,border:"none",borderRadius:12,padding:"10px 16px",color:day===i?"#fff":C.textMuted,fontWeight:700,fontSize:13,cursor:"pointer"}}>{r.day}</button>
        ))}
      </div>
      <div style={{padding:"16px"}}>
        <div style={{background:C.card,borderRadius:16,padding:"16px",marginBottom:12,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{color:C.orange,fontWeight:700,fontSize:13}}>{d.focus}</div>
            <div style={{color:C.textMuted,fontSize:12,marginTop:2}}>{d.exercises.length} ejercicios</div>
          </div>
          <button onClick={() => onNavigate("sesion-activa")} style={{background:`linear-gradient(135deg,${C.orange},${C.orangeLight})`,border:"none",borderRadius:12,padding:"10px 16px",color:"#fff",fontWeight:800,fontSize:13,cursor:"pointer"}}>
            ▶ Iniciar
          </button>
        </div>
        {d.exercises.map((ex,i) => (
          <div key={i} style={{background:C.card,borderRadius:16,padding:"14px 16px",marginBottom:10,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{color:C.text,fontWeight:700,fontSize:14}}>{ex.name}</div>
              <div style={{color:C.textMuted,fontSize:12,marginTop:3}}>{ex.sets} series · {ex.reps} reps · {ex.rest}</div>
            </div>
            <div style={{width:36,height:36,borderRadius:12,background:C.orange+"22",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Icon name="dumbbell" size={16} color={C.orange}/>
            </div>
          </div>
        ))}
        <button onClick={() => onNavigate("historial")} style={{width:"100%",background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"14px",color:C.textMuted,fontWeight:600,fontSize:14,cursor:"pointer",marginTop:4}}>
          Ver historial de sesiones →
        </button>
      </div>
    </div>
  );
};

// ─── CLIENTE: PROGRESO (actualizado) ────────────────────────────────────
const MiProgresoScreen = ({ onNavigate }) => {
  const metrics = [{label:"Peso",val:"78.5 kg",change:"-1.2 kg",up:false},{label:"Grasa corporal",val:"18.4%",change:"-0.8%",up:false},{label:"Masa muscular",val:"38.2 kg",change:"+0.6 kg",up:true},{label:"IMC",val:"24.1",change:"-0.4",up:false}];
  const dias = ["Lun","Mar","Mié","Jue","Vie","Sáb"];
  const adh = [100,0,100,100,80,0];
  return (
    <div style={{paddingBottom:20}}>
      <BackHeader title="Mi Progreso" onBack={() => onNavigate("home")} />
      <div style={{padding:"16px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {metrics.map((m,i) => (
            <div key={i} style={{background:C.card,borderRadius:16,padding:"14px",border:`1px solid ${C.border}`}}>
              <div style={{color:C.textMuted,fontSize:11,marginBottom:4}}>{m.label}</div>
              <div style={{color:C.text,fontSize:20,fontWeight:800}}>{m.val}</div>
              <div style={{color:m.up?C.green:C.orange,fontSize:12,fontWeight:600,marginTop:4}}>{m.change} este mes</div>
            </div>
          ))}
        </div>
        {/* Quick links */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          <button onClick={() => onNavigate("progresion")} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"14px",cursor:"pointer",textAlign:"left"}}>
            <div style={{width:36,height:36,borderRadius:12,background:C.blue+"22",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}>
              <Icon name="chart" size={18} color={C.blue}/>
            </div>
            <div style={{color:C.text,fontWeight:700,fontSize:13}}>Progresión de cargas</div>
            <div style={{color:C.textMuted,fontSize:11,marginTop:2}}>Ver evolución por ejercicio</div>
          </button>
          <button onClick={() => onNavigate("mi-logros")} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"14px",cursor:"pointer",textAlign:"left"}}>
            <div style={{width:36,height:36,borderRadius:12,background:C.yellow+"22",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}>
              <span style={{fontSize:18}}>🏅</span>
            </div>
            <div style={{color:C.text,fontWeight:700,fontSize:13}}>Mis logros</div>
            <div style={{color:C.textMuted,fontSize:11,marginTop:2}}>{DB.sessions.length} sesiones · {LOGROS_DEF.filter(l=>DB.sessions.length>=l.req).length} badges</div>
          </button>
        </div>
        <div style={{background:C.card,borderRadius:16,padding:"16px",border:`1px solid ${C.border}`,marginBottom:12}}>
          <div style={{color:C.text,fontWeight:700,marginBottom:12}}>Adherencia semanal</div>
          {dias.map((d,i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <div style={{color:C.textMuted,fontSize:12,width:28}}>{d}</div>
              <div style={{flex:1,background:C.bg,borderRadius:6,height:8,overflow:"hidden"}}>
                <div style={{width:adh[i]+"%",height:"100%",background:adh[i]>0?C.green:C.card,borderRadius:6}}/>
              </div>
              <div style={{fontSize:12,color:adh[i]>0?C.green:C.textMuted}}>{adh[i]>0?"✓":"–"}</div>
            </div>
          ))}
        </div>
        <div style={{background:C.card,borderRadius:16,padding:"16px",border:`1px solid ${C.border}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{color:C.text,fontWeight:700}}>🔥 Racha actual</div>
              <div style={{color:C.orange,fontSize:28,fontWeight:900,marginTop:4}}>12 días</div>
              <div style={{color:C.textMuted,fontSize:12}}>Récord: 18 días</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{color:C.text,fontWeight:700}}>Total sesiones</div>
              <div style={{color:C.green,fontSize:28,fontWeight:900,marginTop:4}}>{DB.sessions.length}</div>
              <div style={{color:C.textMuted,fontSize:12}}>entrenamientos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── CLIENTE: NUTRICIÓN ──────────────────────────────────────────────────
const MiNutricionScreen = ({ onNavigate }) => {
  const meals = [
    {time:"08:00",name:"Desayuno",desc:"Avena 80g + 3 huevos + fruta",cal:520},
    {time:"11:00",name:"Snack",desc:"Yogur griego + nueces 30g",cal:280},
    {time:"14:00",name:"Almuerzo",desc:"Pechuga 200g + arroz 150g + verduras",cal:680},
    {time:"17:30",name:"Pre-entreno",desc:"Plátano + proteína en polvo",cal:320},
    {time:"20:30",name:"Cena",desc:"Salmón 180g + camote 150g + ensalada",cal:550},
  ];
  return (
    <div style={{paddingBottom:20}}>
      <BackHeader title="Mi Nutrición" onBack={() => onNavigate("home")} />
      <div style={{padding:"16px"}}>
        <div style={{background:`linear-gradient(135deg,${C.orange},#FF8C5A)`,borderRadius:16,padding:"16px",marginBottom:16}}>
          <div style={{color:"#fff",fontWeight:700,fontSize:16,marginBottom:8}}>Plan Definición · Asignado por Juan</div>
          <div style={{display:"flex",gap:20}}>
            {[["2350","Kcal"],["195g","Proteína"],["240g","Carbos"],["65g","Grasas"]].map(([v,l]) => (
              <div key={l}><div style={{color:"rgba(255,255,255,0.7)",fontSize:10}}>{l}</div><div style={{color:"#fff",fontWeight:800,fontSize:16}}>{v}</div></div>
            ))}
          </div>
        </div>
        {meals.map((m,i) => (
          <div key={i} style={{background:C.card,borderRadius:16,padding:"14px 16px",marginBottom:10,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{background:C.orange+"22",borderRadius:10,padding:"6px 10px",color:C.orange,fontSize:12,fontWeight:700,flexShrink:0}}>{m.time}</div>
              <div>
                <div style={{color:C.text,fontWeight:700,fontSize:14}}>{m.name}</div>
                <div style={{color:C.textMuted,fontSize:12,marginTop:2}}>{m.desc}</div>
              </div>
            </div>
            <div style={{color:C.textMuted,fontSize:12,fontWeight:600,flexShrink:0,marginLeft:8}}>{m.cal} cal</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── CLIENTE: CHAT ───────────────────────────────────────────────────────
const MiChatScreen = ({ onNavigate }) => {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([
    {id:1,from:"trainer",text:"Hola! ¿Cómo te fue con la sesión de ayer? 💪",time:"09:30"},
    {id:2,from:"me",text:"Muy bien profe, pude subir 5kg en sentadilla!",time:"09:45"},
    {id:3,from:"trainer",text:"Excelente progreso! Esta semana podemos aumentar el volumen en pierna.",time:"09:47"},
  ]);
  const send = () => {
    if(!msg.trim()) return;
    setMsgs(prev => [...prev,{id:Date.now(),from:"me",text:msg,time:new Date().toLocaleTimeString("es",{hour:"2-digit",minute:"2-digit"})}]);
    setMsg("");
  };
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
      <div style={{background:C.card,padding:"12px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
        <button onClick={() => onNavigate("home")} style={{background:C.orange+"22",border:"none",borderRadius:12,padding:"7px 12px",display:"flex",alignItems:"center",gap:6,cursor:"pointer",flexShrink:0}}>
          <Icon name="home" size={15} color={C.orange}/>
          <span style={{color:C.orange,fontWeight:700,fontSize:12}}>Inicio</span>
        </button>
        <div style={{width:38,height:38,borderRadius:12,background:C.orange,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#fff",fontSize:13,flexShrink:0}}>JP</div>
        <div><div style={{color:C.text,fontWeight:700}}>Juan (Tu Entrenador)</div><div style={{color:C.green,fontSize:12}}>● En línea</div></div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:10,paddingBottom:80}}>
        {msgs.map(m => (
          <div key={m.id} style={{display:"flex",justifyContent:m.from==="me"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"75%",background:m.from==="me"?`linear-gradient(135deg,${C.orange},${C.orangeLight})`:C.card,border:m.from==="me"?"none":`1px solid ${C.border}`,borderRadius:m.from==="me"?"18px 18px 4px 18px":"18px 18px 18px 4px",padding:"10px 14px"}}>
              <div style={{color:"#fff",fontSize:14}}>{m.text}</div>
              <div style={{color:"rgba(255,255,255,0.6)",fontSize:10,marginTop:4,textAlign:"right"}}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,padding:"12px 16px",borderTop:`1px solid ${C.border}`,background:C.card,display:"flex",gap:10,alignItems:"center"}}>
        <input value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key==="Enter" && send()} placeholder="Escribe un mensaje..." style={{flex:1,background:C.bg,border:`1px solid ${C.border}`,borderRadius:14,padding:"10px 14px",color:C.text,fontSize:14,outline:"none"}}/>
        <button onClick={send} style={{background:C.orange,border:"none",borderRadius:14,width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}>
          <Icon name="send" size={18} color="#fff"/>
        </button>
      </div>
    </div>
  );
};

// ─── CLIENTE: HOME DASHBOARD (actualizado) ──────────────────────────────
const ClientHomeDashboard = ({ user, onNavigate, onSignOut }) => {
  const logrosDesbloqueados = LOGROS_DEF.filter(l => DB.sessions.length >= l.req);
  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.orange}22,${C.card})`,padding:"24px 20px 20px",borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Bienvenido/a,</p>
            <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>{user?.name||"Atleta"} 👋</h2>
          </div>
          <div style={{display:"flex",gap:8}}>
            <div style={{background:C.orange+"22",borderRadius:12,padding:"8px 12px"}}>
              <span style={{color:C.orange,fontSize:13,fontWeight:700}}>🔥 12 días</span>
            </div>
            <button onClick={onSignOut} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:12,padding:"8px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
              <Icon name="lock" size={14} color={C.textMuted}/>
              <span style={{color:C.textMuted,fontSize:12,fontWeight:600}}>Salir</span>
            </button>
          </div>
        </div>
      </div>
      <div style={{padding:"16px"}}>
        {/* Banner próxima sesión */}
        <div style={{background:`linear-gradient(135deg,${C.orange},#FF8C5A)`,borderRadius:20,padding:"20px",marginBottom:16,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-20,right:-20,width:100,height:100,background:"rgba(255,255,255,0.08)",borderRadius:"50%"}}/>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:11,fontWeight:600,letterSpacing:1}}>PRÓXIMA SESIÓN</div>
          <div style={{color:"#fff",fontSize:20,fontWeight:900,margin:"6px 0 2px"}}>Pecho + Tríceps</div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:13}}>Miércoles · 3 ejercicios · ~55 min</div>
          <button onClick={() => onNavigate("sesion-activa")} style={{marginTop:14,background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:12,padding:"8px 18px",color:"#fff",fontWeight:800,fontSize:13,cursor:"pointer"}}>
            ▶ Iniciar sesión
          </button>
        </div>
        {/* Stats */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {[["Sesiones",DB.sessions.length,C.orange,"fire"],["Logros",logrosDesbloqueados.length+"🏅",C.yellow,"trophy"],["Mi plan","Premium",C.purple,"star"],["Progreso","82%",C.green,"chart"]].map(([l,v,col,ic]) => (
            <div key={l} style={{background:C.card,borderRadius:16,padding:"14px",border:`1px solid ${C.border}`}}>
              <Icon name={ic} size={18} color={col}/>
              <div style={{color:C.textMuted,fontSize:11,margin:"6px 0 2px"}}>{l}</div>
              <div style={{color:C.text,fontSize:16,fontWeight:800}}>{v}</div>
            </div>
          ))}
        </div>
        {/* Quick actions */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[["Mi Rutina","dumbbell","mi-rutina",C.orange],["Progresión","chart","progresion",C.blue],["Nutrición","heart","mi-nutricion",C.green],["Mis Logros","trophy","mi-logros",C.yellow]].map(([l,ic,sc,col]) => (
            <button key={l} onClick={() => onNavigate(sc)} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"16px",cursor:"pointer",textAlign:"left"}}>
              <div style={{width:36,height:36,borderRadius:12,background:col+"22",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10}}>
                <Icon name={ic} size={18} color={col}/>
              </div>
              <div style={{color:C.text,fontWeight:700,fontSize:13}}>{l}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ─── ENTRENADOR: NUEVO CLIENTE ────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════
const NuevoClienteScreen = ({ onNavigate, client }) => {
  const isEdit = !!client;
  const [form, setForm] = useState({
    name: client?.name || "",
    age: client?.age || "",
    goal: client?.goal || "Hipertrofia",
    level: client?.level || "Principiante",
    plan: client?.plan || "Básico",
    weight: client?.weight || "",
    height: client?.height || "",
    phone: client?.phone || "",
  });
  const [saved, setSaved] = useState(false);
  const goals = ["Hipertrofia","Pérdida de peso","Fuerza máxima","Rendimiento deportivo","Recondicionar","Mantenimiento"];
  const levels = ["Principiante","Intermedio","Avanzado"];
  const plans = ["Básico","Premium","Elite"];
  const colors = ["#FF6B35","#4A9EFF","#2ECC8E","#8B5CF6","#FFD32A","#FF4757"];

  const save = () => {
    if (!form.name.trim()) return;
    const color = colors[Math.floor(Math.random()*colors.length)];
    const initials = form.name.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2);
    const newClient = { id:Date.now(), ...form, avatar:initials, color, streak:0, progress:0, paid:false, lastActive:"Ahora", joinDate:new Date().toLocaleDateString("es-CL",{month:"short",year:"numeric"}), nextSession:"Por definir" };
    DB.clients.push(newClient);
    setSaved(true);
    setTimeout(() => onNavigate("clients"), 1200);
  };

  const inputStyle = { width:"100%", background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px 16px", color:C.text, fontSize:14, outline:"none", boxSizing:"border-box" };
  const labelStyle = { color:C.textMuted, fontSize:12, fontWeight:600, marginBottom:6, display:"block" };

  if (saved) return (
    <div style={{padding:"60px 20px",textAlign:"center"}}>
      <div style={{fontSize:60}}>✅</div>
      <h2 style={{color:C.text,marginTop:16}}>Cliente guardado</h2>
      <p style={{color:C.textMuted}}>Redirigiendo a Clientes...</p>
    </div>
  );

  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:C.card,padding:"16px 20px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:12}}>
        <button onClick={() => onNavigate("clients")} style={{background:"none",border:"none",cursor:"pointer"}}><Icon name="back" size={20} color={C.textMuted}/></button>
        <h2 style={{color:C.text,margin:0,fontSize:18,fontWeight:800}}>{isEdit?"Editar cliente":"Nuevo cliente"}</h2>
      </div>
      <div style={{padding:"20px 16px"}}>
        <div style={{marginBottom:16}}>
          <label style={labelStyle}>Nombre completo *</label>
          <input value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Ej: Carlos Mendoza" style={inputStyle}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
          <div><label style={labelStyle}>Edad</label><input type="number" value={form.age} onChange={e => setForm({...form,age:e.target.value})} placeholder="28" style={inputStyle}/></div>
          <div><label style={labelStyle}>Teléfono</label><input value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+56 9..." style={inputStyle}/></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
          <div><label style={labelStyle}>Peso (kg)</label><input type="number" value={form.weight} onChange={e => setForm({...form,weight:e.target.value})} placeholder="75" style={inputStyle}/></div>
          <div><label style={labelStyle}>Talla (cm)</label><input type="number" value={form.height} onChange={e => setForm({...form,height:e.target.value})} placeholder="175" style={inputStyle}/></div>
        </div>
        <div style={{marginBottom:16}}>
          <label style={labelStyle}>Objetivo</label>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {goals.map(g => <button key={g} onClick={() => setForm({...form,goal:g})} style={{background:form.goal===g?C.orange:C.card,border:"none",borderRadius:10,padding:"8px 14px",color:form.goal===g?"#fff":C.textMuted,fontSize:13,fontWeight:600,cursor:"pointer"}}>{g}</button>)}
          </div>
        </div>
        <div style={{marginBottom:16}}>
          <label style={labelStyle}>Nivel</label>
          <div style={{display:"flex",gap:8}}>
            {levels.map(l => <button key={l} onClick={() => setForm({...form,level:l})} style={{flex:1,background:form.level===l?C.blue:C.card,border:"none",borderRadius:10,padding:"10px",color:form.level===l?"#fff":C.textMuted,fontSize:13,fontWeight:600,cursor:"pointer"}}>{l}</button>)}
          </div>
        </div>
        <div style={{marginBottom:24}}>
          <label style={labelStyle}>Plan</label>
          <div style={{display:"flex",gap:8}}>
            {plans.map(p => <button key={p} onClick={() => setForm({...form,plan:p})} style={{flex:1,background:form.plan===p?C.purple:C.card,border:"none",borderRadius:10,padding:"10px",color:form.plan===p?"#fff":C.textMuted,fontSize:13,fontWeight:600,cursor:"pointer"}}>{p}</button>)}
          </div>
        </div>
        <button onClick={save} style={{width:"100%",background:`linear-gradient(135deg,${C.orange},${C.orangeLight})`,border:"none",borderRadius:16,padding:"16px",color:"#fff",fontWeight:800,fontSize:15,cursor:"pointer"}}>
          {isEdit?"Guardar cambios":"Crear cliente"}
        </button>
      </div>
    </div>
  );
};

// ─── ENTRENADOR: CALENDARIO ──────────────────────────────────────────────
const CalendarioScreen = ({ onNavigate }) => {
  const dias = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
  const [selDay, setSelDay] = useState(0);
  const dayEvents = DB.calendar.filter(e => e.day === selDay);
  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.blue}22,${C.card})`,padding:"24px 20px 16px",borderBottom:`1px solid ${C.border}`}}>
        <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Semana actual</p>
        <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>Calendario 📅</h2>
      </div>
      <div style={{padding:"16px 16px 0",display:"flex",gap:6,overflowX:"auto"}}>
        {dias.map((d,i) => {
          const hasEvents = DB.calendar.some(e => e.day === i);
          return (
            <button key={i} onClick={() => setSelDay(i)} style={{flexShrink:0,background:selDay===i?C.blue:C.card,border:"none",borderRadius:14,padding:"10px 12px",cursor:"pointer",textAlign:"center",minWidth:52,position:"relative"}}>
              <div style={{color:selDay===i?"#fff":C.textMuted,fontSize:11,fontWeight:600}}>{d}</div>
              {hasEvents && <div style={{width:6,height:6,borderRadius:"50%",background:selDay===i?"rgba(255,255,255,0.8)":C.orange,margin:"6px auto 0"}}/>}
            </button>
          );
        })}
      </div>
      <div style={{padding:"16px"}}>
        {dayEvents.length === 0 ? (
          <div style={{background:C.card,borderRadius:20,padding:"40px 20px",textAlign:"center",border:`1px solid ${C.border}`}}>
            <div style={{fontSize:40,marginBottom:12}}>📭</div>
            <div style={{color:C.textMuted}}>Sin sesiones este día</div>
            <button style={{marginTop:16,background:C.orange,border:"none",borderRadius:12,padding:"10px 20px",color:"#fff",fontWeight:700,cursor:"pointer"}}>+ Agendar sesión</button>
          </div>
        ) : (
          dayEvents.map((ev,i) => (
            <div key={i} style={{background:C.card,borderRadius:18,padding:"16px",marginBottom:10,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                <div style={{background:C.blue+"22",borderRadius:12,padding:"10px 14px",color:C.blue,fontWeight:800,fontSize:14}}>{ev.time}</div>
                <div>
                  <div style={{color:C.text,fontWeight:700}}>{ev.clientName}</div>
                  <div style={{background:ev.type==="Online"?C.green+"22":C.orange+"22",borderRadius:8,padding:"3px 8px",marginTop:4,display:"inline-block"}}>
                    <span style={{color:ev.type==="Online"?C.green:C.orange,fontSize:11,fontWeight:700}}>{ev.type}</span>
                  </div>
                </div>
              </div>
              <Icon name="arrow" size={16} color={C.textDim}/>
            </div>
          ))
        )}
        <div style={{background:C.card,borderRadius:16,padding:"14px 16px",border:`1px solid ${C.border}`,marginTop:8}}>
          <div style={{color:C.text,fontWeight:700,marginBottom:4}}>Esta semana</div>
          <div style={{display:"flex",gap:20}}>
            <div><div style={{color:C.blue,fontWeight:900,fontSize:20}}>{DB.calendar.length}</div><div style={{color:C.textMuted,fontSize:12}}>sesiones</div></div>
            <div><div style={{color:C.green,fontWeight:900,fontSize:20}}>{DB.calendar.filter(e=>e.type==="Online").length}</div><div style={{color:C.textMuted,fontSize:12}}>online</div></div>
            <div><div style={{color:C.orange,fontWeight:900,fontSize:20}}>{DB.calendar.filter(e=>e.type==="Presencial").length}</div><div style={{color:C.textMuted,fontSize:12}}>presencial</div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── ENTRENADOR: PLANTILLAS ──────────────────────────────────────────────
const PlantillasScreen = ({ onNavigate }) => {
  const [showNew, setShowNew] = useState(false);
  const [newName, setNewName] = useState("");
  const [templates, setTemplates] = useState(DB.templates);

  const addTemplate = () => {
    if (!newName.trim()) return;
    const t = { id:Date.now(), name:newName, days:3, focus:"Por definir", exercises:0, clients:0 };
    DB.templates.push(t);
    setTemplates([...DB.templates]);
    setNewName("");
    setShowNew(false);
  };

  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.purple}22,${C.card})`,padding:"24px 20px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
        <div>
          <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Rutinas guardadas</p>
          <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>Plantillas 📋</h2>
        </div>
        <button onClick={() => setShowNew(!showNew)} style={{background:C.orange,border:"none",borderRadius:12,padding:"10px 16px",color:"#fff",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
          <Icon name="plus" size={16} color="#fff"/> Nueva
        </button>
      </div>
      <div style={{padding:"16px"}}>
        {showNew && (
          <div style={{background:C.card,borderRadius:18,padding:"16px",marginBottom:16,border:`1px solid ${C.orange}44`}}>
            <div style={{color:C.text,fontWeight:700,marginBottom:10}}>Nueva plantilla</div>
            <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Ej: Fullbody 3x/semana" style={{width:"100%",background:C.card2,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px",color:C.text,fontSize:14,outline:"none",boxSizing:"border-box",marginBottom:10}}/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={addTemplate} style={{flex:1,background:C.orange,border:"none",borderRadius:12,padding:"12px",color:"#fff",fontWeight:700,cursor:"pointer"}}>Crear</button>
              <button onClick={() => setShowNew(false)} style={{flex:1,background:C.card2,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px",color:C.textMuted,fontWeight:600,cursor:"pointer"}}>Cancelar</button>
            </div>
          </div>
        )}
        {templates.map((t,i) => (
          <div key={i} style={{background:C.card,borderRadius:18,padding:"16px",marginBottom:10,border:`1px solid ${C.border}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div>
                <div style={{color:C.text,fontWeight:800,fontSize:15}}>{t.name}</div>
                <div style={{color:C.textMuted,fontSize:12,marginTop:2}}>{t.focus}</div>
              </div>
              <button onClick={() => onNavigate("new-routine")} style={{background:C.orange+"22",border:"none",borderRadius:10,padding:"6px 12px",color:C.orange,fontWeight:700,fontSize:12,cursor:"pointer"}}>Usar</button>
            </div>
            <div style={{display:"flex",gap:16}}>
              {[[t.days+"días","Días"],[t.exercises,"Ejercicios"],[t.clients,"Clientes"]].map(([v,l]) => (
                <div key={l}><span style={{color:C.text,fontWeight:700,fontSize:14}}>{v} </span><span style={{color:C.textMuted,fontSize:12}}>{l}</span></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── ENTRENADOR: ESTADÍSTICAS ────────────────────────────────────────────
const EstadisticasScreen = () => {
  const meses = ["Ene","Feb","Mar","Abr","May","Jun"];
  const ingresos = [89970,124960,144960,159950,174940,174940];
  const clientes = [4,5,6,6,7,6];
  const maxIng = Math.max(...ingresos);
  const W = 300, H = 100;

  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.green}22,${C.card})`,padding:"24px 20px 16px",borderBottom:`1px solid ${C.border}`}}>
        <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Panel de negocio</p>
        <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>Estadísticas 📊</h2>
      </div>
      <div style={{padding:"16px"}}>
        {/* KPIs */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {[["$174.940","Ingreso mensual",C.green],["6","Clientes activos",C.orange],["89%","Tasa retención",C.blue],["3","Pagos vencidos",C.red]].map(([v,l,col]) => (
            <div key={l} style={{background:C.card,borderRadius:16,padding:"14px",border:`1px solid ${l==="Pagos vencidos"?C.red+"44":C.border}`}}>
              <div style={{color:col,fontWeight:900,fontSize:20}}>{v}</div>
              <div style={{color:C.textMuted,fontSize:12,marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
        {/* Revenue chart */}
        <div style={{background:C.card,borderRadius:20,padding:"16px",marginBottom:16,border:`1px solid ${C.border}`}}>
          <div style={{color:C.text,fontWeight:700,marginBottom:12}}>Ingresos mensuales (CLP)</div>
          <svg viewBox={`0 0 ${W} ${H+30}`} width="100%">
            <polyline points={ingresos.map((v,i)=>`${i*(W/(meses.length-1))},${H-(v/maxIng)*H}`).join(" ")} fill="none" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d={"M 0,"+H+" "+ingresos.map((v,i)=>`${i*(W/(meses.length-1))},${H-(v/maxIng)*H}`).join(" L ")+" L "+W+","+H+" Z"} fill={C.green+"22"}/>
            {ingresos.map((v,i) => (
              <g key={i}>
                <circle cx={i*(W/(meses.length-1))} cy={H-(v/maxIng)*H} r="4" fill={C.green} stroke={C.card} strokeWidth="2"/>
                <text x={i*(W/(meses.length-1))} y={H+20} fill={C.textDim} fontSize="9" textAnchor="middle">{meses[i]}</text>
              </g>
            ))}
          </svg>
        </div>
        {/* Alerts */}
        <div style={{background:C.red+"11",borderRadius:18,padding:"16px",border:`1px solid ${C.red}33`,marginBottom:12}}>
          <div style={{color:C.red,fontWeight:700,marginBottom:8}}>⚠️ Pagos vencidos</div>
          {DB.clients.filter(c=>!c.paid).map((c,i) => (
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <div style={{color:C.text,fontSize:14}}>{c.name}</div>
              <div style={{color:C.red,fontSize:13,fontWeight:700}}>{c.plan} · Vencido</div>
            </div>
          ))}
        </div>
        {/* Plan breakdown */}
        <div style={{background:C.card,borderRadius:18,padding:"16px",border:`1px solid ${C.border}`}}>
          <div style={{color:C.text,fontWeight:700,marginBottom:12}}>Distribución de planes</div>
          {[["Básico","#4A9EFF",DB.clients.filter(c=>c.plan==="Básico").length],["Premium","#FF6B35",DB.clients.filter(c=>c.plan==="Premium").length],["Elite","#8B5CF6",DB.clients.filter(c=>c.plan==="Elite").length]].map(([name,col,count]) => (
            <div key={name} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <div style={{width:10,height:10,borderRadius:"50%",background:col,flexShrink:0}}/>
              <div style={{color:C.text,fontSize:13,width:60}}>{name}</div>
              <div style={{flex:1,background:C.bg,borderRadius:6,height:8,overflow:"hidden"}}>
                <div style={{width:(count/DB.clients.length*100)+"%",height:"100%",background:col,borderRadius:6}}/>
              </div>
              <div style={{color:C.textMuted,fontSize:12,width:20,textAlign:"right"}}>{count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── ENTRENADOR: CLIENTS SCREEN (actualizado con botón nuevo cliente) ─────
const ClientsScreenFull = ({ onNavigate }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const clients = DB.clients;
  const filtered = clients.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "Todos" || c.plan === filter || (filter === "Vencido" && !c.paid);
    return matchSearch && matchFilter;
  });
  return (
    <div style={{paddingBottom:20}}>
      <div style={{background:`linear-gradient(135deg,${C.blue}22,${C.card})`,padding:"24px 20px 16px",borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <div>
            <p style={{color:C.textMuted,margin:"0 0 4px",fontSize:13}}>Gestión</p>
            <h2 style={{color:C.text,margin:0,fontSize:22,fontWeight:800}}>Clientes ({clients.length})</h2>
          </div>
          <button onClick={() => onNavigate("nuevo-cliente")} style={{background:C.orange,border:"none",borderRadius:12,padding:"10px 16px",color:"#fff",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontSize:13}}>
            <Icon name="plus" size={16} color="#fff"/> Nuevo
          </button>
        </div>
        <div style={{background:C.card,borderRadius:14,padding:"10px 14px",display:"flex",alignItems:"center",gap:8,border:`1px solid ${C.border}`}}>
          <Icon name="search" size={16} color={C.textMuted}/>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar cliente..." style={{background:"none",border:"none",color:C.text,fontSize:14,outline:"none",flex:1}}/>
        </div>
      </div>
      <div style={{padding:"12px 16px 0",display:"flex",gap:8,overflowX:"auto"}}>
        {["Todos","Premium","Elite","Básico","Vencido"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{flexShrink:0,background:filter===f?C.orange:C.card,border:"none",borderRadius:10,padding:"7px 14px",color:filter===f?"#fff":C.textMuted,fontWeight:600,fontSize:12,cursor:"pointer"}}>{f}</button>
        ))}
      </div>
      <div style={{padding:"12px 16px 0"}}>
        <div style={{color:C.textMuted,fontSize:13,marginBottom:8}}>{filtered.length} clientes</div>
        {filtered.map(c => (
          <div key={c.id} onClick={() => onNavigate("client-detail", c)} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:18,padding:"16px",marginBottom:10,cursor:"pointer"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
              <div style={{width:46,height:46,borderRadius:16,background:c.color,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#fff",fontSize:15,flexShrink:0}}>{c.avatar}</div>
              <div style={{flex:1}}>
                <div style={{color:C.text,fontWeight:800,fontSize:15}}>{c.name}</div>
                <div style={{color:C.textMuted,fontSize:12,marginTop:2}}>{c.goal} · {c.level}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}>
                <span style={{background:c.plan==="Elite"?C.purple+"33":c.plan==="Premium"?C.orange+"33":C.blue+"33",color:c.plan==="Elite"?C.purple:c.plan==="Premium"?C.orange:C.blue,borderRadius:8,padding:"3px 8px",fontSize:11,fontWeight:700}}>{c.plan}</span>
                {!c.paid && <span style={{background:C.red+"22",color:C.red,borderRadius:8,padding:"3px 8px",fontSize:10,fontWeight:700}}>Vencido</span>}
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{flex:1,background:C.bg,borderRadius:6,height:5,overflow:"hidden"}}>
                <div style={{width:c.progress+"%",height:"100%",background:c.color,borderRadius:6}}/>
              </div>
              <span style={{color:C.textMuted,fontSize:11}}>{c.progress}%</span>
              <span style={{color:C.textMuted,fontSize:11,marginLeft:4}}>{c.lastActive}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ─── MAIN APP ─────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════
export default function JUDStudioApp({ user: initialUser, onSignOut }) {
  const [screen, setScreen] = useState("home");
  const [user, setUser] = useState(initialUser);
  const [screenData, setScreenData] = useState(null);
  const [sessionCount, setSessionCount] = useState(DB.sessions.length);

  const navigate = (s, data = null) => { setScreen(s); setScreenData(data); };
  const handleLogin = (u) => { setUser(u); setScreen("home"); };

  const isTrainer = user?.role === "trainer";

  const TRAINER_TABS = [
    { id:"home",      icon:"home",     label:"Inicio"    },
    { id:"clients",   icon:"users",    label:"Clientes"  },
    { id:"calendario",icon:"calendar", label:"Agenda"    },
    { id:"plantillas",icon:"edit",     label:"Rutinas"   },
    { id:"estadisticas",icon:"chart",  label:"Stats"     },
  ];
  const CLIENT_TABS = [
    { id:"home",        icon:"home",     label:"Inicio"   },
    { id:"mi-rutina",   icon:"dumbbell", label:"Rutina"   },
    { id:"mi-progreso", icon:"chart",    label:"Progreso" },
    { id:"historial",   icon:"calendar", label:"Historial"},
    { id:"mi-chat",     icon:"chat",     label:"Mi Profe" },
  ];
  const TABS = isTrainer ? TRAINER_TABS : CLIENT_TABS;

  const hideBotNav = screen === "sesion-activa"
    || (!isTrainer && screen === "mi-chat");

  const renderScreen = () => {
    if (screen === "login") return <LoginScreen onLogin={handleLogin} />;

    if (isTrainer) {
      switch(screen) {
        case "home":          return <TrainerDashboard onNavigate={navigate} user={user} />;
        case "clients":       return <ClientsScreenFull onNavigate={navigate} />;
        case "client-detail": return <ClientDetailScreen client={screenData} onNavigate={navigate} />;
        case "nuevo-cliente": return <NuevoClienteScreen onNavigate={navigate} client={screenData} />;
        case "exercises":     return <ExerciseScreen onNavigate={navigate} />;
        case "exercise-detail":return <ExerciseDetailScreen exercise={screenData} onNavigate={navigate} />;
        case "new-routine":   return <RoutineBuilderScreen onNavigate={navigate} />;
        case "nutrition":     return <NutritionScreen />;
        case "messages":      return <MessagesScreen onNavigate={navigate} />;
        case "chat":          return <ChatScreen client={screenData} onNavigate={navigate} />;
        case "payments":      return <PaymentsScreen />;
        case "progress":      return <ProgressScreen />;
        case "calendario":    return <CalendarioScreen onNavigate={navigate} />;
        case "plantillas":    return <PlantillasScreen onNavigate={navigate} />;
        case "estadisticas":  return <EstadisticasScreen />;
        default:              return <TrainerDashboard onNavigate={navigate} user={user} />;
      }
    } else {
      switch(screen) {
        case "home":          return <ClientHomeDashboard user={user} onNavigate={navigate} onSignOut={onSignOut} />;
        case "mi-rutina":     return <MiRutinaScreen onNavigate={navigate} />;
        case "sesion-activa": return <SesionActivaScreen onNavigate={navigate} onSaveSession={() => setSessionCount(DB.sessions.length)} />;
        case "mi-progreso":   return <MiProgresoScreen onNavigate={navigate} />;
        case "progresion":    return <ProgresionScreen onNavigate={navigate} />;
        case "historial":     return <HistorialScreen onNavigate={navigate} />;
        case "mi-logros":     return <LogrosScreen onNavigate={navigate} />;
        case "mi-nutricion":  return <MiNutricionScreen onNavigate={navigate} />;
        case "mi-chat":       return <MiChatScreen onNavigate={navigate} />;
        default:              return <ClientHomeDashboard user={user} onNavigate={navigate} onSignOut={onSignOut} />;
      }
    }
  };

  return (
    <div style={{ background:C.bg, minHeight:"100vh", maxWidth:480, margin:"0 auto", position:"relative", fontFamily:"system-ui,-apple-system,'SF Pro Display',sans-serif", display:"flex", flexDirection:"column" }}>
      <style>{`
        * { box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
        input::placeholder { color:#5A6275; }
        select option { background:#12141A; }
        ::-webkit-scrollbar { width:0; height:0; }
        button { font-family:inherit; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .screen { animation:fadeIn 0.2s ease; }
      `}</style>
      <div className="screen" key={screen} style={{ flex:1, overflowY:"auto", paddingBottom: !hideBotNav ? 70 : 0 }}>
        {renderScreen()}
      </div>
      {!hideBotNav && (
        <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:C.card, borderTop:`1px solid ${C.border}`, display:"flex", alignItems:"center", padding:"8px 0", backdropFilter:"blur(20px)", zIndex:100 }}>
          {TABS.map(tab => {
            const isActive = screen === tab.id;
            return (
              <button key={tab.id} onClick={() => { setScreen(tab.id); setScreenData(null); }} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4, background:"none", border:"none", cursor:"pointer", padding:"6px 0" }}>
                <div style={{ background: isActive ? C.orange+"22" : "transparent", borderRadius:10, padding:"6px 10px", transition:"all 0.2s" }}>
                  <Icon name={tab.icon} size={20} color={isActive ? C.orange : C.textDim} />
                </div>
                <span style={{ color: isActive ? C.orange : C.textDim, fontSize:10, fontWeight: isActive ? 700 : 500 }}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
