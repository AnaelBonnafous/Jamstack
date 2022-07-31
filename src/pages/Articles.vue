<template>
  <Layout>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in $page.hygraph.articles" :key="article.id">
        <p><a :href="article.url" target="_blank">{{ article.title }}</a> de {{ article.source.name }} (mise à jour le {{ article.updatedAt }})</p>
        <p>Sujets :<span v-for="(subject, key) in article.subjects" :key="key"> - {{ subject }}</span></p>
      </li>
    </ul>
  </Layout>
</template>

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
