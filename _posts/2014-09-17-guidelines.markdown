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

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>