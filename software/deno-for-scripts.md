---
title: 'Deno for scripts'
date: 2023-01-25
tags:
  - deno
  - scripting
---

I don't know about you but I still scratch my head whenever I see `SyntaxError: Cannot use import statement outside a module`. The interop between Node, TypeScript, ESM, and bundlers is such a hot mess it makes my head spin. Sometimes I feel like I get it but most of the time I don't. And honestly I stopped caring because I just want to write some code and get things done. But every now and then, I need to write scripts that are not meant to be part of the browser bundle but need to use some of the same libraries. Then I hit that error again.

With Deno, I don't need to worry about bundlers, ESM, or how to set up TypeScript. I can still import modules from my apps and packages without conforming to how they were bundled. Things just work the way I expect them to and it feels so refreshing.
