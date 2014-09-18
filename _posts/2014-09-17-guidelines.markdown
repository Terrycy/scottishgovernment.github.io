---
layout: post
title:  "Guidelines"
date:   2014-09-17 14:23:54
permalink: guidelines/
summary: Supporting material that will help you build great digital services
categories:
 - documentation
---
<div class="home">
  <p>Supporting material that will help you build great digital services. These guidelines can help where you lack capability in a relevant area</p>
  <ul class="post-list">
    {% for post in site.guidelines %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span>{{ post.summary}}</span>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">Subscribe to updates <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>