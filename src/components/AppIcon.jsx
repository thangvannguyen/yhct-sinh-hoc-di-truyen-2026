import { cx } from './ui.jsx'

// Icon vẽ bằng SVG, thay cho emoji — cùng một phong cách nét viền đậm, thân tô
// màu, có vệt sáng (giống bộ icon của web Vi Sinh – Ký Sinh Trùng).
// Dùng: <AppIcon icon="svg:<tên>" />; chuỗi không bắt đầu bằng "svg:" được hiện
// như chữ thường (để dữ liệu cũ vẫn chạy).

/** Hình khối có viền tối — dùng cho thân sán, đơn bào, virus. */
function Shape({ d, fill, edge, w = 3, ...rest }) {
  return <path d={d} fill={fill} stroke={edge} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" {...rest} />
}

const ICONS = {
  // ---- Icon giao diện ----
  'y-tuong': (
    <>
      <g stroke="#b45309" strokeWidth="3.2" strokeLinecap="round">
        <line x1="32" y1="2.5" x2="32" y2="7.5" />
        <line x1="10" y1="12" x2="13.6" y2="15.6" />
        <line x1="54" y1="12" x2="50.4" y2="15.6" />
        <line x1="3.5" y1="31" x2="8.5" y2="31" />
        <line x1="60.5" y1="31" x2="55.5" y2="31" />
      </g>
      <Shape d="M32 11 C 20 11, 13 21, 15 31 C 16.5 38, 22 41, 23 47 L 41 47 C 42 41, 47.5 38, 49 31 C 51 21, 44 11, 32 11 Z" fill="#fde047" edge="#a16207" />
      <path d="M22 26 C 22 21, 26 18, 30 17.5" fill="none" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 47 L 27 38 C 27 34, 37 34, 37 38 L 37 47" fill="none" stroke="#a16207" strokeWidth="2.2" />
      <Shape d="M22.5 47 L 41.5 47 L 41.5 53 Q 41.5 56, 38.5 56 L 25.5 56 Q 22.5 56, 22.5 53 Z" fill="#94a3b8" edge="#334155" w={2.6} />
      <path d="M27 60 L 37 60" stroke="#334155" strokeWidth="3.4" strokeLinecap="round" />
    </>
  ),
  'mat-troi': (
    <>
      <g stroke="#b45309" strokeWidth="4" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2
          return <line key={i} x1={32 + Math.cos(a) * 21} y1={32 + Math.sin(a) * 21} x2={32 + Math.cos(a) * 28} y2={32 + Math.sin(a) * 28} />
        })}
      </g>
      <circle cx="32" cy="32" r="14" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />
      <path d="M24 28 A 9 9 0 0 1 30 22.5" fill="none" stroke="#fef3c7" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  'mat-trang': (
    <>
      <Shape d="M40 6 C 24 8, 12 21, 13 36 C 14 51, 28 60, 42 57 C 49 55.5, 54 51, 57 45 C 44 49, 30 41, 30 27 C 30 18, 34 10, 40 6 Z" fill="#fde68a" edge="#a16207" />
      <circle cx="24" cy="38" r="3" fill="#fbbf24" />
      <circle cx="33" cy="49" r="2.2" fill="#fbbf24" />
      <path d="M50 14 l 1.6 3.4 l 3.4 1.6 l -3.4 1.6 l -1.6 3.4 l -1.6 -3.4 l -3.4 -1.6 l 3.4 -1.6 Z" fill="#facc15" stroke="#a16207" strokeWidth="1.4" strokeLinejoin="round" />
    </>
  ),
  tron: (
    <>
      {['M6 18 L 18 18 C 30 18, 34 46, 46 46 L 54 46', 'M6 46 L 18 46 C 30 46, 34 18, 46 18 L 54 18'].map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#1e3a8a" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={d} fill="none" stroke="#60a5fa" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <Shape d="M50 9 L 61 18 L 50 27 Z" fill="#60a5fa" edge="#1e3a8a" w={2.6} />
      <Shape d="M50 37 L 61 46 L 50 55 Z" fill="#60a5fa" edge="#1e3a8a" w={2.6} />
    </>
  ),
  'canh-bao': (
    <>
      <Shape d="M32 5 C 34 5, 35.5 6, 36.5 8 L 60 52 C 61.6 55, 59.6 58, 56.4 58 L 7.6 58 C 4.4 58, 2.4 55, 4 52 L 27.5 8 C 28.5 6, 30 5, 32 5 Z" fill="#facc15" edge="#92400e" />
      <path d="M32 22 L 32 39" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
      <circle cx="32" cy="48.5" r="3.6" fill="#451a03" />
    </>
  ),
  'thong-tin': (
    <>
      <circle cx="32" cy="32" r="26" fill="#60a5fa" stroke="#1e3a8a" strokeWidth="3.4" />
      <circle cx="32" cy="19" r="4" fill="#ffffff" />
      <path d="M32 29 L 32 47" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
    </>
  ),
  nao: (
    <>
      <Shape d="M32 9 C 26 4, 16 6, 15 14 C 7 15, 4 24, 9 30 C 4 36, 7 46, 15 47 C 17 55, 27 58, 32 52 C 37 58, 47 55, 49 47 C 57 46, 60 36, 55 30 C 60 24, 57 15, 49 14 C 48 6, 38 4, 32 9 Z" fill="#f9a8d4" edge="#9d174d" />
      <g fill="none" stroke="#9d174d" strokeWidth="2.4" strokeLinecap="round">
        <path d="M32 10 L 32 51" />
        <path d="M16 22 C 21 21, 24 25, 23 29 M 13 36 C 18 34, 22 37, 23 41" />
        <path d="M48 22 C 43 21, 40 25, 41 29 M 51 36 C 46 34, 42 37, 41 41" />
      </g>
    </>
  ),
  'hoc-tap': (
    <>
      <Shape d="M32 15 C 24 9, 13 9, 5 12 L 5 52 C 13 49, 24 49, 32 55 Z" fill="#bfdbfe" edge="#1e3a8a" w={3.4} />
      <Shape d="M32 15 C 40 9, 51 9, 59 12 L 59 52 C 51 49, 40 49, 32 55 Z" fill="#93c5fd" edge="#1e3a8a" w={3.4} />
      <path d="M11 19 C 16 16.5, 22 16.5, 26 18" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
      <Shape d="M44 10.5 L 52 10.5 L 52 30 L 48 26.5 L 44 30 Z" fill="#ef4444" edge="#7f1d1d" w={2.4} />
    </>
  ),
  'kiem-tra': (
    <>
      <Shape d="M13 9 L 51 9 Q 56 9, 56 14 L 56 56 Q 56 61, 51 61 L 13 61 Q 8 61, 8 56 L 8 14 Q 8 9, 13 9 Z" fill="#fde68a" edge="#92400e" w={3.4} />
      <Shape d="M23 4 L 41 4 Q 43 4, 43 6 L 43 14 L 21 14 L 21 6 Q 21 4, 23 4 Z" fill="#94a3b8" edge="#334155" w={3} />
      <path d="M19 37 L 28 46 L 46 26" fill="none" stroke="#14532d" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 37 L 28 46 L 46 26" fill="none" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'on-tuan-tu': (
    <>
      <Shape d="M16 6 L 50 6 Q 54 6, 54 10 L 54 40 Q 54 44, 50 44 L 16 44 Q 12 44, 12 40 L 12 10 Q 12 6, 16 6 Z" fill="#bfdbfe" edge="#1e3a8a" w={2.6} />
      <Shape d="M10 14 L 44 14 Q 48 14, 48 18 L 48 50 Q 48 54, 44 54 L 10 54 Q 6 54, 6 50 L 6 18 Q 6 14, 10 14 Z" fill="#ffffff" edge="#1e3a8a" />
      <path d="M20 27 C 20 21, 34 21, 34 27 C 34 32, 27 32, 27 37" fill="none" stroke="#2563eb" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="27" cy="44" r="2.2" fill="#2563eb" />
      <path d="M36 54 L 55 54 M 49.5 48.5 L 55 54 L 49.5 59.5" fill="none" stroke="#14532d" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 54 L 55 54 M 49.5 48.5 L 55 54 L 49.5 59.5" fill="none" stroke="#4ade80" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'on-cau-sai': (
    <>
      <path d="M44.9 16.7 A 20 20 0 1 0 50.8 38.8" fill="none" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />
      <path d="M44.9 16.7 A 20 20 0 1 0 50.8 38.8" fill="none" stroke="#60a5fa" strokeWidth="3.8" strokeLinecap="round" />
      <Shape d="M53.5 31 L 57.5 45 L 44.5 41 Z" fill="#60a5fa" edge="#1e3a8a" w={2.6} />
      <circle cx="32" cy="32" r="11" fill="#fecaca" stroke="#991b1b" strokeWidth="2.8" />
      <path d="M27.5 27.5 L 36.5 36.5 M 36.5 27.5 L 27.5 36.5" stroke="#dc2626" strokeWidth="3.2" strokeLinecap="round" />
    </>
  ),

  'chuc-mung': (
    <>
      <Shape d="M6 58 L 20 22 L 42 44 Z" fill="#facc15" edge="#854d0e" />
      <path d="M11.5 44 L 26 52 M 15.5 33.5 L 34 48" stroke="#ef4444" strokeWidth="3.2" strokeLinecap="round" />
      <Shape d="M20 22 C 26 19, 40 33, 42 44 C 36 44, 22 30, 20 22 Z" fill="#fde68a" edge="#854d0e" w={2.6} />
      <g strokeLinecap="round" strokeWidth="3.4" fill="none">
        <path d="M30 14 C 32 9, 28 6, 31 2" stroke="#3b82f6" />
        <path d="M46 26 C 51 24, 54 28, 59 26" stroke="#ec4899" />
        <path d="M40 16 L 46 8" stroke="#22c55e" />
      </g>
      <circle cx="52" cy="14" r="3" fill="#a855f7" />
      <circle cx="56" cy="40" r="2.6" fill="#f97316" />
      <circle cx="22" cy="8" r="2.4" fill="#22c55e" />
      <Shape d="M47 46 l 2 4 l 4.4 0.6 l -3.2 3 l 0.8 4.4 l -4 -2.1 l -4 2.1 l 0.8 -4.4 l -3.2 -3 l 4.4 -0.6 Z" fill="#3b82f6" edge="#1e3a8a" w={1.8} />
    </>
  ),
  'khen': (
    <>
      <Shape d="M18 4 L 30 4 L 36 24 L 26 28 Z" fill="#3b82f6" edge="#1e3a8a" w={2.6} />
      <Shape d="M46 4 L 34 4 L 28 24 L 38 28 Z" fill="#60a5fa" edge="#1e3a8a" w={2.6} />
      <circle cx="32" cy="40" r="17" fill="#fbbf24" stroke="#92400e" strokeWidth="3" />
      <circle cx="32" cy="40" r="11.5" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
      <path d="M32 31.5 l 2.6 5.3 l 5.8 0.8 l -4.2 4.1 l 1 5.8 l -5.2 -2.7 l -5.2 2.7 l 1 -5.8 l -4.2 -4.1 l 5.8 -0.8 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),


  // ---- Icon 7 bài ----
  // Bài 1 · Sinh học, khoa học của sự sống: kính hiển vi.
  'kinh-hien-vi': (
    <>
      <Shape d="M10 56 L 54 56 Q 57 56, 57 59 L 57 60 L 7 60 L 7 59 Q 7 56, 10 56 Z" fill="#94a3b8" edge="#334155" w={2.6} />
      <path d="M44 56 C 52 48, 52 34, 42 28" fill="none" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
      <path d="M44 56 C 52 48, 52 34, 42 28" fill="none" stroke="#94a3b8" strokeWidth="3.6" strokeLinecap="round" />
      <g transform="rotate(-30 30 24)">
        <Shape d="M24 4 L 36 4 L 36 38 L 24 38 Z" fill="#60a5fa" edge="#1e3a8a" />
        <Shape d="M26 38 L 34 38 L 33 45 L 27 45 Z" fill="#cbd5e1" edge="#334155" w={2.4} />
        <path d="M27 8 L 27 30" stroke="#dbeafe" strokeWidth="2.6" strokeLinecap="round" />
      </g>
      <Shape d="M16 44 L 40 44 L 40 49 L 16 49 Z" fill="#cbd5e1" edge="#334155" w={2.6} />
    </>
  ),
  // Bài 2 · Sinh học tế bào: tế bào có nhân và bào quan.
  'te-bao': (
    <>
      <Shape d="M32 5 C 47 5, 59 15, 59 31 C 59 47, 48 59, 32 59 C 16 59, 5 48, 5 32 C 5 16, 17 5, 32 5 Z" fill="#bbf7d0" edge="#166534" />
      <circle cx="30" cy="30" r="11" fill="#a78bfa" stroke="#4c1d95" strokeWidth="2.8" />
      <circle cx="27" cy="27" r="3.4" fill="#4c1d95" />
      <ellipse cx="45" cy="44" rx="6" ry="3.6" transform="rotate(-30 45 44)" fill="#fb923c" stroke="#9a3412" strokeWidth="2" />
      <circle cx="17" cy="45" r="3" fill="#fde047" stroke="#854d0e" strokeWidth="1.8" />
      <circle cx="46" cy="18" r="2.6" fill="#fde047" stroke="#854d0e" strokeWidth="1.8" />
      <path d="M12 22 C 14 17, 18 14, 23 12" fill="none" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2.8" strokeLinecap="round" />
    </>
  ),
  // Bài 3 · Năng lượng sinh học: ty thể + tia năng lượng.
  'nang-luong': (
    <>
      <Shape d="M8 38 C 8 26, 20 20, 32 20 C 44 20, 56 26, 56 38 C 56 50, 44 56, 32 56 C 20 56, 8 50, 8 38 Z" fill="#fdba74" edge="#9a3412" />
      <path d="M14 40 C 18 30, 20 48, 24 38 C 28 28, 30 48, 34 38 C 38 28, 40 48, 44 38 C 47 31, 49 44, 51 38" fill="none" stroke="#9a3412" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <Shape d="M40 2 L 28 20 L 36 20 L 30 34 L 46 14 L 37 14 L 44 2 Z" fill="#fde047" edge="#854d0e" w={2.6} />
    </>
  ),
  // Bài 4 · Cơ sở phân tử của di truyền: chuỗi xoắn kép ADN.
  adn: (
    <>
      <g stroke="#94a3b8" strokeWidth="3.4" strokeLinecap="round">
        <line x1="22" y1="11" x2="42" y2="11" />
        <line x1="21" y1="25" x2="43" y2="25" />
        <line x1="21" y1="39" x2="43" y2="39" />
        <line x1="22" y1="53" x2="42" y2="53" />
      </g>
      {['M20 4 C 20 18, 44 18, 44 32 C 44 46, 20 46, 20 60', 'M44 4 C 44 18, 20 18, 20 32 C 20 46, 44 46, 44 60'].map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke={i ? '#1e3a8a' : '#9d174d'} strokeWidth="8" strokeLinecap="round" />
          <path d={d} fill="none" stroke={i ? '#60a5fa' : '#f472b6'} strokeWidth="3.8" strokeLinecap="round" />
        </g>
      ))}
    </>
  ),
  // Bài 5 · Sự phân chia tế bào: tế bào đang thắt lại, chia thành hai nhân.
  'phan-bao': (
    <>
      <Shape d="M32 14 C 26 8, 6 8, 5 32 C 6 56, 26 56, 32 50 C 38 56, 58 56, 59 32 C 58 8, 38 8, 32 14 Z" fill="#bbf7d0" edge="#166534" />
      <path d="M32 15 L 32 49" stroke="#166534" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="18" cy="32" r="8" fill="#a78bfa" stroke="#4c1d95" strokeWidth="2.6" />
      <circle cx="46" cy="32" r="8" fill="#a78bfa" stroke="#4c1d95" strokeWidth="2.6" />
      <path d="M15 29 L 21 35 M 21 29 L 15 35 M 43 29 L 49 35 M 49 29 L 43 35" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  // Bài 6 · Các quy luật di truyền: quả đậu Hà Lan của Mendel.
  'hat-dau': (
    <>
      <Shape d="M6 40 C 12 22, 34 10, 58 12 C 56 30, 38 50, 10 52 Q 4 48, 6 40 Z" fill="#86efac" edge="#166534" />
      <g fill="#4ade80" stroke="#14532d" strokeWidth="2.2">
        <circle cx="17" cy="40" r="5.4" />
        <circle cx="28" cy="33" r="5.8" />
        <circle cx="39.5" cy="26" r="5.6" />
        <circle cx="49.5" cy="19" r="5" />
      </g>
      <g fill="#ffffff" fillOpacity="0.7">
        <circle cx="15.5" cy="38.5" r="1.5" />
        <circle cx="26.5" cy="31.5" r="1.6" />
        <circle cx="38" cy="24.5" r="1.6" />
        <circle cx="48" cy="17.5" r="1.4" />
      </g>
      <path d="M58 12 C 60 8, 62 6, 62 3" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  // Bài 7 · Giao tử, thụ tinh, phôi: tinh trùng tiến đến trứng.
  'thu-tinh': (
    <>
      <circle cx="40" cy="38" r="20" fill="#fbcfe8" stroke="#9d174d" strokeWidth="3" />
      <circle cx="40" cy="38" r="14" fill="#fdf2f8" stroke="#db2777" strokeWidth="2" strokeDasharray="3 2.4" />
      <circle cx="40" cy="38" r="5" fill="#f472b6" stroke="#9d174d" strokeWidth="2" />
      <path d="M3 5 C 9 2, 8 12, 13 11 C 17 10, 15 17, 19 18" fill="none" stroke="#1e3a8a" strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="23.5" cy="21.5" rx="7" ry="4.8" transform="rotate(40 23.5 21.5)" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="2.6" />
    </>
  ),
  // Tài liệu (📕): file tài liệu PDF.
  'tai-lieu': (
    <>
      <Shape d="M12 4 L 40 4 L 54 18 L 54 58 Q 54 60, 52 60 L 12 60 Q 10 60, 10 58 L 10 6 Q 10 4, 12 4 Z" fill="#ffffff" edge="#334155" />
      <Shape d="M40 4 L 40 18 L 54 18 Z" fill="#cbd5e1" edge="#334155" w={2.6} />
      <g stroke="#cbd5e1" strokeWidth="2.8" strokeLinecap="round">
        <line x1="17" y1="14" x2="33" y2="14" />
        <line x1="17" y1="22" x2="46" y2="22" />
      </g>
      <Shape d="M6 32 L 48 32 Q 50 32, 50 34 L 50 48 Q 50 50, 48 50 L 6 50 Q 4 50, 4 48 L 4 34 Q 4 32, 6 32 Z" fill="#ef4444" edge="#7f1d1d" w={2.6} />
      <text x="27" y="46" textAnchor="middle" fontSize="13" fontWeight="800" fontFamily="Arial, sans-serif" fill="#ffffff">PDF</text>
    </>
  ),
}

/**
 * Icon: "svg:<tên>" → hình vẽ trong ICONS, còn lại hiện nguyên chuỗi.
 * Kích thước theo cỡ chữ (1em) nên đặt thẳng vào chỗ trước đây là emoji.
 */
export default function AppIcon({ icon, className }) {
  if (typeof icon === 'string' && icon.startsWith('svg:')) {
    const art = ICONS[icon.slice(4)]
    if (art) {
      return (
        <svg
          viewBox="0 0 64 64"
          width="1.45em"
          height="1.45em"
          aria-hidden
          className={cx('inline-block flex-shrink-0 align-[-0.35em]', className)}
        >
          {art}
        </svg>
      )
    }
  }
  return <span className={className}>{icon}</span>
}
