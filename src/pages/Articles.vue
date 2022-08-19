<template>
  <Layout>
    <h1>Articles</h1>
    <div>
      <span>Sujets : </span>
      <button @click="selectedSubject = ''">Tout</button>
      <button
        v-for="subject in subjects"
        @click="selectedSubject = subject"
        :key="subject"
      >
        {{ subject }}
      </button>
      <span> ({{ articles.length }} articles)</span>
    </div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <p><a :href="article.url" target="_blank">{{ article.title }}</a> de {{ article.source.name }} (mise à jour le {{ article.updatedAt }})</p>
        <p>Sujets :<span v-for="(subject, key) in article.subjects" :key="key"> - {{ subject }}</span></p>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    selectedSubject: "",
    subjects: [],
  }),
  computed: {
    articles() {
      if (this.selectedSubject === "") {
        return this.$page.hygraph.articles;
      } else {
        return this.$page.hygraph.articles.filter((article) =>
          article.subjects.includes(this.selectedSubject)
        );
      }
    },
  },
  created() {
    this.subjects = [
      ...new Set(
        this.$page.hygraph.articles.flatMap((article) => article.subjects)
      ),
    ];
  },
};
</script>

<page-query>
query {
  hygraph {
    articles {
      id
      title
      url
      source {
        id
        name
      }
      subjects
      updatedAt
    }
  }
}
</page-query>
