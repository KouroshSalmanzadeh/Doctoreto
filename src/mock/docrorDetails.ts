import { DoctorDetailsModel } from "@/models/doctorDetails.model";

export const doctors: DoctorDetailsModel[] = [
  {
    id: 1,
    name: "دکتر علی محمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/cwLjGvJuCLLs1gwidcB4jxteoW3NOT4sSuz4Lvyc.jpg",
    expertise: "پزشکی داخلی",
    services: ["پلاسما تراپی", "درمان سنگ کلیه"],
    plural: ["inPerson", "online"],
    star: 4.3,
    reviewCount: 42,
    gender: "male",
    address: "مشهد - احمد آباد - پاستور 18",
    about:
      "متخصص بیماریهای داخلی با ۱۵ سال سابقه، عضو انجمن گوارش ایران، دارای تجربه در درمان بیماریهای کبد و کلیه",
    phone: "051-37215430",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۱۰:۳۰",
        details_type: {
          price: 200000,
          duration: 30,
          description: "ویزیت حضوری در کلینیک تخصصی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۲۰:۰۰",
        details_type: {
          price: 150000,
          duration: 25,
          features: ["مشاوره ویدیویی", "ارسال آزمایشات"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.3,
      total: 42,
      criteria: {
        professional_behavior: 4.5,
        time_allocation: 4.1,
        diagnostic_skill: 4.4,
        reception_process: 4.0,
        clinic_conditions: 4.2,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 2,
    name: "دکتر فاطمه احمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2023/4/hyoYGR57yG9Z8M5QyDbDkICrliYPme2DPXtVcp9q.jpg",
    expertise: "پزشکی اطفال",
    services: ["واکسیناسیون", "درمان عفونت ادراری در کودکان"],
    plural: ["online", "tell"],
    star: 3.8,
    reviewCount: 67,
    gender: "female",
    address: "تهران - تجریش - خیابان شهید فلاحی",
    about:
      "فوق تخصص نوزادان با تمرکز بر واکسیناسیون و سلامت کودکان، عضو هیئت علمی دانشگاه علوم پزشکی تهران",
    phone: "021-22784590",
    services_types: [
      {
        type: "online",
        next_slot: "امروز | ۱۹:۳۰",
        details_type: {
          price: 180000,
          duration: 35,
          features: ["مشاوره تصویری", "ارسال مدارک پزشکی"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 120000,
          duration: 20,
          features: ["پاسخگویی تلفنی", "تجویز دارو"],
          description: "مشاوره تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.8,
      total: 67,
      criteria: {
        professional_behavior: 4.0,
        time_allocation: 3.5,
        diagnostic_skill: 4.1,
        reception_process: 3.7,
        clinic_conditions: 3.9,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 3,
    name: "دکتر محسن رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/5/MxS6wK8x4oBa8Bv0BP6suV8TOGjVnwKM1FS4B9Me.jpg",
    expertise: "جراحی عمومی",
    services: ["جراحی فتق", "جراحی هیدروسل بیضه"],
    plural: ["inPerson", "online"],
    star: 4.7,
    reviewCount: 89,
    gender: "male",
    address: "اصفهان - خیابان چهارباغ - کوچه بهار",
    about:
      "جراح عمومی با تخصص در جراحیهای سرپایی، عضو انجمن جراحان ایران، دارای گواهینامه بین‌المللی لاپاراسکوپی",
    phone: "031-36258741",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۱۱:۰۰",
        details_type: {
          price: 350000,
          duration: 45,
          description: "ویزیت و معاینه حضوری",
        },
      },
      {
        type: "online",
        next_slot: "دو روز دیگر | ۱۸:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["مشاوره پیش از عمل", "بررسی مدارک"],
          description: "مشاوره تخصصی",
        },
      },
    ],
    reviews: {
      average_rating: 4.7,
      total: 89,
      criteria: {
        professional_behavior: 4.8,
        time_allocation: 4.5,
        diagnostic_skill: 4.9,
        reception_process: 4.3,
        clinic_conditions: 4.6,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 4,
    name: "دکتر زهرا حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/cwLjGvJuCLLs1gwidcB4jxteoW3NOT4sSuz4Lvyc.jpg",
    expertise: "زنان و زایمان",
    services: ["درمان ناباروری", "جراحی زیبایی زنان"],
    plural: ["tell", "inPerson"],
    star: 4.1,
    reviewCount: 55,
    gender: "female",
    address: "شیراز - خیابان زند - کوچه گلستان",
    about:
      "فوق تخصص ناباروری و جراحیهای زیبایی زنان، عضو انجمن زنان و مامایی ایران، دارای گواهینامه بین‌المللی IVF",
    phone: "071-37269520",
    services_types: [
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 180000,
          duration: 25,
          features: ["مشاوره تلفنی", "پاسخ به سوالات فوری"],
          description: "پشتیبانی تلفنی",
        },
      },
      {
        type: "inPerson",
        next_slot: "دو روز دیگر | ۱۵:۳۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی در مطب",
        },
      },
    ],
    reviews: {
      average_rating: 4.1,
      total: 55,
      criteria: {
        professional_behavior: 4.3,
        time_allocation: 3.9,
        diagnostic_skill: 4.2,
        reception_process: 4.0,
        clinic_conditions: 4.1,
      },
      average_wait_time: "۳۵-۵۵",
    },
  },
  {
    id: 5,
    name: "دکتر سعید کریمی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2023/10/O1AUHLUgOGzT6j6DeqkpD7ZBVA9Ans5HMEOrkw3A.jpg",
    expertise: "پزشکی قلب و عروق",
    services: ["الکتروفیزیولوژی قلب", "اینترونشنال کاردیولوژی"],
    plural: ["inPerson", "online", "tell"],
    star: 4.9,
    reviewCount: 98,
    gender: "male",
    address: "تبریز - خیابان امام - کوچه سلامت",
    about:
      "متخصص آنژیوپلاستی و الکتروفیزیولوژی قلب، عضو انجمن قلب اروپا (ESC)، دارای تجربه در جراحیهای پیچیده قلبی",
    phone: "041-35264710",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۰۰",
        details_type: {
          price: 500000,
          duration: 60,
          description: "ویزیت تخصصی و نوار قلب",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 300000,
          duration: 45,
          features: ["تفسیر آزمایشات", "مشاوره درمانی"],
          description: "مشاوره حرفه ای",
        },
      },
      {
        type: "tell",
        next_slot: "دو روز دیگر | ۱۰:۰۰",
        details_type: {
          price: 200000,
          duration: 20,
          features: ["پاسخ فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.9,
      total: 98,
      criteria: {
        professional_behavior: 4.95,
        time_allocation: 4.8,
        diagnostic_skill: 4.97,
        reception_process: 4.7,
        clinic_conditions: 4.9,
      },
      average_wait_time: "۱۰-۲۰",
    },
  },
  {
    id: 6,
    name: "دکتر مریم قاسمی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2023/4/aL7D0xvO2mhUVCuLh27cgYzlEnK91NyE9l6BN8DS.jpg",
    expertise: "پزشکی پوست",
    services: ["لیزر درمانی", "درمان زگیل تناسلی"],
    plural: ["online", "tell"],
    star: 3.5,
    reviewCount: 34,
    gender: "female",
    address: "کرج - خیابان بهار - کوچه نسترن",
    about:
      "متخصص پوست و مو با تخصص در لیزرتراپی و بیماری‌های مقاربتی، عضو انجمن درماتولوژی ایران، دارای گواهینامه بین‌المللی لیزر از آلمان",
    phone: "026-34256789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۶:۰۰",
        details_type: {
          price: 250000,
          duration: 25,
          features: ["مشاوره تصویری", "بررسی عکس ضایعات"],
          description: "مشاوره تخصصی پوست",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۳۰",
        details_type: {
          price: 180000,
          duration: 15,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.5,
      total: 34,
      criteria: {
        professional_behavior: 3.7,
        time_allocation: 3.2,
        diagnostic_skill: 3.8,
        reception_process: 3.4,
        clinic_conditions: 3.6,
      },
      average_wait_time: "۴۰-۶۰",
    },
  },
  {
    id: 7,
    name: "دکتر رضا موسوی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/nNlM0gpQnOerWloZlrONXskWprU84uDx1VJqhfO7.jpg",
    expertise: "پزشکی مغز و اعصاب",
    services: ["درمان ام‌اس", "صرع"],
    plural: ["tell", "inPerson"],
    star: 4.6,
    reviewCount: 76,
    gender: "male",
    address: "قم - خیابان معلم - کوچه دانش",
    about:
      "فوق تخصص نورولوژی با تمرکز بر بیماری‌های ام‌اس و صرع، عضو هیئت علمی دانشگاه علوم پزشکی قم، دارای گواهینامه EEG پیشرفته",
    phone: "025-37894512",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۳۰",
        details_type: {
          price: 400000,
          duration: 45,
          description: "ویزیت تخصصی و نوار مغز",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۳:۰۰",
        details_type: {
          price: 250000,
          duration: 20,
          features: ["مشاوره دارویی", "پاسخ به سوالات اورژانسی"],
          description: "مشاوره تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.6,
      total: 76,
      criteria: {
        professional_behavior: 4.7,
        time_allocation: 4.4,
        diagnostic_skill: 4.8,
        reception_process: 4.3,
        clinic_conditions: 4.5,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 8,
    name: "دکتر نسرین محمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/zfu5kHcORHsp1vvnsBhgiVUwDMwpiWJCzSD0b4Ht.jpg",
    expertise: "پزشکی گوارش",
    services: ["آندوسکوپی پیشرفته", "درمان بیماری‌های کبد"],
    plural: ["inPerson", "online"],
    star: 4.2,
    reviewCount: 61,
    gender: "female",
    address: "رشت - خیابان مطهری - کوچه سبز",
    about:
      "متخصص گوارش و کبد با ۱۲ سال سابقه، عضو انجمن گوارش اروپا (UEG)، دارای تخصص در آندوسکوپی درمانی",
    phone: "013-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "دو روز دیگر | ۱۴:۰۰",
        details_type: {
          price: 350000,
          duration: 40,
          description: "ویزیت و برنامه‌ریزی درمانی",
        },
      },
      {
        type: "online",
        next_slot: "فردا | ۱۹:۰۰",
        details_type: {
          price: 220000,
          duration: 30,
          features: ["تفسیر آزمایشات کبدی", "مشاوره رژیم غذایی"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.2,
      total: 61,
      criteria: {
        professional_behavior: 4.3,
        time_allocation: 4.0,
        diagnostic_skill: 4.4,
        reception_process: 4.1,
        clinic_conditions: 4.2,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 9,
    name: "دکتر امیر حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/o1W5alQ2i4tvi2jCVyNgf6ga9vWrHlhmcMJcainy.jpg",
    expertise: "پزشکی کلیه",
    services: ["دیالیز", "پیوند کلیه"],
    plural: ["online", "tell"],
    star: 3.9,
    reviewCount: 49,
    gender: "male",
    address: "اهواز - خیابان نفت - کوچه نارنج",
    about:
      "فوق تخصص نفرولوژی و پیوند کلیه، عضو انجمن بین‌المللی نفرولوژی، دارای تجربه در انجام دیالیز پیچیده",
    phone: "061-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "امروز | ۲۰:۳۰",
        details_type: {
          price: 200000,
          duration: 35,
          features: ["بررسی آزمایشات کلیه", "مشاوره درمانی"],
          description: "مشاوره تخصصی",
        },
      },
      {
        type: "tell",
        next_slot: "فردا | ۱۰:۰۰",
        details_type: {
          price: 150000,
          duration: 20,
          features: ["پاسخگویی اورژانسی", "تنظیم دوز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.9,
      total: 49,
      criteria: {
        professional_behavior: 4.0,
        time_allocation: 3.7,
        diagnostic_skill: 4.1,
        reception_process: 3.8,
        clinic_conditions: 3.9,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 10,
    name: "دکتر لیلا رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/drtLRSiXSWL2kKplhGxLu5zjMbJwbnLLxj8BvAJN.jpg",
    expertise: "پزشکی خون و سرطان",
    services: ["درمان سرطان‌های خاص", "پیوند مغز استخوان"],
    plural: ["tell", "inPerson"],
    star: 4.8,
    reviewCount: 92,
    gender: "female",
    address: "کرمان - خیابان شریعتی - کوچه گل",
    about:
      "انکولوژیست و هماتولوژیست با تخصص در پیوند مغز استخوان، عضو انجمن سرطان اروپا (ESMO)، دارای گواهینامه طب تسکینی",
    phone: "034-33784521",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۷:۳۰",
        details_type: {
          price: 600000,
          duration: 60,
          description: "ویزیت تخصصی و برنامه درمانی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۱۵",
        details_type: {
          price: 300000,
          duration: 25,
          features: ["مشاوره داروهای شیمی درمانی", "پاسخ به سوالات فوری"],
          description: "پشتیبانی تخصصی",
        },
      },
    ],
    reviews: {
      average_rating: 4.8,
      total: 92,
      criteria: {
        professional_behavior: 4.9,
        time_allocation: 4.6,
        diagnostic_skill: 4.95,
        reception_process: 4.7,
        clinic_conditions: 4.8,
      },
      average_wait_time: "۱۵-۲۵",
    },
  },
  {
    id: 11,
    name: "دکتر حسین احمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/12/JDlCjCCbWEoi3ZHxCkWHUxILFAEDASskvo0AktBb.jpg",
    expertise: "پزشکی روماتولوژی",
    services: ["درمان روماتیسم", "درمان آرتروز"],
    plural: ["inPerson", "online"],
    star: 4.0,
    reviewCount: 58,
    gender: "male",
    address: "یزد - خیابان امام - کوچه کویر",
    about:
      "متخصص روماتولوژی با تمرکز بر بیماری‌های مفصلی و خودایمنی، عضو انجمن روماتولوژی ایران، دارای گواهینامه تزریق داخل مفصلی",
    phone: "035-36258741",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی و معاینه مفصلی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۹:۳۰",
        details_type: {
          price: 200000,
          duration: 30,
          features: ["تفسیر آزمایشات روماتیسمی", "مشاوره درمانی"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.0,
      total: 58,
      criteria: {
        professional_behavior: 4.2,
        time_allocation: 3.8,
        diagnostic_skill: 4.3,
        reception_process: 3.9,
        clinic_conditions: 4.1,
      },
      average_wait_time: "۳۰-۴۵",
    },
  },
  {
    id: 12,
    name: "دکتر زهرا کریمی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/ioM4fuBq3GiXOhESQGrBDOxcdgNbSZHGfWECh5wz.jpg",
    expertise: "پزشکی طب فیزیکی و توان‌بخشی",
    services: ["فیزیوتراپی", "درمان دردهای مزمن"],
    plural: ["online", "tell"],
    star: 4.4,
    reviewCount: 73,
    gender: "female",
    address: "ارومیه - خیابان دانش - کوچه آفتاب",
    about:
      "فوق تخصص طب فیزیکی و توان‌بخشی، عضو انجمن فیزیاتری ایران، دارای گواهینامه تزریق اپیدورال و بلوک عصبی",
    phone: "044-33659874",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۵:۰۰",
        details_type: {
          price: 220000,
          duration: 35,
          features: ["مشاوره تمرینات درمانی", "بررسی MRI"],
          description: "مشاوره تخصصی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز تمرینات"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.4,
      total: 73,
      criteria: {
        professional_behavior: 4.5,
        time_allocation: 4.2,
        diagnostic_skill: 4.6,
        reception_process: 4.1,
        clinic_conditions: 4.3,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 13,
    name: "دکتر محمود رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2024/1/rBKXKEKAf92cHB6WzJPLF5VKlqGaLgUNzWEys73V.jpg",
    expertise: "پزشکی هسته‌ای",
    services: ["درمان سرطان با رادیوتراپی", "اسکن هسته‌ای"],
    plural: ["tell", "inPerson"],
    star: 3.7,
    reviewCount: 41,
    gender: "male",
    address: "زاهدان - خیابان آزادی - کوچه صدف",
    about:
      "متخصص پزشکی هسته‌ای با تمرکز بر درمان سرطان و تصویربرداری پیشرفته، عضو انجمن پزشکی هسته‌ای اروپا (EANM)",
    phone: "054-33784521",
    services_types: [
      {
        type: "inPerson",
        next_slot: "دو روز دیگر | ۱۰:۳۰",
        details_type: {
          price: 400000,
          duration: 50,
          description: "ویزیت و برنامه‌ریزی درمانی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 250000,
          duration: 25,
          features: ["پاسخ به سوالات فوری", "بررسی عوارض درمان"],
          description: "مشاوره تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.7,
      total: 41,
      criteria: {
        professional_behavior: 3.9,
        time_allocation: 3.5,
        diagnostic_skill: 3.8,
        reception_process: 3.6,
        clinic_conditions: 3.7,
      },
      average_wait_time: "۴۰-۶۰",
    },
  },
  {
    id: 14,
    name: "دکتر سارا محمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/1/jJv6IbQ3oEzmUXli2XsBYnij8SVSYNAjQvboxZNg.jpg",
    expertise: "پزشکی قانونی",
    services: ["تشخیص علت مرگ", "بررسی جراحات"],
    plural: ["inPerson", "online"],
    star: 4.5,
    reviewCount: 82,
    gender: "female",
    address: "بندرعباس - خیابان ساحلی - کوچه دریا",
    about:
      "پزشک قانونی با تخصص در تشخیص علل مرگ و بررسی جراحات، عضو هیئت علمی دانشگاه علوم پزشکی هرمزگان",
    phone: "076-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۱۱:۰۰",
        details_type: {
          price: 350000,
          duration: 45,
          description: "ویزیت و بررسی مدارک پزشکی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۲۰:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["مشاوره حقوقی پزشکی", "بررسی گزارشات"],
          description: "مشاوره تخصصی",
        },
      },
    ],
    reviews: {
      average_rating: 4.5,
      total: 82,
      criteria: {
        professional_behavior: 4.6,
        time_allocation: 4.3,
        diagnostic_skill: 4.7,
        reception_process: 4.2,
        clinic_conditions: 4.4,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 15,
    name: "دکتر علی رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/Abp4kzuRh174baCXvTiMUcEGU9yfFwxUIQhV7LQM.jpg",
    expertise: "پزشکی ورزشی",
    services: ["درمان آسیب‌های ورزشی", "بازتوانی ورزشی"],
    plural: ["online", "tell"],
    star: 3.6,
    reviewCount: 37,
    gender: "male",
    address: "همدان - خیابان بوعلی - کوچه حکیم",
    about:
      "متخصص پزشکی ورزشی با تمرکز بر آسیب‌های ورزشی و بازتوانی، عضو انجمن پزشکی ورزشی ایران، دارای گواهینامه توان‌بخشی ورزشی",
    phone: "081-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۶:۳۰",
        details_type: {
          price: 180000,
          duration: 30,
          features: ["مشاوره تمرینات درمانی", "بررسی MRI"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۳۰",
        details_type: {
          price: 120000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز تمرینات"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.6,
      total: 37,
      criteria: {
        professional_behavior: 3.8,
        time_allocation: 3.4,
        diagnostic_skill: 3.7,
        reception_process: 3.5,
        clinic_conditions: 3.6,
      },
      average_wait_time: "۳۵-۵۵",
    },
  },
  {
    id: 16,
    name: "دکتر فاطمه حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2023/5/C4FNDyhJQpzhcnYvNBASU7KU9sSFc57HGmilZMYt.jpg",
    expertise: "پزشکی چشم",
    services: ["جراحی شبکیه", "درمان گلوکوم"],
    plural: ["tell", "inPerson"],
    star: 4.7,
    reviewCount: 88,
    gender: "female",
    address: "ساری - خیابان انقلاب - کوچه باران",
    about:
      "فوق تخصص چشم پزشکی با تمرکز بر جراحی شبکیه و گلوکوم، عضو انجمن چشم پزشکی ایران، دارای گواهینامه لیزر شبکیه",
    phone: "011-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۰۰",
        details_type: {
          price: 450000,
          duration: 50,
          description: "ویزیت تخصصی و معاینه چشم",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 300000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.7,
      total: 88,
      criteria: {
        professional_behavior: 4.8,
        time_allocation: 4.5,
        diagnostic_skill: 4.9,
        reception_process: 4.4,
        clinic_conditions: 4.6,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 17,
    name: "دکتر محسن کریمی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2024/10/Zcmk4afpBaOXUU7UTUo8LJDmKYSJzJeSeDIuM7w6.jpg",
    expertise: "پزشکی گوش، حلق و بینی",
    services: ["جراحی سینوس", "درمان وزوز گوش"],
    plural: ["inPerson", "online"],
    star: 4.1,
    reviewCount: 53,
    gender: "male",
    address: "گرگان - خیابان شالیکوبی - کوچه برنج",
    about:
      "متخصص گوش، حلق و بینی با تخصص در جراحی سینوس و درمان وزوز گوش، عضو انجمن ENT ایران، دارای گواهینامه جراحی آندوسکوپیک",
    phone: "017-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "دو روز دیگر | ۱۰:۰۰",
        details_type: {
          price: 350000,
          duration: 40,
          description: "ویزیت و معاینه تخصصی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۹:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["مشاوره درمانی", "بررسی عکس سینوس"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.1,
      total: 53,
      criteria: {
        professional_behavior: 4.3,
        time_allocation: 3.9,
        diagnostic_skill: 4.4,
        reception_process: 4.0,
        clinic_conditions: 4.2,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 18,
    name: "دکتر زهرا موسوی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2023/4/uFjiue9INHjMx3wiWXi184HLraBu7f8z5o4V64X1.jpg",
    expertise: "پزشکی ارتوپدی",
    services: ["جراحی زانو", "درمان شکستگی‌ها"],
    plural: ["online", "tell"],
    star: 3.8,
    reviewCount: 46,
    gender: "female",
    address: "قزوین - خیابان فردوسی - کوچه فردوسی",
    about:
      "فوق تخصص ارتوپدی با تمرکز بر جراحی زانو و درمان شکستگی‌ها، عضو انجمن ارتوپدی ایران، دارای گواهینامه جراحی آرتروسکوپی",
    phone: "028-33659874",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۴:۰۰",
        details_type: {
          price: 220000,
          duration: 35,
          features: ["مشاوره درمانی", "بررسی عکس‌های رادیولوژی"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.8,
      total: 46,
      criteria: {
        professional_behavior: 4.0,
        time_allocation: 3.6,
        diagnostic_skill: 4.1,
        reception_process: 3.7,
        clinic_conditions: 3.9,
      },
      average_wait_time: "۴۰-۶۰",
    },
  },
  {
    id: 19,
    name: "دکتر رضا احمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/OSUkkSJwTLMQL4uiqqjZ3nOYJIkibcrhFogPkehm.jpg",
    expertise: "پزشکی عفونی",
    services: ["درمان اچ آی وی", "درمان سل"],
    plural: ["tell", "inPerson"],
    star: 4.2,
    reviewCount: 64,
    gender: "male",
    address: "اراک - خیابان امام - کوچه سلامت",
    about:
      "متخصص بیماری‌های عفونی با تمرکز بر درمان HIV و سل، عضو انجمن عفونی ایران، دارای گواهینامه درمان عفونت‌های مقاوم",
    phone: "086-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۳۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت و برنامه‌ریزی درمانی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۳۰",
        details_type: {
          price: 200000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.2,
      total: 64,
      criteria: {
        professional_behavior: 4.4,
        time_allocation: 4.0,
        diagnostic_skill: 4.5,
        reception_process: 4.1,
        clinic_conditions: 4.3,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 20,
    name: "دکتر نسرین رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/5/4Hfo1gLGZW4ctDfghEGLKvBq46kvjGIs3J9Uf56W.jpg",
    expertise: "پزشکی غدد",
    services: ["درمان دیابت", "درمان اختلالات تیروئید"],
    plural: ["inPerson", "online"],
    star: 4.6,
    reviewCount: 79,
    gender: "female",
    address: "کرمانشاه - خیابان شهید بهشتی - کوچه بهشت",
    about:
      "فوق تخصص غدد و متابولیسم با تمرکز بر درمان دیابت و اختلالات تیروئید، عضو انجمن غدد ایران، دارای گواهینامه درمان دیابت پیشرفته",
    phone: "083-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۳۰",
        details_type: {
          price: 400000,
          duration: 45,
          description: "ویزیت تخصصی و بررسی آزمایشات",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۹:۳۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["تفسیر آزمایشات هورمونی", "مشاوره درمانی"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.6,
      total: 79,
      criteria: {
        professional_behavior: 4.7,
        time_allocation: 4.4,
        diagnostic_skill: 4.8,
        reception_process: 4.3,
        clinic_conditions: 4.5,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 21,
    name: "دکتر مهدی رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/U6nfqjMB4iNwsZ0fnc2iZk5XSX4SgCwrhxMlPMV4.jpg",
    expertise: "پزشکی روانپزشکی",
    services: ["درمان افسردگی", "درمان اضطراب"],
    plural: ["online", "tell"],
    star: 3.9,
    reviewCount: 51,
    gender: "male",
    address: "شیراز - خیابان زند - کوچه گلستان",
    about:
      "فوق تخصص روانپزشکی با تمرکز بر درمان افسردگی و اضطراب، عضو انجمن روانپزشکی ایران، دارای گواهینامه روان درمانی شناختی",
    phone: "071-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۵:۰۰",
        details_type: {
          price: 200000,
          duration: 40,
          features: ["مشاوره روان درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.9,
      total: 51,
      criteria: {
        professional_behavior: 4.1,
        time_allocation: 3.7,
        diagnostic_skill: 4.2,
        reception_process: 3.8,
        clinic_conditions: 4.0,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 22,
    name: "دکتر زهرا احمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2023/8/bt05pzt1gOEWzmc2y5cSIF7fsqVSXvez3y52tznF.jpg",
    expertise: "پزشکی آلرژی و ایمونولوژی",
    services: ["درمان آلرژی", "درمان آسم"],
    plural: ["inPerson", "online"],
    star: 4.3,
    reviewCount: 68,
    gender: "female",
    address: "تبریز - خیابان امام - کوچه سلامت",
    about:
      "متخصص آلرژی و ایمونولوژی با تمرکز بر درمان آلرژی و آسم، عضو انجمن آلرژی ایران، دارای گواهینامه تست‌های پوستی پیشرفته",
    phone: "041-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 350000,
          duration: 40,
          description: "ویزیت تخصصی و تست آلرژی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۸:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["تفسیر آزمایشات آلرژی", "مشاوره درمانی"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.3,
      total: 68,
      criteria: {
        professional_behavior: 4.5,
        time_allocation: 4.1,
        diagnostic_skill: 4.6,
        reception_process: 4.0,
        clinic_conditions: 4.2,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 23,
    name: "دکتر محسن حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/cqc5r9259SustH1VzNo45VUWSoCVWqWPtDs51toc.jpg",
    expertise: "پزشکی اورژانس",
    services: ["مدیریت تروما", "احیای قلبی ریوی"],
    plural: ["inPerson", "tell"],
    star: 4.0,
    reviewCount: 57,
    gender: "male",
    address: "کرج - خیابان بهار - کوچه نسترن",
    about:
      "متخصص اورژانس با تمرکز بر مدیریت تروما و احیای قلبی ریوی، عضو انجمن اورژانس ایران، دارای گواهینامه ATLS و ACLS",
    phone: "026-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۱۰:۰۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی و معاینه",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 200000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.0,
      total: 57,
      criteria: {
        professional_behavior: 4.2,
        time_allocation: 3.8,
        diagnostic_skill: 4.3,
        reception_process: 3.9,
        clinic_conditions: 4.1,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 24,
    name: "دکتر سعید موسوی",
    avatar: "",
    expertise: "پزشکی طب سنتی",
    services: ["درمان با گیاهان دارویی", "حجامت"],
    plural: ["online", "tell"],
    star: 3.7,
    reviewCount: 43,
    gender: "male",
    address: "قم - خیابان معلم - کوچه دانش",
    about:
      "متخصص طب سنتی با تمرکز بر درمان با گیاهان دارویی و حجامت، عضو انجمن طب سنتی ایران، دارای گواهینامه طب سوزنی",
    phone: "025-33659874",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۴:۰۰",
        details_type: {
          price: 180000,
          duration: 35,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 120000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز داروهای گیاهی"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.7,
      total: 43,
      criteria: {
        professional_behavior: 3.9,
        time_allocation: 3.5,
        diagnostic_skill: 3.8,
        reception_process: 3.6,
        clinic_conditions: 3.7,
      },
      average_wait_time: "۴۰-۶۰",
    },
  },
  {
    id: 25,
    name: "دکتر مریم رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/3/QMF2F6kNS1WbuPM5s2aayRSVVDaZEqkA5reYH5PT.jpg",
    expertise: "پزشکی طب سوزنی",
    services: ["درمان دردهای مزمن", "درمان میگرن"],
    plural: ["inPerson", "online"],
    star: 4.5,
    reviewCount: 81,
    gender: "female",
    address: "رشت - خیابان مطهری - کوچه سبز",
    about:
      "متخصص طب سوزنی با تمرکز بر درمان دردهای مزمن و میگرن، عضو انجمن طب سوزنی ایران، دارای گواهینامه بین‌المللی طب سوزنی",
    phone: "013-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۰۰",
        details_type: {
          price: 300000,
          duration: 45,
          description: "ویزیت تخصصی و انجام طب سوزنی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۹:۰۰",
        details_type: {
          price: 200000,
          duration: 30,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.5,
      total: 81,
      criteria: {
        professional_behavior: 4.6,
        time_allocation: 4.3,
        diagnostic_skill: 4.7,
        reception_process: 4.2,
        clinic_conditions: 4.4,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 26,
    name: "دکتر رضا کریمی",
    avatar: "",
    expertise: "پزشکی طب کار",
    services: ["معاینات دوره‌ای", "درمان بیماری‌های شغلی"],
    plural: ["tell", "inPerson"],
    star: 3.8,
    reviewCount: 47,
    gender: "male",
    address: "اهواز - خیابان نفت - کوچه نارنج",
    about:
      "متخصص طب کار با تمرکز بر معاینات دوره‌ای و درمان بیماری‌های شغلی، عضو انجمن طب کار ایران، دارای گواهینامه ارزیابی ریسک شغلی",
    phone: "061-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 250000,
          duration: 40,
          description: "ویزیت تخصصی و معاینه شغلی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.8,
      total: 47,
      criteria: {
        professional_behavior: 4.0,
        time_allocation: 3.6,
        diagnostic_skill: 4.1,
        reception_process: 3.7,
        clinic_conditions: 3.9,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 27,
    name: "دکتر نسرین احمدی",
    avatar: "",
    expertise: "پزشکی طب سالمندان",
    services: ["درمان پوکی استخوان", "درمان آلزایمر"],
    plural: ["online", "tell"],
    star: 4.1,
    reviewCount: 62,
    gender: "female",
    address: "کرمان - خیابان شریعتی - کوچه گل",
    about:
      "فوق تخصص طب سالمندان با تمرکز بر درمان پوکی استخوان و آلزایمر، عضو انجمن سالمندان ایران، دارای گواهینامه طب سالمندان پیشرفته",
    phone: "034-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۴:۰۰",
        details_type: {
          price: 200000,
          duration: 35,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.1,
      total: 62,
      criteria: {
        professional_behavior: 4.3,
        time_allocation: 3.9,
        diagnostic_skill: 4.4,
        reception_process: 4.0,
        clinic_conditions: 4.2,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 28,
    name: "دکتر علی حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/1/ahMSOr6LHK75QrRNYWOjTCYNwraz81tM4uBVkem6.jpg",
    expertise: "پزشکی طب مسافرت",
    services: ["واکسیناسیون مسافرت", "درمان بیماری‌های مناطق گرمسیری"],
    plural: ["inPerson", "online"],
    star: 4.4,
    reviewCount: 74,
    gender: "male",
    address: "یزد - خیابان امام - کوچه کویر",
    about:
      "متخصص طب مسافرت با تمرکز بر واکسیناسیون و درمان بیماری‌های مناطق گرمسیری، عضو انجمن طب مسافرت ایران، دارای گواهینامه بین‌المللی طب مسافرت",
    phone: "035-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۳۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی و واکسیناسیون",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۸:۰۰",
        details_type: {
          price: 200000,
          duration: 30,
          features: ["مشاوره پیش از سفر", "بررسی مدارک"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.4,
      total: 74,
      criteria: {
        professional_behavior: 4.5,
        time_allocation: 4.2,
        diagnostic_skill: 4.6,
        reception_process: 4.1,
        clinic_conditions: 4.3,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 29,
    name: "دکتر فاطمه رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2024/2/iQOUi3QeWg9JzK7km3DyCW30EjLxuUB0OEPeHX6z.jpg",
    expertise: "پزشکی طب خواب",
    services: ["درمان اختلالات خواب", "درمان خروپف"],
    plural: ["tell", "inPerson"],
    star: 3.6,
    reviewCount: 39,
    gender: "female",
    address: "ارومیه - خیابان دانش - کوچه آفتاب",
    about:
      "متخصص طب خواب با تمرکز بر درمان اختلالات خواب و خروپف، عضو انجمن خواب ایران، دارای گواهینامه پلی‌سومنوگرافی",
    phone: "044-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 350000,
          duration: 45,
          description: "ویزیت تخصصی و بررسی اختلالات خواب",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 200000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.6,
      total: 39,
      criteria: {
        professional_behavior: 3.8,
        time_allocation: 3.4,
        diagnostic_skill: 3.7,
        reception_process: 3.5,
        clinic_conditions: 3.6,
      },
      average_wait_time: "۳۵-۵۵",
    },
  },
  {
    id: 30,
    name: "دکتر محسن احمدی",
    avatar: "",
    expertise: "پزشکی طب پیشگیری",
    services: ["غربالگری سرطان", "پیشگیری از بیماری‌های قلبی"],
    plural: ["online", "tell"],
    star: 4.7,
    reviewCount: 85,
    gender: "male",
    address: "زاهدان - خیابان آزادی - کوچه صدف",
    about:
      "متخصص طب پیشگیری با تمرکز بر غربالگری سرطان و پیشگیری از بیماری‌های قلبی، عضو انجمن طب پیشگیری ایران، دارای گواهینامه غربالگری پیشرفته",
    phone: "054-33659874",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۵:۰۰",
        details_type: {
          price: 250000,
          duration: 35,
          features: ["مشاوره پیشگیرانه", "بررسی آزمایشات"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 180000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.7,
      total: 85,
      criteria: {
        professional_behavior: 4.8,
        time_allocation: 4.5,
        diagnostic_skill: 4.9,
        reception_process: 4.4,
        clinic_conditions: 4.6,
      },
      average_wait_time: "۱۵-۲۵",
    },
  },
  {
    id: 31,
    name: "دکتر زهرا رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/ZONRuntEfqD05OcAgxIpAHnxBPXPICUdrTVd6MhQ.jpg",
    expertise: "پزشکی طب اعتیاد",
    services: ["درمان اعتیاد", "سم‌زدایی"],
    plural: ["inPerson", "online"],
    star: 4.2,
    reviewCount: 66,
    gender: "female",
    address: "بندرعباس - خیابان ساحلی - کوچه دریا",
    about:
      "متخصص طب اعتیاد با تمرکز بر درمان اعتیاد و سم‌زدایی، عضو انجمن طب اعتیاد ایران، دارای گواهینامه درمان اعتیاد پیشرفته",
    phone: "076-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۰۰",
        details_type: {
          price: 400000,
          duration: 50,
          description: "ویزیت تخصصی و برنامه درمانی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۸:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.2,
      total: 66,
      criteria: {
        professional_behavior: 4.4,
        time_allocation: 4.0,
        diagnostic_skill: 4.5,
        reception_process: 4.1,
        clinic_conditions: 4.3,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 32,
    name: "دکتر رضا حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2024/4/DSfvYoriUTkiH3SZdm6EE1d5qqMPN6IwwZAOUtKj.jpg",
    expertise: "پزشکی طب سفر",
    services: ["واکسیناسیون مسافرت", "درمان بیماری‌های مناطق گرمسیری"],
    plural: ["tell", "inPerson"],
    star: 3.9,
    reviewCount: 52,
    gender: "male",
    address: "همدان - خیابان بوعلی - کوچه حکیم",
    about:
      "متخصص طب سفر با تمرکز بر واکسیناسیون و درمان بیماری‌های مناطق گرمسیری، عضو انجمن طب سفر ایران، دارای گواهینامه بین‌المللی طب سفر",
    phone: "081-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی و واکسیناسیون",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 200000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.9,
      total: 52,
      criteria: {
        professional_behavior: 4.1,
        time_allocation: 3.7,
        diagnostic_skill: 4.2,
        reception_process: 3.8,
        clinic_conditions: 4.0,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 33,
    name: "دکتر نسرین کریمی",
    avatar: "",
    expertise: "پزشکی طب سالمندان",
    services: ["درمان پوکی استخوان", "درمان آلزایمر"],
    plural: ["online", "tell"],
    star: 4.0,
    reviewCount: 59,
    gender: "female",
    address: "ساری - خیابان انقلاب - کوچه باران",
    about:
      "فوق تخصص طب سالمندان با تمرکز بر درمان پوکی استخوان و آلزایمر، عضو انجمن سالمندان ایران، دارای گواهینامه طب سالمندان پیشرفته",
    phone: "011-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۴:۰۰",
        details_type: {
          price: 200000,
          duration: 35,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.0,
      total: 59,
      criteria: {
        professional_behavior: 4.2,
        time_allocation: 3.8,
        diagnostic_skill: 4.3,
        reception_process: 3.9,
        clinic_conditions: 4.1,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 34,
    name: "دکتر علی احمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/JxSxC9T0HsszpfdxyhQnC5IJEQxNs0cwN0F0N9hg.jpg",
    expertise: "پزشکی طب کار",
    services: ["معاینات دوره‌ای", "درمان بیماری‌های شغلی"],
    plural: ["inPerson", "online"],
    star: 4.3,
    reviewCount: 71,
    gender: "male",
    address: "گرگان - خیابان شالیکوبی - کوچه برنج",
    about:
      "متخصص طب کار با تمرکز بر معاینات دوره‌ای و درمان بیماری‌های شغلی، عضو انجمن طب کار ایران، دارای گواهینامه ارزیابی ریسک شغلی",
    phone: "017-33659874",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۳۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی و معاینه شغلی",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۸:۰۰",
        details_type: {
          price: 200000,
          duration: 30,
          features: ["مشاوره پیشگیرانه", "بررسی آزمایشات"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.3,
      total: 71,
      criteria: {
        professional_behavior: 4.5,
        time_allocation: 4.1,
        diagnostic_skill: 4.6,
        reception_process: 4.2,
        clinic_conditions: 4.4,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 35,
    name: "دکتر فاطمه موسوی",
    avatar: "",
    expertise: "پزشکی طب سوزنی",
    services: ["درمان دردهای مزمن", "درمان میگرن"],
    plural: ["tell", "inPerson"],
    star: 4.6,
    reviewCount: 83,
    gender: "female",
    address: "قزوین - خیابان فردوسی - کوچه فردوسی",
    about:
      "متخصص طب سوزنی با تمرکز بر درمان دردهای مزمن و میگرن، عضو انجمن طب سوزنی ایران، دارای گواهینامه بین‌المللی طب سوزنی",
    phone: "028-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 350000,
          duration: 45,
          description: "ویزیت تخصصی و انجام طب سوزنی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 200000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.6,
      total: 83,
      criteria: {
        professional_behavior: 4.7,
        time_allocation: 4.4,
        diagnostic_skill: 4.8,
        reception_process: 4.3,
        clinic_conditions: 4.5,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 36,
    name: "دکتر محسن رضایی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/1/2UDIk8QvASiNJ4LAymryrhTFrRq9QBLNmQO6eAYE.jpg",
    expertise: "پزشکی طب سنتی",
    services: ["درمان با گیاهان دارویی", "حجامت"],
    plural: ["online", "tell"],
    star: 3.5,
    reviewCount: 36,
    gender: "male",
    address: "اراک - خیابان امام - کوچه سلامت",
    about:
      "متخصص طب سنتی با تمرکز بر درمان با گیاهان دارویی و حجامت، عضو انجمن طب سنتی ایران، دارای گواهینامه طب سوزنی",
    phone: "086-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۴:۰۰",
        details_type: {
          price: 180000,
          duration: 35,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 120000,
          duration: 20,
          features: ["پاسخگویی فوری", "تجویز داروهای گیاهی"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.5,
      total: 36,
      criteria: {
        professional_behavior: 3.7,
        time_allocation: 3.3,
        diagnostic_skill: 3.8,
        reception_process: 3.4,
        clinic_conditions: 3.6,
      },
      average_wait_time: "۴۰-۶۰",
    },
  },
  {
    id: 37,
    name: "دکتر زهرا احمدی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2024/9/DPjlu7uWJNfdntqMHg8AyJvIqnrdcETo4P5lyDgq.jpg",
    expertise: "پزشکی اورژانس",
    services: ["مدیریت تروما", "احیای قلبی ریوی"],
    plural: ["inPerson", "online"],
    star: 4.1,
    reviewCount: 63,
    gender: "female",
    address: "کرمانشاه - خیابان شهید بهشتی - کوچه بهشت",
    about:
      "متخصص اورژانس با تمرکز بر مدیریت تروما و احیای قلبی ریوی، عضو انجمن اورژانس ایران، دارای گواهینامه ATLS و ACLS",
    phone: "083-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۰۰",
        details_type: {
          price: 350000,
          duration: 45,
          description: "ویزیت تخصصی و معاینه",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۸:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["مشاوره درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.1,
      total: 63,
      criteria: {
        professional_behavior: 4.3,
        time_allocation: 3.9,
        diagnostic_skill: 4.4,
        reception_process: 4.0,
        clinic_conditions: 4.2,
      },
      average_wait_time: "۲۵-۴۰",
    },
  },
  {
    id: 38,
    name: "دکتر رضا کریمی",
    avatar: "",
    expertise: "پزشکی آلرژی و ایمونولوژی",
    services: ["درمان آلرژی", "درمان آسم"],
    plural: ["tell", "inPerson"],
    star: 4.4,
    reviewCount: 77,
    gender: "male",
    address: "خرم‌آباد - خیابان فلکه دانشگاه - کوچه دانشجو",
    about:
      "متخصص آلرژی و ایمونولوژی با تمرکز بر درمان آلرژی و آسم، عضو انجمن آلرژی ایران، دارای گواهینامه تست‌های پوستی پیشرفته",
    phone: "066-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۹:۰۰",
        details_type: {
          price: 300000,
          duration: 40,
          description: "ویزیت تخصصی و تست آلرژی",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۲:۰۰",
        details_type: {
          price: 200000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 4.4,
      total: 77,
      criteria: {
        professional_behavior: 4.5,
        time_allocation: 4.2,
        diagnostic_skill: 4.6,
        reception_process: 4.1,
        clinic_conditions: 4.3,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
  {
    id: 39,
    name: "دکتر نسرین حسینی",
    avatar:
      "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2024/10/2TGQCVLRjX3IWaLl4egGSbByur241iDF1eEAPWc1.jpg",
    expertise: "پزشکی روانپزشکی",
    services: ["درمان افسردگی", "درمان اضطراب"],
    plural: ["online", "tell"],
    star: 3.8,
    reviewCount: 48,
    gender: "female",
    address: "سنندج - خیابان فردوسی - کوچه بهار",
    about:
      "فوق تخصص روانپزشکی با تمرکز بر درمان افسردگی و اضطراب، عضو انجمن روانپزشکی ایران، دارای گواهینامه روان درمانی شناختی",
    phone: "087-35264789",
    services_types: [
      {
        type: "online",
        next_slot: "فردا | ۱۵:۰۰",
        details_type: {
          price: 200000,
          duration: 40,
          features: ["مشاوره روان درمانی", "بررسی علائم"],
          description: "مشاوره آنلاین",
        },
      },
      {
        type: "tell",
        next_slot: "امروز | ۲۱:۰۰",
        details_type: {
          price: 150000,
          duration: 25,
          features: ["پاسخگویی فوری", "تجویز دارو"],
          description: "پشتیبانی تلفنی",
        },
      },
    ],
    reviews: {
      average_rating: 3.8,
      total: 48,
      criteria: {
        professional_behavior: 4.0,
        time_allocation: 3.6,
        diagnostic_skill: 4.1,
        reception_process: 3.7,
        clinic_conditions: 3.9,
      },
      average_wait_time: "۳۰-۵۰",
    },
  },
  {
    id: 40,
    name: "دکتر علی موسوی",
    avatar: "",
    expertise: "پزشکی طب پیشگیری",
    services: ["غربالگری سرطان", "پیشگیری از بیماری‌های قلبی"],
    plural: ["inPerson", "online"],
    star: 4.5,
    reviewCount: 84,
    gender: "male",
    address: "یزد - خیابان سعدی - کوچه سرو",
    about:
      "متخصص طب پیشگیری با تمرکز بر غربالگری سرطان و پیشگیری از بیماری‌های قلبی، عضو انجمن طب پیشگیری ایران، دارای گواهینامه غربالگری پیشرفته",
    phone: "035-35264789",
    services_types: [
      {
        type: "inPerson",
        next_slot: "فردا | ۰۸:۳۰",
        details_type: {
          price: 350000,
          duration: 45,
          description: "ویزیت تخصصی و بررسی آزمایشات",
        },
      },
      {
        type: "online",
        next_slot: "امروز | ۱۸:۰۰",
        details_type: {
          price: 250000,
          duration: 30,
          features: ["مشاوره پیشگیرانه", "بررسی آزمایشات"],
          description: "مشاوره آنلاین",
        },
      },
    ],
    reviews: {
      average_rating: 4.5,
      total: 84,
      criteria: {
        professional_behavior: 4.6,
        time_allocation: 4.3,
        diagnostic_skill: 4.7,
        reception_process: 4.2,
        clinic_conditions: 4.4,
      },
      average_wait_time: "۲۰-۳۵",
    },
  },
];
