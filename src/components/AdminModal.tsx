import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, UserPlus, Shield, Key, Eye, EyeOff, Trash2, 
  CheckCircle2, X, Search, Crown, Lock, Unlock, Copy, 
  Sparkles, RefreshCw, LogIn, FileDown, Check, AlertCircle, Settings, LogOut
} from 'lucide-react';

export const AdminModal: React.FC = () => {
  const { 
    accounts, 
    deleteAccount, 
    toggleAccountVip, 
    createStudentByAdmin, 
    updateAccountPassword, 
    loginWithCredentials,
    adminPassword,
    setAdminMasterPassword,
    verifyAdminAccess,
    setActiveModal, 
    isAdmin,
    user,
    isEn 
  } = useApp();

  // Admin authentication gate state (auto-unlocked if user is already logged in as Admin)
  const [isUnlocked, setIsUnlocked] = useState(() => Boolean(isAdmin));
  const [adminInputEmail, setAdminInputEmail] = useState('');
  const [adminInputPass, setAdminInputPass] = useState('');
  const [showAdminPass, setShowAdminPass] = useState(false);
  const [adminGateError, setAdminGateError] = useState('');

  // Dashboard navigation
  const [activeTab, setActiveTab] = useState<'list' | 'create' | 'settings'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Create student state
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('123456');
  const [newIsVip, setNewIsVip] = useState(true);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [lastCreated, setLastCreated] = useState<{ email: string; pass: string; name: string; isVip: boolean } | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  // Edit student password state
  const [editingEmail, setEditingEmail] = useState<string | null>(null);
  const [tempPassword, setTempPassword] = useState('');
  const [visiblePasswords, setVisiblePasswords] = useState<Record<string, boolean>>({});

  // Change Admin Master Password state
  const [newAdminMasterPass, setNewAdminMasterPass] = useState('');
  const [masterPassChangeSuccess, setMasterPassChangeSuccess] = useState(false);

  const closeModal = () => setActiveModal(null);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminGateError('');

    if (!adminInputEmail.trim()) {
      setAdminGateError(isEn ? 'Please enter the admin login/email.' : 'Digite o e-mail do administrador.');
      return;
    }

    if (!adminInputPass.trim()) {
      setAdminGateError(isEn ? 'Please enter the admin password.' : 'Digite a senha do administrador.');
      return;
    }

    const valid = verifyAdminAccess(adminInputEmail.trim(), adminInputPass.trim());
    if (valid) {
      setIsUnlocked(true);
      setAdminGateError('');
    } else {
      setAdminGateError(
        isEn
          ? 'Invalid admin email or password. Access denied.'
          : 'E-mail ou senha de administrador incorretos. Acesso não autorizado.'
      );
    }
  };

  const togglePasswordVisibility = (email: string) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [email]: !prev[email]
    }));
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newPassword.trim()) return;

    const ok = createStudentByAdmin({
      name: newName.trim(),
      email: newEmail.trim(),
      password: newPassword.trim(),
      isVip: newIsVip
    });

    if (ok) {
      setLastCreated({
        name: newName.trim() || newEmail.split('@')[0],
        email: newEmail.trim(),
        pass: newPassword.trim(),
        isVip: newIsVip
      });
      setCreateSuccess(true);
      setNewName('');
      setNewEmail('');
      setNewPassword('123456');
      setTimeout(() => {
        setCreateSuccess(false);
      }, 5000);
    }
  };

  const handleCopyAccessMessage = () => {
    if (!lastCreated) return;
    const msg = isEn
      ? `🐶 *Your Portal Pet Access:*\n🔗 Link: ${window.location.origin}\n📧 Email: ${lastCreated.email}\n🔑 Password: ${lastCreated.pass}\n⭐ Plan: ${lastCreated.isVip ? 'VIP Full Access' : 'Basic Student'}\n\nWelcome!`
      : `🐶 *Seu Acesso ao Portal Pet:*\n🔗 Link: ${window.location.origin}\n📧 E-mail: ${lastCreated.email}\n🔑 Senha: ${lastCreated.pass}\n⭐ Plano: ${lastCreated.isVip ? 'VIP Completo Liberado' : 'Aluno Base'}\n\nSeja muito bem-vindo(a)!`;

    navigator.clipboard.writeText(msg);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  const handleSavePassword = (email: string) => {
    if (!tempPassword.trim()) return;
    updateAccountPassword(email, tempPassword);
    setEditingEmail(null);
    setTempPassword('');
  };

  const handleSimulateLogin = (email: string, pass: string) => {
    loginWithCredentials(email, pass);
    closeModal();
  };

  const handleChangeAdminMasterPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminMasterPass.trim()) return;
    setAdminMasterPassword(newAdminMasterPass.trim());
    setMasterPassChangeSuccess(true);
    setNewAdminMasterPass('');
    setTimeout(() => setMasterPassChangeSuccess(false), 4000);
  };

  const handleExportCSV = () => {
    const headers = 'Nome,Email,Senha,Plano,Data\n';
    const rows = accounts.map(a => 
      `"${a.name}","${a.email}","${a.password}","${a.isVip ? 'VIP' : 'Básico'}","${a.createdAt || '2026'}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `alunos_portal_pet_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredAccounts = accounts.filter(acc => {
    const query = searchTerm.toLowerCase();
    return (
      acc.email.toLowerCase().includes(query) ||
      acc.name.toLowerCase().includes(query)
    );
  });

  const vipCount = accounts.filter(a => a.isVip).length;
  const basicCount = accounts.length - vipCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        id="admin-panel-modal"
        className="relative w-full max-w-4xl bg-gradient-to-b from-[#062420] via-[#051c19] to-[#031412] rounded-3xl border border-teal-500/40 shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]"
      >
        
        {/* Top Admin Header */}
        <div className="p-4 sm:p-5 border-b border-teal-700/40 bg-teal-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  {isEn ? 'Admin Dashboard • Student Management' : 'Painel do Administrador • Gestão de Alunos'}
                </h2>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  ADMIN
                </span>
              </div>
              <p className="text-xs text-teal-300">
                {isUnlocked 
                  ? (isEn ? 'Create logins, view student passwords & grant VIP access' : 'Cadastre logins, consulte senhas e libere acessos dos alunos')
                  : (isEn ? 'Owner authentication required to access this area' : 'Autenticação do dono do app necessária para acessar')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isUnlocked && (
              <button
                onClick={() => setIsUnlocked(false)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-teal-900/60 hover:bg-teal-800 text-teal-200 text-xs font-bold border border-teal-600/40 transition-colors cursor-pointer"
                title={isEn ? "Lock Admin Panel" : "Bloquear / Sair do Admin"}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isEn ? 'Lock' : 'Bloquear'}</span>
              </button>
            )}
            <button
              onClick={closeModal}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              title="Fechar Janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 🔒 LOCK SCREEN IF NOT AUTHENTICATED AS ADMIN */}
        {!isUnlocked ? (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center max-w-md mx-auto w-full my-auto space-y-5">
            
            <div className="w-16 h-16 rounded-3xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-2xl shadow-inner">
              <Lock className="w-8 h-8 text-amber-400" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {isEn ? 'Restricted Admin Access' : 'Acesso Restrito ao Administrador'}
              </h3>
              <p className="text-xs text-teal-200/80">
                {isEn 
                  ? 'Please enter the admin login and password to manage student accounts.' 
                  : 'Digite o login e senha do dono do app para gerenciar e cadastrar alunos.'}
              </p>
            </div>

            {adminGateError && (
              <div className="w-full p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-semibold flex items-center gap-2 animate-shake">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{adminGateError}</span>
              </div>
            )}

            {/* Admin Login Form */}
            <form onSubmit={handleAdminLogin} className="w-full space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-teal-200 mb-1">
                  {isEn ? 'Admin Email / Login:' : 'E-mail / Login do Administrador:'}
                </label>
                <div className="relative">
                  <input
                    id="input-admin-gate-email"
                    type="text"
                    value={adminInputEmail}
                    onChange={e => setAdminInputEmail(e.target.value)}
                    placeholder="admin@portalpet.com"
                    className="w-full bg-[#021311] border border-teal-700/60 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-200 mb-1">
                  {isEn ? 'Admin Password:' : 'Senha do Administrador:'}
                </label>
                <div className="relative">
                  <input
                    id="input-admin-gate-pass"
                    type={showAdminPass ? 'text' : 'password'}
                    value={adminInputPass}
                    onChange={e => setAdminInputPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#021311] border border-teal-700/60 rounded-xl pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
                    required
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowAdminPass(prev => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-teal-400 hover:text-white cursor-pointer"
                    title={showAdminPass ? 'Ocultar' : 'Ver'}
                  >
                    {showAdminPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                id="btn-admin-gate-submit"
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm py-3 px-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Unlock className="w-4 h-4" />
                <span>{isEn ? 'UNLOCK ADMIN DASHBOARD' : 'ACESSAR PAINEL ADMINISTRATIVO'}</span>
              </button>
            </form>

          </div>
        ) : (
          /* 🔓 UNLOCKED ADMIN DASHBOARD */
          <>
            {/* Stats Strip & Navigation Tabs */}
            <div className="px-4 sm:px-6 py-3 bg-[#02100e]/80 border-b border-teal-800/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  id="tab-admin-students"
                  onClick={() => setActiveTab('list')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === 'list'
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-white/5 text-teal-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>{isEn ? 'Student List' : 'Lista de Alunos'}</span>
                  <span className="bg-black/30 text-white px-1.5 py-0.2 rounded-full text-[10px]">
                    {accounts.length}
                  </span>
                </button>

                <button
                  id="tab-admin-create"
                  onClick={() => setActiveTab('create')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === 'create'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md'
                      : 'bg-white/5 text-amber-300 hover:bg-white/10 hover:text-amber-200'
                  }`}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{isEn ? '+ Add New Student' : '+ Cadastrar Novo Aluno'}</span>
                </button>

                <button
                  id="tab-admin-settings"
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === 'settings'
                      ? 'bg-teal-700 text-white shadow-md'
                      : 'bg-white/5 text-teal-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>{isEn ? 'Master Password' : 'Senha do Admin'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-teal-300">
                  <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-400/30">
                    <Crown className="w-3 h-3" /> {vipCount} VIP
                  </span>
                  <span className="inline-flex items-center gap-1 bg-teal-800/40 text-teal-200 px-2 py-0.5 rounded-lg border border-teal-600/30">
                    <Lock className="w-3 h-3" /> {basicCount} Base
                  </span>
                </div>

                <button
                  onClick={handleExportCSV}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-teal-900/60 hover:bg-teal-800 text-teal-200 text-xs font-bold border border-teal-600/40 transition-colors cursor-pointer"
                  title="Baixar lista em CSV"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">CSV</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              
              {/* TAB 1: LIST OF STUDENTS */}
              {activeTab === 'list' && (
                <div className="space-y-4">
                  
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-teal-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      placeholder={isEn ? 'Search students by name or email...' : 'Buscar alunos por nome ou e-mail...'}
                      className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-teal-700/50 rounded-xl text-sm text-white placeholder-teal-500/70 focus:outline-none focus:border-amber-400"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-teal-400 hover:text-white"
                      >
                        Limpar
                      </button>
                    )}
                  </div>

                  {/* Students Table / Grid */}
                  <div className="space-y-2.5">
                    {filteredAccounts.length === 0 ? (
                      <div className="text-center py-10 text-teal-400">
                        <p className="text-sm">Nenhum aluno encontrado para "{searchTerm}".</p>
                      </div>
                    ) : (
                      filteredAccounts.map((account) => {
                        const isPasswordVisible = visiblePasswords[account.email];
                        const isEditing = editingEmail === account.email;

                        return (
                          <div
                            key={account.email}
                            className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                              account.isVip
                                ? 'bg-gradient-to-r from-teal-950/80 to-[#041a17]/90 border-amber-400/30'
                                : 'bg-black/30 border-teal-800/40'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              
                              {/* Left: User Info */}
                              <div className="flex items-start gap-3">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                                  account.isVip
                                    ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950'
                                    : 'bg-teal-800 text-teal-200'
                                }`}>
                                  {account.isVip ? '👑' : '🐶'}
                                </div>

                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-bold text-sm text-white">
                                      {account.name}
                                    </span>
                                    {account.isVip ? (
                                      <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-black px-2 py-0.5 rounded-full">
                                        <Crown className="w-2.5 h-2.5" /> VIP COMPLETO
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        <Lock className="w-2.5 h-2.5" /> ALUNO BASE
                                      </span>
                                    )}
                                  </div>

                                  <div className="text-xs text-teal-300 font-mono mt-0.5">
                                    {account.email}
                                  </div>

                                  {/* Password Row */}
                                  <div className="flex items-center gap-2 mt-1.5 text-xs text-teal-400">
                                    <span className="font-bold text-[11px] text-teal-500">Senha:</span>
                                    {isEditing ? (
                                      <div className="flex items-center gap-1.5">
                                        <input
                                          type="text"
                                          value={tempPassword}
                                          onChange={e => setTempPassword(e.target.value)}
                                          className="px-2 py-0.5 bg-black/60 border border-teal-500 rounded text-xs text-white w-28 focus:outline-none font-mono"
                                          placeholder="Nova senha"
                                          autoFocus
                                        />
                                        <button
                                          onClick={() => handleSavePassword(account.email)}
                                          className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-bold cursor-pointer"
                                        >
                                          Salvar
                                        </button>
                                        <button
                                          onClick={() => setEditingEmail(null)}
                                          className="px-1.5 py-0.5 text-teal-400 hover:text-white text-[11px] cursor-pointer"
                                        >
                                          Cancelar
                                        </button>
                                      </div>
                                    ) : (
                                      <div className="flex items-center gap-1.5">
                                        <span className="font-mono bg-black/40 px-2 py-0.5 rounded text-amber-200 text-xs">
                                          {isPasswordVisible ? account.password : '••••••'}
                                        </span>
                                        <button
                                          onClick={() => togglePasswordVisibility(account.email)}
                                          className="p-1 text-teal-400 hover:text-white cursor-pointer"
                                          title={isPasswordVisible ? 'Ocultar' : 'Ver senha'}
                                        >
                                          {isPasswordVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                        </button>
                                        <button
                                          onClick={() => {
                                            setEditingEmail(account.email);
                                            setTempPassword(account.password);
                                          }}
                                          className="text-[10px] text-teal-300 hover:text-amber-300 underline ml-1 cursor-pointer"
                                        >
                                          Alterar
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Right: Actions */}
                              <div className="flex items-center gap-1.5 self-end sm:self-center">
                                
                                {/* Toggle VIP / Base */}
                                <button
                                  onClick={() => toggleAccountVip(account.email)}
                                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    account.isVip
                                      ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border border-amber-400/40'
                                      : 'bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border border-emerald-500/40'
                                  }`}
                                  title={account.isVip ? 'Tornar Aluno Básico' : 'Liberar VIP Completo'}
                                >
                                  {account.isVip ? (
                                    <>
                                      <Crown className="w-3 h-3 text-amber-300" />
                                      <span>Tornar Base</span>
                                    </>
                                  ) : (
                                    <>
                                      <Unlock className="w-3 h-3 text-emerald-300" />
                                      <span>Liberar VIP</span>
                                    </>
                                  )}
                                </button>

                                {/* Simulate Login */}
                                <button
                                  onClick={() => handleSimulateLogin(account.email, account.password)}
                                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-teal-800/80 hover:bg-teal-700 text-white text-xs font-bold transition-colors cursor-pointer"
                                  title="Entrar no aplicativo como este aluno"
                                >
                                  <LogIn className="w-3 h-3" />
                                  <span>Entrar como</span>
                                </button>

                                {/* Delete Student */}
                                {account.email !== 'admin@portalpet.com' && (
                                  <button
                                    onClick={() => {
                                      if (window.confirm(`Deseja remover o acesso de ${account.email}?`)) {
                                        deleteAccount(account.email);
                                      }
                                    }}
                                    className="p-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 hover:text-red-100 border border-red-800/30 transition-colors cursor-pointer"
                                    title="Excluir Aluno"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}

                              </div>

                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                </div>
              )}

              {/* TAB 2: CREATE NEW STUDENT (ONLY FOR USERS) */}
              {activeTab === 'create' && (
                <div className="max-w-xl mx-auto space-y-5 py-2">
                  
                  <div className="bg-[#02100e] border border-teal-700/40 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2 text-amber-300 font-black text-sm">
                      <UserPlus className="w-4 h-4" />
                      <span>{isEn ? 'Register New Student (Customer Access)' : 'Cadastrar Novo Aluno (Acesso do Cliente)'}</span>
                    </div>
                    <p className="text-xs text-teal-300/80">
                      {isEn 
                        ? 'Create login credentials for your buyers. They will use this email and password to log in.'
                        : 'Crie o login e senha do seu comprador. Ele usará esses dados para entrar no app.'}
                    </p>

                    <form onSubmit={handleCreateStudent} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold text-teal-200 mb-1">
                          {isEn ? 'Student / Pet Name:' : 'Nome do Aluno ou Tutor + Pet:'}
                        </label>
                        <input
                          type="text"
                          value={newName}
                          onChange={e => setNewName(e.target.value)}
                          placeholder="Ex: Fernanda & Bob"
                          className="w-full px-3.5 py-2.5 bg-black/50 border border-teal-700 rounded-xl text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-teal-200 mb-1">
                          {isEn ? 'Student Email (Login):' : 'E-mail de Acesso do Aluno (Login):'} *
                        </label>
                        <input
                          type="email"
                          required
                          value={newEmail}
                          onChange={e => setNewEmail(e.target.value)}
                          placeholder="aluno@email.com"
                          className="w-full px-3.5 py-2.5 bg-black/50 border border-teal-700 rounded-xl text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-teal-200 mb-1">
                          {isEn ? 'Password:' : 'Senha Inicial de Acesso do Aluno:'} *
                        </label>
                        <input
                          type="text"
                          required
                          value={newPassword}
                          onChange={e => setNewPassword(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-black/50 border border-teal-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                        />
                      </div>

                      {/* VIP Toggle Option */}
                      <div className="pt-2">
                        <label className="block text-xs font-bold text-teal-200 mb-1.5">
                          {isEn ? 'Access Level:' : 'Nível do Acesso Liberado:'}
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setNewIsVip(true)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              newIsVip
                                ? 'bg-amber-400/20 border-amber-400 text-amber-200 shadow-md'
                                : 'bg-black/30 border-teal-800 text-teal-400 hover:border-teal-600'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold text-xs">
                              <Crown className="w-3.5 h-3.5 text-amber-400" />
                              <span>VIP COMPLETO</span>
                            </div>
                            <p className="text-[10px] text-teal-300/80 mt-1">
                              Todos os 12 protocolos liberados sem bloqueio.
                            </p>
                          </button>

                          <button
                            type="button"
                            onClick={() => setNewIsVip(false)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              !newIsVip
                                ? 'bg-teal-800/40 border-teal-400 text-white shadow-md'
                                : 'bg-black/30 border-teal-800 text-teal-400 hover:border-teal-600'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold text-xs">
                              <Lock className="w-3.5 h-3.5 text-teal-400" />
                              <span>ALUNO BASE</span>
                            </div>
                            <p className="text-[10px] text-teal-300/80 mt-1">
                              Adeus Otite liberado + travas de upsell nos demais.
                            </p>
                          </button>
                        </div>
                      </div>

                      <button
                        id="btn-admin-create-student"
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 mt-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>CADASTRAR E LIBERAR ACESSO</span>
                      </button>
                    </form>
                  </div>

                  {/* Success & Copy Box */}
                  {lastCreated && (
                    <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl space-y-2.5 animate-scale-up">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-emerald-300 font-black text-xs">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Aluno Cadastrado com Sucesso!</span>
                        </div>

                        <button
                          onClick={handleCopyAccessMessage}
                          className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-lg transition-transform active:scale-95 cursor-pointer shadow-sm"
                        >
                          {copiedText ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedText ? 'Copiado!' : 'Copiar Acesso para WhatsApp'}</span>
                        </button>
                      </div>

                      <div className="p-2.5 bg-black/40 rounded-xl text-xs font-mono text-emerald-200 space-y-1">
                        <div>👤 <strong>Nome:</strong> {lastCreated.name}</div>
                        <div>📧 <strong>Login:</strong> {lastCreated.email}</div>
                        <div>🔑 <strong>Senha:</strong> {lastCreated.pass}</div>
                        <div>⭐ <strong>Plano:</strong> {lastCreated.isVip ? 'VIP Completo' : 'Aluno Base'}</div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* TAB 3: MASTER ADMIN SETTINGS */}
              {activeTab === 'settings' && (
                <div className="max-w-xl mx-auto space-y-5 py-2">
                  <div className="bg-[#02100e] border border-teal-700/40 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2 text-amber-300 font-black text-sm">
                      <Shield className="w-4 h-4" />
                      <span>{isEn ? 'Admin Credentials & Master Password' : 'Configurações de Acesso do Dono / Admin'}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/40 border border-teal-800/60 space-y-2 text-xs">
                      <div>
                        <span className="text-teal-400 block font-bold">E-mail Master do Dono:</span>
                        <span className="font-mono text-white text-sm">admin@portalpet.com</span>
                      </div>
                      <div>
                        <span className="text-teal-400 block font-bold">Senha Master Atual:</span>
                        <span className="font-mono text-amber-300 text-sm font-bold">{adminPassword}</span>
                      </div>
                    </div>

                    {masterPassChangeSuccess && (
                      <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-semibold rounded-xl flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{isEn ? 'Admin password successfully updated!' : 'Senha do administrador alterada com sucesso!'}</span>
                      </div>
                    )}

                    <form onSubmit={handleChangeAdminMasterPassword} className="space-y-3.5 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-teal-200 mb-1">
                          {isEn ? 'Define New Admin Password:' : 'Definir Nova Senha para o Dono do App:'}
                        </label>
                        <input
                          type="text"
                          required
                          value={newAdminMasterPass}
                          onChange={e => setNewAdminMasterPass(e.target.value)}
                          placeholder="Digite a nova senha do admin"
                          className="w-full px-3.5 py-2.5 bg-black/50 border border-teal-700 rounded-xl text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 font-mono"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow transition-transform active:scale-[0.98] cursor-pointer"
                      >
                        {isEn ? 'Save New Admin Password' : 'Salvar Nova Senha do Administrador'}
                      </button>
                    </form>

                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-3 bg-[#020d0b] border-t border-teal-800/40 text-center text-[11px] text-teal-400">
              Dica: Os cadastros de alunos ficam salvos e você pode copiar as mensagens formatadas diretamente para enviar aos seus clientes no WhatsApp.
            </div>
          </>
        )}

      </div>
    </div>
  );
};
