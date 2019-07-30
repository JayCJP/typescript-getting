// 内置对象
let b: Boolean = new Boolean();
let er: Error = new Error('hhh');
let d: Date = new Date();
let r: RegExp = /[a-z]/

let body: HTMLElement = document.body;
body.addEventListener('click', e => {
    console.log(e.target)
})