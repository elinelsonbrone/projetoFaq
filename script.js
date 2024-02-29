//Perguntas frequentes
const faqs = document.querySelectorAll('.faq button');

function ativarFaq(event){
    const faq = event.currentTarget;
    const controls = faq.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle('ativa');
    const ativa = faq.classList.contains('ativa');
    faq.setAttribute('aria-expanded', ativa);
    console.log(resposta);

}

function eventfaq(faq){
   faq.addEventListener('click', ativarFaq);

}
faqs.forEach(eventfaq);
