// store/index.ts
import { defineStore } from 'pinia';
import numeral from "numeral";

// Kiểm tra nếu locale đã được đăng ký
const localeExists = (locale: string): boolean => {
  try {
    numeral.locale(locale);
    // Kiểm tra một thuộc tính của locale để xác nhận locale tồn tại
    return numeral.locales[locale] !== undefined;
  } catch {
    return false;
  }
};

// Đăng ký locale nếu chưa tồn tại
if (!localeExists('vi-custom')) {
  numeral.register('locale', 'vi-custom', {
    delimiters: {
      thousands: '.',
      decimal: ','
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: (number: number): string => {
      return number === 1 ? 'er' : 'ème';
    },
    currency: {
      symbol: '₫'
    }
  });
}

// Đặt locale là 'vi-custom'
numeral.locale('vi-custom');
export const useStore = defineStore('filterStore', () => {
  const { locale } = useI18n()
  const state = ref({
    theme: 'dark',
    app_bar: true,
    isMobile: false,
    // isChangeToMobileFromDesktop: false,
    // dialogProductDetail
  })

  const style = ref({
    // button
  })

  const data = ref({
    me: [
      {
        type: "Name",
        value: "Cao Chí Thương (Gnou)"
      },
      {
        type: "Phone",
        value: "0363654126"
      },
      {
        type: "Experience",
        value: "3+ Years"
      },
      {
        type: "Email",
        value: "caochithuong2704002017@gmail.com"
      },
      {
        type: "Nationality",
        value: "Vietnam"
      },
      {
        type: "Freelance",
        value: "Available"
      },
      {
        type: "Language",
        value: "Endlish, Vietnamese"
      },
      {
        type: "Facebook",
        value: "chithuong.cao.16"
      }
    ]
  })

  const method = ref({

  })

  const changeLanguage = (lang: string) => {
    locale.value = lang as 'en' | 'vi'
  }

  // chuyển từ số sang tiền
  function formatMoney(val: number) {

    return numeral(val).format("0,0");
  }

  // chuyển từ tiền sang số
  function parseMoney(val: string) {
    return numeral(val).value();
  }

  // Chuyển dạng ngày thành dd-mm-yy
  function parseDateToDMY(date: string) {
    if (!date) {
      return null
    } else {
      const dd = new Date(date).getDate()
      const mm = String(new Date(date).getMonth() + 1).padStart(2, "0");
      const yyyy = String(new Date(date).getFullYear()).padStart(2, "0");
      return `${dd}-${mm}-${yyyy}`
    }
  }

  function parseDMYToYMD(date: string) {
    if (!date) {
      return null
    } else if (date.split('-').length === 3) {
      const dd = date.split('-')[0]
      const mm = date.split('-')[1]
      const yyyy = date.split('-')[2]
      return `${yyyy}-${mm}-${dd}`
    }
  }

  function validateEmail(email: string) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhoneNumber(phone: string) {
    // Biểu thức chính quy để kiểm tra định dạng số điện thoại (định dạng quốc tế hoặc Việt Nam)
    // Số điện thoại quốc tế: bắt đầu bằng dấu + và theo sau là các chữ số
    // Số điện thoại Việt Nam: 10 chữ số, bắt đầu bằng số 0 (ví dụ: 0901234567)
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  }

  // Sự kiện thay đổi theme màu nền
  function changeTheme() {
    // chế độ tối
    if (state.value.theme === "dark") {
      // màu con trỏ
      document.documentElement.style.setProperty(
        "--light-point-mouse", "#00000020");

      // màu lưới
      document.documentElement.style.setProperty(
        "--cob-frame", "#2a2a2a");

      // màu thanh tiện ích
      document.documentElement.style.setProperty(
        "--nav-bg-color", "rgba(0, 0, 0, 0.8)");

      // màu chữ nổi neon
      document.documentElement.style.setProperty(
        "--neon-color", "#01fe87");

      // màu background card
      document.documentElement.style.setProperty(
        "--card-bg-color", "rgba(255, 255, 255, 0.2)");

      // màu chữ
      document.documentElement.style.setProperty(
        "--font-color", "black");

      // màu viền
      document.documentElement.style.setProperty(
        "--font-border", "white");

      // màu nền mờ
      document.documentElement.style.setProperty(
        "--background-blur", "#00000060");

      // màu nền card logo
      document.documentElement.style.setProperty(
        "--card-logo", "rgba(255, 255, 255, 0.2)");
    }
    // chế độ sáng
    else if (state.value.theme === "light") {

      // màu con trỏ
      document.documentElement.style.setProperty(
        "--light-point-mouse", "#00000020");

      // màu lưới
      document.documentElement.style.setProperty(
        "--cob-frame", "#ddd");

      // màu thanh tiện ích
      document.documentElement.style.setProperty(
        "--nav-bg-color", "rgba(255, 255, 255, 0.8)");

      // màu chữ nổi neon
      document.documentElement.style.setProperty(
        "--neon-color", "#00bbee");

      // màu background card
      document.documentElement.style.setProperty(
        "--card-bg-color", "rgba(255, 255, 255, 0.2)");

      // màu chữ
      document.documentElement.style.setProperty(
        "--font-color", "white");

      // màu viền
      document.documentElement.style.setProperty(
        "--font-border", "black");

      // màu nền mờ
      document.documentElement.style.setProperty(
        "--background-blur", "#ffffff80");

      // màu nền card logo
      document.documentElement.style.setProperty(
        "--card-logo", "rgba(135, 135, 135, 0.2)");
    }
  }

  // kiểm tra là điện thoại
  function checkDevice() {
    state.value.isMobile = window.innerWidth <= 768; // Kích thước <= 768px là màn hình nhỏ
    console.log("Is Mobile:", state.value.isMobile);
  }

  return {
    state, style, data, method,
    changeLanguage,
    formatMoney, parseMoney, parseDateToDMY, parseDMYToYMD,
    validateEmail, validatePhoneNumber, changeTheme, checkDevice
  }
});
