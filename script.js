// script.js
// ==================== CẤU HÌNH ====================
const LINK_LOGO = '';

if (LINK_LOGO) {
  try { document.getElementById('logoImg').src = LINK_LOGO; } catch (e) {}
}

// ==================== MD5 ====================
function md5(input) {
  function safeAdd(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }
  function bitRotateLeft(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)); }
  function md5cmn(q, a, b, x, s, t) { return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b); }
  function md5ff(a, b, c, d, x, s, t) { return md5cmn((b & c) | (~b & d), a, b, x, s, t); }
  function md5gg(a, b, c, d, x, s, t) { return md5cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function md5hh(a, b, c, d, x, s, t) { return md5cmn(b ^ c ^ d, a, b, x, s, t); }
  function md5ii(a, b, c, d, x, s, t) { return md5cmn(c ^ (b | ~d), a, b, x, s, t); }
  function binlMD5(x, len) {
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var i, olda, oldb, oldc, oldd;
    var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a; oldb = b; oldc = c; oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda); b = safeAdd(b, oldb);
      c = safeAdd(c, oldc); d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }
  function binl2rstr(input) {
    var i, output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
    }
    return output;
  }
  function rstr2binl(input) {
    var i, output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) output[i] = 0;
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
    }
    return output;
  }
  function rstrMD5(s) { return binl2rstr(binlMD5(rstr2binl(s), s.length * 8)); }
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef', output = '', x, i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt((x >>> 4) & 0x0F) + hexTab.charAt(x & 0x0F);
    }
    return output;
  }
  function str2rstrUTF8(input) { return unescape(encodeURIComponent(input)); }
  return rstr2hex(rstrMD5(str2rstrUTF8(input)));
}
function md5Bytes(bytes) {
  var s = '';
  var chunk = 8192;
  for (var i = 0; i < bytes.length; i += chunk) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + chunk, bytes.length)));
  }
  return md5(s);
}

// ==================== CHUNG ====================
const REQUIRED_FILENAME = 'assetindexer.U6Zffc4YIR3DslNj3cXvYGAqz58~3D';
const BONE_PREFIX = 'bone_';
let fileBytes = null;
let fileBytesBackup = null;
let currentFileName = '';
let modified = false;

function log(msg, type = 'info') {
  try {
    const el = document.getElementById('log');
    const cls = type === 'error' ? 'log-error' :
                type === 'warn'  ? 'log-warn'  :
                type === 'ok'    ? 'log-ok'    : 'log-info';
    el.innerHTML += `\n<span class="${cls}">${msg}</span>`;
    el.scrollTop = el.scrollHeight;
  } catch (e) {}
}
function setStatus(msg, cls = 'wait') {
  try {
    const el = document.getElementById('status');
    el.textContent = msg;
    el.className = 'status ' + cls;
  } catch (e) {}
}

// ==================== VALIDATE TÊN BONE ====================
function isValidBoneName(name) {
  if (typeof name !== 'string') return false;
  if (!name.startsWith(BONE_PREFIX)) return false;
  const rest = name.slice(BONE_PREFIX.length);
  if (rest.length === 0) return false;
  if (/[\x00\r\n\t]/.test(name)) return false;
  return true;
}

function validateBoneLists(oldLines, newLines) {
  const errors = [];
  for (let i = 0; i < oldLines.length; i++) {
    if (!isValidBoneName(oldLines[i])) {
      errors.push(`Dòng ${i + 1} (GỐC): "${oldLines[i]}" — phải bắt đầu bằng "${BONE_PREFIX}" và có tên sau prefix.`);
    }
  }
  for (let i = 0; i < newLines.length; i++) {
    if (!isValidBoneName(newLines[i])) {
      errors.push(`Dòng ${i + 1} (THAY THẾ): "${newLines[i]}" — phải bắt đầu bằng "${BONE_PREFIX}" và có tên sau prefix.`);
    }
  }
  return errors;
}

// ==================== CHỌN FILE ====================
function handleFileSelect(file) {
  if (!file) return;
  if (file.name !== REQUIRED_FILENAME) {
    setStatus('Sai tên file', 'err');
    log(`Tên file không đúng!`, 'error');
    log(`   Yêu cầu: ${REQUIRED_FILENAME}`, 'warn');
    log(`   Bạn chọn: ${file.name}`, 'warn');
    fileBytes = null; fileBytesBackup = null; currentFileName = '';
    updateButtons(false);
    return;
  }
  setStatus('Đang đọc file...', 'wait');
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const buffer = ev.target.result;
      const tempBytes = new Uint8Array(buffer);
      currentFileName = file.name;
      modified = false;

      log(`\nĐã chọn: ${file.name}`, 'ok');
      log(`Kích thước: ${tempBytes.length} bytes`, 'info');

      const found = findBoneNames(tempBytes);
      log(`Tìm thấy ${found.length} chuỗi bone_ trong file`, 'ok');

      if (found.length === 0) {
        setStatus('File không đúng chuẩn bone_', 'err');
        log('File KHÔNG chứa chuỗi nào bắt đầu bằng "bone_".', 'error');
        fileBytes = null; fileBytesBackup = null; currentFileName = '';
        updateButtons(false);
        return;
      }

      fileBytes = tempBytes;
      fileBytesBackup = new Uint8Array(buffer);
      setStatus(`Đã load - ${found.length} bone_`, 'ok');
      updateButtons(true);
    } catch (err) {
      log('Lỗi xử lý file: ' + err.message, 'error');
      setStatus('Lỗi đọc file', 'err');
    }
  };
  reader.onerror = function() { setStatus('Lỗi đọc file', 'err'); log('Lỗi đọc file', 'error'); };
  reader.readAsArrayBuffer(file);
}

document.getElementById('fileInputHex').addEventListener('change', (e) => {
  try { handleFileSelect(e.target.files[0]); } catch (err) { log('Lỗi chọn file: ' + err.message, 'error'); }
});

function updateButtons(enabled) {
  try {
    document.getElementById('btnApplyHex').disabled = !enabled;
    document.getElementById('btnSave').disabled = !enabled;
    document.getElementById('btnSaveOriginal').disabled = !enabled;
  } catch (e) {}
}

// ==================== TÌM TÊN BONE — THEO ĐÚNG THỨ TỰ TRONG FILE ====================
// Trả về mảng { name, start, end } theo ĐÚNG THỨ TỰ BYTE XUẤT HIỆN trong file
// (quét từ offset 0 đến cuối file)
function findBoneNames(bytes) {
  const results = [];
  const len = bytes.length;
  const decoder = new TextDecoder('utf-8');

  let pos = 0;
  while (pos < len - 5) {
    if (bytes[pos] === 0x62 && bytes[pos+1] === 0x6F &&
        bytes[pos+2] === 0x6E && bytes[pos+3] === 0x65 &&
        bytes[pos+4] === 0x5F) {
      let end = pos + 5;
      while (end < len && bytes[end] !== 0x00) end++;
      const name = decoder.decode(bytes.subarray(pos, end));
      if (name.length > 5) {
        results.push({ name, start: pos, end: end });
      }
      pos = end;
    } else {
      pos++;
    }
  }
  return results;
}

function countBoneStrings(bytes) {
  return findBoneNames(bytes).length;
}

// ==================== THAY BONE ====================
function renameBones(bytes, mapping) {
  const found = findBoneNames(bytes);
  log(`Tìm thấy ${found.length} chuỗi bone_ trong file`, 'info');

  let applied = 0;
  let insertedBytes = 0;
  const appliedSet = new Set();

  // Sắp xếp theo start GIẢM DẦN để chèn từ cuối về đầu
  const sorted = found.slice().sort((a, b) => b.start - a.start);

  for (const item of sorted) {
    const oldName = item.name;
    if (!mapping.hasOwnProperty(oldName)) continue;

    const newName = mapping[oldName];
    const oldLen = item.end - item.start;
    const newBytes = new TextEncoder().encode(newName);
    const newLen = newBytes.length;

    if (newLen === oldLen) {
      for (let i = 0; i < newLen; i++) bytes[item.start + i] = newBytes[i];
      log(`  OK (ghi đè) ${oldName} -> ${newName}`, 'ok');
    } else if (newLen < oldLen) {
      for (let i = 0; i < newLen; i++) bytes[item.start + i] = newBytes[i];
      for (let i = newLen; i < oldLen; i++) bytes[item.start + i] = 0x00;
      log(`  OK (ngắn hơn) ${oldName} -> ${newName} (-${oldLen - newLen} byte)`, 'ok');
    } else {
      const extra = newLen - oldLen;
      const newArr = new Uint8Array(bytes.length + extra);
      newArr.set(bytes.subarray(0, item.start), 0);
      newArr.set(newBytes, item.start);
      newArr.set(bytes.subarray(item.end), item.start + newLen);
      bytes = newArr;
      insertedBytes += extra;
      log(`  OK (CHÈN +${extra} byte) ${oldName} -> ${newName}  [file: ${bytes.length} bytes]`, 'warn');
    }

    applied++;
    appliedSet.add(oldName);
  }

  let notFound = 0;
  for (const oldName in mapping) {
    if (!appliedSet.has(oldName)) {
      log(`  KHÔNG TÌM THẤY: ${oldName}`, 'warn');
      notFound++;
    }
  }

  if (insertedBytes > 0) {
    log(`\n⚠ Đã CHÈN TỔNG CỘNG ${insertedBytes} byte vào file.`, 'warn');
    log(`   File mới: ${bytes.length} bytes (gốc: ${fileBytesBackup.length} bytes).`, 'warn');
    log(`   LƯU Ý: File AssetBundle có offset cố định — chèn byte có thể làm HỎNG file. Test kỹ.`, 'warn');
  }

  return { applied, notFound, total: found.length, insertedBytes, newBytes: bytes };
}

function updateCounts() {
  const oldLines = document.getElementById('listOld').value.split(/\r?\n/).filter(l => l.trim() !== '');
  const newLines = document.getElementById('listNew').value.split(/\r?\n/).filter(l => l.trim() !== '');
  document.getElementById('countOld').textContent = oldLines.length;
  document.getElementById('countNew').textContent = newLines.length;
}
document.getElementById('listOld').addEventListener('input', updateCounts);
document.getElementById('listNew').addEventListener('input', updateCounts);

document.getElementById('btnApplyHex').addEventListener('click', () => {
  try {
    if (!fileBytes) { log('Chưa chọn file!', 'warn'); return; }
    const oldText = document.getElementById('listOld').value;
    const newText = document.getElementById('listNew').value;
    const oldLines = oldText.split(/\r?\n/).map(l => l.trim()).filter(l => l !== '');
    const newLines = newText.split(/\r?\n/).map(l => l.trim()).filter(l => l !== '');

    if (oldLines.length === 0) { log('Chưa ghi tên bone gốc!', 'warn'); return; }
    if (newLines.length === 0) { log('Chưa ghi tên bone thay thế!', 'warn'); return; }
    if (oldLines.length !== newLines.length) {
      log(`Số dòng không khớp: trên ${oldLines.length} dòng, dưới ${newLines.length} dòng!`, 'error');
      setStatus('Số dòng không khớp', 'err');
      return;
    }

    const errors = validateBoneLists(oldLines, newLines);
    if (errors.length > 0) {
      log(`\nPhát hiện ${errors.length} tên bone không hợp lệ:`, 'error');
      for (const err of errors) log('  ' + err, 'error');
      setStatus('Tên bone không hợp lệ', 'err');
      return;
    }

    const seen = new Map();
    const duplicates = [];
    for (let i = 0; i < oldLines.length; i++) {
      if (seen.has(oldLines[i])) {
        duplicates.push(`"${oldLines[i]}" (dòng ${seen.get(oldLines[i])} và ${i + 1})`);
      } else {
        seen.set(oldLines[i], i + 1);
      }
    }
    if (duplicates.length > 0) {
      log(`\nTên bone GỐC bị trùng:`, 'error');
      for (const d of duplicates) log('  ' + d, 'error');
      setStatus('Tên gốc bị trùng', 'err');
      return;
    }

    const mapping = {};
    for (let i = 0; i < oldLines.length; i++) {
      const o = oldLines[i];
      const n = newLines[i];
      if (o === n) continue;
      mapping[o] = n;
    }
    const keys = Object.keys(mapping);
    if (keys.length === 0) { log('Không có cặp nào cần thay (tên giống nhau hết)!', 'warn'); return; }

    let longerCount = 0;
    const enc = new TextEncoder();
    for (const o in mapping) {
      if (enc.encode(mapping[o]).length > enc.encode(o).length) longerCount++;
    }
    if (longerCount > 0) {
      log(`\n⚠ CẢNH BÁO: ${longerCount} tên mới DÀI HƠN tên cũ.`, 'warn');
      log(`   Tool sẽ CHÈN byte vào file. File sẽ dài ra.`, 'warn');
      log(`   File AssetBundle có offset cố định → có thể bị HỎNG. Test kỹ.`, 'warn');
    }

    log(`\nBắt đầu thay ${keys.length} bone...`, 'info');
    const result = renameBones(fileBytes, mapping);
    fileBytes = result.newBytes;

    log(`\nKết quả: ${result.applied} đã thay, ${result.notFound} không tìm thấy`, 'ok');
    if (result.insertedBytes > 0) {
      log(`Đã chèn ${result.insertedBytes} byte. Kích thước file mới: ${fileBytes.length} bytes.`, 'warn');
      setStatus(`Đã thay ${result.applied} bone (+${result.insertedBytes} byte)`, 'warn');
    } else {
      setStatus(`Đã thay ${result.applied} bone`, 'ok');
    }
    modified = true;
  } catch (err) { log('Lỗi thay bone: ' + err.message, 'error'); }
});

// ==================== CHECKSUM + XUẤT FILE ====================
function fixChecksum() {
  const cabPattern = [0x43, 0x41, 0x42, 0x2D];
  let cabPos = -1;
  for (let i = 0; i < fileBytes.length - 4; i++) {
    if (fileBytes[i] === cabPattern[0] && fileBytes[i+1] === cabPattern[1] &&
        fileBytes[i+2] === cabPattern[2] && fileBytes[i+3] === cabPattern[3]) {
      cabPos = i; break;
    }
  }
  if (cabPos === -1) { log('Khong tim thay CAB-, bo qua checksum', 'warn'); return; }
  const start = cabPos + 4;
  const end = start + 32;
  if (end > fileBytes.length) { log('Checksum vuot qua file', 'warn'); return; }
  for (let i = start; i < end; i++) fileBytes[i] = 0x30;
  const hash = md5Bytes(fileBytes).toUpperCase();
  const hashBytes = new TextEncoder().encode(hash);
  for (let i = 0; i < 32 && i < hashBytes.length; i++) fileBytes[start + i] = hashBytes[i];
  log(`Da sua checksum: ${hash}`, 'ok');
}

function downloadFile(useBackup = false) {
  try {
    const bytes = useBackup ? fileBytesBackup : fileBytes;
    if (!bytes) { log('Khong co du lieu de chia se', 'error'); return; }
    if (!useBackup) fixChecksum();
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    const file = new File([blob], currentFileName, { type: 'application/octet-stream' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      log('Dang mo bang chia se...', 'info');
      navigator.share({ files: [file], title: 'UMA Asset da chinh', text: currentFileName })
        .then(() => log(`Da chia se file: ${currentFileName}`, 'ok'))
        .catch((err) => {
          if (err.name === 'AbortError') log('Ban da huy chia se', 'warn');
          else { log(`Loi share: ${err.message}`, 'warn'); try { fallbackDownload(bytes, useBackup); } catch (e) { log(`Fallback loi: ${e.message}`, 'error'); } }
        });
      return;
    }
    log('Trinh duyet khong ho tro Share, dung cach tai thuong', 'info');
    fallbackDownload(bytes, useBackup);
  } catch (err) { log(`Loi xuat file: ${err.message}`, 'error'); }
}
function fallbackDownload(bytes, useBackup) {
  try {
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    const reader = new FileReader();
    reader.onload = function() {
      try {
        const dataUrl = reader.result;
        const link = document.getElementById('downloadLink');
        link.href = dataUrl;
        link.download = currentFileName;
        const evt = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
        link.dispatchEvent(evt);
        log(`Da tai file: ${currentFileName}${useBackup ? ' (ban goc)' : ''}`, 'ok');
      } catch (e) { log(`Loi tai file: ${e.message}`, 'error'); }
    };
    reader.onerror = function() { log('Loi doc file', 'error'); };
    reader.readAsDataURL(blob);
  } catch (err) { log(`Loi fallback: ${err.message}`, 'error'); }
}

document.getElementById('btnSave').addEventListener('click', () => {
  if (!modified) { log('Chua co thay doi!', 'warn'); return; }
  downloadFile(false);
});
document.getElementById('btnSaveOriginal').addEventListener('click', () => downloadFile(true));

// ==================== NÚT QUÉT BONE THEO ĐÚNG THỨ TỰ TRONG FILE ====================
// Đây là nút QUAN TRỌNG: quét file, lấy bone theo ĐÚNG thứ tự byte trong file,
// KHÔNG sắp xếp alphabet, KHÔNG tự bịa
document.getElementById('btnFillDemo').addEventListener('click', () => {
  try {
    if (!fileBytes) {
      log('Chưa chọn file! Hãy chọn file assetindexer trước rồi bấm nút này.', 'warn');
      return;
    }

    const found = findBoneNames(fileBytes);
    if (found.length === 0) {
      log('Không tìm thấy bone nào trong file.', 'warn');
      return;
    }

    // Lấy TẤT CẢ tên bone THEO ĐÚNG THỨ TỰ XUẤT HIỆN TRONG FILE
    // (giữ nguyên thứ tự, kể cả trùng tên — vì file có thể có nam/nữ lặp)
    const orderedNames = found.map(it => it.name);

    // Đổ vào ô GỐC — ĐÚNG THỨ TỰ TRONG FILE
    document.getElementById('listOld').value = orderedNames.join('\n');

    // Tự động tạo tên mới (thêm _new) — cùng thứ tự
    document.getElementById('listNew').value = orderedNames.map(n => n + '_new').join('\n');

    updateCounts();

    log(`\n✅ Đã quét file và điền ${orderedNames.length} bone THEO ĐÚNG THỨ TỰ XUẤT HIỆN TRONG FILE:`, 'ok');
    log(`   (Không sắp xếp alphabet, không tự bịa — đúng byte offset trong file)`, 'ok');

    // Log 20 bone đầu để bạn đối chiếu
    const preview = orderedNames.slice(0, 20);
    for (let i = 0; i < preview.length; i++) {
      const item = found[i];
      log(`   [offset 0x${item.start.toString(16).toUpperCase().padStart(6, '0')}] ${item.name}`, 'info');
    }
    if (orderedNames.length > 20) {
      log(`   ... và ${orderedNames.length - 20} bone còn lại (xem trong ô GỐC)`, 'info');
    }

  } catch (err) { log('Lỗi quét bone: ' + err.message, 'error'); }
});

document.getElementById('btnClearList').addEventListener('click', () => {
  document.getElementById('listOld').value = '';
  document.getElementById('listNew').value = '';
  updateCounts();
  log('Đã xóa hết danh sách', 'info');
});

// ==================== KHỞI TẠO ====================
updateCounts();
log('Tool sẵn sàng. Chọn file asset để bắt đầu.', 'ok');
log(`Chỉ hỗ trợ prefix "${BONE_PREFIX}".`, 'info');
log('NÚT "Điền 56 bone mẫu" giờ = QUÉT FILE theo ĐÚNG THỨ TỰ byte trong file (không alphabet, không tự bịa).', 'ok');
log('CHẾ ĐỘ HEXED.IT: tên mới dài hơn → tự động CHÈN byte, file dài ra.', 'warn');
if (navigator.canShare) log('Trinh duyet ho tro Share Sheet', 'ok');
else log('Trinh duyet khong ho tro Share, se tai file khi bam nut', 'warn');