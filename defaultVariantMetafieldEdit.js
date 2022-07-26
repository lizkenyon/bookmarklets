//When on a product page in the Shopify admin, this will open the metafield editor for the default variant

async function defaultVariantMetafield(){
let url = window.location.href + '.json';
let res = await fetch(url);
let body = await res.json();
let variantID = body.product.variants[0].id;
let metafieldURL = url + '/variants/' + variantID + '/metafields';
window.open(metafieldURL, '_blank');
}
defaultVariantMetafield();
