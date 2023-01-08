<script setup></script>

<template>
  <div id="container">
    <h1 id="title">FAQ</h1>
    <div id="questions">
      <p>
        <b class="bolded">Where are you based out of? </b>
        I'm based out of Ontario, Canada.
      </p>
      <p>
        <b class="bolded"> Who are you?</b>
        My name is Glen Zheng and I'm currently a grade 12 student.
      </p>
      <p>
        <b class="bolded">What is this site? </b>
        This site is where anyone can buy movies for very cheap and watch them. It is
        currently a work in progress and will get further scaled up.
      </p>
      <p>
        <b class="bolded">What is DW Movies ©? </b>
        DW (door wood) Movies is an up-and-coming environmentally friendly streaming
        service that strives to provide high quality movies for all.
      </p>
      <br />
      <p class="inline">
        Please contact me via my
        <RouterLink to="/" class="inline">Socials</RouterLink>
        at the bottom of the page to ask more questions for the FAQ or in general.
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  place-items: start;
  text-align: start;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#container {
  position: absolute;
  top: 0;
}

#questions {
  padding-top: 5%;
  line-height: 2.5;
  font-size: 1.5rem;
}

#title {
  font-size: 5em;
  color: indigo;
}

.bolded {
  font-size: 2.25rem;
}

.inline {
  display: inline;
}
</style>
