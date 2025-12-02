import nextra from 'nextra';
console.log(typeof nextra);
console.log(nextra.toString());
try {
    nextra({ theme: 'foo' });
} catch (e) {
    console.log('Error calling nextra with theme:', e.message);
}
