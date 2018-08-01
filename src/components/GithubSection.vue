<template>
    <div id="github-section">
        <div id="content">
            <a href="https://github.com/hercone" target="_blank"><img src="../assets/github-logo.png"></a>
        </div>
    </div>
</template>

<script>
export default {
  name: "GithubSection"
};
</script>

<style scoped>
#github-section {
  background-color: #fafafa;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
