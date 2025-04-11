<template>
  <div>
    <p>{{ $t("hello") }}</p>
    <p>{{ $t("welcome") }}</p>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('vi')">Tiếng Việt</button>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
};
</script>