export interface RecruitmentPosition {
  id: number
  title: {
    vi: string
    en: string
  }
  type: 'fulltime' | 'parttime' | 'intern'
  location: string
  salary: string
  description: {
    vi: string
    en: string
  }
  requirements: {
    vi: string[]
    en: string[]
  }
  benefits: {
    vi: string[]
    en: string[]
  }
  contactEmail: string
}

export const recruitmentPositions: RecruitmentPosition[] = [
  {
    id: 1,
    title: {
      vi: 'Kỹ Sư Thiết Kế Nhôm Kính',
      en: 'Aluminum Glass Design Engineer'
    },
    type: 'fulltime',
    location: 'TP. Hồ Chí Minh',
    salary: '25 - 35 triệu',
    description: {
      vi: 'Phụ trách khảo sát, triển khai bản vẽ kỹ thuật và phối hợp xưởng sản xuất.',
      en: 'Handle site survey, produce technical drawings and coordinate with manufacturing.'
    },
    requirements: {
      vi: [
        'Tốt nghiệp ĐH chuyên ngành xây dựng, kiến trúc hoặc cơ khí',
        'Sử dụng thành thạo AutoCAD, Revit là lợi thế',
        'Tối thiểu 2 năm kinh nghiệm thiết kế nhôm kính'
      ],
      en: [
        'Bachelor in civil engineering, architecture or mechanical',
        'Proficient in AutoCAD (Revit is a plus)',
        'At least 2 years experience in aluminum glass design'
      ]
    },
    benefits: {
      vi: [
        'Lương tháng 13, thưởng theo dự án',
        'Hỗ trợ chi phí xăng xe, điện thoại',
        'Đào tạo chuyên sâu về công nghệ nhôm kính'
      ],
      en: [
        '13th-month salary and project bonus',
        'Transportation & phone allowance',
        'Intensive training on latest aluminum-glass tech'
      ]
    },
    contactEmail: 'hr@nhomkinh.com'
  },
  {
    id: 2,
    title: {
      vi: 'Giám Sát Công Trình Nhôm Kính',
      en: 'Site Supervisor'
    },
    type: 'fulltime',
    location: 'Hà Nội / TP.HCM',
    salary: '20 - 30 triệu',
    description: {
      vi: 'Quản lý tiến độ, chất lượng thi công và nghiệm thu hạng mục nhôm kính.',
      en: 'Manage schedule, quality control and acceptance for aluminum glass scopes.'
    },
    requirements: {
      vi: [
        'Hiểu biết hệ nhôm Xingfa, PMA, Eurowindow',
        'Kỹ năng quản lý đội thi công 10-15 người',
        'Sẵn sàng đi công trình ngoại tỉnh'
      ],
      en: [
        'Familiar with Xingfa, PMA, Eurowindow systems',
        'Capability to manage 10-15 installers',
        'Willing to travel for provincial projects'
      ]
    },
    benefits: {
      vi: [
        'Nhà ở/đi lại công tác do công ty chi trả',
        'Bảo hiểm tai nạn 24/24',
        'Thưởng nóng theo tiến độ'
      ],
      en: [
        'Accommodation & travel covered for projects',
        '24/7 accident insurance',
        'Progress-based incentives'
      ]
    },
    contactEmail: 'tuyendung@nhomkinh.com'
  },
  {
    id: 3,
    title: {
      vi: 'Chuyên Viên Kinh Doanh Dự Án',
      en: 'Project Sales Executive'
    },
    type: 'fulltime',
    location: 'Đà Nẵng',
    salary: '15 - 25 triệu + hoa hồng',
    description: {
      vi: 'Tìm kiếm khách hàng dự án, tư vấn giải pháp nhôm kính và chăm sóc sau bán hàng.',
      en: 'Develop project clients, consult solutions and handle post-sales care.'
    },
    requirements: {
      vi: [
        'Có network lĩnh vực xây dựng là lợi thế',
        'Kỹ năng giao tiếp, thuyết trình tốt',
        'Kiên trì, chịu được áp lực chỉ tiêu'
      ],
      en: [
        'Existing construction network is a big plus',
        'Excellent communication & presentation',
        'Resilient and target-driven'
      ]
    },
    benefits: {
      vi: [
        'Hoa hồng hấp dẫn theo doanh số',
        'Hỗ trợ marketing và danh sách khách hàng',
        'Xét tăng lương 6 tháng/lần'
      ],
      en: [
        'Attractive commission scheme',
        'Marketing support and lead list provided',
        'Salary review every 6 months'
      ]
    },
    contactEmail: 'sales@nhomkinh.com'
  }
]


