<template>
  <Layout>
    <div class="container">

      <div class="contact-header">
        <h1 class="contact-title">I’m a designer.</h1>
      
        <p>I solve problems with curiosity. That means research, observation, conversations and co-creation with my users, cross-functional collaboration with my team, and lots of experimentation.</p>
        <p>I like working in complex industries (currently healthcare, previously legal, and traffic control services) and thinking about large-scale work that results in making someone’s day a little easier, their job a little better, or their dream a little closer to reality. </p>
        <p>In my nearly 10 year career, I’ve been a bit of a Goldilocks and alternated between small startups and large corporations. I’ve been the first designer and built a design team, and I’ve joined a large group of design specialists. I’m currently at that “just right” company size and design team maturity at Cityblock Health as a Senior Product Designer.</p>
        <p>I miss managing designers, and I still love being an individual contributor. I hope to “Goldilocks” again in my next role and find the right balance of management and product design.</p>
        <p>I’ve been a “heads down” kind of designer for much of my career. In 2022, I’m learning to work more in public and scale my work beyond digital products.</p>
        
        <p>If you’d like to get in touch, please fill out the form below or connect on <a href="https://www.linkedin.com/in/sfroehner/">LinkedIn</a>.</p>
      </div>

      <form class="contact-form" name="contact">

        <div class="sender-info">
          <div>
            <label for="name" class="label">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Email address</label>
            <input type="email" name="email" />
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message"></textarea>
        </div>

        <button class="button">Send it!</button>

      </form>

    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-header {
  padding: 4rem 0 4rem 0;
}
.contact-title {
  font-family: 'Pirata One', cursive;
  font-weight: 400;
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
.label{
  font-size: 1.125rem;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-3);
}
input,textarea {
  background: var(--color-base-1);
  border: 1px solid var(--color-contrast-50);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-contrast-1);
  background: var(--color-base-3);
  outline: none;
  border: 0;
  font-size: 1.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-weight: 500;
  font-family: 'Cabin', sans-serif;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-contrast-2);
}
</style>

