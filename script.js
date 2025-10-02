document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section-page');
    const langPT = document.getElementById('lang-pt');
    const langEN = document.getElementById('lang-en');
    const terminal = document.getElementById('terminal');
    const alertOverlay = document.getElementById('alertOverlay');

    const translations = {
        en: {
            nav_home: 'HOME',
            nav_about: 'ABOUT',
            nav_trainings: 'TRAININGS',
            nav_projects: 'PROJECTS',
            nav_skills: 'SKILLS',
            nav_contact: 'CONTACT',
            hello_title: 'HELLO.',
            hello_subtitle: 'BACK-END DEVELOPER | CYBERSECURITY ENTHUSIAST',
            btn_download: 'DOWNLOAD',
            about_title: 'ABOUT',
            about_text: 'Hello, world! 🌍 👋\n\nI’m Amanda, a Computer Science student, always seeking new challenges that stimulate my mind. Technology draws me in because it demands strategic thinking, attention to detail, and persistence — all qualities that push me to go beyond what I already know.\nI’m naturally curious and enjoy understanding how systems work behind the scenes. My approach is methodical and organized: I plan, study, apply, and refine, turning knowledge into practice. Every project is an opportunity to test my skills, explore creative solutions, and learn from the complexity of the digital world.\nMy interest in back-end development and cybersecurity comes from the constant challenge each area presents. They push me to think faster, deeper, and more strategically, turning complexity into learning and meaningful projects. It’s in this balance between building robust systems and protecting them that I find my true drive to grow.',
            about_quote: '"Code is law. Law is code."',
            trainings_title: 'TRAININGS',
            training_1: 'Bachelor in Computer Science - UNICSUL, 2027',
            training_2: 'Back-end Specialization - Oracle, 2025',
            training_3: 'Technical Course in IT Support and Maintenance - Anhanguera, IN PROGRESS',
            training_4: 'Intensive Cybersecurity - Vai na Web + Kensei - 2025, IN PROGRESS',
            training_5: 'Cybersecurity Course: Beginner to Advanced - Hackers do Bem, IN PROGRESS',
            training_6: 'Code Girls (AWS) - Santander / DIO, IN PROGRESS',
            projects_title: 'PROJECTS',
            project_desc_1: 'Book catalog in Java with API integration and data persistence.',
            project_desc_2: 'Forum in Java with Spring Boot, featuring topics, authentication, and REST APIs.',
            project_link: 'View on GitHub',
            skills_title: 'SKILLS',
            contact_title: 'CONTACT',
            contact_text: 'Interested in collaborating or just exchanging ideas? Feel free to get in touch!',
            footer_text: 'All rights reserved.'
        },
        pt: {
            nav_home: 'HOME',
            nav_about: 'SOBRE',
            nav_trainings: 'FORMAÇÃO',
            nav_projects: 'PROJETOS',
            nav_skills: 'HABILIDADES',
            nav_contact: 'CONTATO',
            hello_title: 'OLÁ.',
            hello_subtitle: 'DESENVOLVEDOR BACK-END | ENTUSIASTA DE CIBERSEGURANÇA',
            btn_download: 'BAIXAR',
            about_title: 'SOBRE MIM',
            about_text: 'Olá, mundo! 🌍 👋\n\nEu sou Amanda, estudante de Ciência da Computação, sempre em busca de novos desafios que estimulem minha mente. A tecnologia me atrai porque exige pensamento estratégico, atenção aos detalhes e persistência — qualidades que me impulsionam a ir além do que já sei.\nSou naturalmente curiosa e gosto de entender como os sistemas funcionam por trás das cenas. Minha abordagem é metódica e organizada: eu planejo, estudo, aplico e refino, transformando conhecimento em prática. Cada projeto é uma oportunidade para testar minhas habilidades, explorar soluções criativas e aprender com a complexidade do mundo digital.\nMeu interesse em desenvolvimento back-end e cibersegurança vem do desafio constante que cada área apresenta. Elas me empurram a pensar mais rápido, mais fundo e de forma mais estratégica, transformando a complexidade em aprendizado e projetos significativos. É nesse equilíbrio entre construir sistemas robustos e protegê-los que encontro minha verdadeira motivação para crescer.',
            about_quote: '"O código é a lei. A lei é o código."',
            trainings_title: 'FORMAÇÃO',
            training_1: 'Bacharelado em Ciência da Computação - UNICSUL, 2027',
            training_2: 'Especialização Back-end - Oracle, 2025',
            training_3: 'Técnico em Suporte e Manutenção em Informática - Anhanguera, EM ANDAMENTO',
            training_4: 'Intensivo Cybersecurity - Vai na Web + Kensei - 2025, EM ANDAMENTO',
            training_5: 'Curso Cybersecurity Básico ao Avançado - Hackers do Bem, EM ANDAMENTO',
            training_6: 'Code Girls (AWS) - Santander / DIO, EM ANDAMENTO',
            projects_title: 'PROJETOS',
            project_desc_1: 'Catálogo de livros em Java com integração de API e persistência de dados.',
            project_desc_2: 'Fórum em Java com Spring Boot, focado em tópicos, autenticação e APIs REST.',
            project_link: 'Ver no GitHub',
            skills_title: 'HABILIDADES',
            contact_title: 'CONTATO',
            contact_text: 'Interessado em colaborar ou apenas trocar uma ideia? Sinta-se à vontade para entrar em contato!',
            footer_text: 'Todos os direitos reservados.'
        },
    };

    const translatePage = (lang) => {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                const translatedText = translations[lang][key].replace(/\n/g, '<br>');
                element.innerHTML = translatedText;
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sections.forEach(section => {
                section.classList.remove('active');
            });
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    langPT.addEventListener('click', () => {
        langPT.classList.add('active');
        langEN.classList.remove('active');
        translatePage('pt');
    });

    langEN.addEventListener('click', () => {
        langEN.classList.add('active');
        langPT.classList.remove('active');
        translatePage('en');
    });
    
    translatePage('en');
    langEN.classList.add('active');
    langPT.classList.remove('active');

    (function(){
        const lines = [
            'user@server:~$ sudo systemctl status api-gateway',
            '● api-gateway.service - API Gateway Service',
            '    Active: active (running) since Fri 2025-09-26 08:12:44 UTC; 2h 14min ago',
            '    PID: 4211 ExecStart=/usr/bin/node /srv/api/gateway/index.js',
            '',
            'user@server:~$ tail -n 6 /var/log/api-gateway/access.log',
            '192.168.12.101 POST /v1/auth 200 128ms',
            '203.0.113.44 POST /v1/login 401 18ms',
            '198.51.100.23 POST /v1/login 401 19ms',
            '198.51.100.23 POST /v1/login 401 20ms',
            '203.0.113.44 POST /v1/login 200 120ms',
            '',
            'user@server:~$ detect-intrusion --mode=quick',
            '[+] signatures loaded: 2,147',
            '[!] suspicious pattern: repeated failed logins from 198.51.100.23',
            '[!] possible brute-force detected',
        ];

        function makeLine(text){
            const el = document.createElement('div');
            el.className = 'line';
            el.textContent = text;
            return el;
        }

        let i = 0;
        function showNextLine(){
            if(i >= lines.length) {
                setTimeout(()=> triggerAlert(), 900);
                return;
            }
            const text = lines[i++];
            const node = makeLine('');
            if (terminal) {
                terminal.appendChild(node);
                requestAnimationFrame(()=> node.classList.add('visible'));
                terminal.scrollTop = terminal.scrollHeight;
            }

            if(text.startsWith('user@') || text.startsWith('[+]') || text.startsWith('[!]')){
                typeText(node, text, 0, ()=> setTimeout(showNextLine, 240));
            } else {
                if (node) {
                    node.textContent = text;
                }
                setTimeout(showNextLine, 140);
            }
        }

        function typeText(el, txt, pos, cb){
            const speed = 22 + Math.random()*18;
            if(pos < txt.length){
                if (el) {
                    el.textContent = txt.slice(0,pos+1) + '\u2588';
                }
                setTimeout(()=> typeText(el, txt, pos+1, cb), speed);
            } else {
                if (el) {
                    el.textContent = txt;
                }
                cb && cb();
            }
        }

        function triggerAlert(){
            if (alertOverlay) {
                alertOverlay.classList.add('show');
                const glitch = alertOverlay.querySelector('.glitch');
                let gcount = 0;
                const gint = setInterval(()=>{
                    if (glitch) {
                        glitch.style.transform = 'translateX(' + (Math.random()*6-3) + 'px)';
                    }
                    gcount++;
                    if(gcount>8){ clearInterval(gint); if (glitch) { glitch.style.transform='none'; } }
                }, 90);
            }

            setTimeout(()=>{
                if (alertOverlay) {
                    alertOverlay.classList.remove('show');
                }
                if (terminal) {
                    const linesAll = terminal.querySelectorAll('.line');
                    linesAll.forEach(n => n.remove());
                }
                i = 0;
                setTimeout(showNextLine, 800);
            }, 4200);
        }

        const homeSection = document.getElementById('home');
        if (homeSection && homeSection.classList.contains('active')) {
            setTimeout(showNextLine, 800);
        }
    })();
});

const skills = [
  // Back-end
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "APIs RESTful", icon: "fas fa-server" },
  { name: "SQL & NoSQL", icon: "fas fa-database" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "AWS / Azure", icon: "fab fa-aws" }, // Azure não tem ícone oficial FA
  { name: "Testes Unitários", icon: "fas fa-vial" },

  // Cybersecurity
  { name: "Linux", icon: "fab fa-linux" },
  { name: "Cybersecurity", icon: "fas fa-shield-alt" },
  { name: "Network Monitoring", icon: "fas fa-network-wired" },
  { name: "Penetration Testing", icon: "fas fa-user-secret" },
  { name: "Firewall & ACLs", icon: "fas fa-fire" },
  { name: "Cloud Security", icon: "fas fa-cloud" }
];

const container = document.querySelector(".skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.innerHTML = `<i class="${skill.icon}"></i>${skill.name}`;
  container.appendChild(li);
});

const projects = [
  {
    title: 'Liter - Alura',
    description: 'Aplicação em Java com Spring Boot e PostgreSQL, consumindo a API Gutenberg para livros de domínio público.',
    github: 'https://github.com/Amandaaug/Liter-Alura',
    status: 'Finalizado'
  },
  {
    title: 'Forum-Hub',
    description: 'API REST para gestão de tópicos de fórum, desenvolvida com Java 17, Spring Boot, Maven e MySQL.',
    github: 'https://github.com/Amandaaug/Forum-Hub',
    status: 'Finalizado'
  }
];

const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">
      <a href="${project.github}" class="project-link" target="_blank">
        Ver no GitHub <i class="fas fa-arrow-right"></i>
      </a>
    </div>
    <div class="project-status completed">
      ✅ ${project.status}
    </div>
  `;

  projectGrid.appendChild(card);
});

// Formulário WhatsApp//*

document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('wpp-name').value;
        let email = document.getElementById('wpp-email').value;
        let message = document.getElementById('wpp-message').value;

        // 👉 Troque 55DDDNUMERO pelo seu número no formato internacional
        let phone = "5521960171224";
        let text = `Olá, meu nome é ${name} (${email}).%0A${message}`;

        let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
    });
