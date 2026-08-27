import { createContext } from "react"

export const LanguageContext = createContext()

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    home: {
      greeting: "Hello, I'm Pablo Vinícius",
      description:
        "Bem-vindo(a)! Sou um desenvolvedor júnior construindo minha jornada na tecnologia. Este portfólio reúne experimentos, estudos e projetos que refletem minha evolução contínua.",
      viewProjects: "Ver Projetos",
      getInTouch: "Entrar em contato",
    },
    about: {
      title: "Sobre mim",
      bio: "Sou estudante de Engenharia de Software e desenvolvedor front-end júnior, com foco em construir interfaces modernas, acessíveis e responsivas. Gosto de aprender, explorar novas ferramentas e transformar problemas em produtos práticos. Acredito em código limpo, evolução constante e em entregar experiências que realmente façam diferença para o usuário.",
      education: "Educação",
      educationEntry: "Bacharelado em Engenharia de Software - Centro Universitário Internacional UNINTER (2023-2027)",
      experience: "Experiência",
      experienceTitle: "Desenvolvedor Frontend (Freelancer)",
      experienceSubTitle: "Projeto SaaS para Clínica Psicológica • Mar 2026 – Atual",
      experienceDesc1: "• Desenvolvimento de interfaces utilizando React, TypeScript e Tailwind CSS",
      experienceDesc2: "• Criação de componentes reutilizáveis e responsivos",
      experienceDesc3: "• Participação em dailys semanais e colaboração com equipe de desenvolvimento",
      experienceDesc4: "• Organização de tarefas utilizando Trello (metodologia Kanban)",
    },
    projects: {
      title: "Projetos",
      viewProject: "Ver Projeto→",
      project1: {
        description:
          "Este é um projeto simples de controle financeiro feito com HTML, CSS e JavaScript. A ideia é permitir que o usuário registre entradas e saídas, veja o saldo atual e acompanhe o histórico de movimentações.",
      },
      project2: {
        description:
          "Aplicação de controle financeiro desenvolvida com React e Vite. Permite registrar entradas e saídas, visualizar o saldo em tempo real e acompanhar o histórico de transações de forma organizada e responsiva.",
      },
    },
    contact: {
      title: "Entre Em Contato",
      namePlaceholder: "Nome...",
      messagePlaceholder: "Sua Mensagem...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      successAlert: "Mensagem enviada!",
      errorAlert: "Oops! Algo deu errado. Por favor, tente novamente.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hello, I'm Pablo Vinícius",
      description:
        "Welcome! I'm a junior developer building my journey in technology. This portfolio gathers experiments, studies, and projects that reflect my continuous growth.",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
    },
    about: {
      title: "About me",
      bio: "I'm a Software Engineering student and junior front-end developer, focused on building modern, accessible, and responsive interfaces. I enjoy learning, exploring new tools, and turning problems into practical products. I believe in clean code, constant growth, and delivering experiences that truly make a difference for the user.",
      education: "Education",
      educationEntry: "Bachelor's in Software Engineering - Centro Universitário Internacional UNINTER (2023-2027)",
      experience: "Experience",
      experienceTitle: "Frontend Developer (Freelancer)",
      experienceSubTitle: "SaaS Project for a Psychology Clinic • Mar 2026 – Present",
      experienceDesc1: "• Development of interfaces using React, TypeScript, and Tailwind CSS",
      experienceDesc2: "• Creation of reusable and responsive components",
      experienceDesc3: "• Participation in weekly dailies and collaboration with the development team",
      experienceDesc4: "• Task organization using Trello (Kanban methodology)",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project→",
      project1: {
        description:
          "A simple personal financial control project built with HTML, CSS and JavaScript. The idea is to let the user register income and expenses, view the current balance, and track the transaction history.",
      },
      project2: {
        description:
          "A financial control application built with React and Vite. It allows registering income and expenses, viewing the balance in real time, and tracking transaction history in an organized and responsive way.",
      },
    },
    contact: {
      title: "Get In Touch",
      namePlaceholder: "Name...",
      messagePlaceholder: "Your Message...",
      send: "Send Message",
      sending: "Sending...",
      successAlert: "Message sent!",
      errorAlert: "Oops! Something went wrong. Please try again.",
    },
  },
}
