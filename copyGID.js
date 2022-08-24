async function copyGID() {
const url = window.location.href + '.json';
const res = await fetch(url);
const body = await res.json();
const gid = body.product.admin_graphql_api_id;
const x = document.createElement('input'); 
x.value = gid; 
document.body.appendChild(x); 
x.select(); document.execCommand('copy'); 
document.body.removeChild(x);
alert(`Copied GID to clipboard.\n${body.product.title}: ${gid}`);
}
copyGID();
