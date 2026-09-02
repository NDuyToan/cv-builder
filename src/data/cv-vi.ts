import { CVData } from "../types/cv";

export const cvVietnamese: CVData = {
  id: "cv-vi",
  title: "Bản Tiếng Việt (Mặc định)",
  language: "vi",
  labels: {
    objective: "MỤC TIÊU NGHỀ NGHIỆP",
    skills: "KỸ NĂNG CHUYÊN MÔN",
    experience: "KINH NGHIỆM LÀM VIỆC",
    education: "HỌC VẤN",
    responsibilities: "Trách nhiệm chính:",
    technologies: "Công nghệ:",
    description: "Mô tả:",
    teamSize: "Quy mô:",
    project: "Dự án:",
    product: "Sản phẩm:",
    major: "Ngành:",
    gpa: "Điểm TB:",
    grade: "Xếp loại:",
    phone: "Số điện thoại:",
    email: "Email:",
    address: "Địa chỉ:",
    linkedin: "LinkedIn:",
    github: "GitHub:",
  },
  personalInfo: {
    name: "NGUYỄN DUY TOẢN",
    roleTitle: "Middle Frontend Developer",
    avatarUrl: "/avatar.png",
    contact: {
      phone: "034 861 8373",
      email: "nguyenduytoanbkdn@gmail.com",
      address: "Đà Nẵng, Việt Nam",
      linkedin: {
        label: "linkedin.com/in/toan-nguyen-dev",
        url: "https://www.linkedin.com/in/toan-nguyen-dev/",
      },
      github: {
        label: "github.com/NDuyToan",
        url: "https://github.com/NDuyToan",
      },
    },
  },
  objective:
    "Frontend Developer với hơn 4 năm kinh nghiệm chuyên sâu về React, Next.js, TypeScript và phát triển các ứng dụng web hiện đại. Có kinh nghiệm xây dựng các ứng dụng có khả năng mở rộng từ đầu, phát triển thư viện component tái sử dụng và bàn giao giao diện responsive trên desktop, tablet, mobile và nền tảng WebView. Nền tảng vững chắc về kiến trúc frontend, quản lý state, xử lý form phức tạp, tích hợp RESTful API & GraphQL và làm việc nhóm đa chức năng. Đam mê viết mã nguồn sạch, dễ bảo trì và không ngừng tối ưu hiệu năng ứng dụng cũng như hiệu suất phát triển.",
  skills: [
    {
      category: "Công nghệ cốt lõi",
      items: [
        "TypeScript",
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "SCSS",
      ],
    },
    {
      category: "Thư viện UI & CSS",
      items: [
        "Tailwind CSS",
        "Ant Design",
        "Shadcn UI",
        "HeroUI",
        "Bootstrap",
        "Vuetify",
      ],
    },
    {
      category: "Quản lý State & Data",
      items: ["Redux", "Redux-Saga", "RTK Query", "Vuex", "Axios"],
    },
    {
      category: "Biểu mẫu & Xác thực",
      items: ["Formik", "Yup"],
    },
    {
      category: "Xử lý API & Dữ liệu",
      items: ["RESTful APIs", "GraphQL", "Axios", "ExcelJS"],
    },
    {
      category: "Hiệu năng & Tối ưu hóa",
      items: [
        "Lazy Loading",
        "Code Splitting",
        "API Caching",
        "Rendering Optimization",
        "Image Optimization",
      ],
    },
    {
      category: "Công cụ phát triển",
      items: [
        "Git",
        "GitLab",
        "Docker (kiến thức cơ bản)",
        "PM2 (kiến thức cơ bản)",
        "Cursor",
        "Codex",
      ],
    },
    {
      category: "Backend (nền tảng cơ bản)",
      items: ["Node.js", "Express.js", "NestJS", "Prisma", "SQL", "MongoDB"],
    },
    {
      category: "Phương pháp phát triển",
      items: [
        "Responsive Web Design",
        "Reusable Component Design",
        "Cross-browser Compatibility",
        "WebView Development",
        "Role-based Access Control (RBAC)",
      ],
    },
  ],
  experiences: [
    {
      company: "Dự án cá nhân & Nâng cao kỹ thuật (Personal Projects)",
      period: "12/2025 – Hiện tại",
      description:
        "Xây dựng các dự án cá nhân sử dụng React, Next.js, TypeScript và các thư viện UI hiện đại nhằm củng cố kiến trúc frontend và thiết kế component tái sử dụng.",
      bullets: [
        "Thực hành xây dựng các ứng dụng full-stack hoàn chỉnh với authentication, RESTful APIs, form validation, state management và giao diện responsive.",
        "Tối ưu hóa hiệu năng ứng dụng thông qua lazy loading, code splitting, API caching, phân trang và tối ưu hóa rendering.",
        "Mở rộng kiến thức backend và deployment thực tế với Node.js, Express.js, NestJS, MongoDB, Prisma, Docker, Linux và quy trình CI/CD.",
      ],
    },
    {
      company: "EnjoyWorks Company",
      role: "Frontend Developer",
      period: "01/2023 – 11/2025",
      projects: [
        {
          name: "Seasonal Worker Management – Sản phẩm Chính phủ Hàn Quốc",
          teamSize: "20 thành viên (Frontend: 6)",
          description:
            "Nền tảng quản lý lao động quy mô lớn cho chính quyền địa phương tại Hàn Quốc. Hệ thống cho phép quản trị viên quản lý lao động thời vụ nước ngoài, người sử dụng lao động, phân công công việc và dữ liệu vận hành qua cổng quản trị tập trung kết hợp WebView app.",
          responsibilities: [
            "Phát triển cổng quản trị (Admin Portal) từ đầu bằng React và TypeScript, đóng góp vào kiến trúc frontend tổng thể, cấu trúc ứng dụng và phát triển tính năng.",
            "Tham gia phân tích yêu cầu dự án cùng các đội ngũ Dev, QC, BA và PM trước khi triển khai; rà soát tài liệu dự án, làm rõ thắc mắc và đóng góp ý kiến hoàn thiện yêu cầu.",
            "Xây dựng các module quản lý doanh nghiệp quy mô lớn: quản lý lao động, quản lý chủ sử dụng lao động, phân công công việc thời vụ, dashboard, biểu mẫu nghiệp vụ và bảng dữ liệu lớn.",
            "Phát triển giao diện responsive và các trang WebView tối ưu mượt mà cho desktop, tablet, mobile và môi trường ứng dụng di động.",
            "Quản lý state ứng dụng với Redux-Saga và triển khai các form nghiệp vụ phức tạp với Formik và Yup.",
            "Triển khai hệ thống phân quyền dựa trên vai trò (RBAC) chặt chẽ cho Super Admin, Master Admin và Admin.",
            "Xây dựng chức năng import/export Excel bằng ExcelJS nhằm xử lý hiệu quả khối lượng dữ liệu lao động lớn.",
            "Tối ưu hóa quy trình tải tệp lên bằng cách nén ảnh, chuyển đổi ảnh định dạng HEIC sang PNG và upload tuần tự giúp ổn định backend.",
            "Tích hợp hỗ trợ đa ngôn ngữ sử dụng i18next; đóng gói, triển khai và duy trì ứng dụng trên môi trường VPS với PM2.",
          ],
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Redux-Saga",
            "Formik",
            "Yup",
            "i18next",
            "Tailwind CSS",
            "Ant Design",
            "Shadcn UI",
            "ExcelJS",
            "Git",
            "GitLab",
          ],
        },
        {
          name: "Goodtraepay",
          description:
            "Nền tảng ví điện tử WebView hỗ trợ thanh toán không tiền mặt qua thẻ NFC và mã QR. Tham gia phát triển các phân hệ Social, Khảo sát (Survey), Diễn đàn hỏi đáp (Q&A) và Thử thách hàng ngày (Daily Challenges).",
          responsibilities: [
            "Phát triển giao diện người dùng cho các module Social, Survey, Q&A Forum và Daily Challenges bằng React.",
            "Xây dựng các trang WebView responsive nhằm tích hợp mượt mà và liền mạch vào ứng dụng di động.",
            "Phối hợp với các nhóm Backend, QA, BA và UI/UX để phát triển tính năng mới và xử lý lỗi phát sinh.",
            "Build ứng dụng frontend cục bộ và triển khai các bản cập nhật lên môi trường VPS cấu hình sẵn phục vụ kiểm thử và production.",
          ],
          technologies: [
            "React",
            "Redux",
            "Redux-Saga",
            "RTK Query",
            "TypeScript",
            "Tailwind CSS",
            "SCSS",
            "Formik",
          ],
        },
        {
          name: "Linglow Admin & Partner Portal",
          link: {
            label: "linglow.net",
            url: "https://linglow.net",
          },
          description:
            "Cổng thông tin quản trị người dùng & doanh nghiệp kết hợp cổng đối tác giúp nhà tuyển dụng đăng tin việc làm, xem xét và xử lý hồ sơ ứng tuyển từ app di động Linglow và quản lý toàn diện quy trình tuyển dụng.",
          responsibilities: [
            "Phát triển và duy trì các cổng web Admin và Partner sử dụng Next.js và TypeScript.",
            "Xây dựng các UI component responsive và tái sử dụng cho các chức năng quản lý người dùng, đăng tin tuyển dụng và quản lý hồ sơ ứng tuyển.",
            "Phối hợp chặt chẽ với các đội ngũ Backend, QA, BA và UI/UX để hoàn thiện tính năng và nâng cao chất lượng sản phẩm.",
          ],
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Redux",
            "RTK Query",
            "Tailwind CSS",
            "HeroUI",
            "Formik",
            "Yup",
          ],
        },
      ],
    },
    {
      company: "SmartDev Company",
      role: "Frontend Developer",
      period: "03/2021 – 10/2022",
      projects: [
        {
          name: "Nền tảng Bảo hiểm Giao dịch M&A (Insurance Platform for M&A)",
          teamSize: "5 thành viên",
          description:
            "Ứng dụng web hỗ trợ quy trình bảo hiểm cho các thương vụ Mua bán & Sáp nhập doanh nghiệp (M&A).",
          responsibilities: [
            "Phát triển và duy trì giao diện ứng dụng web responsive phục vụ quy trình bảo hiểm M&A sử dụng Vue.js và Vuetify.",
            "Xây dựng các UI component tái sử dụng nhằm nâng cao tính nhất quán và khả năng bảo trì trong toàn bộ ứng dụng.",
            "Làm việc trong môi trường Agile/Scrum và trực tiếp trao đổi với khách hàng để làm rõ yêu cầu nghiệp vụ và báo cáo tiến độ.",
          ],
          technologies: [
            "Vue.js",
            "Vuetify",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Git",
            "GitLab",
          ],
        },
        {
          name: "Kênh Bán Bảo hiểm PowerSave 3 Năm (Fubon Life)",
          teamSize: "5 thành viên",
          productUrl: {
            label: "echannel.fubonlife.com.hk",
            url: "https://echannel.fubonlife.com.hk/",
          },
          description:
            "Website trực tuyến phục vụ khách hàng mua các gói bảo hiểm nhân thọ do tập đoàn Fubon Life cung cấp.",
          responsibilities: [
            "Phát triển và duy trì giao diện người dùng cho website mua bảo hiểm nhân thọ sử dụng JavaScript và jQuery.",
            "Xây dựng các trang web responsive dựa trên bản vẽ thiết kế UI; phối hợp với đội Backend tại Singapore tích hợp GraphQL APIs.",
            "Xử lý các vấn đề giao diện và đảm bảo tính tương thích hiển thị chuẩn xác trên đa trình duyệt.",
          ],
          technologies: [
            "JavaScript",
            "jQuery",
            "HTML5",
            "CSS3",
            "GraphQL",
            "Git",
            "GitLab",
          ],
        },
      ],
    },
    {
      company: "NCC ASIA Company",
      role: "Frontend Developer",
      period: "12/2019 – 12/2020",
      projects: [
        {
          name: "Meeting Hub (Nền tảng Đặt phòng Khách sạn)",
          teamSize: "4 thành viên",
          description:
            "Website đặt phòng khách sạn trực tuyến cho phép người dùng tìm kiếm và đặt phòng thuận tiện.",
          responsibilities: [
            "Phát triển và duy trì giao diện người dùng cho website đặt phòng khách sạn sử dụng Vue.js và Element UI.",
            "Tích hợp RESTful APIs thông qua Axios và quản lý state ứng dụng tập trung với Vuex.",
            "Xây dựng giao diện responsive với Element UI; phối hợp với các thành viên nhóm qua Git/GitLab.",
          ],
          technologies: [
            "Vue.js",
            "Vuex",
            "Axios",
            "Element UI",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitLab",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "Trường Đại học Bách khoa – Đại học Đà Nẵng",
      period: "2011 – 2016",
      degree: "Kỹ sư",
      major: "Kỹ thuật Cơ điện tử",
      gpa: "3.00 / 4",
      grade: "Khá",
    },
  ],
};
