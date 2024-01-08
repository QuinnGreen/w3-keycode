const keyCodeP = document.getElementById("keyCode");
const codeP = document.getElementById("code");
const charCodeP = document.getElementById("charCode");

const charKeyCodes = {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    SPACE: 32,
    ENTER: 13,
    BACKSPACE: 8,};

document.addEventListener("keydown", (event) => {
    keyCodeP.textContent = event.key;
    codeP.textContent = event.code;
    charCodeP.textContent = charKeyCodes[event.key];
})