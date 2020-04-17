document.documentElement.parentNode.children // HTMLCollection [html]

document.documentElement.parentNode.children[0].appendChild(newNode); // wheare as newNode is some user-custom created Node as HTMLElement
// or insert HTML element not as node but as element straight away with .innerHTML prop:
document.documentElement.parentNode.children[0].innerHTML += "<div>Hello world from div</div>"
// when do check with var all = document.querySelectorAll("*"); which will give div as the last of paretNode within <body>
