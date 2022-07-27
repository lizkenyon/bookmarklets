
async function isThisShopify() {
const res = await fetch(window.location.origin +"/services/ping");
const body = await res.text();
if(body === 'PONG\n') {
    alert('This is a Shopify Store!🫒');
} else {
    alert('Not a Shopify Store');
}
} 
isThisShopify();
