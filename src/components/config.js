import { faAddressCard, faEnvelope, faImages, faLaptop } from "@fortawesome/free-solid-svg-icons";
import Popover from "antd/lib/popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

// Color

export const MAIN_COLOR = "#D5F7E6";
export const SUB_COLOR = "#5AE4A8";
export const GRAY_COLOR = "rgba(0, 0, 0, 0.2)";
export const BG_COLOR = "rgb(247, 247, 247)";

// Mainpage Desc

export const CARD_DESC_PS =
  "새로운 기술을 배우기전 항상 자신의 기본기를 점검합니다. 또한 문제를 정확하게 인식하고 배우고 기록합니다.";
export const CARD_DESC_COMU =
  "팀워크를 최우선으로 여기며 소통을 중심으로 매순간 신뢰의 기반을 다집니다.";
export const CARD_DESC_COOP =
  "코딩 자체를 즐기며 매순간 열정을 가지고 고비를 넘으며 담담하게 도전합니다.";

export const CardContents = [
  {
    squareTitle: "ProblemSolve",
    title: "문제해결능력을 위한 기본기",
    desc: CARD_DESC_PS,
    src: "/images/ProblemSolve.png",
  },
  {
    squareTitle: "Cooperation",
    title: "신뢰에서 오는 진정한 소통",
    desc: CARD_DESC_COMU,
    src: "/images/Cooperation.png",
  },
  {
    squareTitle: "Passion",
    title: "열정 그리고 도전",
    desc: CARD_DESC_COOP,
    src: "/images/Passion.png",
  },
];
export const dataSource = [
  {
    key: "1",
    date: "1994/7/16",
    summary: "Born in Seoul , South Korea",
  },
  {
    key: "2",
    date: "2013/3/2",
    summary: "Entered Induk University Entertainment major ",
  },
  {
    key: "3",
    date: "2013/11/5",
    summary: "Enlisted 17th infantry division for Military duty, South Korea",
  },
  {
    key: "4",
    date: "2016/7/1",
    summary: "Worked at K-Hotel as a Receptionist , Seoul South Korea",
  },
  {
    key: "5",
    date: "2017/4/1",
    summary: "Worked at Sky Ticket as a Merchandiser(MD) , Tokyo Japan",
  },
  {
    key: "6",
    date: "2018/11/1",
    summary: "Worked at K-Hotel as a General Manager(GM) , Seoul South Korea",
  },
];

// Nav Contents
export const navContents = [
  {
    icon: faAddressCard,
    intro: "",
    explain: "About me",
    name: "aboutme",
  },
  {
    icon: faLaptop,
    intro: "Know about my skill-set 👨‍💼",
    explain: "Skills",
    name: "skills",
  },
  {
    icon: faImages,
    intro: "Teste my portfolio 🖼️",
    explain: "Portfolio",
    name: "portfolio",
  },
  {
    icon: faEnvelope,
    intro: "Are you interested in me? 📭",
    explain: "Contact",
    name: "contact",
  },
];

// Skill page
export const skills = [
  {
    name: "Sketch",
    src: "https://img.icons8.com/plasticine/100/000000/sketch.png",
    desc: "스케치를 활용하여 UI/UX 웹사이트의 표본을 디자인합니다.",
    level: false,
  },
  {
    name: "Html",
    src: "https://img.icons8.com/color/144/000000/html-5.png",
    desc: "웹표준을 준수하며 DOM-tree를 정확하게 파악합니다.",
    level: true,
  },
  {
    name: "CSS",
    src: "https://img.icons8.com/color/144/000000/css3.png",
    desc: "SCSS와 같은 전처리기 사용이 가능하며 브라우저 렌딩 특성을 파악해 최적화를 보장합니다.",
    level: true,
  },
  {
    name: "Java Script",
    src: "https://img.icons8.com/color/144/000000/javascript.png",
    desc: "기본문법부터 ES6 최신문법과 클로저,This,이벤트루프등 독특한 JS특성을 폭넓게 이해합니다.",
    level: true,
  },
  {
    name: "J-Query",
    src: "https://img.icons8.com/ios-filled/150/000000/jquery.png",
    desc: "제이쿼리 문법해석과 셀렉터에 기본적 의미를 이해합니다.",
    level: false,
  },
  {
    name: "Type Script",
    src: "https://img.icons8.com/color/144/000000/typescript.png",
    desc: "인터페이스 및 제네릭 메소드를 이해하고 타입을 정의할 수 있습니다.",
    level: true,
  },
  {
    name: "React",
    src: "https://img.icons8.com/color/144/000000/react-native.png",
    desc: "React 와 Hooks 문법, Redux와 Router 적용, 그리고 jsx 와 SPI 의 특성을 이해합니다.",
    level: true,
  },
  {
    name: "Nodejs",
    src: "https://img.icons8.com/color/144/000000/nodejs.png",
    desc: "다양한 라이브러리를 사용가능하며 RESTful API를 준수합니다.",
    level: true,
  },
  {
    name: "Mysql",
    src: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png",
    desc: "스키마 정의와 데이터베이스관계도를 이해하고 테이블을 생성,수정하고 관리합니다.",
    level: true,
  },
  {
    name: "Git",
    src: "https://img.icons8.com/nolan/128/github.png",
    desc: "형상관리의 기본원리와 버전관리,브랜치,백업등을 적극 활용합니다.",
    level: true,
  },
];

export const eng_content = (
  <div>
    <p>· 개요: 문화체육관광부에서 실시하는 통역분야의 유일한 국가공인자격증(출처:Q-Net)</p>
    <p>· 취득당시 어학점수: TOEIC 925점(2018년 취득, 기간만료)</p>
  </div>
);
export const jap_content = (
  <div>
    <p>· 개요: 문화체육관광부에서 실시하는 통역분야의 유일한 국가공인자격증(출처:Q-Net)</p>
    <p>· 취득당시 어학점수: JLPT1급(2019년 취득)</p>
  </div>
);

export const LAG_ENG = (
  <>
    <Popover content={eng_content} title="영어통역안내사란❓" className="focus">
      영어통역안내사&nbsp;
      <FontAwesomeIcon icon={faQuestionCircle} />
    </Popover>
    &nbsp;국가전문자격증 보유 (2020년)
  </>
);
export const LAG_JAP = (
  <>
    <Popover content={jap_content} title="일본어통역안내사란❓" className="focus">
      일본어통역안내사&nbsp;
      <FontAwesomeIcon icon={faQuestionCircle} />
      &nbsp;&nbsp;
    </Popover>
    &nbsp;국가전문자격증 보유 (2019년)
  </>
);

export const languages = [
  {
    name: "English",
    src: "https://img.icons8.com/color/96/000000/usa-circular.png",
    desc: LAG_ENG,
    level: "high",
  },
  {
    name: "Japanese",
    src: "https://img.icons8.com/color/96/000000/japan-circular.png",
    desc: LAG_JAP,
    level: "high",
  },
];

//Portfolio

export const portfolio1 = {
  id: 1,
  name: "반응형 웹 포트폴리오 사이트",
  date: "2021/2~ 2021/3",
  tags: ["#Html", "#CSS", "#Javascript", "#React"],
  desc: `#반응형으로 모바일과 PC 둘 다 사용이 가능합니다.
  <br />#<span class="marker">간결하고 직관적인</span> 페이지로 가독성을 높였습니다.
  <br />
  #필요없는 기능은 과감하게 제거했으며 최적화를 보장합니다.
  <br />
  #야간모드 및 다양한 라이브러리를 이해하고 적용했습니다.`,
  src: "/images/portfolio/portfolio1_main.png",
  git: "https://github.com/noah071610",
};

export const portfolio2 = {
  id: 2,
  name: "반응형 웹 포트폴리오 사이트dd",
  date: "2021/2~ 2021/3zz",
  tags: ["#Html", "dd", "Javascript", "React"],
  desc: `#반응형으로 모바일과 PC 둘 다 사용이 가능합니다.
  <br />#<span class="marker">간결하고 직관적인</span> 페이지로 가독성을 높였습니다.
  <br />
  #필요없는 기능은 과감하게 제거했으며 dd최적화를 보장합니다.
  <br />
  #야간모드 및 다양한 라이브러리를 이해하고 적용했습니다.`,
  src: "/images/game.jpg",
  git: "https://github.com/noah071610",
};

export const portfolio3 = {
  id: 3,
  name: "ss",
  date: "2021/2~ 2021/3zz",
  tags: ["#Html", "dd", "Javascript", "React"],
  desc: `#반응형으로 모바일과 PC 둘 다 사용이 가능합니다.
  <br />#<span class="marker">간결하고 직관적인</span> 페이지로 가독성을 높였습니다.
  <br />
  #필요없는 기능은 과감하게 제거했으며 dd최적화를 보장합니다.
  <br />
  #야간모드 및 다양한 라이브러리를 이해하고 적용했습니다.`,
  src: "/images/game.jpg",
  git: "https://github.com/noah071610",
};
