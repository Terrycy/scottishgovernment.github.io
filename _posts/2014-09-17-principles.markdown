---
layout: post
title:  "Principles"
date:   2014-09-17 14:23:54
permalink: principles/
categories: documentation
summary: Our principles, the glue that binds us together
tags: 
- principles
---
<div class="home">
  <ol class="post-list">
    {% for post in site.principles %}
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