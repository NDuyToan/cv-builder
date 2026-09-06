import { CVData } from "../types/cv";

export const cvPromax: CVData = {
  id: "cv-promax",
  title: "Bản ứng tuyển ProMax Group (Nhân viên IT)",
  language: "vi",
  labels: {
    objective: "MỤC TIÊU NGHỀ NGHIỆP",
    skills: "KỸ NĂNG CHUYÊN MÔN",
    experience: "KINH NGHIỆM LÀM VIỆC",
    education: "HỌC VẤN",
    languages: "NGOẠI NGỮ",
    responsibilities: "Trách nhiệm chính:",
    technologies: "Công nghệ / Nghiệp vụ:",
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
    roleTitle: "Full-stack Web Developer / Kỹ sư Phần mềm",
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
      // portfolio: {
      //   label: "nguyenduytoan.io.vn",
      //   url: "https://www.nguyenduytoan.io.vn/",
      // },
    },
  },
  objective:
    "Kỹ sư Cơ điện tử (ĐH Bách Khoa Đà Nẵng) với hơn 4 năm kinh nghiệm phát triển Web Application chuyên sâu từ Frontend (React, Next.js, Vue) đến Backend (Node.js, NestJS, RESTful API, PostgreSQL/MySQL) và triển khai hệ thống (Docker, Linux Server). Từng có kinh nghiệm thực tế trong vận hành hệ thống BMS điện nhẹ công trình. Mục tiêu ứng tuyển vị trí Nhân viên IT tại ProMax Group nhằm làm chủ việc xây dựng, số hóa quy trình, vận hành các nền tảng Website/Web App nội bộ và giải pháp giám sát kỹ thuật cho công ty; kết hợp ứng dụng các công cụ AI hiện đại để tối ưu năng suất và hiệu quả vận hành.",
  skills: [
    {
      category: "Phát triển Web Full-stack",
      items: [
        "TypeScript",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Vue.js",
        "HTML5 / CSS3 / SCSS / Tailwind CSS",
        "Node.js / NestJS / Express",
        "RESTful API / GraphQL",
      ],
    },
    {
      category: "Cơ sở dữ liệu & Quản lý dữ liệu",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Prisma ORM",
        "Redux / RTK Query / Vuex",
        "Xử lý dữ liệu lớn (ExcelJS, Caching)",
      ],
    },
    {
      category: "Hệ thống, Triển khai & Công cụ",
      items: [
        "Docker",
        "Linux Server (Ubuntu)",
        "Nginx (Reverse Proxy)",
        "PM2",
        "Git / GitLab CI/CD",
        "Quản lý mã nguồn & Review code",
      ],
    },
    {
      category: "Ứng dụng AI & Tối ưu hiệu suất",
      items: [
        "Cursor AI",
        "GitHub Copilot",
        "ChatGPT / Claude",
        "Ứng dụng AI trong phân tích nghiệp vụ, debug & sinh mã nguồn tự động",
      ],
    },
    {
      category: "Nền tảng Kỹ thuật & Nghiệp vụ chuyên ngành",
      items: [
        "Tư duy Kỹ thuật Cơ điện tử & Tự động hóa",
        "Hiểu biết thực tế về hệ thống BMS hệ thống HVAC",
        "Khả năng đọc hiểu bản vẽ, sơ đồ nguyên lý kỹ thuật, giám sát thi công công trình",
        "Khả năng kết nối ngôn ngữ giữa kỹ sư hiện trường và giải pháp phần mềm",
      ],
    },
  ],
  experiences: [
    {
      company: "Dự án Nâng cao Kỹ thuật & Full-stack Web",
      role: "Full-stack Developer",
      period: "12/2025 – Hiện tại",
      description:
        "Phát triển ứng dụng web end-to-end hoàn chỉnh tích hợp cả Frontend, Backend, Cơ sở dữ liệu và triển khai trên máy chủ thực tế.",
      bullets: [
        "Thiết kế kiến trúc monorepo đồng bộ: Frontend (Next.js), Backend (NestJS/Node.js) và trang quản trị (Admin Portal).",
        "Thiết kế cơ sở dữ liệu quan hệ với PostgreSQL, sử dụng Prisma ORM để tối ưu truy vấn và toàn vẹn dữ liệu.",
        "Xây dựng hệ thống RESTful API an toàn với JWT Authentication, phân quyền theo vai trò (RBAC) và xử lý luồng nghiệp vụ phức tạp.",
        "Đóng gói toàn bộ ứng dụng bằng Docker Compose, triển khai và vận hành trên Linux Server với Nginx làm Reverse Proxy, thiết lập CI/CD tự động hóa.",
        "Ứng dụng Cursor và các mô hình AI để tăng tốc độ phân tích, viết unit test và chuẩn hóa cấu trúc mã nguồn.",
      ],
    },
    {
      company: "EnjoyWorks Company",
      role: "Frontend / Web Developer",
      period: "01/2023 – 11/2025",
      projects: [
        {
          name: "Hệ thống Quản lý Dữ liệu & Điều hành Lao động Địa phương",
          teamSize: "20 thành viên (Frontend: 6)",
          description:
            "Hệ thống quản lý và giám sát nhân lực cho chính quyền địa phương tại Hàn Quốc, xử lý khối lượng lớn hồ sơ, lịch trình làm việc và báo cáo quản trị.",
          responsibilities: [
            "Chủ trì xây dựng cổng thông tin quản trị từ con số 0 bằng React và TypeScript; thiết lập kiến trúc dự án và quy chuẩn mã nguồn.",
            "Làm việc trực tiếp với Product Manager và đội ngũ nghiệp vụ để phân tích yêu cầu, chuyển hóa quy trình thực tế thành tính năng phần mềm trực quan.",
            "Xây dựng bảng điều khiển (Dashboard) thống kê, biểu đồ trực quan hóa dữ liệu và các phân hệ quản lý phức tạp.",
            "Tích hợp xuất/nhập dữ liệu Excel hàng loạt với ExcelJS, xử lý nén và chuyển đổi định dạng tệp phía trình duyệt để giảm tải máy chủ.",
            "Thiết lập phân quyền người dùng nhiều cấp bậc (Super Admin, Master Admin, Admin) đảm bảo an toàn thông tin.",
            "Trực tiếp tham gia đóng gói, build và triển khai ứng dụng lên máy chủ VPS qua PM2.",
          ],
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Redux-Saga",
            "Tailwind CSS",
            "Ant Design",
            "ExcelJS",
            "GitLab",
            "PM2 / Linux",
          ],
        },
        {
          name: "Goodtraepay & Đối tác Linglow Portal",
          description:
            "Xây dựng nền tảng thanh toán số (NFC/QR) và cổng thông tin đối tác tuyển dụng, vận hành ổn định trên cả Web và ứng dụng di động WebView.",
          responsibilities: [
            "Phát triển giao diện responsive mượt mà trên đa nền tảng (Desktop, Mobile, WebView) với Next.js và React.",
            "Tích hợp RESTful API / RTK Query, tối ưu tốc độ tải trang và trải nghiệm người dùng.",
            "Đóng gói bản build và triển khai thử nghiệm trên các môi trường staging và production.",
          ],
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "RTK Query",
            "Tailwind CSS",
            "RESTful API",
          ],
        },
      ],
    },
    {
      company: "SmartDev & NCC ASIA Company",
      role: "Web Application Developer",
      period: "12/2019 – 10/2022",
      projects: [
        {
          name: "Nền tảng Thẩm định Bảo hiểm M&A & e-Channel Portal",
          description:
            "Phát triển các ứng dụng web phục vụ thẩm định hợp đồng bảo hiểm M&A và hệ thống cổng bán hàng trực tuyến cho đối tác quốc tế.",
          responsibilities: [
            "Phát triển giao diện web nghiệp vụ chuyên sâu bằng Vue.js, Vuetify và JavaScript.",
            "Tích hợp RESTful API và GraphQL API, đảm bảo tương thích đa trình duyệt và chuẩn hóa luồng nhập liệu form chặt chẽ.",
            "Làm việc theo quy trình Agile/Scrum, chủ động đề xuất giải pháp kỹ thuật nhằm tăng tốc tiến độ dự án.",
          ],
          technologies: [
            "Vue.js",
            "Vuetify",
            "JavaScript",
            "GraphQL",
            "RESTful API",
            "Git",
          ],
        },
      ],
    },
    {
      company: "Công ty TNHH Vinteli",
      role: "Kỹ sư Kỹ thuật Hệ thống & BMS",
      period: "11/2017 – 09/2019",
      description:
        "Quản lý kỹ thuật, vận hành hệ thống Quản lý Tòa nhà (BMS) và giám sát triển khai hệ thống điện nhẹ (ELV) tại các công trình trọng điểm.",
      bullets: [
        "Trực tiếp vận hành, giám sát và bảo trì hệ thống Quản lý Tòa nhà (BMS) tại Nhà ga Quốc tế T2 Đà Nẵng, kiểm soát hoạt động liên tục của hệ thống HVAC.",
        "Giám sát thi công, cấu hình và nghiệm thu hệ thống kiểm soát ra vào (ACS), hệ thống camera quan sát (CCTV) và hạ tầng mạng tại Nhà ga Quốc tế Cam Ranh.",
        "Đọc hiểu bản vẽ thiết kế thi công, sơ đồ nguyên lý điều khiển; phối hợp các nhà thầu giải quyết sự cố kỹ thuật tại công trường.",
        "Thực hiện kiểm thử thực địa, lập biên bản nghiệm thu kỹ thuật và bàn giao tài liệu vận hành cho đơn vị chủ đầu tư.",
      ],
    },
    {
      company: "Công ty TNHH Mabuchi Motor Đà Nẵng",
      role: "Kỹ sư Phòng Cải cách Sản xuất",
      period: "08/2016 – 06/2017",
      bullets: [
        "Tham gia dự án tự động hóa dây chuyền sản xuất: đưa máy và thiết bị tự động vào các công đoạn lắp ráp motor.",
        "Phối hợp liên phòng ban (Thiết kế, Mua hàng, Lắp ráp, QC) nhằm tối ưu quy trình sản xuất và đảm bảo chất lượng vận hành.",
        "Quản lý hồ sơ kỹ thuật, danh mục linh kiện và theo dõi chạy thử thiết bị trước khi bàn giao đưa vào vận hành hàng loạt.",
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
      details:
        "Được đào tạo bài bản về tư duy hệ thống, kỹ thuật điều khiển tự động, điện - điện tử, vi điều khiển, phần mềm điều khiển và mạng truyền thông công nghiệp.",
    },
  ],
  languages: [
    {
      language: "Tiếng Anh",
      level: "Giao tiếp công việc & Đọc hiểu tài liệu",
      details: [
        "Đọc hiểu thành thạo tài liệu kỹ thuật, tài liệu công nghệ và tài liệu thiết bị.",
        "Giao tiếp tốt qua văn bản, email kỹ thuật và trao đổi công việc cơ bản.",
      ],
    },
  ],
};
