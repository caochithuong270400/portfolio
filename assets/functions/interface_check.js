export function checkDevice() {
    state.value.isMobile = window.innerWidth <= 768; // Kích thước <= 768px là màn hình nhỏ
    console.log("Is Mobile:", state.value.isMobile);
}