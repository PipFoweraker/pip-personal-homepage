---
layout: base.njk
title: Notes
---

<article>

# Notes

Short-form writing, observations, and work-in-progress thinking.

{% if collections.notes.length > 0 %}
<ul class="essay-list">
{% for note in collections.notes %}
  <li>
    <a href="{{ note.url }}">{{ note.data.title or note.fileSlug }}</a>
    <span class="text-muted text-small"> — {{ note.date | date("readable") }}</span>
  </li>
{% endfor %}
</ul>
{% else %}
*Notes coming soon.*
{% endif %}

</article>
