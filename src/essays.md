---
layout: base.njk
title: Essays
---

<article>

# Essays

Long-form writing on technology, institutions, AI safety, and related topics.

{% if collections.essays.length > 0 %}
<ul class="essay-list">
{% for essay in collections.essays %}
  <li>
    <a href="{{ essay.url }}">{{ essay.data.title }}</a>
    {% if essay.data.description %}<p class="text-muted text-small">{{ essay.data.description }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
*Essays coming soon.*
{% endif %}

</article>
