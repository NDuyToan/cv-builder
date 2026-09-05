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
      portfolio: {
        label: "nguyenduytoan.io.vn",
        url: "https://www.nguyenduytoan.io.vn/",
      },
    },
  },
  objective:
    "Frontend Developer với hơn 4 năm kinh nghiệm thực tế với React, Next.js và TypeScript. Có thế mạnh về xây dựng ứng dụng web từ đầu, tạo bộ component tái sử dụng và tối ưu hiển thị responsive trên desktop, mobile lẫn WebView. Nắm vững quản lý state, xử lý form phức tạp, tích hợp RESTful API và GraphQL, cùng kinh nghiệm phối hợp hiệu quả trong nhóm Agile.",
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
      company: "Dự án cá nhân & Nâng cao kỹ thuật",
      period: "12/2025 – Hiện tại",
      description:
        "Đang phát triển các dự án cá nhân full-stack, tiêu biểu là Badminton Shop, sử dụng Next.js, NestJS, TypeScript, PostgreSQL và Prisma. Tập trung nâng cao năng lực phát triển ứng dụng end-to-end, thực hành kiến trúc phần mềm hiện đại và xây dựng các component có tính tái sử dụng cao.",
      bullets: [
        "Thiết kế và triển khai kiến trúc monorepo gồm frontend, backend và admin, tổ chức mã nguồn theo hướng module hóa, dễ bảo trì và mở rộng.",
        "Xây dựng các chức năng quản lý sản phẩm, danh mục, xác thực tài khoản và RESTful API, đồng thời thực hành kết nối và quản lý dữ liệu với PostgreSQL và Prisma.",
        "Thực hành triển khai ứng dụng thực tế trên Linux, Docker và PM2, đồng thời xây dựng quy trình CI/CD với GitLab để tự động hóa việc build và deploy.",
        "Nâng cao kiến thức về NestJS, Prisma, PostgreSQL, Docker và CI/CD thông qua quá trình phát triển, kiểm thử và vận hành dự án.",
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
            "Hệ thống quản lý lao động cho chính quyền địa phương tại Hàn Quốc, phục vụ theo dõi lao động thời vụ nước ngoài, chủ hộ sử dụng lao động và điều phối công việc qua web quản trị và ứng dụng WebView.",
          responsibilities: [
            "Xây dựng cổng web quản trị từ đầu bằng React và TypeScript, thiết lập cấu trúc mã nguồn, luồng dữ liệu và phát triển các màn hình chính.",
            "Làm việc cùng BA, PM và QC để làm rõ nghiệp vụ, phản biện tính khả thi kỹ thuật trước khi bắt đầu lập trình.",
            "Phát triển các phân hệ quản lý hồ sơ lao động, danh sách chủ sử dụng, bảng phân công việc làm, biểu đồ thống kê và bảng dữ liệu lớn.",
            "Tối ưu giao diện responsive trên máy tính, máy tính bảng, điện thoại và các trang WebView nhúng trong ứng dụng di động.",
            "Quản lý dữ liệu ứng dụng với Redux-Saga và xử lý các biểu mẫu đăng ký nhiều bước bằng Formik và Yup.",
            "Cài đặt phân quyền người dùng theo vai trò (RBAC) cho ba cấp: Super Admin, Master Admin và Admin.",
            "Tích hợp thư viện ExcelJS để xử lý xuất nhập khẩu danh sách hàng nghìn hồ sơ lao động.",
            "Xử lý nén ảnh ngay tại trình duyệt, đổi định dạng ảnh HEIC sang PNG và tải tệp lên tuần tự để tránh quá tải máy chủ.",
            "Hỗ trợ giao diện đa ngôn ngữ với i18next; trực tiếp đóng gói và vận hành hệ thống trên máy chủ VPS qua PM2.",
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
            "Nền tảng ví điện tử WebView hỗ trợ thanh toán qua thẻ NFC và mã QR. Tham gia phát triển các phân hệ Tương tác cộng đồng, Khảo sát, Diễn đàn hỏi đáp và Thử thách hàng ngày.",
          responsibilities: [
            "Xây dựng giao diện cho các tính năng Cộng đồng, Khảo sát ý kiến, Diễn đàn hỏi đáp và Thử thách hàng ngày bằng React.",
            "Đảm bảo các màn hình WebView hiển thị chuẩn xác và cuộn mượt khi tích hợp vào ứng dụng di động gốc.",
            "Phối hợp với đội Backend và QC để tích hợp API, kiểm thử tính năng và xử lý lỗi giao diện.",
            "Đóng gói bản build frontend và cập nhật mã nguồn lên môi trường thử nghiệm và vận hành thực tế.",
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
            "Cổng web quản trị hệ thống và đối tác tuyển dụng, hỗ trợ doanh nghiệp đăng tin việc làm, duyệt hồ sơ ứng viên từ app Linglow và theo dõi kết quả tuyển dụng.",
          responsibilities: [
            "Phát triển và duy trì trang web quản trị cùng cổng dành cho đối tác bằng Next.js và TypeScript.",
            "Xây dựng các component giao diện dùng chung phục vụ quản lý tài khoản, đăng tin tuyển dụng và lọc hồ sơ ứng viên.",
            "Trao đổi trực tiếp với nhóm Backend và Thiết kế để thống nhất trải nghiệm người dùng và hoàn thiện luồng nghiệp vụ.",
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
            "Ứng dụng web phục vụ việc thẩm định và phát hành bảo hiểm cho các thương vụ Mua bán và Sáp nhập doanh nghiệp (M&A).",
          responsibilities: [
            "Phát triển và duy trì giao diện web thẩm định bảo hiểm M&A bằng Vue.js và Vuetify.",
            "Tách các thành phần giao diện thành component dùng chung để chuẩn hóa hiển thị và dễ nâng cấp mã nguồn.",
            "Tham gia các buổi họp Agile/Scrum hàng ngày và trao đổi trực tiếp với khách hàng để làm rõ yêu cầu nghiệp vụ.",
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
          link: {
            label: "echannel.fubonlife.com.hk",
            url: "https://echannel.fubonlife.com.hk/",
          },
          description:
            "Trang web giới thiệu và đăng ký mua trực tuyến các gói bảo hiểm nhân thọ do tập đoàn Fubon Life phát hành.",
          responsibilities: [
            "Xây dựng giao diện web bán bảo hiểm trực tuyến bằng JavaScript và jQuery.",
            "Hiện thực hóa bản vẽ thiết kế thành trang web responsive và phối hợp với đội kỹ sư tại Singapore để kết nối GraphQL API.",
            "Kiểm tra và xử lý lỗi hiển thị trên nhiều trình duyệt khác nhau để đảm bảo tính đồng nhất.",
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
          description: "Website tìm kiếm và đặt phòng khách sạn trực tuyến.",
          responsibilities: [
            "Phát triển giao diện trang đặt phòng bằng Vue.js và Element UI.",
            "Kết nối RESTful API qua Axios và quản lý trạng thái tập trung với Vuex.",
            "Tối ưu hiển thị cho nhiều độ phân giải màn hình và quản lý mã nguồn qua Git.",
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
        {
          name: "Hệ thống quản lý bảo hiểm",
          description:
            "Bảo trì ứng dụng web nội bộ phục vụ nghiệp vụ bảo hiểm.",
          responsibilities: [
            "Sửa lỗi được báo cáo và duy trì hoạt động ổn định của các tính năng sẵn có.",
            "Hỗ trợ phát triển và cập nhật thêm các màn hình mới bằng Angular 6 và Bootstrap.",
          ],
          technologies: [
            "Angular 6",
            "Bootstrap",
            "TypeScript",
            "Git",
            "GitLab",
          ],
        },
      ],
    },
    {
      company: "Công ty TNHH Vinteli",
      role: "Kỹ sư kỹ thuật",
      period: "11/2017 – 09/2019",
      bullets: [
        "Vận hành và bảo trì hệ thống Quản lý Tòa nhà (BMS) tại Nhà ga Quốc tế T2 Đà Nẵng, đảm bảo hệ thống HVAC và xử lý nước thải chạy ổn định.",
        "Giám sát thi công hệ thống kiểm soát ra vào (ACS), camera quan sát (CCTV) cùng mạng Wi-Fi tại Nhà ga Quốc tế Cam Ranh.",
        "Làm việc với các đơn vị nhà thầu tại công trường để kiểm tra chất lượng và bám sát tiến độ cam kết.",
        "Thực hiện kiểm thử thực địa, lập biên bản nghiệm thu kỹ thuật và bàn giao hệ thống cho chủ đầu tư.",
        "Tham gia các khóa đào tạo kỹ thuật chuyên sâu về giải pháp Nhà thông minh (Smart Home).",
      ],
    },
    {
      company: "Công ty TNHH Mabuchi Motor Đà Nẵng",
      role: "Nhân viên Phòng Cải cách sản xuất",
      period: "08/2016 – 06/2017",
      bullets: [
        "Lập kế hoạch và theo dõi dự án đưa máy tự động vào dây chuyền sản xuất motor.",
        "Phối hợp giữa các bộ phận Thiết kế, Mua hàng, Lắp ráp và Quản lý chất lượng để tháo gỡ điểm nghẽn và giữ đúng tiến độ.",
        "Trực tiếp theo dõi quá trình chạy thử máy trước khi bàn giao vào chuyền sản xuất hàng loạt.",
        "Quản lý và cập nhật hồ sơ kỹ thuật, danh mục linh kiện và báo cáo tiến độ triển khai.",
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
        "Đọc hiểu tốt tài liệu kỹ thuật chuyên ngành và API specifications.",
        "Giao tiếp công việc hiệu quả qua email và tin nhắn (chat).",
        "Giao tiếp hội thoại cơ bản trong trao đổi công việc hàng ngày.",
      ],
    },
  ],
};
