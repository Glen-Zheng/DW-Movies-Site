<script setup></script>

<template>
  <div id="footer">
    <div id="media-links">
      <h2 id="company">DW Movies</h2>
      <a class="icons" href="mailto:zhengglen200@gmail.com" target="_blank"
        ><font-awesome-icon title="Email" icon="fa-solid fa-envelope"
      /></a>
      <a class="icons" href="https://github.com/Glen-Zheng" target="_blank"
        ><font-awesome-icon title="Github" icon="fa-brands fa-github"
      /></a>
      <a
        class="icons"
        href="https://www.facebook.com/profile.php?id=100084738319480"
        target="_blank"
        ><font-awesome-icon title="Facebook" icon="fa-brands fa-facebook"
      /></a>
      <a class="icons" href="https://twitter.com/zhengglen200" target="_blank"
        ><font-awesome-icon title="Twitter" icon="fa-brands fa-twitter"
      /></a>
      <a class="icons" href="https://www.instagram.com/headstabber/" target="_blank"
        ><font-awesome-icon title="Instagram" icon="fa-brands fa-instagram"
      /></a>
    </div>
    <RouterLink :to="{ name: 'FAQ' }" id="faq-link"><h2 id="faq">FAQ</h2></RouterLink>
    <h2 id="legals">© 2022-2023 DW Movies, Inc.</h2>
  </div>
</template>

<style scoped>
* {
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 3;
}

#media-links {
  padding-top: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

#footer {
  background-color: #0b0634;
  border: 0.5rem inset rgb(249, 164, 6);
}

#faq {
  font-size: 3rem;
  color: rgb(200, 195, 206);
  font-family: "Henny Penny", cursive;
}
#faq-link {
  text-decoration: none;
}
#faq:hover {
  color: rgb(96, 123, 212);
  text-decoration: underline;
}

#legals {
  color: rgb(200, 195, 206);
}

.icons {
  color: white;
  font-size: 5rem;
}

.icons:hover {
  color: rgb(96, 123, 212);
}
.icons:active {
  color: rgb(211, 18, 18);
}

#company {
  color: white;
  font-size: 2.5rem;
}
</style>
