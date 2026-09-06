import { CVData } from "../types/cv";

export const cvWorki: CVData = {
  id: "cv-worki",
  title: "Bản ứng tuyển AI WORKi (Chuyên viên Triển khai Dự án)",
  language: "vi",
  labels: {
    objective: "MỤC TIÊU NGHỀ NGHIỆP",
    skills: "KỸ NĂNG CHUYÊN MÔN",
    experience: "KINH NGHIỆM LÀM VIỆC",
    education: "HỌC VẤN",
    languages: "NGOẠI NGỮ",
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
    portfolio: "Portfolio:",
  },
  personalInfo: {
    name: "NGUYỄN DUY TOẢN",
    roleTitle: "Web Developer",
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
      portfolio: {
        label: "nguyenduytoan.io.vn",
        url: "https://www.nguyenduytoan.io.vn/",
      },
    },
  },
  objective:
    "Web Developer với hơn 4 năm kinh nghiệm thực tế trong việc xây dựng, chỉnh sửa và bảo trì các ứng dụng web với React, Next.js, Vue.js và TypeScript. Có kinh nghiệm phối hợp cùng BA, PM và QC để phân tích yêu cầu nghiệp vụ, kiểm thử tính năng và xử lý các lỗi kỹ thuật phát sinh. Nắm vững việc đóng gói, triển khai ứng dụng lên máy chủ qua PM2, Docker (cơ bản), cùng thói quen sử dụng thành thạo các công cụ hỗ trợ như Google Antigravity, Cursor, Codex và ChatGPT để tăng tốc độ xử lý công việc. Mong muốn ứng tuyển vị trí Chuyên viên Triển khai Dự án tại AI WORKi để phụ trách mảng kỹ thuật website, tham gia kiểm thử phần mềm trước khi bàn giao và hỗ trợ vận hành hệ thống một cách hiệu quả, ổn định.",
  skills: [
    {
      category: "Kỹ thuật Website & Giao diện",
      items: [
        "Thiết kế, xây dựng và chỉnh sửa giao diện Website / Web App",
        "HTML5",
        "CSS3 / SCSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Ant Design",
        "Bootstrap",
        "Responsive Web Design",
      ],
    },
    {
      category: "Xử lý Dữ liệu & Tích hợp API",
      items: [
        "RESTful APIs",
        "GraphQL",
        "Axios",
        "Redux / Redux-Saga",
        "RTK Query",
        "Vuex",
        "Xử lý xuất nhập dữ liệu Excel (ExcelJS)",
        "Formik & Yup (Xử lý và xác thực biểu mẫu)",
      ],
    },
    {
      category: "Kiểm thử & Tối ưu hóa kỹ thuật",
      items: [
        "Kiểm tra và xử lý lỗi giao diện trên nhiều thiết bị & trình duyệt (Cross-browser)",
        "Kiểm thử tính năng cùng đội ngũ trước khi bàn giao hệ thống",
        "Tối ưu tốc độ tải trang, hiệu năng hiển thị và nén tệp tin",
      ],
    },
    {
      category: "Triển khai máy chủ & Công cụ phát triển",
      items: [
        "Git",
        "GitLab",
        "PM2 (đóng gói và vận hành ứng dụng trên VPS)",
        "Docker (kiến thức cơ bản)",
        "Node.js & cơ sở dữ liệu cơ bản (PostgreSQL, MySQL, MongoDB)",
      ],
    },
    {
      category: "Công cụ AI hỗ trợ công việc",
      items: [
        "Google Antigravity",
        "Cursor",
        "Codex",
        "ChatGPT",
        "Ứng dụng công cụ AI để hỗ trợ viết code, tra cứu tài liệu, debug và giải quyết vấn đề nhanh chóng",
      ],
    },
  ],
  experiences: [
    {
      company: "Dự án cá nhân & Nâng cao kỹ thuật",
      period: "12/2025 – Hiện tại",
      description:
        "Tự xây dựng các dự án web hoàn chỉnh (Frontend + Backend) với Next.js, NestJS, TypeScript, PostgreSQL và Prisma để nâng cao năng lực kỹ thuật và làm chủ toàn bộ quy trình phát triển.",
      bullets: [
        "Xây dựng giao diện web responsive, thiết kế các thành phần component có tính tái sử dụng cao.",
        "Thiết kế và tích hợp RESTful API, quản lý cơ sở dữ liệu với PostgreSQL và Prisma.",
        "Thực hành đóng gói và triển khai ứng dụng thực tế trên môi trường Linux sử dụng Docker và PM2, thiết lập CI/CD cơ bản với GitLab.",
        "Tận dụng các công cụ AI (Google Antigravity, Cursor, ChatGPT) để hỗ trợ phân tích cấu trúc mã nguồn và sửa lỗi nhanh.",
      ],
    },
    {
      company: "EnjoyWorks Company",
      role: "Frontend Developer",
      period: "01/2023 – 11/2025",
      projects: [
        {
          name: "Quản lý lao động của chính quyền địa phương Hàn Quốc",
          teamSize: "20 thành viên (Frontend: 6)",
          description:
            "Hệ thống phần mềm quản lý lao động thời vụ nước ngoài và điều phối công việc cho chính quyền địa phương tại Hàn Quốc qua cổng web quản trị và WebView di động.",
          responsibilities: [
            "Xây dựng và chỉnh sửa các màn hình web quản trị bằng React và TypeScript theo đúng yêu cầu nghiệp vụ.",
            "Làm việc cùng BA, PM và QC để làm rõ nghiệp vụ, phản biện tính khả thi kỹ thuật và cùng tìm giải pháp xử lý trước khi lập trình.",
            "Phát triển các phân hệ quản lý hồ sơ, danh sách phân công, biểu đồ thống kê và bảng dữ liệu lớn.",
            "Tích hợp thư viện ExcelJS để xử lý việc xuất nhập danh sách dữ liệu hồ sơ lớn cho người dùng hệ thống.",
            "Kiểm tra và xử lý các lỗi phát sinh trong quá trình vận hành; tối ưu giao diện hiển thị trên máy tính, máy tính bảng và điện thoại.",
            "Trực tiếp đóng gói bản build mã nguồn và vận hành hệ thống trên máy chủ VPS thông qua PM2.",
          ],
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Redux-Saga",
            "Formik",
            "Yup",
            "Tailwind CSS",
            "Ant Design",
            "ExcelJS",
            "GitLab",
            "PM2",
          ],
        },
        {
          name: "Goodtraepay & Linglow Portal",
          description:
            "Nền tảng thanh toán số WebView và Cổng web quản trị đối tác tuyển dụng.",
          responsibilities: [
            "Xây dựng và chỉnh sửa giao diện web theo yêu cầu dự án bằng Next.js và React.",
            "Đảm bảo màn hình hiển thị chuẩn xác, tương thích tốt trên cả trình duyệt máy tính và WebView nhúng trong ứng dụng di động.",
            "Phối hợp với đội Backend và QC để tích hợp API, kiểm thử tính năng và xử lý dứt điểm các lỗi giao diện phát sinh.",
          ],
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "RTK Query",
            "Tailwind CSS",
            "HeroUI",
            "RESTful API",
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
          name: "Nền tảng Bảo hiểm Giao dịch M&A & Cổng Fubon Life",
          teamSize: "5 thành viên",
          description:
            "Ứng dụng web phục vụ thẩm định bảo hiểm M&A và trang web giới thiệu, đăng ký trực tuyến các gói bảo hiểm nhân thọ.",
          responsibilities: [
            "Phát triển, chỉnh sửa và duy trì các màn hình giao diện web bằng Vue.js, Vuetify và JavaScript.",
            "Tham gia các buổi trao đổi hàng ngày để làm rõ yêu cầu nghiệp vụ và thống nhất giải pháp kỹ thuật.",
            "Kiểm tra và khắc phục lỗi hiển thị trên nhiều trình duyệt khác nhau để đảm bảo trang web hoạt động ổn định và chính xác.",
          ],
          technologies: [
            "Vue.js",
            "Vuetify",
            "JavaScript",
            "GraphQL",
            "HTML5",
            "CSS3",
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
          name: "Meeting Hub & Hệ thống Quản lý Nội bộ",
          teamSize: "4 thành viên",
          description:
            "Website đặt phòng khách sạn và ứng dụng web nội bộ phục vụ nghiệp vụ bảo hiểm.",
          responsibilities: [
            "Phát triển giao diện web bằng Vue.js, Element UI và hỗ trợ bảo trì màn hình bằng Angular 6.",
            "Tiếp nhận các báo cáo lỗi, kiểm tra và khắc phục để duy trì hoạt động ổn định của các tính năng sẵn có.",
            "Kết nối RESTful API và quản lý mã nguồn qua Git/GitLab.",
          ],
          technologies: [
            "Vue.js",
            "Vuex",
            "Angular 6",
            "Bootstrap",
            "JavaScript",
            "RESTful API",
            "Git",
          ],
        },
      ],
    },
    {
      company: "Công ty TNHH Vinteli",
      role: "Kỹ sư kỹ thuật",
      period: "11/2017 – 09/2019",
      bullets: [
        "Vận hành và bảo trì hệ thống Quản lý Tòa nhà (BMS) tại Nhà ga Quốc tế T2 Đà Nẵng, đảm bảo hệ thống HVAC và trạm xử lý nước thải chạy ổn định.",
        "Giám sát thi công hệ thống kiểm soát ra vào (ACS), camera quan sát (CCTV) và mạng Wi-Fi tại Nhà ga Quốc tế Cam Ranh.",
        "Kiểm tra chất lượng thi công tại công trường và phối hợp các bên xử lý vấn đề kỹ thuật phát sinh.",
        "Thực hiện kiểm thử thực địa, lập biên bản nghiệm thu kỹ thuật và bàn giao hồ sơ cho đơn vị tiếp quản.",
      ],
    },
    {
      company: "Công ty TNHH Mabuchi Motor Đà Nẵng",
      role: "Nhân viên Phòng Cải cách sản xuất",
      period: "08/2016 – 06/2017",
      bullets: [
        "Lập kế hoạch và theo dõi dự án đưa máy tự động vào dây chuyền sản xuất motor.",
        "Phối hợp giữa các bộ phận Thiết kế, Mua hàng, Lắp ráp và Quản lý chất lượng để tháo gỡ điểm nghẽn và giữ đúng tiến độ.",
        "Theo dõi quá trình chạy thử máy thực tế trước khi đưa vào sản xuất hàng loạt.",
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
  languages: [
    {
      language: "Tiếng Anh",
      level: "Giao tiếp cơ bản & Đọc hiểu tài liệu",
      details: [
        "Đọc hiểu tốt tài liệu kỹ thuật chuyên ngành và tài liệu API.",
        "Trao đổi công việc qua email và tin nhắn (chat).",
        "Có khả năng đọc và sử dụng tốt các công cụ công nghệ bằng tiếng Anh.",
      ],
    },
  ],
};
