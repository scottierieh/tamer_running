export const SITE = {
  instagram: "https://instagram.com/tamer_running",
  instagramHandle: "@tamer_running",
  // 인스타 프로필의 신청 폼 링크
  joinForm: "https://forms.gle/t8VFuxgx1DzNpUyj7",
};

export type Program = {
  tag: string;
  title: string;
  desc: string;
  points: string[];
};

export const PROGRAMS: Program[] = [
  {
    tag: "01",
    title: "SPRINT",
    desc: "트랙 위에서 한계를 부수는 단거리 스피드 세션. 폭발적인 가속과 최고 속도를 끌어올린다.",
    points: ["트랙 인터벌", "스타팅 & 가속", "스피드 측정"],
  },
  {
    tag: "02",
    title: "TRAINING",
    desc: "더 멀리, 더 강하게. 러닝 폼과 지구력을 다지는 체계적인 베이스 트레이닝.",
    points: ["러닝 폼 코칭", "페이스 빌드업", "지구력 강화"],
  },
  {
    tag: "03",
    title: "COMBINE",
    desc: "달리기 그 이상. 민첩성·파워·게임이 어우러진 복합 무브먼트 세션.",
    points: ["애자일리티", "파워 드릴", "팀 게임"],
  },
];

export type Session = {
  date: string;
  day: string;
  title: string;
  concept: string;
  place: string;
  capacity: string;
  status: "open" | "soon" | "closed";
};

export const SESSIONS: Session[] = [
  {
    date: "07.05",
    day: "SUN",
    title: "TAMER RUNNING",
    concept: "SPEED",
    place: "연세대학교 대운동장",
    capacity: "정원 20명 · 선착순",
    status: "open",
  },
  {
    date: "07.12",
    day: "SUN",
    title: "TAMER TRAINING",
    concept: "ENDURANCE",
    place: "한강 반포지구",
    capacity: "정원 24명 · 선착순",
    status: "soon",
  },
  {
    date: "07.19",
    day: "SUN",
    title: "TAMER COMBINE",
    concept: "POWER",
    place: "올림픽공원",
    capacity: "정원 20명 · 선착순",
    status: "soon",
  },
];

export type Member = {
  name: string;
  role: string;
  handle: string;
  url: string;
};

// 각 크루 멤버 계정 — 핸들/링크는 실제 계정으로 교체하세요.
export const MEMBERS: Member[] = [
  {
    name: "TAMER",
    role: "CREW · 본 계정",
    handle: "@tamer_running",
    url: "https://instagram.com/tamer_running",
  },
  {
    name: "RAY",
    role: "SPRINT LEAD",
    handle: "@ray_oooo",
    url: "https://instagram.com/ray_oooo",
  },
  {
    name: "KWON",
    role: "TRAINING COACH",
    handle: "@kwon_jitsu",
    url: "https://instagram.com/kwon_jitsu",
  },
  {
    name: "WON",
    role: "PT · TRAINING",
    handle: "@wontraining",
    url: "https://instagram.com/wontraining",
  },
];

export const STATS = [
  { value: "100+", label: "CREW MEMBERS" },
  { value: "14", label: "SESSIONS" },
  { value: "3", label: "PROGRAMS" },
  { value: "FUN", label: "ALWAYS" },
];
