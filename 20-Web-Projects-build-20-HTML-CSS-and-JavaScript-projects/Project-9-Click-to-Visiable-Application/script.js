const a = document.getElementById("a");
const s = document.getElementById("s");
const h = document.getElementById("h");
const o = document.getElementById("o");
const k = document.getElementById("k");
const ashok = document.getElementById("ashok");




a.addEventListener("click", ()=>{
    a.style.display = 'none';
    s.style.display = 'block';
});

s.addEventListener("click", ()=>{
    s.style.display = 'none';
    h.style.display = 'block';
});

h.addEventListener("click", ()=>{
    h.style.display = 'none';
    o.style.display = 'block';
});

o.addEventListener("click", ()=>{
    o.style.display = 'none';
    k.style.display = 'block';
});

k.addEventListener("click", ()=>{
    k.style.display = 'none';
    ashok.style.display = 'block';
});

ashok.addEventListener("click", ()=>{
    ashok.style.display = 'none';
    a.style.display = 'block';
});