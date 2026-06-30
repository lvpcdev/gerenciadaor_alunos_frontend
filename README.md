# Gerenciador de Alunos — Frontend

Interface web para o sistema de gerenciamento de alunos de uma escola de informática. Desenvolvido como projeto real para um cliente, consome a API REST do backend e oferece uma experiência completa de gestão escolar.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla — sem frameworks)

## Funcionalidades

- Login com autenticação JWT
- Controle de acesso por perfil: ADMIN vê tudo, USER não acessa gerenciamento de usuários
- Cadastro, edição e inativação de alunos
- Cadastro e gerenciamento de cursos com categorias
- Criação de contratos de matrícula com seleção de modalidade
- Download do contrato de matrícula em PDF
- Download da ficha de anotações do aluno em XLSX (preenchida automaticamente)
- Registro de aulas com controle de presença
- Relatório de presenças por período em PDF
- Toasts de feedback para todas as ações
- Logout automático em caso de token expirado (401/403)

## Estrutura

```
├── index.html        # Aplicação principal (SPA)
├── login.html        # Tela de login
├── css/
│   └── style.css     # Estilos globais
└── js/
    └── app.js        # Toda a lógica da aplicação
```

## Como rodar localmente

Não há dependências ou build — basta abrir os arquivos no navegador ou servir com qualquer servidor estático.

```bash
# Com Python
python3 -m http.server 3000

# Com Node
npx serve .
```

Antes de rodar, configure a URL da API no início do `app.js`:

```javascript
const API_BASE = 'http://localhost:8080';
```

## Padrões do projeto

- Objeto `Api` centralizado para todas as requisições HTTP com tratamento automático de erros e expiração de token
- Objeto `App` com todos os métodos da aplicação organizados por módulo
- Objeto `ICON` com todos os ícones SVG inline reutilizáveis
- Renderização dinâmica de tabelas e modais via JavaScript puro
- Sem dependências externas — zero bibliotecas de terceiros

## Backend

Este frontend consome a API disponível em: [gerenciador_alunos](https://github.com/lvpcdev/gerenciador_alunos)