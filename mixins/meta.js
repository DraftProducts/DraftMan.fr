export default {
  /**
   *
   * @param {String} d.name
   * @param {String} d.description
   * @param {String} d.slug
   */
  get(d) {
    const title = d.name ? `${d.name} ${d.title}` : d.title

    const meta = [
      {
        hid: 'description',
        name: 'description',
        content: d.description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: d.description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: d.slug
          ? `${process.env.BASE_URL}/${d.slug}`
          : process.env.BASE_URL,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: d.description,
      },
    ]

    if (d.noindex) {
      meta.push({
        hid: 'noindex',
        name: 'robots',
        content: 'noindex',
      })
    }

    return { title, meta }
  },
}
