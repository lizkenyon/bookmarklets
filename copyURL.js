async function copyURL() {
const url = window.location.href;
const trimmedURL = url.replace('https://shopify.dev', '');
const x = document.createElement('input'); 
x.value = trimmedURL; 
document.body.appendChild(x); 
x.select(); document.execCommand('copy'); 
document.body.removeChild(x);
}
copyURL();
