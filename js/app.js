const API_BASE = 'https://allcanservicos.com.br';

const ICON = {
  edit: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>',
  pause: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',
  play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  x: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  pdf: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  report: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
};

const EMPTY_ICON = {
  alunos: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  cursos: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  registros: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  usuarios: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  pessoas: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  livros: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  emprestimos: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
};

(function checkAuth() {
  const token = localStorage.getItem('auth_token');
  if (!token) {
    window.location.href = 'login.html';
    return;
  }
  applyIdentity(localStorage.getItem('auth_nome') || 'Administrador');
})();

function getPerfilFromToken() {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.perfil;
  } catch (e) {
    return null;
  }
}

function isAdmin() {
  return getPerfilFromToken() === 'ADMIN';
}

function applyPerfilRestrictions() {
  if (!isAdmin()) {
    const navUsuarios = document.getElementById('nav-usuarios');
    if (navUsuarios) navUsuarios.style.display = 'none';
  }
}

function initials(nome) {
  const parts = (nome || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'A';
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

function applyIdentity(nome) {
  const ini = initials(nome);
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('usuario-nome', nome);
  set('topbar-nome', nome);
  set('topbar-ava', ini);
  set('footer-avatar', ini);
}

function logout() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_nome');
  window.location.href = 'login.html';
}

let alunos = [];
let cursos = [];
let registros = [];
let usuarios = [];
let contratos = [];
let pessoas = [];
let livros = [];
let emprestimos = [];
let alunoFilter = 'ativos';
let cursoFilter = 'ativos';
let pessoaFilter = 'ativos';
let livroFilter = 'ativos';
let emprestimoFilter = 'todos';
let modalCallback = null;

const Api = {
  headers() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
    };
  },
  async get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`, { headers: this.headers() });
    if (res.status === 401 || res.status === 403) { logout(); return; }
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      let err = null;
      try { err = JSON.parse(text); } catch { err = text; }
      if (Array.isArray(err)) throw new Error(err.map(e => e.mensage || e.message || e.defaultMessage).filter(Boolean).join('\n'));
      if (typeof err === 'string' && err) throw new Error(err);
      throw new Error((err && err.message) || `Erro ${res.status}`);
    }
    return res.json();
  },
  async post(endpoint, data) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(data),
    });
    if (res.status === 401 || res.status === 403) { logout(); return; }
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      let err = null;
      try { err = JSON.parse(text); } catch { err = text; }
      if (Array.isArray(err)) throw new Error(err.map(e => e.mensage || e.message || e.defaultMessage).filter(Boolean).join('\n'));
      if (typeof err === 'string' && err) throw new Error(err);
      throw new Error((err && err.message) || `Erro ${res.status}`);
    }
    return res.json();
  },
  async put(endpoint, data) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: this.headers(),
      body: JSON.stringify(data),
    });
    if (res.status === 401 || res.status === 403) { logout(); return; }
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      let err = null;
      try { err = JSON.parse(text); } catch { err = text; }
      if (Array.isArray(err)) throw new Error(err.map(e => e.mensage || e.message || e.defaultMessage).filter(Boolean).join('\n'));
      if (typeof err === 'string' && err) throw new Error(err);
      throw new Error((err && err.message) || `Erro ${res.status}`);
    }
    return res.json();
  },
  async delete(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`, { method: 'DELETE', headers: this.headers() });
    if (res.status === 401 || res.status === 403) { logout(); return; }
    if (!res.ok && res.status !== 204) {
      const text = await res.text().catch(() => '');
      let err = null;
      try { err = JSON.parse(text); } catch { err = text; }
      if (Array.isArray(err)) throw new Error(err.map(e => e.mensage || e.message || e.defaultMessage).filter(Boolean).join('\n'));
      if (typeof err === 'string' && err) throw new Error(err);
      throw new Error((err && err.message) || `Erro ${res.status}`);
    }
  },
  async downloadPdf(endpoint, filename) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` },
    });
    if (res.status === 401 || res.status === 403) { logout(); return; }
    if (!res.ok) throw new Error(`Erro ao gerar PDF: ${res.status}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  },
};

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? ICON.check : ICON.x;
  toast.innerHTML = `<span style="color:var(--${type === 'success' ? 'success' : 'danger'});display:inline-flex">${icon}</span><span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, 3500);
}

function showSkeleton(tbodyId, cols, rows = 5) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const cell = '<td><div class="skeleton-bar"></div></td>';
  tbody.innerHTML = Array.from({ length: rows }, () =>
    `<tr class="skeleton-row">${cell.repeat(cols)}</tr>`).join('');
}

function openModal(title, bodyHTML, onSave) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  document.getElementById('modal-overlay').classList.add('show');
  modalCallback = onSave;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show');
  modalCallback = null;
}

function maskCPF(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 11);
  if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  else if (v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  input.value = v;
}

function maskPhone(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 11);
  if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
  else if (v.length > 2) v = v.replace(/(\d{2})(\d{1,5})/, '($1) $2');
  else if (v.length > 0) v = v.replace(/(\d{1,2})/, '($1');
  input.value = v;
}

function navigateTo(page) {
  if (page === 'usuarios' && !isAdmin()) {
    showToast('Acesso negado.', 'error');
    page = 'dashboard';
  }
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  const nav = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (nav) nav.classList.add('active');
  document.querySelectorAll('.section-page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(`page-${page}`);
  if (el) el.classList.add('active');
  closeSidebar();
  if (page === 'dashboard') App.loadDashboard();
  if (page === 'alunos') App.loadAlunos();
  if (page === 'cursos') App.loadCursos();
  if (page === 'registros') { App.loadRegistros(); App.loadSelectOptions(); }
  if (page === 'contratos') App.loadContratosPage();
  if (page === 'usuarios') App.loadUsuarios();
  if (page === 'pessoas') App.loadPessoas();
  if (page === 'livros') App.loadLivros();
  if (page === 'emprestimos') { App.loadEmprestimos(); App.loadBibliotecaSelectOptions(); }
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-backdrop').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  const bd = document.getElementById('sidebar-backdrop');
  if (bd) bd.classList.remove('show');
}

function setupTopbar() {
  const h = new Date().getHours();
  const saud = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
  const nome = (localStorage.getItem('auth_nome') || '').split(/\s+/)[0] || '';
  const elSaud = document.getElementById('topbar-saudacao');
  if (elSaud) elSaud.innerHTML = nome ? `${saud}, <b>${escapeHTML(nome)}</b>` : `${saud}`;
  const elData = document.getElementById('topbar-data');
  if (elData) {
    const fmt = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    let s = fmt.format(new Date());
    elData.textContent = s.charAt(0).toUpperCase() + s.slice(1);
  }
}

function formatDate(d) {
  if (!d) return '-';
  const p = d.split('-');
  return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : d;
}

function animateCounter(el, target) {
  const isP = typeof target === 'string' && target.includes('%');
  const num = parseInt(target) || 0;
  let cur = 0;
  const step = Math.max(1, Math.ceil(num / 30));
  const iv = setInterval(() => { cur += step; if (cur >= num) { cur = num; clearInterval(iv); } el.textContent = isP ? cur + '%' : cur; }, 30);
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function renderAlunos(list) {
  const tbody = document.getElementById('alunos-tbody');
  const isAtivos = alunoFilter === 'ativos';
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="11"><div class="empty-state"><div class="icon">${EMPTY_ICON.alunos}</div><p>Nenhum aluno ${isAtivos ? 'ativo' : 'inativo'}</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(a => `
    <tr>
      <td>${a.id}</td>
      <td>${escapeHTML(a.nome)}</td>
      <td>${escapeHTML(a.cpf)}</td>
      <td>${escapeHTML(a.rg || '-')}</td>
      <td>${escapeHTML(a.email)}</td>
      <td>${escapeHTML(a.telefone)}</td>
      <td>${formatDate(a.dataNascimento)}</td>
      <td>${escapeHTML(a.responsavelLegal || '-')}</td>
      <td>${escapeHTML(a.endereco || '-')}</td>
      <td><span class="badge badge-${a.ativo ? 'ativo' : 'inativo'}">${a.ativo ? 'Ativo' : 'Inativo'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.editAluno(${a.id})">${ICON.edit} Editar</button>
          <button class="btn btn-secondary btn-xs" onclick="App.relatorioPresencas(${a.id})">${ICON.report} Relatório</button>
          ${a.ativo
      ? `<button class="btn btn-warning btn-xs" onclick="App.inativarAluno(${a.id}, '${escapeHTML(a.nome)}')">${ICON.pause} Inativar</button>`
      : `<button class="btn btn-success btn-xs" onclick="App.ativarAluno(${a.id}, '${escapeHTML(a.nome)}')">${ICON.play} Ativar</button>`
    }
        </div>
      </td>
    </tr>
  `).join('');
}

function renderCursos(list) {
  const tbody = document.getElementById('cursos-tbody');
  const isAtivos = cursoFilter === 'ativos';
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><div class="icon">${EMPTY_ICON.cursos}</div><p>Nenhum curso ${isAtivos ? 'ativo' : 'inativo'}</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(c => `
    <tr>
      <td>${c.id}</td>
      <td>${escapeHTML(c.nome)}</td>
      <td>${escapeHTML(c.descricao)}</td>
      <td>${c.cargaHoraria}h</td>
      <td><span class="badge badge-${c.ativo ? 'ativo' : 'inativo'}">${c.ativo ? 'Ativo' : 'Inativo'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.editCurso(${c.id})">${ICON.edit} Editar</button>
          ${c.ativo
      ? `<button class="btn btn-warning btn-xs" onclick="App.inativarCurso(${c.id}, '${escapeHTML(c.nome)}')">${ICON.pause} Inativar</button>`
      : `<button class="btn btn-success btn-xs" onclick="App.ativarCurso(${c.id}, '${escapeHTML(c.nome)}')">${ICON.play} Ativar</button>`
    }
        </div>
      </td>
    </tr>
  `).join('');
}

function renderRegistros(list) {
  const tbody = document.getElementById('registros-tbody');
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="10"><div class="empty-state"><div class="icon">${EMPTY_ICON.registros}</div><p>Nenhum registro encontrado</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${r.aluno ? escapeHTML(r.aluno.nome) : '-'}</td>
      <td>${r.curso ? escapeHTML(r.curso.nome) : '-'}</td>
      <td>${formatDate(r.dataAula)}</td>
      <td>${r.horaInicio} - ${r.horaTermino}</td>
      <td>${escapeHTML(r.exercicio || '-')}</td>
      <td>${escapeHTML(r.tipoAula || '-')}</td>
      <td>${r.numeroMaquina}</td>
      <td><span class="badge badge-${r.presencaStatus === 'PRESENTE' ? 'presente' : 'ausente'}">${r.presencaStatus === 'PRESENTE' ? 'Presente' : 'Ausente'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.editRegistro(${r.id})">${ICON.edit} Editar</button>
          <button class="btn btn-danger btn-xs" onclick="App.deleteRegistro(${r.id})">${ICON.trash} Excluir</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderDashboardRecent(list) {
  const tbody = document.getElementById('dashboard-recent-tbody');
  const recent = list.slice(-5).reverse();
  if (!recent.length) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><div class="icon">${EMPTY_ICON.registros}</div><p>Nenhum registro encontrado</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = recent.map(r => `
    <tr>
      <td>${r.aluno ? escapeHTML(r.aluno.nome) : '-'}</td>
      <td>${r.curso ? escapeHTML(r.curso.nome) : '-'}</td>
      <td>${formatDate(r.dataAula)}</td>
      <td>${escapeHTML(r.tipoAula)}</td>
      <td><span class="badge badge-${r.presencaStatus === 'PRESENTE' ? 'presente' : 'ausente'}">${r.presencaStatus === 'PRESENTE' ? 'Presente' : 'Ausente'}</span></td>
    </tr>
  `).join('');
}

const DIA_LABEL = { SEGUNDA: 'Seg', TERCA: 'Ter', QUARTA: 'Qua', QUINTA: 'Qui', SEXTA: 'Sex', SABADO: 'Sáb' };
const EMPTY_CONTRATO = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';

function renderContratos(list, alunoSelecionado) {
  const tbody = document.getElementById('contratos-tbody');
  if (!alunoSelecionado) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="icon">${EMPTY_CONTRATO}</div><p>Selecione um aluno para ver os contratos</p></div></td></tr>`;
    return;
  }
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="icon">${EMPTY_CONTRATO}</div><p>Nenhum contrato para este aluno</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(c => {
    const dias = (c.diasSemana || []).map(d => DIA_LABEL[d] || d).join(', ') || '-';
    const curso = c.curso ? c.curso.nome : (c.cursoNome || '-');
    return `
    <tr>
      <td>${c.id}</td>
      <td>${escapeHTML(curso)}</td>
      <td>${formatDate(c.dataInicio)}</td>
      <td>${c.horasAulasMes ?? '-'}</td>
      <td>Dia ${c.diaVencimento ?? '-'}</td>
      <td>${c.horaInicio || '-'} - ${c.horaTermino || '-'}</td>
      <td>${escapeHTML(dias)}</td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.downloadContratoPdf(${c.id})">${ICON.pdf} Baixar PDF</button>
          <button class="btn btn-danger btn-xs" onclick="App.deleteContrato(${c.id})">${ICON.trash} Excluir</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function renderUsuarios(list) {
  const tbody = document.getElementById('usuarios-tbody');
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><div class="icon">${EMPTY_ICON.usuarios}</div><p>Nenhum usuário cadastrado</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${escapeHTML(u.nome)}</td>
      <td>${escapeHTML(u.login)}</td>
      <td><span class="badge badge-${u.perfil === 'ADMIN' ? 'admin' : 'user'}">${u.perfil === 'ADMIN' ? 'Administrador' : 'Usuário'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.editUsuario(${u.id})">${ICON.edit} Editar</button>
          <button class="btn btn-danger btn-xs" onclick="App.deleteUsuario(${u.id})">${ICON.trash} Excluir</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderPessoas(list) {
  const tbody = document.getElementById('pessoas-tbody');
  const isAtivos = pessoaFilter === 'ativos';
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="icon">${EMPTY_ICON.pessoas}</div><p>Nenhuma pessoa ${isAtivos ? 'ativa' : 'inativa'}</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(p => `
    <tr>
      <td>${p.id}</td>
      <td>${escapeHTML(p.nome || '-')}</td>
      <td>${escapeHTML(p.cpf || '-')}</td>
      <td>${escapeHTML(p.email || '-')}</td>
      <td>${escapeHTML(p.telefone || '-')}</td>
      <td>${escapeHTML(p.endereco || '-')}</td>
      <td><span class="badge badge-${p.ativo ? 'ativo' : 'inativo'}">${p.ativo ? 'Ativo' : 'Inativo'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.editPessoa(${p.id})">${ICON.edit} Editar</button>
          ${p.ativo
      ? `<button class="btn btn-warning btn-xs" onclick="App.inativarPessoa(${p.id}, '${escapeHTML(p.nome)}')">${ICON.pause} Inativar</button>`
      : `<button class="btn btn-success btn-xs" onclick="App.ativarPessoa(${p.id}, '${escapeHTML(p.nome)}')">${ICON.play} Ativar</button>`
    }
        </div>
      </td>
    </tr>
  `).join('');
}

function renderLivros(list) {
  const tbody = document.getElementById('livros-tbody');
  const isAtivos = livroFilter === 'ativos';
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="icon">${EMPTY_ICON.livros}</div><p>Nenhum livro ${isAtivos ? 'ativo' : 'inativo'}</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(l => `
    <tr>
      <td>${l.id}</td>
      <td>${escapeHTML(l.titulo)}</td>
      <td>${escapeHTML(l.autor)}</td>
      <td>${l.quantidadeTotal}</td>
      <td>${l.quantidadeDisponivel}</td>
      <td><span class="badge badge-${l.ativo ? 'ativo' : 'inativo'}">${l.ativo ? 'Ativo' : 'Inativo'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn btn-secondary btn-xs" onclick="App.editLivro(${l.id})">${ICON.edit} Editar</button>
          ${l.ativo
      ? `<button class="btn btn-warning btn-xs" onclick="App.inativarLivro(${l.id}, '${escapeHTML(l.titulo)}')">${ICON.pause} Inativar</button>`
      : `<button class="btn btn-success btn-xs" onclick="App.ativarLivro(${l.id}, '${escapeHTML(l.titulo)}')">${ICON.play} Ativar</button>`
    }
        </div>
      </td>
    </tr>
  `).join('');
}

function renderEmprestimos(list) {
  const tbody = document.getElementById('emprestimos-tbody');
  if (!list.length) {
    const txt = emprestimoFilter === 'atrasados' ? 'Nenhum empréstimo atrasado' : 'Nenhum empréstimo registrado';
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="icon">${EMPTY_ICON.emprestimos}</div><p>${txt}</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(e => {
    const podeDevolver = e.statusEmprestimo === 'EMPRESTADO' || e.statusEmprestimo === 'ATRASADO';
    const badgeClass = {
      EMPRESTADO: 'badge-warning',
      DEVOLVIDO: 'badge-presente',
      ATRASADO: 'badge-ausente'
    }[e.statusEmprestimo] || 'badge-inativo';
    const badgeLabel = {
      EMPRESTADO: 'Emprestado',
      DEVOLVIDO: 'Devolvido',
      ATRASADO: 'Atrasado'
    }[e.statusEmprestimo] || e.statusEmprestimo;
    return `
    <tr>
      <td>${e.id}</td>
      <td>${e.pessoa ? escapeHTML(e.pessoa.nome) : '-'}</td>
      <td>${e.livro ? escapeHTML(e.livro.titulo) : '-'}</td>
      <td>${formatDate(e.dataEmprestimo)}</td>
      <td>${formatDate(e.dataPrevistaDevolucao)}</td>
      <td>${e.dataDevolucao ? formatDate(e.dataDevolucao) : '-'}</td>
      <td><span class="badge ${badgeClass}">${badgeLabel}</span></td>
      <td>
        <div class="action-btns">
          ${podeDevolver ? `<button class="btn btn-success btn-xs" onclick="App.devolverEmprestimo(${e.id})">${ICON.check} Devolver</button>` : '—'}
        </div>
      </td>
    </tr>`;
  }).join('');
}

const App = {
  async loadAlunos() {
    showSkeleton('alunos-tbody', 11);
    try {
      alunos = await Api.get(`/alunos/${alunoFilter}`);
      renderAlunos(alunos);
    } catch (e) { console.warn(e.message); alunos = []; renderAlunos([]); }
  },

  async saveAluno(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-aluno');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/alunos', {
        nome: document.getElementById('aluno-nome').value.trim(),
        cpf: document.getElementById('aluno-cpf').value.trim(),
        rg: document.getElementById('aluno-rg').value.trim(),
        email: document.getElementById('aluno-email').value.trim(),
        telefone: document.getElementById('aluno-telefone').value.trim(),
        dataNascimento: document.getElementById('aluno-nascimento').value,
        responsavelLegal: document.getElementById('aluno-responsavel').value.trim(),
        endereco: document.getElementById('aluno-endereco').value.trim(),
      });
      showToast('Aluno cadastrado com sucesso!');
      document.getElementById('form-aluno').reset();
      await this.loadAlunos();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  editAluno(id) {
    const a = alunos.find(x => x.id === id);
    if (!a) return;
    openModal('Editar Aluno', `
      <div class="form-grid">
        <div class="form-group"><label>Nome</label><input type="text" id="edit-aluno-nome" value="${escapeHTML(a.nome)}"></div>
        <div class="form-group"><label>CPF</label><input type="text" id="edit-aluno-cpf" value="${escapeHTML(a.cpf)}" maxlength="14"></div>
        <div class="form-group"><label>RG</label><input type="text" id="edit-aluno-rg" value="${escapeHTML(a.rg || '')}"></div>
        <div class="form-group"><label>E-mail</label><input type="email" id="edit-aluno-email" value="${escapeHTML(a.email)}"></div>
        <div class="form-group"><label>Telefone</label><input type="text" id="edit-aluno-telefone" value="${escapeHTML(a.telefone)}" maxlength="15"></div>
        <div class="form-group"><label>Data de Nascimento</label><input type="date" id="edit-aluno-nascimento" value="${a.dataNascimento || ''}"></div>
        <div class="form-group"><label>Responsável Legal</label><input type="text" id="edit-aluno-responsavel" value="${escapeHTML(a.responsavelLegal || '')}"></div>
        <div class="form-group"><label>Endereço</label><input type="text" id="edit-aluno-endereco" value="${escapeHTML(a.endereco || '')}"></div>
      </div>
    `, async () => {
      try {
        await Api.put(`/alunos/${id}`, {
          nome: document.getElementById('edit-aluno-nome').value.trim(),
          cpf: document.getElementById('edit-aluno-cpf').value.trim(),
          rg: document.getElementById('edit-aluno-rg').value.trim(),
          email: document.getElementById('edit-aluno-email').value.trim(),
          telefone: document.getElementById('edit-aluno-telefone').value.trim(),
          dataNascimento: document.getElementById('edit-aluno-nascimento').value,
          responsavelLegal: document.getElementById('edit-aluno-responsavel').value.trim(),
          endereco: document.getElementById('edit-aluno-endereco').value.trim(),
        });
        showToast('Aluno atualizado com sucesso!');
        closeModal(); await this.loadAlunos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  inativarAluno(id, nome) {
    openModal('Inativar Aluno', `<p class="confirm-text">Deseja realmente inativar o aluno <strong>${nome}</strong>?</p>`, async () => {
      try {
        await Api.delete(`/alunos/${id}`);
        showToast('Aluno inativado com sucesso!');
        closeModal(); await this.loadAlunos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async ativarAluno(id, nome) {
    openModal('Ativar Aluno', `<p class="confirm-text">Deseja reativar o aluno <strong>${nome}</strong>?</p>`, async () => {
      try {
        await Api.put(`/alunos/${id}/ativar`, {});
        showToast('Aluno ativado com sucesso!');
        closeModal(); await this.loadAlunos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadCursos() {
    showSkeleton('cursos-tbody', 6);
    try {
      cursos = await Api.get(`/cursos/${cursoFilter}`);
      renderCursos(cursos);
    } catch (e) { console.warn(e.message); cursos = []; renderCursos([]); }
  },

  async saveCurso(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-curso');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/cursos', {
        nome: document.getElementById('curso-nome').value.trim(),
        descricao: document.getElementById('curso-descricao').value.trim(),
        cargaHoraria: parseInt(document.getElementById('curso-carga').value),
      });
      showToast('Curso cadastrado com sucesso!');
      document.getElementById('form-curso').reset();
      await this.loadCursos();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  editCurso(id) {
    const c = cursos.find(x => x.id === id);
    if (!c) return;
    openModal('Editar Curso', `
      <div class="form-grid">
        <div class="form-group"><label>Nome</label><input type="text" id="edit-curso-nome" value="${escapeHTML(c.nome)}"></div>
        <div class="form-group"><label>Descrição</label><input type="text" id="edit-curso-descricao" value="${escapeHTML(c.descricao)}"></div>
        <div class="form-group"><label>Carga Horária</label><input type="number" id="edit-curso-carga" value="${c.cargaHoraria}" min="1"></div>
      </div>
    `, async () => {
      try {
        await Api.put(`/cursos/${id}`, {
          nome: document.getElementById('edit-curso-nome').value.trim(),
          descricao: document.getElementById('edit-curso-descricao').value.trim(),
          cargaHoraria: parseInt(document.getElementById('edit-curso-carga').value),
        });
        showToast('Curso atualizado com sucesso!');
        closeModal(); await this.loadCursos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  inativarCurso(id, nome) {
    openModal('Inativar Curso', `<p class="confirm-text">Deseja realmente inativar o curso <strong>${nome}</strong>?</p>`, async () => {
      try {
        await Api.delete(`/cursos/${id}`);
        showToast('Curso inativado com sucesso!');
        closeModal(); await this.loadCursos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async ativarCurso(id, nome) {
    openModal('Ativar Curso', `<p class="confirm-text">Deseja reativar o curso <strong>${nome}</strong>?</p>`, async () => {
      try {
        await Api.put(`/cursos/${id}/ativar`, {});
        showToast('Curso ativado com sucesso!');
        closeModal(); await this.loadCursos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadRegistros() {
    showSkeleton('registros-tbody', 10);
    try {
      registros = await Api.get('/registros');
      renderRegistros(registros);
    } catch (e) { console.warn(e.message); registros = []; renderRegistros([]); }
  },

  async saveRegistro(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-registro');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/registros', {
        alunoId: parseInt(document.getElementById('registro-aluno').value),
        cursoId: parseInt(document.getElementById('registro-curso').value),
        dataAula: document.getElementById('registro-data').value,
        horaInicio: document.getElementById('registro-hora-inicio').value,
        horaTermino: document.getElementById('registro-hora-termino').value,
        exercicio: document.getElementById('registro-exercicio').value.trim(),
        tipoAula: document.getElementById('registro-tipo').value.trim(),
        numeroMaquina: parseInt(document.getElementById('registro-maquina').value),
        presencaStatus: document.getElementById('registro-presenca').value,
      });
      showToast('Registro salvo com sucesso!');
      document.getElementById('form-registro').reset();
      document.getElementById('registro-data').valueAsDate = new Date();
      await this.loadRegistros();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  editRegistro(id) {
    const r = registros.find(x => x.id === id);
    if (!r) return;
    const alunoOpts = alunos.length ? alunos : (r.aluno ? [r.aluno] : []);
    const cursoOpts = cursos.length ? cursos : (r.curso ? [r.curso] : []);
    openModal('Editar Registro de Aula', `
      <div class="form-grid">
        <div class="form-group"><label>Aluno</label>
          <select id="edit-reg-aluno">${alunoOpts.map(a => `<option value="${a.id}" ${r.aluno && a.id === r.aluno.id ? 'selected' : ''}>${escapeHTML(a.nome)}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label>Curso</label>
          <select id="edit-reg-curso">${cursoOpts.map(c => `<option value="${c.id}" ${r.curso && c.id === r.curso.id ? 'selected' : ''}>${escapeHTML(c.nome)}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label>Data</label><input type="date" id="edit-reg-data" value="${r.dataAula || ''}"></div>
        <div class="form-group"><label>Hora Início</label><input type="time" id="edit-reg-inicio" value="${r.horaInicio || ''}"></div>
        <div class="form-group"><label>Hora Término</label><input type="time" id="edit-reg-termino" value="${r.horaTermino || ''}"></div>
        <div class="form-group"><label>Exercício</label><input type="text" id="edit-reg-exercicio" value="${escapeHTML(r.exercicio)}"></div>
        <div class="form-group"><label>Tipo de Aula</label><input type="text" id="edit-reg-tipo" value="${escapeHTML(r.tipoAula)}"></div>
        <div class="form-group"><label>Nº Máquina</label><input type="number" id="edit-reg-maquina" value="${r.numeroMaquina}" min="1"></div>
        <div class="form-group"><label>Presença</label>
          <select id="edit-reg-presenca">
            <option value="PRESENTE" ${r.presencaStatus === 'PRESENTE' ? 'selected' : ''}>Presente</option>
            <option value="AUSENTE" ${r.presencaStatus === 'AUSENTE' ? 'selected' : ''}>Ausente</option>
          </select>
        </div>
      </div>
    `, async () => {
      try {
        await Api.put(`/registros/${id}`, {
          alunoId: parseInt(document.getElementById('edit-reg-aluno').value),
          cursoId: parseInt(document.getElementById('edit-reg-curso').value),
          dataAula: document.getElementById('edit-reg-data').value,
          horaInicio: document.getElementById('edit-reg-inicio').value,
          horaTermino: document.getElementById('edit-reg-termino').value,
          exercicio: document.getElementById('edit-reg-exercicio').value.trim(),
          tipoAula: document.getElementById('edit-reg-tipo').value.trim(),
          numeroMaquina: parseInt(document.getElementById('edit-reg-maquina').value),
          presencaStatus: document.getElementById('edit-reg-presenca').value,
        });
        showToast('Registro atualizado com sucesso!');
        closeModal(); await this.loadRegistros();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  deleteRegistro(id) {
    openModal('Excluir Registro', `<p class="confirm-text">Deseja realmente <strong>excluir</strong> o registro #${id}? Esta ação não pode ser desfeita.</p>`, async () => {
      try {
        await Api.delete(`/registros/${id}`);
        showToast('Registro excluído com sucesso!');
        closeModal(); await this.loadRegistros();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadDashboard() {
    try { alunos = await Api.get('/alunos/ativos'); } catch (e) { alunos = []; }
    try { cursos = await Api.get('/cursos/ativos'); } catch (e) { cursos = []; }
    try { registros = await Api.get('/registros'); } catch (e) { registros = []; }

    animateCounter(document.getElementById('stat-alunos'), alunos.length);
    animateCounter(document.getElementById('stat-cursos'), cursos.length);
    animateCounter(document.getElementById('stat-registros'), registros.length);

    const presentes = registros.filter(r => r.presencaStatus === 'PRESENTE').length;
    const taxa = registros.length > 0 ? Math.round((presentes / registros.length) * 100) : 0;
    animateCounter(document.getElementById('stat-presenca'), taxa + '%');
    const bar = document.getElementById('stat-presenca-bar');
    if (bar) requestAnimationFrame(() => { bar.style.width = taxa + '%'; });

    renderDashboardRecent(registros);
  },

  async loadSelectOptions() {
    try {
      const alunosAtivos = await Api.get('/alunos/ativos');
      const cursosAtivos = await Api.get('/cursos/ativos');
      document.getElementById('registro-aluno').innerHTML = '<option value="">Selecione o aluno...</option>' + alunosAtivos.map(a => `<option value="${a.id}">${escapeHTML(a.nome)}</option>`).join('');
      document.getElementById('registro-curso').innerHTML = '<option value="">Selecione o curso...</option>' + cursosAtivos.map(c => `<option value="${c.id}">${escapeHTML(c.nome)}</option>`).join('');
    } catch (e) { console.warn('Erro ao carregar opções:', e.message); }
  },

  relatorioPresencas(alunoId) {
    const hoje = new Date();
    const padrao = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}`;
    openModal('Relatório de Presenças', `
      <div class="form-group">
        <label for="relatorio-mes">Mês de referência</label>
        <input type="month" id="relatorio-mes" value="${padrao}">
      </div>
    `, async () => {
      const mesAno = document.getElementById('relatorio-mes').value;
      if (!mesAno) { showToast('Selecione um mês.', 'error'); return; }
      try {
        await Api.downloadPdf(`/relatorios/presencas/${alunoId}?mesAno=${mesAno}`, `relatorio-presencas-${alunoId}-${mesAno}.pdf`);
        closeModal();
        showToast('Relatório gerado com sucesso!');
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadContratosPage() {
    await this.loadContratoSelectOptions();
    const sel = document.getElementById('contrato-filtro-aluno');
    if (sel && sel.value) this.loadContratosByAluno(sel.value);
    else renderContratos([], null);
  },

  async loadContratoSelectOptions() {
    try {
      const alunosAtivos = await Api.get('/alunos/ativos');
      const cursosAtivos = await Api.get('/cursos/ativos');
      const alunoOpts = '<option value="">Selecione o aluno...</option>' + alunosAtivos.map(a => `<option value="${a.id}">${escapeHTML(a.nome)}</option>`).join('');
      document.getElementById('contrato-aluno').innerHTML = alunoOpts;
      document.getElementById('contrato-curso').innerHTML = '<option value="">Selecione o curso...</option>' + cursosAtivos.map(c => `<option value="${c.id}">${escapeHTML(c.nome)}</option>`).join('');
      const filtro = document.getElementById('contrato-filtro-aluno');
      const atual = filtro.value;
      filtro.innerHTML = '<option value="">Selecione um aluno...</option>' + alunosAtivos.map(a => `<option value="${a.id}">${escapeHTML(a.nome)}</option>`).join('');
      if (atual) filtro.value = atual;
    } catch (e) { console.warn('Erro ao carregar opções de contrato:', e.message); }
  },

  async loadContratosByAluno(alunoId) {
    if (!alunoId) { renderContratos([], null); return; }
    showSkeleton('contratos-tbody', 8);
    try {
      contratos = await Api.get(`/contratos/aluno/${alunoId}`);
      renderContratos(contratos, alunoId);
    } catch (e) { console.warn(e.message); contratos = []; renderContratos([], alunoId); }
  },

  async saveContrato(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-contrato');
    const orig = btn.innerHTML;
    const diasSemana = Array.from(document.querySelectorAll('#contrato-dias input[name="dia-semana"]:checked')).map(c => c.value);
    if (!diasSemana.length) { showToast('Selecione ao menos um dia da semana.', 'error'); return; }
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      const alunoId = parseInt(document.getElementById('contrato-aluno').value);
      await Api.post('/contratos', {
        alunoId,
        cursoId: parseInt(document.getElementById('contrato-curso').value),
        dataInicio: document.getElementById('contrato-data-inicio').value,
        horasAulasMes: parseInt(document.getElementById('contrato-horas').value),
        diaVencimento: parseInt(document.getElementById('contrato-vencimento').value),
        horaInicio: document.getElementById('contrato-hora-inicio').value,
        horaTermino: document.getElementById('contrato-hora-termino').value,
        diasSemana,
      });
      showToast('Contrato criado com sucesso!');
      document.getElementById('form-contrato').reset();
      const filtro = document.getElementById('contrato-filtro-aluno');
      filtro.value = String(alunoId);
      await this.loadContratosByAluno(alunoId);
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  deleteContrato(id) {
    openModal('Excluir Contrato', `<p class="confirm-text">Deseja realmente <strong>excluir</strong> o contrato #${id}? Esta ação não pode ser desfeita.</p>`, async () => {
      try {
        await Api.delete(`/contratos/${id}`);
        showToast('Contrato excluído com sucesso!');
        closeModal();
        const alunoId = document.getElementById('contrato-filtro-aluno').value;
        await this.loadContratosByAluno(alunoId);
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async downloadContratoPdf(id) {
    try {
      await Api.downloadPdf(`/relatorios/contrato/${id}`, `contrato-${id}.pdf`);
      showToast('PDF gerado com sucesso!');
    } catch (e) { showToast(e.message, 'error'); }
  },

  async loadUsuarios() {
    showSkeleton('usuarios-tbody', 5);
    try {
      usuarios = await Api.get('/usuarios');
      renderUsuarios(usuarios);
    } catch (e) { console.warn(e.message); usuarios = []; renderUsuarios([]); }
  },

  async saveUsuario(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-usuario');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/usuarios', {
        nome: document.getElementById('usuario-nome-input').value.trim(),
        login: document.getElementById('usuario-login').value.trim(),
        senha: document.getElementById('usuario-senha').value,
        perfil: document.getElementById('usuario-perfil').value,
      });
      showToast('Usuário cadastrado com sucesso!');
      document.getElementById('form-usuario').reset();
      await this.loadUsuarios();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  editUsuario(id) {
    const u = usuarios.find(x => x.id === id);
    if (!u) return;
    openModal('Editar Usuário', `
      <div class="form-grid">
        <div class="form-group"><label>Nome</label><input type="text" id="edit-usuario-nome" value="${escapeHTML(u.nome)}"></div>
        <div class="form-group"><label>Login</label><input type="text" id="edit-usuario-login" value="${escapeHTML(u.login)}" autocomplete="off"></div>
        <div class="form-group"><label>Senha</label><input type="password" id="edit-usuario-senha" placeholder="Deixe em branco para manter a atual" autocomplete="new-password"></div>
        <div class="form-group"><label>Perfil</label>
          <select id="edit-usuario-perfil">
            <option value="ADMIN" ${u.perfil === 'ADMIN' ? 'selected' : ''}>ADMIN — Administrador</option>
            <option value="USER" ${u.perfil === 'USER' ? 'selected' : ''}>USER — Usuário</option>
          </select>
        </div>
      </div>
    `, async () => {
      try {
        const body = {
          nome: document.getElementById('edit-usuario-nome').value.trim(),
          login: document.getElementById('edit-usuario-login').value.trim(),
          perfil: document.getElementById('edit-usuario-perfil').value,
        };
        const senha = document.getElementById('edit-usuario-senha').value;
        if (senha) body.senha = senha;
        await Api.put(`/usuarios/${id}`, body);
        showToast('Usuário atualizado com sucesso!');
        closeModal(); await this.loadUsuarios();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  deleteUsuario(id) {
    const u = usuarios.find(x => x.id === id);
    const nome = u ? u.nome : `#${id}`;
    openModal('Excluir Usuário', `<p class="confirm-text">Deseja realmente <strong>excluir</strong> o usuário <strong>${escapeHTML(nome)}</strong>? Esta ação não pode ser desfeita.</p>`, async () => {
      try {
        await Api.delete(`/usuarios/${id}`);
        showToast('Usuário excluído com sucesso!');
        closeModal(); await this.loadUsuarios();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadPessoas() {
    showSkeleton('pessoas-tbody', 8);
    try {
      pessoas = await Api.get(`/pessoas/${pessoaFilter}`);
      renderPessoas(pessoas);
    } catch (e) { console.warn(e.message); pessoas = []; renderPessoas([]); }
  },

  async savePessoa(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-pessoa');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/pessoas', {
        nome: document.getElementById('pessoa-nome').value.trim(),
        cpf: document.getElementById('pessoa-cpf').value.trim(),
        email: document.getElementById('pessoa-email').value.trim(),
        telefone: document.getElementById('pessoa-telefone').value.trim(),
        endereco: document.getElementById('pessoa-endereco').value.trim(),
      });
      showToast('Pessoa cadastrada com sucesso!');
      document.getElementById('form-pessoa').reset();
      await this.loadPessoas();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  editPessoa(id) {
    const p = pessoas.find(x => x.id === id);
    if (!p) return;
    openModal('Editar Pessoa', `
      <div class="form-grid">
        <div class="form-group"><label>Nome</label><input type="text" id="edit-pessoa-nome" value="${escapeHTML(p.nome)}"></div>
        <div class="form-group"><label>CPF</label><input type="text" id="edit-pessoa-cpf" value="${escapeHTML(p.cpf)}" maxlength="14"></div>
        <div class="form-group"><label>E-mail</label><input type="email" id="edit-pessoa-email" value="${escapeHTML(p.email)}"></div>
        <div class="form-group"><label>Telefone</label><input type="text" id="edit-pessoa-telefone" value="${escapeHTML(p.telefone)}" maxlength="15"></div>
        <div class="form-group"><label>Endereço</label><input type="text" id="edit-pessoa-endereco" value="${escapeHTML(p.endereco || '')}"></div>
      </div>
    `, async () => {
      try {
        await Api.put(`/pessoas/${id}`, {
          nome: document.getElementById('edit-pessoa-nome').value.trim(),
          cpf: document.getElementById('edit-pessoa-cpf').value.trim(),
          email: document.getElementById('edit-pessoa-email').value.trim(),
          telefone: document.getElementById('edit-pessoa-telefone').value.trim(),
          endereco: document.getElementById('edit-pessoa-endereco').value.trim(),
        });
        showToast('Pessoa atualizada com sucesso!');
        closeModal(); await this.loadPessoas();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  inativarPessoa(id, nome) {
    openModal('Inativar Pessoa', `<p class="confirm-text">Deseja realmente inativar <strong>${nome}</strong>?</p>`, async () => {
      try {
        await Api.put(`/pessoas/${id}/inativar`, {});
        showToast('Pessoa inativada com sucesso!');
        closeModal(); await this.loadPessoas();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  ativarPessoa(id, nome) {
    openModal('Ativar Pessoa', `<p class="confirm-text">Deseja reativar <strong>${nome}</strong>?</p>`, async () => {
      try {
        await Api.put(`/pessoas/${id}/ativar`, {});
        showToast('Pessoa ativada com sucesso!');
        closeModal(); await this.loadPessoas();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadLivros() {
    showSkeleton('livros-tbody', 7);
    try {
      livros = await Api.get(`/livros/${livroFilter}`);
      renderLivros(livros);
    } catch (e) { console.warn(e.message); livros = []; renderLivros([]); }
  },

  async saveLivro(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-livro');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/livros', {
        titulo: document.getElementById('livro-titulo').value.trim(),
        autor: document.getElementById('livro-autor').value.trim(),
        quantidadeTotal: parseInt(document.getElementById('livro-quantidade').value),
      });
      showToast('Livro cadastrado com sucesso!');
      document.getElementById('form-livro').reset();
      await this.loadLivros();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  editLivro(id) {
    const l = livros.find(x => x.id === id);
    if (!l) return;
    openModal('Editar Livro', `
      <div class="form-grid">
        <div class="form-group"><label>Título</label><input type="text" id="edit-livro-titulo" value="${escapeHTML(l.titulo)}"></div>
        <div class="form-group"><label>Autor</label><input type="text" id="edit-livro-autor" value="${escapeHTML(l.autor)}"></div>
        <div class="form-group"><label>Quantidade Total</label><input type="number" id="edit-livro-quantidade" value="${l.quantidadeTotal}" min="1"></div>
      </div>
    `, async () => {
      try {
        await Api.put(`/livros/${id}`, {
          titulo: document.getElementById('edit-livro-titulo').value.trim(),
          autor: document.getElementById('edit-livro-autor').value.trim(),
          quantidadeTotal: parseInt(document.getElementById('edit-livro-quantidade').value),
        });
        showToast('Livro atualizado com sucesso!');
        closeModal(); await this.loadLivros();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  inativarLivro(id, titulo) {
    openModal('Inativar Livro', `<p class="confirm-text">Deseja realmente inativar o livro <strong>${titulo}</strong>?</p>`, async () => {
      try {
        await Api.put(`/livros/${id}/inativar`, {});
        showToast('Livro inativado com sucesso!');
        closeModal(); await this.loadLivros();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  ativarLivro(id, titulo) {
    openModal('Ativar Livro', `<p class="confirm-text">Deseja reativar o livro <strong>${titulo}</strong>?</p>`, async () => {
      try {
        await Api.put(`/livros/${id}/ativar`, {});
        showToast('Livro ativado com sucesso!');
        closeModal(); await this.loadLivros();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadEmprestimos() {
    showSkeleton('emprestimos-tbody', 8);
    try {
      const endpoint = emprestimoFilter === 'atrasados' ? '/emprestimos/atrasados' : '/emprestimos';
      emprestimos = await Api.get(endpoint);
      renderEmprestimos(emprestimos);
    } catch (e) { console.warn(e.message); emprestimos = []; renderEmprestimos([]); }
  },

  async loadEmprestimosAtrasados() {
    showSkeleton('emprestimos-tbody', 8);
    try {
      emprestimos = await Api.get('/emprestimos/atrasados');
      renderEmprestimos(emprestimos);
    } catch (e) { console.warn(e.message); emprestimos = []; renderEmprestimos([]); }
  },

  async saveEmprestimo(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-salvar-emprestimo');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Salvando...'; btn.disabled = true;
    try {
      await Api.post('/emprestimos', {
        pessoaId: parseInt(document.getElementById('emprestimo-pessoa').value),
        livroId: parseInt(document.getElementById('emprestimo-livro').value),
        dataPrevistaDevolucao: document.getElementById('emprestimo-devolucao').value,
      });
      showToast('Empréstimo registrado com sucesso!');
      document.getElementById('form-emprestimo').reset();
      await this.loadEmprestimos();
      await this.loadBibliotecaSelectOptions();
    } catch (e) { showToast(e.message, 'error'); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
  },

  devolverEmprestimo(id) {
    openModal('Devolver Livro', `<p class="confirm-text">Confirmar a devolução do empréstimo #${id}?</p>`, async () => {
      try {
        await Api.put(`/emprestimos/${id}/devolver`, {});
        showToast('Devolução registrada com sucesso!');
        closeModal(); await this.loadEmprestimos();
      } catch (e) { showToast(e.message, 'error'); }
    });
  },

  async loadBibliotecaSelectOptions() {
    try {
      const pessoasAtivas = await Api.get('/pessoas/ativos');
      const livrosAtivos = await Api.get('/livros/ativos');
      document.getElementById('emprestimo-pessoa').innerHTML = '<option value="">Selecione a pessoa...</option>' + pessoasAtivas.map(p => `<option value="${p.id}">${escapeHTML(p.nome)}</option>`).join('');
      document.getElementById('emprestimo-livro').innerHTML = '<option value="">Selecione o livro...</option>' + livrosAtivos.map(l => `<option value="${l.id}">${escapeHTML(l.titulo)}</option>`).join('');
    } catch (e) { console.warn('Erro ao carregar opções da biblioteca:', e.message); }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.page));
  });

  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const open = document.getElementById('sidebar').classList.contains('open');
    open ? closeSidebar() : openSidebar();
  });
  document.getElementById('sidebar-backdrop').addEventListener('click', closeSidebar);

  document.getElementById('form-aluno').addEventListener('submit', e => App.saveAluno(e));
  document.getElementById('form-curso').addEventListener('submit', e => App.saveCurso(e));
  document.getElementById('form-registro').addEventListener('submit', e => App.saveRegistro(e));
  document.getElementById('form-contrato').addEventListener('submit', e => App.saveContrato(e));
  document.getElementById('form-usuario').addEventListener('submit', e => App.saveUsuario(e));
  document.getElementById('form-pessoa').addEventListener('submit', e => App.savePessoa(e));
  document.getElementById('form-livro').addEventListener('submit', e => App.saveLivro(e));
  document.getElementById('form-emprestimo').addEventListener('submit', e => App.saveEmprestimo(e));

  document.getElementById('contrato-filtro-aluno').addEventListener('change', e => App.loadContratosByAluno(e.target.value));

  document.getElementById('aluno-cpf').addEventListener('input', function () { maskCPF(this); });
  document.getElementById('aluno-telefone').addEventListener('input', function () { maskPhone(this); });
  document.getElementById('pessoa-cpf').addEventListener('input', function () { maskCPF(this); });
  document.getElementById('pessoa-telefone').addEventListener('input', function () { maskPhone(this); });

  document.getElementById('registro-data').valueAsDate = new Date();
  document.getElementById('emprestimo-devolucao').valueAsDate = new Date();

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('modal-save').addEventListener('click', () => {
    if (modalCallback) modalCallback();
  });

  document.getElementById('aluno-filter-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      document.querySelectorAll('#aluno-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      alunoFilter = e.target.dataset.filter;
      App.loadAlunos();
    }
  });

  document.getElementById('curso-filter-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      document.querySelectorAll('#curso-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      cursoFilter = e.target.dataset.filter;
      App.loadCursos();
    }
  });

  document.getElementById('pessoa-filter-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      document.querySelectorAll('#pessoa-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      pessoaFilter = e.target.dataset.filter;
      App.loadPessoas();
    }
  });

  document.getElementById('livro-filter-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      document.querySelectorAll('#livro-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      livroFilter = e.target.dataset.filter;
      App.loadLivros();
    }
  });

  document.getElementById('emprestimo-filter-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      document.querySelectorAll('#emprestimo-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      emprestimoFilter = e.target.dataset.filter;
      App.loadEmprestimos();
    }
  });

  applyPerfilRestrictions();

  setupTopbar();
  App.loadDashboard();
});