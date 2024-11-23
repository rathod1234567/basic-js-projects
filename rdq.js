
let quotesData=[
    'Success is not final; failure is not localStorage, It is the courage to continue that counts.',
'It is better to fail in originality than to succeed in imitation',
'The road to success and the road to failure are almost exactly the same.',
'Success usually comes to those who are too busy to be looking for it.',
'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
'Either you run the day or the day runs you.',
'I’m a great believer in luck, and I find the harder I work, the more I have of it.',
'When we strive to become better than we are, everything around us becomes better too.',
'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
'Setting goals is the first step in turning the invisible into the visible.',
'We don’t just sit around and wait for other people. We just make, and we do.',
'Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.',
'The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could.'
  
];
let quote=document.querySelector('div')
quote.style.textAlign="center";
quote.style.color="red";
quote.style.fontSize="20px"
quote.style.borderRadius="40px"

function randomQuotes(){
    let singlequotes=Math.floor(Math.random() *quotesData.length)
    quote.textContent=quotesData[singlequotes],
    quote.style.backgroundColor="yellow";
}

