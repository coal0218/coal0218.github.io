/* ================================================================
 * 数据区 —— 你以后只需要改这里！
 * 注意：文件夹 / 文件的名字里不要带空格
 * ================================================================ */

const CONFIG = {
  user: 'root',                     // 提示符里的用户名（root 会用 # 结尾）
  host: 'coalos',                   // 提示符里的电脑名
  nick: 'Coal_0218',                // 昵称
  school: '内蒙古师范大学附属中学',
  identity: '高中生',
  github: 'https://github.com/coal0218',
  typing: true,                     // true = 开机有动画；false = 瞬间显示
};

/* 每次打开网页，随机从这里挑一句座右铭 */
const QUOTES = [
  'Stay hungry, stay foolish. —— Steve Jobs',
  'Talk is cheap. Show me the code. —— Linus Torvalds',
  'The best way to predict the future is to invent it. —— Alan Kay',
  '人生苦短，我用 Python。',
  '代码和人一样，越简单越可靠。',
];

/* 开机时显示的 Linux 风格日志（白色、快速刷过） */
const BOOT_LINES = [
  '[    0.000000] CoalOS 1.0.0 (coal@build) #1 SMP PREEMPT',
  '[    0.000042] CPU: CoalProcessor 9000 (16 cores) @ 4.20GHz',
  '[    0.000128] Memory: 32768MB available',
  '[    0.000512] Command line: BOOT_IMAGE=/boot/vmlinuz-coal root=/dev/nvme0n1p1',
  '[    0.001024] CoalFS: mounted /dev/personality on /home',
  '[    0.002048] usb 1-1: new high-speed USB device number 2 using xhci_hcd',
  '[    0.004096] Loading user profile: Coal_0218 ... [  OK  ]',
  '[    0.008192] Starting network manager ... [  OK  ]',
  '[    0.016384] Initializing curiosity engine ... [  OK  ]',
  '[    0.032768] Mounting /dev/determination ... [  OK  ]',
  '[    0.065536] Starting display manager ... [  OK  ]',
  '[    0.131072] Welcome to CoalOS',
];

/* 头像字符画：Minecraft 煤炭图标（▓ 是煤炭上的亮面，显示为灰色） */
const AVATAR = [
  '          ████████',
  '          ████████████',
  '        ████████▓▓██████',
  '        ████▓▓▓▓▓▓██████',
  '        ████▓▓▓▓▓▓▓▓████████',
  '        ████▓▓▓▓▓▓▓▓▓▓████████',
  '    ██████▓▓▓▓▓▓▓▓██▓▓██████████',
  '    ██████▓▓▓▓▓▓████████████████',
  '    ██████████████████████████████',
  '    ██████████████████████████████',
  '    ██████████████████████████████',
  '        ████████████████████████',
  '        ████████████████████████',
  '          ████████████████████',
  '            ████████',
];

/* 虚拟文件系统：dir = 文件夹，file = 文件；content 数组里一个字符串就是一行 */
const FS = {
  type: 'dir',
  children: {
    '详细信息': { type: 'dir', children: {
      '关于我.txt': { type: 'file', content: [
        '昵称：Coal_0218',
        '学校：内蒙古师范大学附属中学',
        '身份：高中生',
		'生日：2010.02.18',
		'喜欢打游戏，刷视频',
        '',
        '（待补充：生日、MBTI、喜欢的科目……）',
      ]},
      '联系方式.txt': { type: 'file', content: [
        'GitHub：https://github.com/coal0218',
		'邮箱：wcy13171426218@icloud.com',
		'电话：13171426218',
		'B站主页：https://space.bilibili.com/3493281558170456',
		'补充说明：除了微信以外，我的账号名基本都是Coal_0218',
        '',
        '（待补充：邮箱、B站……）',
      ]},
    }},
    '学习': { type: 'dir', children: {
      '成绩单.txt': { type: 'file', content: [
        '（待补充：成绩、排名、获奖情况……）',
      ]},
      '笔记.txt': { type: 'file', content: [
        '（待补充：学习方法、笔记链接……）',
      ]},
    }},
    '爱好': { type: 'dir', children: {
      '爱好.txt': { type: 'file', content: [
        'Minecraft（看我的头像就知道了）',
        '（待补充：编程、音乐、运动……）',
      ]},
    }},
    '其他': { type: 'dir', children: {
      '杂项.txt': { type: 'file', content: [
        '（待补充：想放的任何东西……）',
      ]},
    }},
  },
};

/* rm -rf 彩蛋用的假删库日志 */
const RM_LOG = [
  "removed '/bin/zsh'",
  "removed '/bin/bash'",
  "removed '/etc/passwd'",
  "removed '/etc/hosts'",
  "removed '/usr/bin/open'",
  "removed '/usr/lib/libSystem.dylib'",
  "removed '/System/Library/CoreServices/Finder.app'",
  "removed '/System/Library/CoreServices/Dock.app'",
  "removed '/home/root/.zshrc'",
  "removed '/home/root/.minecraft/saves/玩了三年的存档'",
  "removed '/home/root/暑假作业_final.docx'",
  "removed '/home/root/暑假作业_final_v2.docx'",
  "removed '/home/root/暑假作业_final_v2_真的最终版.docx'",
  "removed '/var/log/system.log'",
  "removed '/opt/homebrew/bin/node'",
  "removed '/usr/local/lib/node_modules'",
  "rm: cannot remove '/proc/cpuinfo': Operation not permitted",
  "rm: cannot remove '/proc/meminfo': Operation not permitted",
  "removed '/dev/nvme0n1p1'",
  "removed '/boot/vmlinuz-coal'",
  "removed '/boot/initramfs-coal.img'",
  "removed '/lib/modules/6.6.6-coal/kernel/drivers/net/e1000.ko'",
  "removed '/usr/share/zoneinfo/Asia/Shanghai'",
  "removed '/usr/share/fonts/PingFang.ttc'",
  "removed '/Library/Preferences/com.apple.dock.plist'",
  "removed '/sbin/shutdown'",
  "removed '/sbin/reboot'",
  "rm: cannot remove '/sys/kernel/security': Operation not permitted",
  "removed '/tmp/不开学的证据.bak'",
  "removed '/root/个人主页/index.html'",
  "removed '/root/个人主页/style.css'",
  "removed '/root/个人主页/terminal.js'",
  "rm: cannot remove '/dev/null': 它本来就是空的",
  "removed '/'",
];

/* ================================================================
 * 终端引擎（一般不用改）
 * ================================================================ */

const term = document.getElementById('term-body');
const terminalEl = document.getElementById('terminal');
const titleText = document.getElementById('titlebar-text');
let cwd = [];               // 当前路径，例如 ['学习']
const history = [];         // 命令历史（按 ↑ 翻）
let hIdx = 0;
let currentInput = null;
let crashing = false;       // rm -rf 彩蛋触发后为 true

const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const linkify = s => s.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');

/* 输出一行纯文本 */
function print(text = '', cls = '') {
  const d = document.createElement('div');
  d.className = cls ? `line ${cls}` : 'line';
  d.textContent = text === '' ? ' ' : text;
  term.appendChild(d);
}

/* 输出一行 HTML（用于彩色信息和链接） */
function printHTML(html, cls = '') {
  const d = document.createElement('div');
  d.className = cls ? `line ${cls}` : 'line';
  d.innerHTML = html === '' ? ' ' : html;
  term.appendChild(d);
}

/* 按路径段数组找到对应节点 */
function nodeAt(segs) {
  let n = FS;
  for (const s of segs) {
    if (n.type !== 'dir' || !n.children || !(s in n.children)) return null;
    n = n.children[s];
  }
  return n;
}

/* 解析路径（支持 .. 返回上级、~ 回家、/ 开头的绝对路径） */
function resolve(p) {
  const base = (p.startsWith('/') || p.startsWith('~')) ? [] : [...cwd];
  for (const seg of p.replace(/^~/, '').split('/')) {
    if (!seg || seg === '.') continue;
    if (seg === '..') { if (base.length) base.pop(); }
    else base.push(seg);
  }
  return base;
}

/* ---------------- 命令 ---------------- */

function cmdLs() {
  const n = nodeAt(cwd);
  const row = document.createElement('div');
  row.className = 'line ls-row';
  for (const [name, child] of Object.entries(n.children)) {
    const s = document.createElement('span');
    s.textContent = child.type === 'dir' ? name + '/' : name;
    s.className = 'clickable ' + (child.type === 'dir' ? 'dir' : 'file');
    s.dataset.name = name;
    s.dataset.type = child.type;
    row.appendChild(s);
  }
  term.appendChild(row);
}

function cmdCd(arg) {
  if (!arg || arg === '~') { cwd = []; return; }
  const segs = resolve(arg);
  const n = nodeAt(segs);
  if (!n) return print(`cd: no such file or directory: ${arg}`, 'err');
  if (n.type !== 'dir') return print(`cd: not a directory: ${arg}`, 'err');
  cwd = segs;
}

function cmdCat(arg) {
  if (!arg) return print('用法：cat 文件名', 'err');
  const n = nodeAt(resolve(arg));
  if (!n) return print(`cat: ${arg}: No such file or directory`, 'err');
  if (n.type === 'dir') return print(`cat: ${arg}: Is a directory`, 'err');
  n.content.forEach(l => printHTML(linkify(esc(l))));
}

function cmdHelp() {
  [
    '可用命令：',
    '  ls        看看当前文件夹里有什么',
    '  cd 名字   进入文件夹（cd .. 返回上一级）',
    '  cat 文件  查看文件内容',
    '  clear     清屏',
    '  help      再看一遍这个帮助',
    '',
    '小提示：直接用鼠标点击文件夹 / 文件，效果一样；',
    '右下角的小圆盘可以切换主题配色。',
  ].forEach(l => print(l));
}

/* 执行命令；返回 true 表示进入崩溃流程（不再出新提示符） */
function run(raw) {
  const line = raw.trim();
  if (!line) return false;
  history.push(line);
  hIdx = history.length;

  /* 彩蛋：sudo rm -rf / */
  if (/^sudo\s+rm\s+-rf\s+\/\*?$/.test(line)) {
    crashSequence();
    return true;
  }

  const [cmd, ...rest] = line.split(/\s+/);
  const arg = rest.join(' ');
  switch (cmd) {
    case 'ls':     cmdLs(); break;
    case 'cd':     cmdCd(arg); break;
    case 'cat':    cmdCat(arg); break;
    case 'help':   cmdHelp(); break;
    case 'clear':  term.innerHTML = ''; break;
    case 'pwd':    print('/' + cwd.join('/')); break;
    case 'whoami': print(CONFIG.user); break;
    case 'rm':
      if (/-rf?\s+\/\*?$/.test(arg)) {
        print("rm: cannot remove '/': Permission denied", 'err');
        print('（也许……在命令前面加上 sudo 试试？）', 'dim');
      } else {
        print(`rm: cannot remove '${arg}': Operation not permitted`, 'err');
      }
      break;
    case 'sudo':   print(`sudo: ${rest[0] || ''}: command not found`, 'err'); break;
    default:       print(`zsh: command not found: ${cmd}`, 'err');
  }
  return false;
}

/* ---------------- 输入行 ---------------- */

function newPrompt() {
  const dir = cwd.length ? cwd[cwd.length - 1] : '~';
  const symbol = CONFIG.user === 'root' ? '#' : '%';
  titleText.textContent = `${CONFIG.user}@${CONFIG.host}: ${dir} — zsh`;

  const line = document.createElement('div');
  line.className = 'line input-line';

  const p = document.createElement('span');
  p.className = 'prompt';
  p.innerHTML =
    `<span class="p-user">${esc(CONFIG.user)}</span>` +
    `<span class="p-dim">@</span>` +
    `<span class="p-host">${esc(CONFIG.host)}</span> ` +
    `<span class="p-path">${esc(dir)}</span> ${symbol}`;

  const input = document.createElement('input');
  input.autocomplete = 'off';
  input.autocapitalize = 'off';
  input.spellcheck = false;
  input.addEventListener('keydown', onKey);

  line.appendChild(p);
  line.appendChild(input);
  term.appendChild(line);

  term.scrollTop = term.scrollHeight;
  currentInput = input;
  input.focus();
}

/* 回车或点击后，把当前输入行定格成普通文字 */
function freezeInput(text) {
  if (!currentInput) return;
  const s = document.createElement('span');
  s.textContent = text;
  currentInput.replaceWith(s);
  currentInput = null;
}

function onKey(e) {
  const input = e.target;
  if (e.key === 'Enter') {
    const cmd = input.value;
    freezeInput(cmd);
    const crashed = run(cmd);
    if (!crashed) newPrompt();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (hIdx > 0) input.value = history[--hIdx];
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (hIdx < history.length - 1) input.value = history[++hIdx];
    else { hIdx = history.length; input.value = ''; }
  }
}

/* 点击：点文件夹 = cd 进去并列出内容，点文件 = cat 查看 */
term.addEventListener('click', e => {
  if (crashing) return;
  const t = e.target.closest('.clickable');
  if (t) {
    const cmd = (t.dataset.type === 'dir' ? 'cd ' : 'cat ') + t.dataset.name;
    freezeInput(cmd);
    run(cmd);
    if (t.dataset.type === 'dir') cmdLs();
    newPrompt();
    return;
  }
  if (window.getSelection().toString()) return; // 用户正在选中文字，不抢焦点
  if (currentInput) currentInput.focus();
});

/* ---------------- 主题切换 ---------------- */

const THEMES = ['hacker', 'pro', 'ocean', 'sakura', 'crimson'];
const THEME_NAMES = { hacker: '黑客', pro: 'macOS Pro', ocean: '蓝色海洋', sakura: '粉色樱花', crimson: '绯红' };
const THEME_KEY = 'homepage-theme';

function setTheme(name, announce) {
  THEMES.forEach(t => terminalEl.classList.remove('theme-' + t));
  terminalEl.classList.add('theme-' + name);
  try { localStorage.setItem(THEME_KEY, name); } catch (e) {}
  if (announce) print(`[theme] 已切换到「${THEME_NAMES[name]}」`, 'dim');
}

let savedTheme = null;
try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
if (savedTheme && THEMES.includes(savedTheme) && savedTheme !== 'hacker') setTheme(savedTheme, false);

document.getElementById('theme-btn').addEventListener('click', e => {
  e.stopPropagation();
  if (crashing) return;
  const cur = THEMES.find(t => terminalEl.classList.contains('theme-' + t));
  setTheme(THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length], true);
});

/* ---------------- rm -rf 彩蛋 ---------------- */

/* 在 24x24 的画布上画像素风的红圈 × ，放大后保持锐利方形边缘 */
function drawCrashIcon() {
  const cv = document.getElementById('crash-canvas');
  const ctx = cv.getContext('2d');
  const N = 24, cx = (N - 1) / 2, cy = (N - 1) / 2, R = 10.5;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = x - cx, dy = y - cy;
      if (Math.hypot(dx, dy) > R) continue;
      const ax = Math.abs(dx), ay = Math.abs(dy);
      const onX = Math.abs(ax - ay) <= 1 && ax >= 2 && ax <= 7;
      ctx.fillStyle = onX ? '#200000' : '#e8112d';
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

/* 窗口时不时抽搐一下（glitch / 故障艺术效果） */
function startGlitch() {
  setInterval(() => {
    if (Math.random() < 0.55) {
      terminalEl.classList.add('glitching');
      setTimeout(() => terminalEl.classList.remove('glitching'), 220);
    }
  }, 400);
}

async function crashSequence() {
  crashing = true;
  await sleep(600);
  print('[sudo] password for root: **********', 'boot');
  await sleep(900);
  for (const l of RM_LOG) {
    print(l, 'err');
    term.scrollTop = term.scrollHeight;
    await sleep(28);
  }
  await sleep(400);
  print('[  996.000042] Kernel panic - not syncing: Attempted to kill init!', 'err');
  print('[  996.000099] Rebooting in 0 seconds...', 'err');
  await sleep(900);

  drawCrashIcon();
  titleText.textContent = `${CONFIG.user}@${CONFIG.host} — zsh（无响应）`;
  document.getElementById('crash').classList.remove('hide');
  startGlitch();
  setTimeout(() => document.getElementById('crash-hint').classList.add('show'), 2500);
}

/* 崩溃后点击任意处 = 刷新页面“重启” */
document.addEventListener('click', () => {
  if (crashing) location.reload();
});

/* ---------------- 开机 ---------------- */

async function boot() {
  /* 第一阶段：Linux 风格开机日志，白色，快速刷过 */
  for (const l of BOOT_LINES) {
    print(l, 'boot');
    term.scrollTop = term.scrollHeight;
    if (CONFIG.typing) await sleep(45);
  }
  if (CONFIG.typing) await sleep(350);
  print('');

  /* 第二阶段：neofetch 风格，左边字符头像，右边个人信息（换成彩色） */
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  const info = [
    `<span class="p-user">${esc(CONFIG.nick)}</span><span class="p-dim">@</span><span class="p-host">${esc(CONFIG.host)}</span>`,
    '<span class="dim">─────────────────</span>',
    `<span class="nf-label">学校：</span>${esc(CONFIG.school)}`,
    `<span class="nf-label">身份：</span>${esc(CONFIG.identity)}`,
    `<span class="nf-label">座右铭：</span>${esc(quote)}`,
    `<span class="nf-label">GitHub：</span>${linkify(esc(CONFIG.github))}`,
  ];
  const AVW = Math.max(...AVATAR.map(l => l.length));
  const rows = Math.max(AVATAR.length, info.length);
  for (let i = 0; i < rows; i++) {
    const art = (AVATAR[i] || '').padEnd(AVW, ' ');
    const txt = info[i] || '';
    /* ▓ 是煤炭的亮面，包一层灰色 span 显示出明暗层次 */
    const artHtml = esc(art).replace(/▓/g, '<span class="coal-shade">▓</span>');
    printHTML(`<span class="boot">${artHtml}</span>  ${txt}`);
    if (CONFIG.typing) await sleep(110);
  }
  if (CONFIG.typing) await sleep(150);
  print('');
  print('输入 help 查看命令；也可以直接用鼠标点击下面的文件夹和文件：', 'hint');
  cmdLs();
  newPrompt();
}

/* ---------------- 新手提示弹窗（每次打开都会弹出） ---------------- */

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('hide');
  boot();   // 关掉弹窗后才开始播放开机动画，保证能看到
});
