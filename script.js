document.addEventListener('DOMContentLoaded', () => {

    /* 1. Animações de Scroll (Fade-up) */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


    /* 2. Formulário de Contato */
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Enviando...';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                form.reset();

                formStatus.textContent = `Obrigado pela mensagem, ${name}! Retornarei em breve.`;
                formStatus.className = 'form-status success';

                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
                
            }, 1500);
        });
    }


    /* 3. Fundo Dinâmico dos Hobbies */
    const hobbyItems = document.querySelectorAll('.hobby-item');
    const hobbiesBg = document.getElementById('hobbiesBg');

    hobbyItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const bgImage = item.getAttribute('data-bg');
            if (bgImage) {
                hobbiesBg.style.backgroundImage = `url('${bgImage}')`;
                hobbiesBg.classList.add('active');
                document.body.classList.add('hobby-hover');
            }
        });

        item.addEventListener('mouseleave', () => {
            hobbiesBg.classList.remove('active');
            document.body.classList.remove('hobby-hover');
        });
    });
});